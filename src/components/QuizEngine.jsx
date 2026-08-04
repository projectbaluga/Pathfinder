/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useMemo, useCallback } from 'react';
import { certifications } from '../data/certifications';
import { addQuizResult } from '../utils/quizHistory';
import { CheckCircle2, XCircle, ChevronRight, RefreshCw, Trophy, Clock, AlertCircle, BarChart3 } from 'lucide-react';

// Pure helper to build questions
export const buildQuestions = (certId, settings) => {
  const cert = certifications.find(c => c.id === certId);
  if (cert) {
    const selectedQuestions = [...cert.practiceQuestions].sort(() => Math.random() - 0.5).slice(0, settings.length);
    // Shuffle options for each question
    return selectedQuestions.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
  }
  return [];
};

// Pure helper to load saved progress
export const loadSavedProgress = (storageKey, settings) => {
  const savedProgress = localStorage.getItem(storageKey);
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      if (parsed && parsed.settings && parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return null;
};

const QuizEngine = ({ certId, settings, onExit }) => {
  const storageKey = useMemo(() => `quiz_progress_${certId}`, [certId]);

  // Compute saved progress once
  const saved = useMemo(() => loadSavedProgress(storageKey, settings), [storageKey, settings]);

  // Initialize state from computed saved progress or defaults
  const [questions, setQuestions] = useState(() => {
    return saved?.questions ?? buildQuestions(certId, settings);
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    return saved?.currentIndex ?? 0;
  });

  const [score, setScore] = useState(() => {
    return saved?.score ?? 0;
  });

  const [resultsData, setResultsData] = useState(() => {
    return saved?.resultsData ?? [];
  });

  const [timeLeft, setTimeLeft] = useState(() => {
    return saved?.timeLeft ?? (settings.timed ? settings.length * 60 : null);
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Results review toggle filter state: "all" or "incorrect"
  const [reviewFilter, setReviewFilter] = useState('all');

  const currentCert = useMemo(() => certifications.find(c => c.id === certId), [certId]);

  const endQuiz = useCallback(() => {
    setShowResults(true);
    localStorage.removeItem(storageKey);

    // Save final quiz metrics into overall quizHistory database
    addQuizResult({
      certId,
      certTitle: currentCert?.title || 'Unknown Certification',
      score,
      total: questions.length,
      timed: settings.timed,
      durationSeconds: settings.timed ? (settings.length * 60 - (timeLeft ?? 0)) : 0,
      completedAt: new Date().toISOString()
    });
  }, [storageKey, certId, currentCert, score, questions.length, settings.timed, settings.length, timeLeft]);

  // Persist Progress
  useEffect(() => {
    if (showResults) return;

    const progress = {
      questions,
      currentIndex,
      score,
      resultsData,
      timeLeft,
      settings
    };
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [currentIndex, score, resultsData, timeLeft, showResults, storageKey, questions, settings]);

  // Timer logic
  useEffect(() => {
    if (timeLeft === null || showResults) return;
    if (timeLeft <= 0) {
      const timer = setTimeout(() => {
        endQuiz();
      }, 0);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setTimeLeft(prev => (prev !== null ? prev - 1 : null)), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showResults, endQuiz]);

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    const currentQ = questions[currentIndex];
    const isCorrect = selectedOption === currentQ.answer;
    setResultsData(prev => [...prev, { questionId: currentQ.id, category: currentQ.category, selectedOption, isCorrect }]);
    setIsAnswered(true);
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      endQuiz();
    }
  };

  // Pure React reset function
  const resetQuiz = useCallback(() => {
    localStorage.removeItem(storageKey);
    const newQuestions = buildQuestions(certId, settings);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setResultsData([]);
    setTimeLeft(settings.timed ? settings.length * 60 : null);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResults(false);
    setReviewFilter('all');
  }, [storageKey, certId, settings]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getCategoryPerformance = () => {
    const categories = {};
    resultsData.forEach(item => {
      if (!categories[item.category]) categories[item.category] = { correct: 0, total: 0 };
      categories[item.category].total++;
      if (item.isCorrect) categories[item.category].correct++;
    });
    return categories;
  };

  if (questions.length === 0) return <div className="p-8 text-center">No questions found.</div>;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const categoryStats = getCategoryPerformance();

    // Align resultsData with original questions to fetch texts and explanations
    const mappedReviewItems = resultsData.map(res => {
      const originalQ = questions.find(q => q.id === res.questionId);
      return {
        ...res,
        questionText: originalQ?.question || '',
        answer: originalQ?.answer || '',
        explanation: originalQ?.explanation || '',
      };
    });

    const displayedReviewItems = reviewFilter === 'incorrect'
      ? mappedReviewItems.filter(item => !item.isCorrect)
      : mappedReviewItems;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl2 shadow-soft-lg text-center border border-slate-100 mb-8">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center">
              <Trophy className="text-primary-500" size={48} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold mb-2 text-slate-900 tracking-tight">Quiz Completed!</h2>
          <p className="text-slate-500 mb-8 font-medium">You've completed the practice quiz for {currentCert?.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl2"><div className="text-2xl font-extrabold text-slate-900">{score}/{questions.length}</div><div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Score</div></div>
            <div className="bg-slate-50 p-4 rounded-xl2"><div className="text-2xl font-extrabold text-slate-900">{percentage}%</div><div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Accuracy</div></div>
            <div className="bg-slate-50 p-4 rounded-xl2"><div className="text-2xl font-extrabold text-slate-900">{settings.length}</div><div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Questions</div></div>
            <div className="bg-slate-50 p-4 rounded-xl2"><div className="text-2xl font-extrabold text-slate-900">{settings.timed ? 'Yes' : 'No'}</div><div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Timed</div></div>
          </div>
          <div className={`p-4 rounded-xl2 mb-8 text-sm font-semibold ${percentage >= 70 ? 'bg-green-50 text-green-800' : 'bg-orange-50 text-orange-800'}`}>
            {percentage >= 70 ? "Great job! You're showing strong knowledge in this area." : "Keep studying! Review the core concepts and try again."}
          </div>
        </div>

        {/* Incorrect review segment */}
        <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center">
              <AlertCircle className="mr-2 text-primary-500" /> Review Answers
            </h3>
            <div className="inline-flex rounded-pill p-1.5 bg-slate-50 border border-slate-100/50">
              <button
                type="button"
                onClick={() => setReviewFilter('all')}
                className={`px-5 py-2 rounded-pill text-xs font-bold transition-all ${
                  reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                All ({mappedReviewItems.length})
              </button>
              <button
                type="button"
                onClick={() => setReviewFilter('incorrect')}
                className={`px-5 py-2 rounded-pill text-xs font-bold transition-all ${
                  reviewFilter === 'incorrect' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Incorrect Only ({mappedReviewItems.filter(i => !i.isCorrect).length})
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {displayedReviewItems.length > 0 ? (
              displayedReviewItems.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-6 last:border-none last:pb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-400">Q#{idx + 1}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-pill ${
                      item.isCorrect ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {item.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 leading-relaxed text-sm">{item.questionText}</h4>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100/50">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Answer</div>
                      <div className={`font-bold ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {item.selectedOption || '(Skipped / Timed out)'}
                      </div>
                    </div>
                    {!item.isCorrect && (
                      <div className="p-3 rounded-xl bg-green-50/50 border border-green-100/50">
                        <div className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-1">Correct Answer</div>
                        <div className="font-bold text-green-700">{item.answer}</div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl2 bg-primary-50/50 border border-primary-50 flex items-start">
                    <AlertCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-primary-800 leading-relaxed font-semibold">
                      <span className="font-bold">Explanation:</span> {item.explanation}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400 font-medium text-sm">
                {reviewFilter === 'incorrect' ? 'Congratulations! No incorrect answers to display.' : 'No review details available.'}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center"><BarChart3 className="mr-2 text-primary-500" /> Performance by Domain</h3>
          <div className="space-y-6">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const catPerc = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={category}>
                  <div className="flex justify-between mb-2 text-xs font-bold text-slate-600"><span>{category}</span><span>{stats.correct}/{stats.total} ({catPerc}%)</span></div>
                  <div className="h-3 w-full bg-slate-100 rounded-pill overflow-hidden">
                    <div className={`h-full transition-all duration-1000 ${catPerc >= 70 ? 'bg-green-500' : catPerc >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${catPerc}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={resetQuiz} className="flex-1 bg-primary-500 text-white py-4 rounded-pill font-bold hover:bg-primary-600 transition flex items-center justify-center shadow-lg shadow-primary-200"><RefreshCw size={18} className="mr-2" /> Retake Quiz</button>
          <button onClick={() => { localStorage.removeItem(storageKey); onExit(); }} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-pill font-bold hover:bg-slate-50 transition">Back to Quiz Menu</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
          <div className="h-2 w-48 bg-slate-200 rounded-pill mt-2 overflow-hidden">
            <div className="h-full bg-primary-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        {timeLeft !== null && <div role="timer" aria-live="polite" className={`flex items-center font-mono font-bold text-lg ${timeLeft < 30 ? 'text-rose-500 animate-pulse' : 'text-slate-700'}`}><Clock size={20} className="mr-2" />{formatTime(timeLeft)}</div>}
      </div>
      <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100">
        <div className="mb-4"><span className="text-[10px] font-bold bg-primary-50 text-primary-600 px-2.5 py-1 rounded-pill uppercase tracking-wider">{currentQuestion.category}</span></div>
        <h3 className="text-xl font-bold text-slate-900 mb-8 leading-relaxed tracking-tight">{currentQuestion.question}</h3>
        <div role="group" aria-label={`Question ${currentIndex + 1} options`} className="space-y-4 mb-8">
          {currentQuestion.options.map((option, idx) => {
            let variant = "default";
            if (isAnswered) {
              if (option === currentQuestion.answer) variant = "correct";
              else if (option === selectedOption) variant = "incorrect";
            } else if (option === selectedOption) variant = "selected";

            // accessibility state label
            let ariaLabel = option;
            if (isAnswered) {
              if (option === currentQuestion.answer) {
                ariaLabel += " - correct answer";
              } else if (option === selectedOption) {
                ariaLabel += " - your answer, incorrect";
              }
            }

            return (
              <button key={idx} disabled={isAnswered} aria-pressed={option === selectedOption} aria-label={ariaLabel} onClick={() => handleOptionSelect(option)} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between text-sm font-semibold ${variant === "correct" ? "border-green-500 bg-green-50 text-green-900" : variant === "incorrect" ? "border-red-500 bg-red-50 text-red-900" : variant === "selected" ? "border-primary-500 bg-primary-50 text-primary-900" : "border-slate-100 hover:border-slate-200 bg-white"}`}><span className="font-medium">{option}</span>{variant === "correct" && <CheckCircle2 size={20} className="text-green-600" />}{variant === "incorrect" && <XCircle size={20} className="text-red-600" />}</button>
            );
          })}
        </div>
        {isAnswered && (
          <div className="bg-slate-50 p-6 rounded-xl2 mb-8 animate-in fade-in slide-in-from-top-4 border border-slate-100/50">
            <div className="flex items-start"><AlertCircle size={20} className="mr-3 text-primary-500 mt-0.5" /><div><h4 className="font-bold text-slate-900 mb-1 text-sm">Explanation</h4><p className="text-slate-500 text-xs leading-relaxed font-semibold">{currentQuestion.explanation}</p></div></div>
          </div>
        )}
        <div className="flex justify-end">
          {!isAnswered ? (
            <button onClick={handleSubmit} disabled={selectedOption === null} className={`px-8 py-3.5 rounded-pill font-bold transition-all text-sm ${selectedOption === null ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-200"}`}>Check Answer</button>
          ) : (
            <button onClick={handleNext} className="bg-slate-900 text-white px-8 py-3.5 rounded-pill font-bold hover:bg-slate-800 transition-all flex items-center text-sm">{currentIndex < questions.length - 1 ? "Next Question" : "View Results"}<ChevronRight size={20} className="ml-1" /></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;

import React, { useState, useEffect } from 'react';
import { certifications } from '../data/certifications';
import { CheckCircle2, XCircle, ChevronRight, RefreshCw, Trophy, Clock, AlertCircle, BarChart3 } from 'lucide-react';

const QuizEngine = ({ certId, settings, onExit }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [resultsData, setResultsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const storageKey = `quiz_progress_${certId}`;

  // Initialize Quiz or Restore from LocalStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    const cert = certifications.find(c => c.id === certId);

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        // Only restore if settings match (e.g., length)
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          setQuestions(parsed.questions);
          setCurrentIndex(parsed.currentIndex);
          setScore(parsed.score);
          setResultsData(parsed.resultsData);
          if (settings.timed) setTimeLeft(parsed.timeLeft);
          setIsLoaded(true);
          return;
        }
      } catch (e) {
        console.error("Failed to restore quiz progress", e);
      }
    }

    if (cert) {
      let quizQuestions = [...cert.practiceQuestions];
      while (quizQuestions.length < settings.length && quizQuestions.length > 0) {
        quizQuestions = [...quizQuestions, ...cert.practiceQuestions.map(q => ({...q, id: q.id + '_copy_' + Math.random()}))];
      }
      const shuffled = quizQuestions.sort(() => Math.random() - 0.5).slice(0, settings.length);
      setQuestions(shuffled);
      if (settings.timed) setTimeLeft(settings.length * 60);
      setIsLoaded(true);
    }
  }, [certId, settings, storageKey]);

  // Persist Progress
  useEffect(() => {
    if (!isLoaded || showResults) return;

    const progress = {
      questions,
      currentIndex,
      score,
      resultsData,
      timeLeft,
      settings
    };
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [currentIndex, score, resultsData, timeLeft, isLoaded, showResults, storageKey, questions, settings]);

  // Timer logic
  useEffect(() => {
    if (timeLeft === null || showResults) return;
    if (timeLeft === 0) {
      setShowResults(true);
      localStorage.removeItem(storageKey);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showResults, storageKey]);

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    const currentQ = questions[currentIndex];
    const isCorrect = selectedOption === currentQ.answer;
    setResultsData(prev => [...prev, { questionId: currentQ.id, category: currentQ.category, isCorrect }]);
    setIsAnswered(true);
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      localStorage.removeItem(storageKey);
    }
  };

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

  if (!isLoaded || questions.length === 0) return <div className="p-8 text-center">Loading questions...</div>;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const categoryStats = getCategoryPerformance();
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100 mb-8">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <Trophy className="text-blue-600" size={48} />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Quiz Completed!</h2>
          <p className="text-slate-500 mb-8">You've completed the practice quiz for {certifications.find(c => c.id === certId)?.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl"><div className="text-2xl font-bold text-slate-900">{score}/{questions.length}</div><div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Score</div></div>
            <div className="bg-slate-50 p-4 rounded-xl"><div className="text-2xl font-bold text-slate-900">{percentage}%</div><div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Accuracy</div></div>
            <div className="bg-slate-50 p-4 rounded-xl"><div className="text-2xl font-bold text-slate-900">{settings.length}</div><div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Questions</div></div>
            <div className="bg-slate-50 p-4 rounded-xl"><div className="text-2xl font-bold text-slate-900">{settings.timed ? 'Yes' : 'No'}</div><div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Timed</div></div>
          </div>
          <div className={`p-4 rounded-xl mb-8 ${percentage >= 70 ? 'bg-green-50 text-green-800' : 'bg-orange-50 text-orange-800'}`}>
            {percentage >= 70 ? "Great job! You're showing strong knowledge in this area." : "Keep studying! Review the core concepts and try again."}
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center"><BarChart3 className="mr-2 text-blue-600" /> Performance by Domain</h3>
          <div className="space-y-6">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const catPerc = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={category}>
                  <div className="flex justify-between mb-2"><span className="font-semibold text-slate-700">{category}</span><span className="text-slate-500">{stats.correct}/{stats.total} ({catPerc}%)</span></div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-1000 ${catPerc >= 70 ? 'bg-green-500' : catPerc >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${catPerc}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={() => { localStorage.removeItem(storageKey); window.location.reload(); }} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center shadow-lg shadow-blue-200"><RefreshCw size={18} className="mr-2" /> Retake Quiz</button>
          <button onClick={() => { localStorage.removeItem(storageKey); onExit(); }} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-50 transition">Back to Quiz Menu</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
          <div className="h-2 w-48 bg-slate-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        {timeLeft !== null && <div className={`flex items-center font-mono font-bold text-lg ${timeLeft < 30 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}><Clock size={20} className="mr-2" />{formatTime(timeLeft)}</div>}
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
        <div className="mb-4"><span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded uppercase tracking-wider">{currentQuestion.category}</span></div>
        <h3 className="text-xl font-bold text-slate-900 mb-8 leading-relaxed">{currentQuestion.question}</h3>
        <div className="space-y-4 mb-8">
          {currentQuestion.options.map((option, idx) => {
            let variant = "default";
            if (isAnswered) {
              if (option === currentQuestion.answer) variant = "correct";
              else if (option === selectedOption) variant = "incorrect";
            } else if (option === selectedOption) variant = "selected";
            return (
              <button key={idx} disabled={isAnswered} onClick={() => handleOptionSelect(option)} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${variant === "correct" ? "border-green-500 bg-green-50 text-green-900" : variant === "incorrect" ? "border-red-500 bg-red-50 text-red-900" : variant === "selected" ? "border-blue-500 bg-blue-50 text-blue-900" : "border-slate-100 hover:border-slate-300 bg-white"}`}><span className="font-medium">{option}</span>{variant === "correct" && <CheckCircle2 size={20} className="text-green-600" />}{variant === "incorrect" && <XCircle size={20} className="text-red-600" />}</button>
            );
          })}
        </div>
        {isAnswered && (
          <div className="bg-slate-50 p-6 rounded-xl mb-8 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-start"><AlertCircle size={20} className="mr-3 text-blue-600 mt-0.5" /><div><h4 className="font-bold text-slate-900 mb-1">Explanation</h4><p className="text-slate-600 text-sm leading-relaxed">{currentQuestion.explanation}</p></div></div>
          </div>
        )}
        <div className="flex justify-end">
          {!isAnswered ? (
            <button onClick={handleSubmit} disabled={selectedOption === null} className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedOption === null ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"}`}>Check Answer</button>
          ) : (
            <button onClick={handleNext} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center">{currentIndex < questions.length - 1 ? "Next Question" : "View Results"}<ChevronRight size={20} className="ml-1" /></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;

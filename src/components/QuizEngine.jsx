
import { useState, useEffect, useMemo, useCallback } from 'react';
import { certifications } from '../data/certifications';
import { CheckCircle2, XCircle, ChevronRight, RefreshCw, Trophy, Clock, AlertCircle, BarChart3, ArrowLeft } from 'lucide-react';

const QuizEngine = ({ certId, settings, onExit }) => {
  const storageKey = useMemo(() => `quiz_progress_${certId}`, [certId]);

  // Initialize state from localStorage or defaults
  const [questions] = useState(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          return parsed.questions;
        }
      } catch (e) { console.error(e); }
    }
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
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          return parsed.currentIndex;
        }
      } catch (e) { console.error(e); }
    }
    return 0;
  });

  const [score, setScore] = useState(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          return parsed.score;
        }
      } catch (e) { console.error(e); }
    }
    return 0;
  });

  const [resultsData, setResultsData] = useState(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          return parsed.resultsData;
        }
      } catch (e) { console.error(e); }
    }
    return [];
  });

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.settings.length === settings.length && parsed.settings.timed === settings.timed) {
          return parsed.timeLeft;
        }
      } catch (e) { console.error(e); }
    }
    return settings.timed ? settings.length * 60 : null;
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const endQuiz = useCallback(() => {
    setShowResults(true);
    localStorage.removeItem(storageKey);
  }, [storageKey]);

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
        setShowResults(true);
        localStorage.removeItem(storageKey);
      }, 0);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setTimeLeft(prev => (prev !== null ? prev - 1 : null)), 1000);
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
      endQuiz();
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

  if (questions.length === 0) return <div className="p-8 text-center">No questions found.</div>;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const categoryStats = getCategoryPerformance();
    const currentCert = certifications.find(c => c.id === certId);

    return (
      <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500">
        <div className="case p-10 text-center bg-surface border-border-2 mb-10">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-accent-soft rounded-full flex items-center justify-center border border-accent/20">
              <Trophy className="text-accent" size={40} />
            </div>
          </div>
          <h2 className="text-4xl font-display font-bold mb-3 text-text">Session Terminated<span className="text-accent">.</span></h2>
          <p className="text-text-3 font-mono text-sm uppercase tracking-widest mb-10">Final evaluation for {currentCert?.title}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-surface-2 p-6 rounded-xl border border-border">
              <div className="text-3xl font-display font-bold text-text mb-1">{score}/{questions.length}</div>
              <div className="section-head__label !text-[10px]">Net Score</div>
            </div>
            <div className="bg-surface-2 p-6 rounded-xl border border-border">
              <div className="text-3xl font-display font-bold text-accent-2 mb-1">{percentage}%</div>
              <div className="section-head__label !text-[10px]">Accuracy</div>
            </div>
            <div className="bg-surface-2 p-6 rounded-xl border border-border">
              <div className="text-3xl font-display font-bold text-text mb-1">{settings.length}</div>
              <div className="section-head__label !text-[10px]">Units</div>
            </div>
            <div className="bg-surface-2 p-6 rounded-xl border border-border">
              <div className="text-3xl font-display font-bold text-accent-3 mb-1">{settings.timed ? 'ON' : 'OFF'}</div>
              <div className="section-head__label !text-[10px]">Timed</div>
            </div>
          </div>

          <div className={`p-6 rounded-xl font-display text-lg mb-4 border ${percentage >= 70 ? 'bg-accent-2/10 border-accent-2/20 text-accent-2' : 'bg-accent-3/10 border-accent-3/20 text-accent-3'}`}>
            {percentage >= 70 ? "Exceptional performance. Deploy knowledge." : "Incomplete mastery. Further cycles required."}
          </div>
        </div>

        <div className="case p-10 bg-surface border-border mb-10">
          <h3 className="text-xl font-display font-bold text-text mb-8 flex items-center gap-3">
            <BarChart3 className="text-accent" size={20} />
            Domain Analytics
          </h3>
          <div className="space-y-8">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const catPerc = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={category} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-text-2 group-hover:text-text transition-colors">
                      {category}
                    </span>
                    <span className="font-mono text-xs text-text-3">
                      {stats.correct}/{stats.total} — <span className={catPerc >= 70 ? 'text-accent-2' : 'text-accent-3'}>{catPerc}%</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-2 rounded-full overflow-hidden border border-border/50">
                    <div
                      className={`h-full transition-all duration-1000 ease-out ${catPerc >= 70 ? 'bg-accent-2' : catPerc >= 40 ? 'bg-accent-3' : 'bg-accent'}`}
                      style={{ width: `${catPerc}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <button
            onClick={() => { localStorage.removeItem(storageKey); window.location.reload(); }}
            className="btn btn--primary flex-1 py-5"
          >
            <RefreshCw size={18} className="mr-1" /> Re-initialize
          </button>
          <button
            onClick={() => { localStorage.removeItem(storageKey); onExit(); }}
            className="btn btn--ghost flex-1 py-5"
          >
            Return to Base
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end mb-10 border-b border-border pb-6">
        <div>
          <div className="section-head__label !mb-2 flex items-center gap-2">
             <span className="text-accent">0{currentIndex + 1}</span> / 0{questions.length} Units
          </div>
          <div className="h-1 w-64 bg-surface-2 rounded-full overflow-hidden border border-border/50">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {timeLeft !== null && (
            <div className={`flex items-center gap-2 font-mono font-bold text-xl ${timeLeft < 30 ? 'text-accent-3 animate-pulse' : 'text-text-2'}`}>
              <Clock size={18} />
              {formatTime(timeLeft)}
            </div>
          )}
          <button
            onClick={onExit}
            className="icon-btn !w-10 !h-10 border-dashed"
            title="Abort Mission"
          >
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>

      <div className="case p-10 bg-surface border-border shadow-2xl relative">
        <div className="mb-6">
          <span className="case__group-tag !text-[10px]">
            {currentQuestion.category}
          </span>
        </div>

        <h3 className="text-2xl font-display font-bold text-text mb-12 leading-tight">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4 mb-12">
          {currentQuestion.options.map((option, idx) => {
            let state = "idle";
            if (isAnswered) {
              if (option === currentQuestion.answer) state = "correct";
              else if (option === selectedOption) state = "incorrect";
            } else if (option === selectedOption) state = "selected";

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group relative overflow-hidden ${
                  state === "correct" ? "border-accent-2 bg-accent-2/10 text-text" :
                  state === "incorrect" ? "border-accent bg-accent/10 text-text" :
                  state === "selected" ? "border-accent-2 bg-surface-2 text-text" :
                  "border-border bg-surface-2 hover:border-border-2 text-text-2"
                }`}
              >
                <span className="font-medium relative z-10">{option}</span>
                <div className="relative z-10">
                  {state === "correct" && <CheckCircle2 size={20} className="text-accent-2" />}
                  {state === "incorrect" && <XCircle size={20} className="text-accent" />}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="case p-8 bg-surface-2 border-accent-soft/30 mb-10 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-4">
              <div className="principle__icon !w-8 !h-8 !mb-0 !bg-accent-soft/20">
                <AlertCircle size={16} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-text mb-2">Technical Insight</h4>
                <p className="text-text-2 text-sm leading-relaxed italic border-l-2 border-accent-soft/50 pl-4">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-6 border-t border-border">
          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={`btn btn--lg min-w-[200px] ${selectedOption === null ? "opacity-30 grayscale cursor-not-allowed" : "btn--primary"}`}
            >
              Analyze Input
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn btn--primary btn--lg min-w-[200px]"
            >
              {currentIndex < questions.length - 1 ? "Next Unit" : "Finalize Output"}
              <ChevronRight size={18} className="ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;

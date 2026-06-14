
import { useState } from 'react';
import { certifications } from '../data/certifications';
import QuizEngine from '../components/QuizEngine';
import { Settings2, Play, Timer, Shield } from 'lucide-react';

const Quiz = () => {
  const [quizState, setQuizState] = useState('setup'); // setup, active
  const [selectedCertId, setSelectedCertId] = useState(certifications[0].id);
  const [quizSettings, setQuizSettings] = useState({
    length: 10,
    timed: false
  });

  const startQuiz = () => {
    setQuizState('active');
  };

  const exitQuiz = () => {
    setQuizState('setup');
  };

  if (quizState === 'active') {
    return (
      <div className="section pt-32">
        <div className="container">
          <QuizEngine
            certId={selectedCertId}
            settings={quizSettings}
            onExit={exitQuiz}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="section pt-32">
      <div className="container">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__num">03</span>
            <span className="section-head__label">Knowledge Test</span>
          </div>
          <h1 className="section-head__title">Quiz <em className="serif">Engine</em></h1>
          <p className="about__intro mt-6 text-text-2 max-w-2xl">
            Test your knowledge with our interactive quiz. Select a certification, choose your settings, and start your practice session.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certification Selection */}
            <div className="case p-0 overflow-hidden bg-surface-2 border-border-2">
              <div className="p-6 border-b border-border bg-surface flex items-center gap-3">
                <div className="principle__icon !w-10 !h-10 !mb-0 !bg-accent-soft/20">
                  <Shield size={18} className="text-accent" />
                </div>
                <h2 className="text-lg font-display font-bold text-text">1. Choose Certification</h2>
              </div>
              <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                {certifications.map(cert => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertId(cert.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between group ${
                      selectedCertId === cert.id
                        ? 'border-accent bg-accent-soft text-text font-bold'
                        : 'border-border bg-surface hover:border-border-2 text-text-2'
                    }`}
                  >
                    <span className="text-sm">{cert.title}</span>
                    {selectedCertId === cert.id && <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Settings */}
            <div className="case p-0 overflow-hidden bg-surface-2 border-border-2">
              <div className="p-6 border-b border-border bg-surface flex items-center gap-3">
                <div className="principle__icon !w-10 !h-10 !mb-0 !bg-accent-2/10">
                  <Settings2 size={18} className="text-accent-2" />
                </div>
                <h2 className="text-lg font-display font-bold text-text">2. Quiz Settings</h2>
              </div>

              <div className="p-8">
                <div className="mb-10">
                  <label className="section-head__label block mb-4">Quiz Length</label>
                  <div className="grid grid-cols-3 gap-4 font-mono">
                    {[10, 25, 50].map(len => (
                      <button
                        key={len}
                        onClick={() => setQuizSettings({...quizSettings, length: len})}
                        className={`py-3 rounded-xl border transition-all text-sm ${
                          quizSettings.length === len
                            ? 'border-accent-2 bg-accent-2/10 text-accent-2 font-bold'
                            : 'border-border bg-surface text-text-3'
                        }`}
                      >
                        {len} items
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <label className="section-head__label block mb-4">Exam Mode</label>
                  <button
                    onClick={() => setQuizSettings({...quizSettings, timed: !quizSettings.timed})}
                    className={`w-full flex items-center justify-between px-5 py-5 rounded-xl border transition-all group ${
                      quizSettings.timed
                        ? 'border-accent-3 bg-accent-3/10 text-accent-3 font-bold'
                        : 'border-border bg-surface text-text-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Timer size={18} />
                      <span className="text-sm">Timed Mode</span>
                    </div>
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${quizSettings.timed ? 'bg-accent-3' : 'bg-border-2'}`}>
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${quizSettings.timed ? 'left-6' : 'left-1'}`}></div>
                    </div>
                  </button>
                  <p className="font-mono text-[10px] text-text-3 mt-4 flex items-center gap-2">
                    <Timer size={10} className="text-accent-3" />
                    Simulates real test conditions (1 min/item).
                  </p>
                </div>

                <button
                  onClick={startQuiz}
                  className="btn btn--primary w-full py-5 text-base"
                >
                  Start Practice Quiz
                  <Play size={18} className="icon--fill ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

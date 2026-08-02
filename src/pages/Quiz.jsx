import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { certifications } from '../data/certifications';
import QuizEngine from '../components/QuizEngine';
import { GraduationCap, Settings2, Play, Timer } from 'lucide-react';

const Quiz = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const certQuery = searchParams.get('cert');

  const [quizState, setQuizState] = useState('setup'); // setup, active

  // Derive selectedCertId directly from query params if valid, falling back to certification array
  const selectedCertId = (certQuery && certifications.some(c => c.id === certQuery))
    ? certQuery
    : certifications[0].id;

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
      <div className="container mx-auto px-4 py-12">
        <QuizEngine
          certId={selectedCertId}
          settings={quizSettings}
          onExit={exitQuiz}
        />
      </div>
    );
  }

  // Update selectedCertId via router URL search query
  const handleCertSelect = (id) => {
    setSearchParams({ cert: id });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Practice Quiz Engine</h1>
        <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
          Test your knowledge with our interactive quiz. Select a certification, choose your settings, and start your practice session.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certification Selection */}
          <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100">
            <h2 className="text-lg font-extrabold mb-6 flex items-center text-slate-900">
              <GraduationCap size={22} className="mr-3 text-primary-500" />
              1. Choose Certification
            </h2>
            <div className="space-y-3">
              {certifications.map(cert => (
                <button
                  key={cert.id}
                  onClick={() => handleCertSelect(cert.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-bold ${
                    selectedCertId === cert.id
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-slate-50 hover:border-slate-200 text-slate-600 bg-white'
                  }`}
                >
                  {cert.title}
                </button>
              ))}
            </div>
          </div>

          {/* Quiz Settings */}
          <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100">
            <h2 className="text-lg font-extrabold mb-6 flex items-center text-slate-900">
              <Settings2 size={22} className="mr-3 text-accent-500" />
              2. Quiz Settings
            </h2>

            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Quiz Length</label>
              <div className="grid grid-cols-3 gap-3">
                {[10, 25, 50].map(len => (
                  <button
                    key={len}
                    onClick={() => setQuizSettings({...quizSettings, length: len})}
                    className={`py-3 rounded-xl border-2 font-bold transition-all text-sm ${
                      quizSettings.length === len
                        ? 'border-accent-500 bg-amber-50 text-accent-600'
                        : 'border-slate-50 hover:border-slate-200 text-slate-600'
                    }`}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Exam Mode</label>
              <button
                onClick={() => setQuizSettings({...quizSettings, timed: !quizSettings.timed})}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all text-sm ${
                  quizSettings.timed
                    ? 'border-primary-500 bg-primary-50 text-primary-600 font-bold'
                    : 'border-slate-50 hover:border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center">
                  <Timer size={18} className="mr-3 text-primary-500" />
                  <span>Timed Exam Mode</span>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${quizSettings.timed ? 'bg-primary-500' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizSettings.timed ? 'left-7' : 'left-1'}`}></div>
                </div>
              </button>
              <p className="text-[11px] text-slate-400 font-medium mt-3 ml-1 flex items-start">
                <Timer size={12} className="mr-1 mt-0.5 text-primary-500" />
                Timed mode gives you 1 minute per question and simulates real test conditions.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="w-full bg-primary-500 text-white py-4 rounded-pill font-bold text-base hover:bg-primary-600 transition shadow-lg shadow-primary-200 flex items-center justify-center group"
            >
              Start Practice Quiz
              <Play size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

import { useState } from 'react';
import { certifications } from '../data/certifications';
import QuizEngine from '../components/QuizEngine';
import { GraduationCap, Settings2, Play, Timer } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-12">
        <QuizEngine
          certId={selectedCertId}
          settings={quizSettings}
          onExit={exitQuiz}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Practice Quiz Engine</h1>
        <p className="text-slate-600 max-w-2xl">
          Test your knowledge with our interactive quiz. Select a certification, choose your settings, and start your practice session.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certification Selection */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6 flex items-center text-slate-900">
              <GraduationCap size={24} className="mr-3 text-blue-600" />
              1. Choose Certification
            </h2>
            <div className="space-y-3">
              {certifications.map(cert => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertId(cert.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                    selectedCertId === cert.id
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                      : 'border-slate-100 hover:border-slate-200 text-slate-600'
                  }`}
                >
                  {cert.title}
                </button>
              ))}
            </div>
          </div>

          {/* Quiz Settings */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6 flex items-center text-slate-900">
              <Settings2 size={24} className="mr-3 text-purple-600" />
              2. Quiz Settings
            </h2>

            <div className="mb-8">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">Quiz Length</label>
              <div className="grid grid-cols-3 gap-3">
                {[10, 25, 50].map(len => (
                  <button
                    key={len}
                    onClick={() => setQuizSettings({...quizSettings, length: len})}
                    className={`py-3 rounded-xl border-2 font-bold transition-all ${
                      quizSettings.length === len
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-slate-100 hover:border-slate-200 text-slate-600'
                    }`}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">Exam Mode</label>
              <button
                onClick={() => setQuizSettings({...quizSettings, timed: !quizSettings.timed})}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all ${
                  quizSettings.timed
                    ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold'
                    : 'border-slate-100 hover:border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center">
                  <Timer size={20} className="mr-3" />
                  <span>Timed Exam Mode</span>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${quizSettings.timed ? 'bg-orange-500' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizSettings.timed ? 'left-7' : 'left-1'}`}></div>
                </div>
              </button>
              <p className="text-xs text-slate-500 mt-3 ml-1 flex items-start">
                <Timer size={12} className="mr-1 mt-0.5" />
                Timed mode gives you 1 minute per question and simulates real test conditions.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition shadow-lg flex items-center justify-center group"
            >
              Start Practice Quiz
              <Play size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

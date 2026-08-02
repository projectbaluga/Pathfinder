import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getQuizHistory } from '../utils/quizHistory';
import { BarChart3, Trophy, Calendar, Clock, ArrowRight, GraduationCap } from 'lucide-react';

const Progress = () => {
  const history = useMemo(() => getQuizHistory(), []);

  const stats = useMemo(() => {
    if (history.length === 0) return null;

    // Group by certification
    const grouped = {};
    let totalQuestionsAnswered = 0;
    let totalCorrect = 0;

    history.forEach((record) => {
      totalQuestionsAnswered += record.total;
      totalCorrect += record.score;

      if (!grouped[record.certId]) {
        grouped[record.certId] = {
          certId: record.certId,
          certTitle: record.certTitle,
          attempts: 0,
          scores: [],
          lastAttempt: null,
          timedAttempts: 0,
        };
      }

      const entry = grouped[record.certId];
      entry.attempts += 1;
      entry.scores.push(record.score / record.total);
      if (record.timed) {
        entry.timedAttempts += 1;
      }
      if (!entry.lastAttempt || new Date(record.completedAt) > new Date(entry.lastAttempt)) {
        entry.lastAttempt = record.completedAt;
      }
    });

    const certSummaries = Object.values(grouped).map((entry) => {
      const bestRatio = Math.max(...entry.scores);
      const avgRatio = entry.scores.reduce((a, b) => a + b, 0) / entry.scores.length;

      return {
        ...entry,
        bestScorePercent: Math.round(bestRatio * 100),
        avgScorePercent: Math.round(avgRatio * 100),
      };
    });

    return {
      totalQuestionsAnswered,
      totalCorrect,
      overallAccuracy: Math.round((totalCorrect / totalQuestionsAnswered) * 100) || 0,
      certSummaries,
    };
  }, [history]);

  if (history.length === 0 || !stats) {
    return (
      <div className="container mx-auto px-4 py-12 text-center max-w-xl">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
            <BarChart3 className="text-slate-400" size={40} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-3 text-slate-900">No Quiz History Yet</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          You haven't completed any practice quizzes. Take a practice quiz to start tracking your dynamic progress and mastery statistics!
        </p>
        <Link
          to="/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition inline-flex items-center"
        >
          Take a Quiz <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Quiz History & Progress</h1>
        <p className="text-slate-600 max-w-2xl">
          Track your domain accuracy, overall quiz history, and best certification study achievements.
        </p>
      </div>

      {/* Global stats summary bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="p-4 bg-blue-50 rounded-xl mr-5">
            <GraduationCap className="text-blue-600" size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.totalQuestionsAnswered}</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Questions Solved</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="p-4 bg-green-50 rounded-xl mr-5">
            <Trophy className="text-green-600" size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.totalCorrect}</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Correct Answers</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="p-4 bg-purple-50 rounded-xl mr-5">
            <BarChart3 className="text-purple-600" size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.overallAccuracy}%</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Average Accuracy</div>
          </div>
        </div>
      </div>

      {/* Grouped Certification Summaries */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Performance by Certification</h2>
      <div className="space-y-6">
        {stats.certSummaries.map((summary) => (
          <div key={summary.certId} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{summary.certTitle}</h3>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  <span className="flex items-center"><GraduationCap size={14} className="mr-1" /> {summary.attempts} {summary.attempts === 1 ? 'Attempt' : 'Attempts'}</span>
                  {summary.timedAttempts > 0 && <span className="flex items-center"><Clock size={14} className="mr-1" /> {summary.timedAttempts} Timed</span>}
                  {summary.lastAttempt && (
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" /> Last: {new Date(summary.lastAttempt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center bg-blue-50 px-4 py-2 rounded-xl">
                  <div className="text-lg font-bold text-blue-700">{summary.bestScorePercent}%</div>
                  <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Best</div>
                </div>
                <div className="text-center bg-slate-50 px-4 py-2 rounded-xl">
                  <div className="text-lg font-bold text-slate-700">{summary.avgScorePercent}%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average</div>
                </div>
              </div>
            </div>

            {/* Mastery progress bar */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-1">
                <span>Certification Mastery</span>
                <span>{summary.bestScorePercent}%</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    summary.bestScorePercent >= 70 ? 'bg-green-500' : summary.bestScorePercent >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${summary.bestScorePercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;

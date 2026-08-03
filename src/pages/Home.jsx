
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, GraduationCap, ArrowRight, Award, CheckSquare } from 'lucide-react';
import { certifications } from '../data/certifications';
import { getQuizHistory } from '../utils/quizHistory';
import { useMemo, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');
  const totalCerts = certifications.length;
  const history = useMemo(() => getQuizHistory(), []);

  // Compute total dynamic questions answered if history exists, otherwise fallback to global bank total
  const stats = useMemo(() => {
    if (history.length > 0) {
      const answered = history.reduce((acc, curr) => acc + curr.total, 0);
      return {
        label: "Questions Answered",
        count: answered,
        isDynamic: true
      };
    }
    const globalBankQuestions = certifications.reduce((acc, cert) => acc + cert.practiceQuestions.length, 0);
    return {
      label: "Practice Questions",
      count: globalBankQuestions,
      isDynamic: false
    };
  }, [history]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/directory?q=${encodeURIComponent(searchVal.trim())}`);
    } else {
      navigate('/directory');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Docy Style Purple/Violet Gradient */}
      <section className="bg-hero-gradient text-white py-24 px-4 relative overflow-hidden">
        {/* Subtle decorative glow overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent)] pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Knowledge Base & <br className="hidden sm:inline" />IT Certification Hub
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Your all-in-one resource for IT career mastery. Explore official exam domains, study key guidelines, and test your readiness with our dynamic quizzes.
          </p>

          {/* Docy Style Search Bar Hero Overlay */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto mb-10 flex bg-white rounded-pill p-1.5 shadow-soft-lg border border-white/10">
            <div className="flex items-center pl-4 pr-2 flex-grow text-slate-400">
              <Search size={20} className="text-primary-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search certifications, issuers, domains..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-sm font-medium"
              />
            </div>
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-slate-900 px-6 py-3 rounded-pill font-bold text-sm transition shadow-md shadow-accent-500/20"
            >
              Search Hub
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/directory" className="bg-white text-primary-600 hover:bg-slate-50 px-8 py-3.5 rounded-pill font-bold transition shadow-lg shadow-black/10 flex items-center text-sm">
              Explore Catalog <ArrowRight className="ml-2 text-primary-500" size={16} />
            </Link>
            <Link to="/quiz" className="bg-primary-600/35 hover:bg-primary-600/50 text-white border border-white/20 px-8 py-3.5 rounded-pill font-bold transition text-sm">
              Start Practice Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white border-b border-slate-100 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24">
            <div className="text-center px-6 py-4 rounded-xl2 bg-slate-50/50 border border-slate-100/50 min-w-[200px]">
              <div className="flex items-center justify-center text-primary-500 mb-2">
                <Award size={36} className="mr-3" />
                <span className="text-4xl font-extrabold text-slate-900">{totalCerts}</span>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Certifications</p>
            </div>
            <div className="text-center px-6 py-4 rounded-xl2 bg-slate-50/50 border border-slate-100/50 min-w-[200px]">
              <div className="flex items-center justify-center text-accent-500 mb-2">
                {stats.isDynamic ? (
                  <CheckSquare size={36} className="mr-3 text-green-500" />
                ) : (
                  <GraduationCap size={36} className="mr-3 text-primary-400" />
                )}
                <span className="text-4xl font-extrabold text-slate-900">{stats.count}</span>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">{stats.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-slate-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">How ProveIT Works</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              Follow our structured preparation flow to build confidence and easily clear your upcoming IT certification exams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Directory Card */}
            <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100/70 hover:shadow-soft-lg transition-all duration-300 group">
              <div className="bg-primary-50 text-primary-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Search size={26} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">1. Cert Directory</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Explore costs, issuers, pricing options, difficulty levels, and duration metadata across a comprehensive 25 certification catalog.
              </p>
              <Link to="/directory" className="text-primary-500 font-bold flex items-center hover:underline text-sm">
                Browse Directory <ArrowRight className="ml-1" size={14} />
              </Link>
            </div>

            {/* Reviewer Card */}
            <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100/70 hover:shadow-soft-lg transition-all duration-300 group">
              <div className="bg-emerald-50 text-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <BookOpen size={26} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">2. Study Reviewer</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Access structured domain guides mapping directly to key concepts, specific guidelines, and essential definitions.
              </p>
              <Link to="/reviewer" className="text-green-600 font-bold flex items-center hover:underline text-sm">
                View Study Modules <ArrowRight className="ml-1" size={14} />
              </Link>
            </div>

            {/* Quiz Card */}
            <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100/70 hover:shadow-soft-lg transition-all duration-300 group">
              <div className="bg-amber-50 text-accent-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap size={26} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">3. Practice Quiz</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Take timed or untimed customizable practice exams, receive explanations on check answer, and review mistakes.
              </p>
              <Link to="/quiz" className="text-accent-500 font-bold flex items-center hover:underline text-sm">
                Start Mock Exam <ArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

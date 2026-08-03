
import { Link, useLocation } from 'react-router-dom';
import { Shield, BookOpen, GraduationCap, Search, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const base = "flex items-center space-x-1.5 py-1.5 px-3 rounded-pill text-sm font-semibold transition-all duration-200 ";
    if (location.pathname === path) {
      return base + "bg-primary-50 text-primary-500";
    }
    return base + "text-slate-600 hover:text-primary-500 hover:bg-slate-50";
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md text-slate-800 border-b border-slate-100 shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold tracking-tight text-slate-900">
          <div className="bg-primary-500 p-2 rounded-xl text-white shadow-soft">
            <Shield size={20} />
          </div>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
            ProveIT
          </span>
        </Link>
        <div className="flex items-center space-x-1 sm:space-x-3 mt-2 sm:mt-0">
          <Link to="/directory" className={getLinkClass('/directory')}>
            <Search size={16} />
            <span className="hidden sm:inline">Directory</span>
          </Link>
          <Link to="/reviewer" className={getLinkClass('/reviewer')}>
            <BookOpen size={16} />
            <span className="hidden sm:inline">Reviewer</span>
          </Link>
          <Link to="/quiz" className={getLinkClass('/quiz')}>
            <GraduationCap size={16} />
            <span className="hidden sm:inline">Practice Quiz</span>
          </Link>
          <Link to="/progress" className="bg-primary-500 text-white hover:bg-primary-600 flex items-center space-x-1.5 py-1.5 px-4 rounded-pill text-sm font-bold shadow-soft transition-all duration-200">
            <BarChart3 size={16} />
            <span>Progress</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { Link } from 'react-router-dom';
import { Shield, BookOpen, GraduationCap, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Shield className="text-blue-400" />
          <span>CertHub</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/directory" className="hover:text-blue-400 flex items-center space-x-1">
            <Search size={18} />
            <span className="hidden sm:inline">Directory</span>
          </Link>
          <Link to="/reviewer" className="hover:text-blue-400 flex items-center space-x-1">
            <BookOpen size={18} />
            <span className="hidden sm:inline">Reviewer</span>
          </Link>
          <Link to="/quiz" className="hover:text-blue-400 flex items-center space-x-1">
            <GraduationCap size={18} />
            <span className="hidden sm:inline">Practice Quiz</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

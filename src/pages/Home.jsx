import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Your IT Career</h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Your all-in-one hub for IT certifications. Explore directories, study key concepts, and test your knowledge with our interactive quiz engine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/directory" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center">
              Explore Certifications <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/quiz" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Start a Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Directory Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cert Directory</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive details on major IT certs including costs, requirements, and salary impact.
              </p>
              <Link to="/directory" className="text-blue-600 font-semibold flex items-center hover:underline">
                Browse Directory <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            {/* Reviewer Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Study Reviewer</h3>
              <p className="text-slate-600 mb-6">
                Summarized study guides and cheat sheets for core exam objectives and terminology.
              </p>
              <Link to="/reviewer" className="text-green-600 font-semibold flex items-center hover:underline">
                View Reviewer <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            {/* Quiz Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Practice Quiz</h3>
              <p className="text-slate-600 mb-6">
                Interactive quizzes with instant feedback to prepare you for the real certification exams.
              </p>
              <Link to="/quiz" className="text-purple-600 font-semibold flex items-center hover:underline">
                Try a Quiz <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

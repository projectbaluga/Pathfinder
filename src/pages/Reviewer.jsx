import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { certifications } from '../data/certifications';
import { ChevronDown, ChevronUp, Book, Lightbulb, Clock, BookOpen } from 'lucide-react';

const Reviewer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const certQuery = searchParams.get('cert');

  // Derive selectedCertId directly from query param, falling back to certification array
  const selectedCertId = (certQuery && certifications.some(c => c.id === certQuery))
    ? certQuery
    : certifications[0].id;

  const [expandedSections, setExpandedSections] = useState({});

  const selectedCert = certifications.find(c => c.id === selectedCertId);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCertSelect = (id) => {
    setExpandedSections({});
    setSearchParams({ cert: id });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Study Reviewer</h1>
        <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
          Concise study guides summarizing key exam objectives and core concepts. Select a certification to begin your review.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Selector */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl2 shadow-soft border border-slate-100 overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 font-extrabold text-slate-400 uppercase text-xs tracking-widest">
              Select Certification
            </div>
            <div className="divide-y divide-slate-50">
              {certifications.map(cert => (
                <button
                  key={cert.id}
                  onClick={() => handleCertSelect(cert.id)}
                  className={`w-full text-left px-6 py-4 transition-colors hover:bg-slate-50 text-sm font-semibold ${
                    selectedCertId === cert.id ? 'bg-primary-50 border-r-4 border-primary-500 text-primary-600 font-extrabold' : 'text-slate-600'
                  }`}
                >
                  {cert.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-hero-gradient text-white p-6 rounded-xl2 shadow-soft-lg">
            <h4 className="font-bold mb-2 flex items-center"><Lightbulb size={18} className="mr-2 text-accent-400" /> Study Tip</h4>
            <p className="text-primary-100 text-xs leading-relaxed font-medium">
              Consistent daily review is more effective than cramming. Aim for 30-60 minutes each day.
            </p>
          </div>
        </div>

        {/* Review Content */}
        <div className="lg:w-3/4">
          {selectedCert && (
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl2 shadow-soft border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedCert.title} Review</h2>
                  <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center text-primary-500"><Book size={14} className="mr-1" /> {selectedCert.reviewer.length} Modules</span>
                    <span className="flex items-center text-primary-500"><Clock size={14} className="mr-1" /> {selectedCert.duration} Exam</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-8 pb-8 border-b border-slate-100 leading-relaxed">
                  This reviewer covers the primary domains tested in the {selectedCert.title} exam. Use these summaries as a final check before your practice tests.
                </p>

                <div className="space-y-4">
                  {selectedCert.reviewer.map((section, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleSection(idx)}
                        aria-expanded={!!expandedSections[idx]}
                        aria-controls={`reviewer-section-${idx}`}
                        className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors font-bold text-slate-800 text-sm"
                      >
                        <span>{section.title}</span>
                        {expandedSections[idx] ? <ChevronUp size={18} className="text-primary-500" /> : <ChevronDown size={18} className="text-primary-500" />}
                      </button>
                      <div
                        id={`reviewer-section-${idx}`}
                        role="region"
                        hidden={!expandedSections[idx]}
                        className={`p-5 bg-white space-y-6 ${!expandedSections[idx] ? 'hidden' : ''}`}
                      >
                        {section.topics.map((topic, tIdx) => (
                          <div key={tIdx} className="group">
                            <h4 className="font-bold text-primary-500 mb-2 flex items-center group-hover:translate-x-1 transition-transform text-sm">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                              {topic.name}
                            </h4>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium pl-4.5 border-l-2 border-slate-100 ml-0.75 py-1">
                              {topic.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl2 shadow-soft border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center text-sm"><ListChecks className="mr-2 text-green-500" /> Recommended Timeline</h3>
                  <ul className="text-slate-500 text-xs font-semibold space-y-3">
                    <li className="flex items-start"><span className="font-bold text-slate-800 mr-2">Week 1-2:</span> Core fundamentals and concepts.</li>
                    <li className="flex items-start"><span className="font-bold text-slate-800 mr-2">Week 3-4:</span> Deep dive into specific domains.</li>
                    <li className="flex items-start"><span className="font-bold text-slate-800 mr-2">Week 5:</span> Practice exams and weak area review.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl2 shadow-soft border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center text-sm"><BookOpen className="mr-2 text-primary-500" /> Key Resources</h3>
                  <ul className="text-slate-500 text-xs font-bold space-y-3">
                    <li className="hover:text-primary-500 transition-colors cursor-pointer">• Official Study Guide</li>
                    <li className="hover:text-primary-500 transition-colors cursor-pointer">• Hands-on Labs / Sandboxes</li>
                    <li className="hover:text-primary-500 transition-colors cursor-pointer">• Pathfinder Practice Quizzes</li>
                    <li className="hover:text-primary-500 transition-colors cursor-pointer">• Community Forums (Reddit/Discord)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ListChecks = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>
  </svg>
);

export default Reviewer;

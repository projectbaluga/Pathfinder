
import { useState } from 'react';
import { certifications } from '../data/certifications';
import { ChevronDown, Book, Lightbulb, Clock, BookOpen, ShieldCheck } from 'lucide-react';

const Reviewer = () => {
  const [selectedCertId, setSelectedCertId] = useState(certifications[0].id);
  const [expandedSections, setExpandedSections] = useState({});

  const selectedCert = certifications.find(c => c.id === selectedCertId);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="section pt-32">
      <div className="container">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__num">02</span>
            <span className="section-head__label">Learning Hub</span>
          </div>
          <h1 className="section-head__title">Study <em className="serif">Reviewer</em></h1>
          <p className="about__intro mt-6 text-text-2 max-w-2xl">
            Concise study guides summarizing key exam objectives and core concepts. Select a certification to begin your review.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Selector */}
          <div className="lg:w-1/3">
            <div className="case p-0 overflow-hidden bg-surface-2 border-border-2 sticky top-32">
              <div className="p-5 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-text-3">
                Select Certification
              </div>
              <div className="divide-y divide-border">
                {certifications.map(cert => (
                  <button
                    key={cert.id}
                    onClick={() => {
                      setSelectedCertId(cert.id);
                      setExpandedSections({});
                    }}
                    className={`w-full text-left px-6 py-4 transition-all hover:bg-surface flex items-center justify-between group ${
                      selectedCertId === cert.id ? 'bg-surface text-accent font-bold' : 'text-text-2'
                    }`}
                  >
                    <span className="text-sm">{cert.title}</span>
                    {selectedCertId === cert.id && <ShieldCheck size={16} className="text-accent" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="principle mt-8 border-accent-soft bg-accent-soft/10">
              <div className="principle__icon">
                <Lightbulb className="icon" />
              </div>
              <h4 className="font-display font-bold mb-2">Study Tip</h4>
              <p className="text-xs leading-relaxed text-text-2">
                Consistent daily review is more effective than cramming. Aim for 30-60 minutes each day.
              </p>
            </div>
          </div>

          {/* Review Content */}
          <div className="lg:w-2/3">
            {selectedCert && (
              <div className="space-y-10">
                <div className="case p-8 bg-surface border-border">
                  <div className="flex flex-wrap items-center justify-between mb-8 gap-4 border-b border-border pb-8">
                    <h2 className="text-3xl font-display font-bold text-text">{selectedCert.title} Review</h2>
                    <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-wider">
                      <span className="flex items-center gap-2 text-text-3">
                        <Book size={14} className="text-accent" />
                        {selectedCert.reviewer.length} Modules
                      </span>
                      <span className="flex items-center gap-2 text-text-3">
                        <Clock size={14} className="text-accent-2" />
                        {selectedCert.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedCert.reviewer.map((section, idx) => (
                      <div key={idx} className="feature p-0 overflow-hidden !bg-surface-2 border-border">
                        <button
                          onClick={() => toggleSection(idx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors group"
                        >
                          <span className="font-display font-bold text-text group-hover:text-accent transition-colors">
                            {section.title}
                          </span>
                          <div className={`transition-transform duration-300 ${expandedSections[idx] ? 'rotate-180' : ''}`}>
                            <ChevronDown size={20} className="text-text-3" />
                          </div>
                        </button>
                        {expandedSections[idx] && (
                          <div className="p-8 pt-2 bg-surface space-y-8 animate-in slide-in-from-top-4 duration-300">
                            {section.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="group">
                                <h4 className="font-mono text-xs uppercase tracking-widest text-accent-2 mb-3 flex items-center gap-3">
                                  <span className="w-1 h-1 bg-accent-2 rounded-full"></span>
                                  {topic.name}
                                </h4>
                                <p className="text-text-2 text-sm leading-relaxed pl-4 border-l border-border-2">
                                  {topic.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="principle spot">
                    <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-accent-2" /> Timeline
                    </h3>
                    <ul className="text-text-2 text-xs space-y-4 font-mono">
                      <li className="flex gap-3">
                        <span className="text-accent">01.</span>
                        <span>Week 1-2: Core fundamentals.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent">02.</span>
                        <span>Week 3-4: Domain deep dive.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent">03.</span>
                        <span>Week 5: Practice simulations.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="principle spot">
                    <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                      <BookOpen size={18} className="text-accent" /> Resources
                    </h3>
                    <ul className="text-text-2 text-xs space-y-4 font-mono">
                      <li className="flex gap-3">
                        <span className="text-accent-3">▹</span>
                        <span>Official Study Guides</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-3">▹</span>
                        <span>Hands-on Lab Modules</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-3">▹</span>
                        <span>Community Forums</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;


import { X, Info, ListChecks, Shield } from 'lucide-react';

const CertDetails = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[1400] flex items-center justify-center p-4 bg-bg/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-border-2 relative">
        <div className="sticky top-0 bg-surface/80 backdrop-blur-md border-b border-border px-6 py-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="principle__icon !mb-0 !w-10 !h-10">
              <Shield className="icon !w-5 !h-5" />
            </div>
            <h2 className="text-2xl font-display font-bold text-text">{cert.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="icon-btn !w-10 !h-10"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <h3 className="section-head__label mb-6 flex items-center gap-2">
                <Info size={14} className="text-accent" /> Overview
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Issuer</span>
                  <span className="text-text font-bold">{cert.issuer}</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Domain</span>
                  <span className="text-text font-bold">{cert.domain}</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Level</span>
                  <span className="text-accent-2 font-bold">{cert.level}</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Cost</span>
                  <span className="text-accent-3 font-bold">${cert.price}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="section-head__label mb-6 flex items-center gap-2">
                <ListChecks size={14} className="text-accent" /> Exam Details
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Questions</span>
                  <span className="text-text font-bold">{cert.questionsCount}</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Duration</span>
                  <span className="text-text font-bold">{cert.duration}</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-text-3">Practice</span>
                  <span className="text-accent font-bold">50 units</span>
                </p>
              </div>
            </div>
          </div>

          <div className="case p-8 bg-surface-2 border-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield size={80} className="text-accent" />
            </div>
            <h3 className="font-display text-lg mb-4 text-accent">Exam Objective</h3>
            <p className="text-text-2 leading-relaxed italic">"{cert.description}"</p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-surface/80 backdrop-blur-md border-t border-border px-6 py-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn btn--primary btn--sm"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertDetails;

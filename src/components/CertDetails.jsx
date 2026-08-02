import { useEffect, useRef } from 'react';
import { X, Info, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertDetails = ({ cert, onClose }) => {
  const closeButtonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!cert) return;

    // Focus the close button on mount
    closeButtonRef.current?.focus();

    // Keydown handler for Escape & Tab trap
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!containerRef.current) return;
        // Find all focusable elements inside container
        const focusableElements = containerRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => el.getAttribute('tabindex') !== '-1'
        );

        if (focusable.length === 0) return;

        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: Go to last element if currently on first element
          if (document.activeElement === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          // Tab: Go to first element if currently on last element
          if (document.activeElement === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Scroll lock: save previous style and set body to hidden
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-details-title"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl2 shadow-soft-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center z-10">
          <h2 id="cert-details-title" className="text-2xl font-extrabold tracking-tight text-slate-900">{cert.title}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close details"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/50">
              <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4 flex items-center">
                <Info size={16} className="mr-2 text-primary-500" /> Overview
              </h3>
              <div className="space-y-3 text-sm">
                <p><span className="font-semibold text-slate-600">Issuer:</span> {cert.issuer}</p>
                <p><span className="font-semibold text-slate-600">Domain:</span> {cert.domain}</p>
                <p><span className="font-semibold text-slate-600">Level:</span> {cert.level}</p>
                <p><span className="font-semibold text-slate-600">Cost:</span> ${cert.price}</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/50">
              <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4 flex items-center">
                <ListChecks size={16} className="mr-2 text-primary-500" /> Exam Details
              </h3>
              <div className="space-y-3 text-sm">
                <p><span className="font-semibold text-slate-600">Questions:</span> {cert.questionsCount}</p>
                <p><span className="font-semibold text-slate-600">Duration:</span> {cert.duration}</p>
                <p><span className="font-semibold text-slate-600">Practice:</span> {cert.practiceQuestions?.length ?? 0} questions available</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50/50 border border-primary-100 p-6 rounded-xl2">
            <h3 className="text-lg font-bold text-primary-900 mb-2">Description</h3>
            <p className="text-primary-800 leading-relaxed text-sm font-medium">{cert.description}</p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex flex-wrap justify-end gap-3">
          <Link
            to={`/reviewer?cert=${cert.id}`}
            onClick={onClose}
            className="bg-green-600 text-white px-6 py-2.5 rounded-pill font-bold hover:bg-green-700 transition shadow-md shadow-green-200 flex items-center justify-center text-sm"
          >
            Study Reviewer
          </Link>
          <Link
            to={`/quiz?cert=${cert.id}`}
            onClick={onClose}
            className="bg-primary-500 text-white px-6 py-2.5 rounded-pill font-bold hover:bg-primary-600 transition shadow-md shadow-primary-200 flex items-center justify-center text-sm"
          >
            Take Practice Quiz
          </Link>
          <button
            onClick={onClose}
            className="bg-slate-900 text-white px-8 py-2.5 rounded-pill font-bold hover:bg-slate-800 transition shadow-md shadow-slate-200 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertDetails;

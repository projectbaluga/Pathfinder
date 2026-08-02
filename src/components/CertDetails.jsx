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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
          <h2 id="cert-details-title" className="text-2xl font-bold text-slate-900">{cert.title}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close details"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                <Info size={16} className="mr-2" /> Overview
              </h3>
              <div className="space-y-3">
                <p><span className="font-semibold text-slate-700">Issuer:</span> {cert.issuer}</p>
                <p><span className="font-semibold text-slate-700">Domain:</span> {cert.domain}</p>
                <p><span className="font-semibold text-slate-700">Level:</span> {cert.level}</p>
                <p><span className="font-semibold text-slate-700">Cost:</span> ${cert.price}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                <ListChecks size={16} className="mr-2" /> Exam Details
              </h3>
              <div className="space-y-3">
                <p><span className="font-semibold text-slate-700">Questions:</span> {cert.questionsCount}</p>
                <p><span className="font-semibold text-slate-700">Duration:</span> {cert.duration}</p>
                <p><span className="font-semibold text-slate-700">Practice:</span> {cert.practiceQuestions?.length ?? 0} questions available</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Description</h3>
            <p className="text-blue-800 leading-relaxed">{cert.description}</p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex flex-wrap justify-end gap-3">
          <Link
            to={`/reviewer?cert=${cert.id}`}
            onClick={onClose}
            className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-100 flex items-center justify-center"
          >
            Study Reviewer
          </Link>
          <Link
            to={`/quiz?cert=${cert.id}`}
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100 flex items-center justify-center"
          >
            Take Practice Quiz
          </Link>
          <button
            onClick={onClose}
            className="bg-slate-900 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertDetails;

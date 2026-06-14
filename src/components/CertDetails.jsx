import { X, Info, ListChecks } from 'lucide-react';

const CertDetails = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">{cert.title}</h2>
          <button
            onClick={onClose}
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
                <p><span className="font-semibold text-slate-700">Practice:</span> 50 questions available</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Description</h3>
            <p className="text-blue-800 leading-relaxed">{cert.description}</p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-end">
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

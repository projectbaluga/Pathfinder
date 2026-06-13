import React from 'react';
import { X, CheckCircle2, Briefcase, Info, ListChecks } from 'lucide-react';

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
                <p><span className="font-semibold">Issuer:</span> {cert.issuer}</p>
                <p><span className="font-semibold">Domain:</span> {cert.domain}</p>
                <p><span className="font-semibold">Level:</span> {cert.level}</p>
                <p><span className="font-semibold">Cost:</span> {cert.cost}</p>
                <p><span className="font-semibold">Validity:</span> {cert.validity}</p>
                <p><span className="font-semibold">Prerequisites:</span> {cert.prerequisites}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                <ListChecks size={16} className="mr-2" /> Exam Details
              </h3>
              <div className="space-y-3">
                <p><span className="font-semibold">Format:</span> {cert.questionsCount} questions</p>
                <p><span className="font-semibold">Duration:</span> {cert.duration}</p>
                <p><span className="font-semibold">Passing Score:</span> {cert.passingScore}</p>
                <p><span className="font-semibold">Recommended Experience:</span> {cert.experience}</p>
                <p><span className="font-semibold">Avg Salary Impact:</span> {cert.salaryImpact}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <Briefcase size={16} className="mr-2" /> Career Roles
            </h3>
            <div className="flex flex-wrap gap-2">
              {cert.careerRoles.map((role, index) => (
                <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  {role}
                </span>
              ))}
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
            className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertDetails;

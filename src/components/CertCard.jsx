
import { ExternalLink, DollarSign, Clock, BarChart, Award } from 'lucide-react';

const CertCard = ({ cert, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl transition-all cursor-pointer"
      onClick={() => onClick(cert)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider">
            {cert.domain}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider ${
            cert.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
          }`}>
            {cert.level}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{cert.description}</p>

        <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-600">
          <div className="flex items-center">
            <Award size={16} className="mr-2 text-slate-400" />
            <span>{cert.issuer}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={16} className="mr-2 text-slate-400" />
            <span>{cert.cost}</span>
          </div>
          <div className="flex items-center">
            <BarChart size={16} className="mr-2 text-slate-400" />
            <span>{cert.salaryImpact.split('(')[0]}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-slate-400" />
            <span>{cert.duration}</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center text-blue-600 font-medium">
        <span>View Details</span>
        <ExternalLink size={16} />
      </div>
    </div>
  );
};

export default CertCard;

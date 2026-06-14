
import { ArrowUpRight, DollarSign, Clock, Award, Shield } from 'lucide-react';

const CertCard = ({ cert, onClick }) => {
  return (
    <div
      className="principle spot group cursor-pointer"
      onClick={() => onClick(cert)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="principle__icon">
          <Shield className="icon" />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="case__group-tag text-[10px]">
            {cert.domain}
          </span>
          <span className={`font-mono text-[10px] uppercase tracking-tighter ${
            cert.level === 'Beginner' ? 'text-accent-2' :
            cert.level === 'Intermediate' ? 'text-accent-3' : 'text-accent'
          }`}>
            {cert.level}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
        {cert.title}
      </h3>

      <p className="text-sm text-text-2 mb-6 line-clamp-2">
        {cert.description}
      </p>

      <div className="grid grid-cols-2 gap-3 text-[11px] font-mono text-text-3 border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <Award size={12} className="text-accent" />
          <span className="truncate">{cert.issuer}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={12} className="text-accent-2" />
          <span>${cert.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} className="text-accent-3" />
          <span>{cert.duration}</span>
        </div>
        <div className="flex items-center justify-end text-accent group-hover:translate-x-1 transition-transform">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
};

export default CertCard;

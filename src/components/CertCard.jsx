import { useState } from 'react';
import { ExternalLink, DollarSign, Clock, Tag, Award, Star } from 'lucide-react';
import { isFavorite, toggleFavorite } from '../utils/favorites';

const CertCard = ({ cert, onClick }) => {
  const [fav, setFav] = useState(() => isFavorite(cert.id));

  // If the cert.id changes, reset the local state during render rather than in an effect to avoid the cascading render warning
  const [prevId, setPrevId] = useState(cert.id);
  if (cert.id !== prevId) {
    setPrevId(cert.id);
    setFav(isFavorite(cert.id));
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(cert);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(cert.id);
    setFav(prev => !prev);
  };

  const handleFavoriteKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      toggleFavorite(cert.id);
      setFav(prev => !prev);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${cert.title}`}
      onKeyDown={handleKeyDown}
      className="bg-white rounded-xl2 shadow-soft overflow-hidden border border-slate-100 hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 relative"
      onClick={() => onClick(cert)}
    >
      {/* Favorite Toggle Button */}
      <button
        type="button"
        onClick={handleFavoriteClick}
        onKeyDown={handleFavoriteKeyDown}
        aria-label={fav ? `Remove ${cert.title} from favorites` : `Add ${cert.title} to favorites`}
        className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-pill shadow-sm hover:bg-slate-50 transition border border-slate-100 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <Star size={18} fill={fav ? "currentColor" : "none"} />
      </button>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4 pr-10">
          <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-2.5 py-0.5 rounded-pill uppercase tracking-wider">
            {cert.domain}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-pill uppercase tracking-wider ${
            cert.level === 'Beginner' ? 'bg-green-50 text-green-700' :
            cert.level === 'Intermediate' ? 'bg-amber-50 text-accent-600' : 'bg-rose-50 text-red-700'
          }`}>
            {cert.level}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{cert.description}</p>

        <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-600 pt-2 border-t border-slate-50">
          <div className="flex items-center">
            <Award size={16} className="mr-2 text-primary-400" />
            <span className="font-medium text-xs text-slate-500">{cert.issuer}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={16} className="mr-2 text-primary-400" />
            <span className="font-semibold text-xs text-slate-700">${cert.price}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2 text-primary-400" />
            <span className="font-medium text-xs text-slate-500">{cert.domain}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-primary-400" />
            <span className="font-medium text-xs text-slate-500">{cert.duration}</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50/70 px-6 py-3.5 border-t border-slate-100 flex justify-between items-center text-primary-500 hover:text-primary-600 font-bold text-xs">
        <span>View Details</span>
        <ExternalLink size={14} />
      </div>
    </div>
  );
};

export default CertCard;

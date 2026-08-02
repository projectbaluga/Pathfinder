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
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
      onClick={() => onClick(cert)}
    >
      {/* Favorite Toggle Button */}
      <button
        type="button"
        onClick={handleFavoriteClick}
        onKeyDown={handleFavoriteKeyDown}
        aria-label={fav ? `Remove ${cert.title} from favorites` : `Add ${cert.title} to favorites`}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-slate-50 transition border border-slate-100 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <Star size={18} fill={fav ? "currentColor" : "none"} />
      </button>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4 pr-10">
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
            <span>${cert.price}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2 text-slate-400" />
            <span>{cert.domain}</span>
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

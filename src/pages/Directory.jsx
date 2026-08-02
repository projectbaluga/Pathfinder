import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { certifications } from '../data/certifications';
import CertCard from '../components/CertCard';
import CertDetails from '../components/CertDetails';
import { isFavorite } from '../utils/favorites';
import { Search, Filter, SlidersHorizontal, CircleDollarSign, Star } from 'lucide-react';

const Directory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  // Drive search value straight from initial render to avoid effect cascades
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [prevQuery, setPrevQuery] = useState(initialQuery);
  if (initialQuery !== prevQuery) {
    setPrevQuery(initialQuery);
    setSearchTerm(initialQuery);
  }

  const [domainFilter, setDomainFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const domains = ['All', ...new Set(certifications.map(c => c.domain))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Free', value: '0' },
    { label: 'Under $200', value: '200' },
    { label: 'Under $500', value: '500' },
    { label: '$500+', value: '500+' }
  ];

  const filteredCerts = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDomain = domainFilter === 'All' || cert.domain === domainFilter;
      const matchesLevel = levelFilter === 'All' || cert.level === levelFilter;

      let matchesPrice = true;
      if (priceFilter === '0') matchesPrice = cert.price === 0;
      else if (priceFilter === '200') matchesPrice = cert.price < 200;
      else if (priceFilter === '500') matchesPrice = cert.price < 500;
      else if (priceFilter === '500+') matchesPrice = cert.price >= 500;

      const matchesFavorite = !favoritesOnly || isFavorite(cert.id);

      return matchesSearch && matchesDomain && matchesLevel && matchesPrice && matchesFavorite;
    });
  }, [searchTerm, domainFilter, levelFilter, priceFilter, favoritesOnly]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Certification Directory</h1>
        <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
          Browse our comprehensive catalog of IT certifications. Filter by domain, difficulty, and price to find the right path for your career growth.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" size={20} />
          <input
            type="text"
            placeholder="Search certifications or issuers..."
            className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-pill focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white transition shadow-soft font-medium text-slate-800 text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchParams(e.target.value ? { q: e.target.value } : {});
            }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Favorites Filter Button */}
          <button
            type="button"
            onClick={() => setFavoritesOnly(prev => !prev)}
            className={`flex items-center space-x-2 border rounded-pill px-5 py-3 transition shadow-soft font-bold text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              favoritesOnly
                ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Star size={16} fill={favoritesOnly ? "currentColor" : "none"} className="text-yellow-500" />
            <span>Favorites Only</span>
          </button>

          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-primary-400" />
            <select
              className="bg-white border border-slate-200 rounded-pill px-5 py-3 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-soft cursor-pointer"
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <SlidersHorizontal size={18} className="text-primary-400" />
            <select
              className="bg-white border border-slate-200 rounded-pill px-5 py-3 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-soft cursor-pointer"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <CircleDollarSign size={18} className="text-primary-400" />
            <select
              className="bg-white border border-slate-200 rounded-pill px-5 py-3 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-soft cursor-pointer"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredCerts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map(cert => (
            <CertCard key={cert.id} cert={cert} onClick={setSelectedCert} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl2 border border-dashed border-slate-300 shadow-soft">
          <p className="text-slate-500 text-lg font-bold">No certifications found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setDomainFilter('All');
              setLevelFilter('All');
              setPriceFilter('All');
              setFavoritesOnly(false);
              setSearchParams({});
            }}
            className="mt-4 text-primary-500 font-extrabold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {selectedCert && (
        <CertDetails cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </div>
  );
};

export default Directory;

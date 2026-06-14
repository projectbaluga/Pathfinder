import { useState, useMemo } from 'react';
import { certifications } from '../data/certifications';
import CertCard from '../components/CertCard';
import CertDetails from '../components/CertDetails';
import { Search, Filter, SlidersHorizontal, CircleDollarSign } from 'lucide-react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
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

      return matchesSearch && matchesDomain && matchesLevel && matchesPrice;
    });
  }, [searchTerm, domainFilter, levelFilter, priceFilter]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Certification Directory</h1>
        <p className="text-slate-600 max-w-2xl">
          Browse our comprehensive catalog of IT certifications. Filter by domain, difficulty, and price to find the right path for your career growth.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search certifications or issuers..."
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-slate-400" />
            <select
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <SlidersHorizontal size={20} className="text-slate-400" />
            <select
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <CircleDollarSign size={20} className="text-slate-400" />
            <select
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">No certifications found matching your criteria.</p>
          <button
            onClick={() => {setSearchTerm(''); setDomainFilter('All'); setLevelFilter('All'); setPriceFilter('All');}}
            className="mt-4 text-blue-600 font-semibold hover:underline"
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

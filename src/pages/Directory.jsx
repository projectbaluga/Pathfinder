
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
    <div className="section pt-32">
      <div className="container">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__num">01</span>
            <span className="section-head__label">Knowledge Base</span>
          </div>
          <h1 className="section-head__title">Certification <em className="serif">Directory</em></h1>
          <p className="about__intro mt-6 text-text-2 max-w-2xl">
            Browse our comprehensive catalog of IT certifications. Filter by domain, difficulty, and price to find the right path for your career growth.
          </p>
        </div>

        <div className="case p-8 mb-12 bg-surface-2 border-border-2">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-3" size={18} />
              <input
                type="text"
                placeholder="Search certifications or issuers..."
                className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-xl focus:outline-none focus:border-accent transition font-mono text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-xl">
                <Filter size={16} className="text-accent" />
                <select
                  className="bg-transparent text-text-2 text-sm focus:outline-none appearance-none pr-4"
                  value={domainFilter}
                  onChange={(e) => setDomainFilter(e.target.value)}
                >
                  {domains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-xl">
                <SlidersHorizontal size={16} className="text-accent-2" />
                <select
                  className="bg-transparent text-text-2 text-sm focus:outline-none appearance-none pr-4"
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-xl">
                <CircleDollarSign size={16} className="text-accent-3" />
                <select
                  className="bg-transparent text-text-2 text-sm focus:outline-none appearance-none pr-4"
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
        </div>

        {filteredCerts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCerts.map(cert => (
              <CertCard key={cert.id} cert={cert} onClick={setSelectedCert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-2xl border border-dashed border-border-2">
            <p className="text-text-3 font-mono text-sm uppercase tracking-widest">No certifications found matching your criteria.</p>
            <button
              onClick={() => {setSearchTerm(''); setDomainFilter('All'); setLevelFilter('All'); setPriceFilter('All');}}
              className="btn btn--ghost btn--sm mt-6"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedCert && (
        <CertDetails cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </div>
  );
};

export default Directory;

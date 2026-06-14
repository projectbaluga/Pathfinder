
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = (e) => {
    // If View Transitions API is available
    if (document.startViewTransition) {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--vt-x', `${x}px`);
      document.documentElement.style.setProperty('--vt-y', `${y}px`);

      document.startViewTransition(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      });
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', index: '00' },
    { name: 'Directory', path: '/directory', index: '01' },
    { name: 'Reviewer', path: '/reviewer', index: '02' },
    { name: 'Practice Quiz', path: '/quiz', index: '03' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          Pathfinder<span className="nav__brand-dot">.</span>
        </Link>

        <ul className="nav__links hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'is-active' : ''}
              >
                <span className="nav__index">{link.index}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="icon theme-toggle__sun" />
            <Moon className="icon theme-toggle__moon" />
          </button>

          <button
            className="nav__toggle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div
            className="nav-backdrop"
            style={{ opacity: 1, pointerEvents: 'auto' }}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div className={`nav__menu md:hidden`}>
          <ul className={`nav__links ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'is-active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="nav__index">{link.index}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

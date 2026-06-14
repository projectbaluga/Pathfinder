
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Share2, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="nav__brand">
              Pathfinder<span className="nav__brand-dot">.</span>
            </Link>
            <p>
              Your ultimate IT certification hub. Explore, study, and master your career path with our comprehensive resources.
            </p>
            <div className="footer__social">
              <a href="#" className="icon-btn" aria-label="Globe"><Globe className="icon" /></a>
              <a href="#" className="icon-btn" aria-label="Feedback"><MessageSquare className="icon" /></a>
              <a href="#" className="icon-btn" aria-label="Share"><Share2 className="icon" /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/directory">Directory</Link>
            <Link to="/reviewer">Reviewer</Link>
            <Link to="/quiz">Practice Quiz</Link>
          </div>

          <div className="footer__col">
            <h4>Support</h4>
            <a href="#">Resources</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer__col">
            <h4>System Status</h4>
            <div className="footer__status">
              <span className="pulse-dot"></span>
              All systems operational
            </div>
            <div className="footer__time">
              <Clock className="icon" />
              <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+8</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Pathfinder. Created for the community.</p>
          <p>Practice questions are for study purposes and not official exam content.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

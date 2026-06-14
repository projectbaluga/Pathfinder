
import { Link } from 'react-router-dom';
import { Search, BookOpen, GraduationCap, ArrowUpRight, Terminal, MousePointer2 } from 'lucide-react';
import { certifications } from '../data/certifications';
import { useEffect, useState } from 'react';

const Home = () => {
  const totalCerts = certifications.length;
  const totalQuestions = certifications.reduce((acc, cert) => acc + cert.practiceQuestions.length, 0);
  const [text, setText] = useState('');
  const fullText = "certification journey";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero">
        <div className="grid-overlay"></div>
        <div className="container hero__inner">
          <div className="hero__badge reveal reveal--up is-visible">
            <span className="pulse-dot"></span>
            v2.0 Explorer is live
          </div>

          <h1 className="hero__title reveal reveal--up is-visible" style={{ transitionDelay: '100ms' }}>
            <span className="hero__title-line">Master your</span>
            <span className="hero__title-line">IT <em className="serif">Future</em><span className="hero__title-dot">.</span></span>
          </h1>

          <div className="hero__terminal reveal reveal--up is-visible" style={{ transitionDelay: '200ms' }}>
            <Terminal className="icon" />
            <span className="hero__terminal-prompt">~/pathfinder</span>
            <span className="rotator">{text}</span>
          </div>

          <p className="hero__statement reveal reveal--up is-visible" style={{ transitionDelay: '300ms' }}>
            Your all-in-one hub for <em className="serif">professional</em> IT certifications. Study, practice, and conquer your career goals.
          </p>

          <div className="hero__cta reveal reveal--up is-visible" style={{ transitionDelay: '400ms' }}>
            <Link to="/directory" className="btn btn--primary btn--lg">
              Explore Directory
              <ArrowUpRight className="icon" />
            </Link>
            <Link to="/quiz" className="btn btn--ghost btn--lg">
              Start Quiz
            </Link>
          </div>

          <ul className="hero__stats reveal reveal--up is-visible" style={{ transitionDelay: '500ms' }}>
            <li>
              <span className="stat__num">{totalCerts}</span>
              <span className="stat__label">Certifications</span>
            </li>
            <li>
              <span className="stat__num">{totalQuestions}</span>
              <span className="stat__label">Questions</span>
            </li>
            <li>
              <span className="stat__num">100%</span>
              <span className="stat__label">Free Access</span>
            </li>
          </ul>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* Features - Bento Grid Style */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="section-head__meta">
              <span className="section-head__num">01</span>
              <span className="section-head__label">Features</span>
            </div>
          </div>

          <div className="bento">
            <div className="bento__card bento__card--wide spot">
              <div className="bento__icon">
                <Search className="icon" />
              </div>
              <h3 className="font-display">Certification Directory</h3>
              <p>
                Comprehensive database of IT certifications. Compare costs, requirements, and job market demand to find your next step.
              </p>
              <ul className="chips">
                <li>CompTIA</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Cisco</li>
                <li>Security+</li>
              </ul>
              <Link to="/directory" className="btn btn--sm btn--primary mt-6">
                Browse All <ArrowUpRight className="icon" />
              </Link>
            </div>

            <div className="bento__card spot">
              <div className="bento__icon">
                <BookOpen className="icon" />
              </div>
              <h3 className="font-display">Reviewer</h3>
              <p>Summarized study guides for quick revisions.</p>
              <Link to="/reviewer" className="btn btn--sm btn--ghost mt-auto">
                Study <ArrowUpRight className="icon" />
              </Link>
            </div>

            <div className="bento__card spot">
              <div className="bento__icon">
                <GraduationCap className="icon" />
              </div>
              <h3 className="font-display">Quiz Engine</h3>
              <p>Practice with real-world scenarios.</p>
              <Link to="/quiz" className="btn btn--sm btn--ghost mt-auto">
                Test Me <ArrowUpRight className="icon" />
              </Link>
            </div>

            <div className="bento__card bento__card--half spot">
              <div className="bento__icon">
                <Terminal className="icon" />
              </div>
              <h3 className="font-display">Exam Simulations</h3>
              <p>Timed practice exams that mimic the real testing environment, helping you build stamina and confidence.</p>
            </div>

            <div className="bento__card bento__card--half spot">
              <div className="bento__icon">
                <MousePointer2 className="icon" />
              </div>
              <h3 className="font-display">Interactive Learning</h3>
              <p>Dynamic feedback system that explains why answers are correct or incorrect, ensuring deep conceptual understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-head__title">
            Unlock your <em className="serif">full potential</em> in the technology landscape.
          </h2>
          <p className="about__intro max-w-3xl mx-auto mt-6 text-2">
            Pathfinder is designed to bridge the gap between learning and certification. We provide the tools, you provide the dedication. Together, we build the future of IT.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

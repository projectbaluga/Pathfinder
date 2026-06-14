
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (isFinePointer) {
      document.documentElement.classList.add('has-cursor');

      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      const ring = document.createElement('div');
      ring.className = 'cursor-ring';

      document.body.appendChild(dot);
      document.body.appendChild(ring);

      const moveCursor = (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;

        // Ring follows with a slight delay or different easing via transition in CSS
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      };

      const handleMouseDown = () => ring.classList.add('is-active');
      const handleMouseUp = () => ring.classList.remove('is-active');

      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        dot.remove();
        ring.remove();
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Film Grain */}
      <div className="grain"></div>

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollWidth}%` }}
      ></div>

      <Navbar />

      <main className="flex-grow relative">
        {/* Background Aurora Effects for entire app */}
        <div className="hero__bg overflow-hidden opacity-20 fixed inset-0 pointer-events-none">
          <div className="aurora aurora--1"></div>
          <div className="aurora aurora--2"></div>
          <div className="aurora aurora--3"></div>
        </div>

        <div className="relative z-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

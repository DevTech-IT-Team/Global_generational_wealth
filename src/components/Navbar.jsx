import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ChevronRight, BookOpen } from 'lucide-react';

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing & Packages', path: '/pricing' },
    // { name: 'Ebooks & Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/80' 
        : 'bg-black/60 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Corporate Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/Modern Geometric Head Logo.png" 
                alt="Global Generational Wealth" 
                className="h-11 w-11 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-yellow-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                GLOBAL <span className="text-[#D4AF37]">GENERATIONAL</span> WEALTH
              </div>
              <p className="text-[9px] text-gray-400 tracking-[0.25em] font-semibold uppercase">
                Corporate Credit & Wealth Advisory
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-bold tracking-wider uppercase transition-colors duration-200 py-1 border-b-2 ${
                  isActive(item.path)
                    ? 'text-[#D4AF37] border-[#D4AF37]'
                    : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Prominent SCHEDULE A MEETING Button */}
            <a
              href={MEETING_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="schedule-meeting-nav-btn"
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black shrink-0" />
              <span>Schedule a Meeting</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={MEETING_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#D4AF37] text-black font-bold text-xs rounded-md flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#D4AF37] p-2 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-base font-bold tracking-wide transition-colors ${
                  isActive(item.path) ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-zinc-800">
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-sm uppercase tracking-wider text-center rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Meeting (30 Min)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
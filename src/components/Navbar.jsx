import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CreditCard, PieChart, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/Modern Geometric Head Logo.png" 
                alt="Global Generational Wealth" 
                className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-yellow-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white leading-none">
                GLOBAL <span className="text-yellow-500">GENERATIONAL</span> WEALTH
              </h1>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] font-bold uppercase mt-1">Financial Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-bold text-gray-300 hover:text-yellow-500 transition-colors uppercase tracking-widest">
              Home
            </Link>
            <Link to="/about" className="text-sm font-bold text-gray-300 hover:text-yellow-500 transition-colors uppercase tracking-widest">
              About
            </Link>
            <Link to="/services" className="text-sm font-bold text-gray-300 hover:text-yellow-500 transition-colors uppercase tracking-widest">
              Services
            </Link>
            
            <Link
              to="/contact"
              className="px-6 py-2 bg-yellow-500 text-black font-black text-sm rounded-lg hover:bg-yellow-400 Transition-all duration-300 shadow-lg shadow-yellow-500/20 flex items-center gap-2"
            >
              Book Free Consultation
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-gray-800 animate-fadeIn">
          <div className="px-4 py-8 space-y-6">
            <Link 
              to="/" 
              className="block text-xl font-bold text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-xl font-bold text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-xl font-bold text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block w-full py-4 bg-yellow-500 text-black font-black text-center rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
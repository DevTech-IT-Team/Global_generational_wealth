import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/company/global-generational-wealth/',
  facebook: 'https://www.facebook.com/profile.php?id=61590009347404',
  instagram: 'https://www.instagram.com/globalgenerationalwealth/'
};

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800/80 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Clean Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Socials */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/Modern Geometric Head Logo.png" 
                alt="Global Generational Wealth" 
                className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <h4 className="text-base font-black tracking-tight text-white leading-tight">
                  GLOBAL <span className="text-[#D4AF37]">GENERATIONAL</span> WEALTH
                </h4>
                <p className="text-[10px] text-zinc-500 tracking-[0.2em] font-semibold uppercase">
                  Corporate Advisory Firm
                </p>
              </div>
            </Link>

            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              Empowering business entities with commercial credit infrastructure, asset protection structures, and strategic funding.
            </p>

            {/* Clean Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Clean Links Column: Company */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Firm & Team</Link>
              </li>
              {/* <li>
                <Link to="/resources" className="hover:text-[#D4AF37] transition-colors">Ebooks & Resources</Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Clean Links Column: Packages */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-4">
              Packages
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Foundation ($999)</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Presence ($2,222)</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Management Package</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Compare Packages</Link>
              </li>
            </ul>
          </div>

          {/* Clean Links Column: Quick Actions */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-4">
              Connect
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a 
                  href={MEETING_CALENDAR_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                >
                  Schedule a Meeting
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="mailto:service@globalgenerationalwealth.net" className="hover:text-white transition-colors">
                  Client Support Desk
                </a>
              </li>
              <li>
                <a href="tel:+18886876829" className="hover:text-white transition-colors">
                  (888) 687-6829
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Seattle, WA 98104</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Divider & Bottom Bar with Direct Page Links */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Global Generational Wealth. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="hover:text-zinc-300 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
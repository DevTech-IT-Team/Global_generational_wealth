import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

export default function CTA() {
  return (
    <section className="relative bg-transparent overflow-hidden py-12 sm:py-16" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Advisory Access
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
              Build Your <br /> 
              <span className="text-[#D4AF37] italic">Corporate Capital</span> Today.
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              Take the first step toward commercial credit dominance and institutional funding. Schedule a 30-minute introductory meeting with our senior advisory desk.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-schedule-meeting-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Schedule a Meeting (30 Min)</span>
              </a>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900/90 border border-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors"
              >
                <span>View Packages</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image and Blend Layer */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-3/5 z-10 pointer-events-none">
        <div className="relative h-full w-full">
          {/* Main Image */}
          <img 
            src="/CTA.jpg" 
            alt="Strategic Corporate Growth" 
            className="h-full w-full object-cover object-center lg:object-right opacity-90"
          />
          
          {/* Vertical Blend (Left to Right) */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          
          {/* Subtle Horizontal Blends */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
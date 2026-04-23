import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative bg-transparent overflow-hidden py-8 sm:py-12" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            

            {/* Headline */}
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight mb-6">
              Start Building Your <br /> 
              <span className="text-[#FFBF00] italic">Financial Future</span> Today.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Take the first step towards credit mastery and business funding. 
              The outcome is internal capability: systems that scale performance.
            </p>

            {/* Button */}
            <a 
              href="/contact"
              className="inline-flex items-center gap-6 px-8 py-4 bg-[#d4ae16] text-white font-bold rounded-xl hover:bg-[#FFBF00] transition-all duration-300 group shadow-lg shadow-[#b38b59]/10"
            >
              <span>Book a Free Strategy Call</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Image and Blend Layer */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-3/5 z-10 pointer-events-none">
        <div className="relative h-full w-full">
          {/* Main Image */}
          <img 
            src="/CTA.jpg" 
            alt="Strategic Growth" 
            className="h-full w-full object-cover object-center lg:object-right opacity-100"
          />
          
          {/* Vertical Blend (Left to Right) - Softened to make image clearer */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          
          {/* Subtle Horizontal Blends */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
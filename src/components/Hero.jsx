import React from 'react';
import { Shield, TrendingUp, Landmark } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Financial Success" 
          className="w-full h-full object-cover"
        />
        {/* Lighter Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Soft Graduate for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mt-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium animate-fadeIn">
            <Shield className="w-4 h-4" />
            <span>Secure Your Financial Future</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fadeInUp drop-shadow-2xl">
            Build Credit. <span className="text-yellow-500">Access Funding.</span><br />
            Grow Your Financial Future.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Learn how to improve your credit profile and unlock business funding opportunities with proven, step-by-step strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <a
              href="#get-started"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
            >
              Get Started
              <TrendingUp className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <Landmark className="w-5 h-5" />
            </a>
          </div>

          {/* Stats/Trust Bar */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">10k+</span>
              <span className="text-sm text-gray-500">Users Helped</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">$50M+</span>
              <span className="text-sm text-gray-500">Funding Secured</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">95%</span>
              <span className="text-sm text-gray-500">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-sm text-gray-500">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
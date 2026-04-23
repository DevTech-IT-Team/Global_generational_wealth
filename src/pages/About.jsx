import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';
import { Target, Users, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="app bg-black min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-gray-950 to-black text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Empowering Your <span className="text-yellow-500">Financial Independence</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Global Generational Wealth is dedicated to providing individuals and business owners with the education, strategies, and tools needed to build a secure financial future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Our mission is to simplify the complexities of the credit and funding landscape. We believe that everyone deserves access to the knowledge and resources required to improve their financial standing and access capital for growth.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                    <Target className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">Clear Strategy</h3>
                    <p className="text-gray-500 text-sm">Actionable roadmaps designed for your specific goals.</p>
                  </div>
                  <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
                    <ShieldCheck className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">Trusted Advice</h3>
                    <p className="text-gray-500 text-sm">Professional guidance backed by real-world experience.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-3xl bg-gray-900 border border-gray-800 overflow-hidden relative group">
                  <img 
                    src="/Accredited leadership pathways that actually work.jpg" 
                    alt="Our Team" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-3">
                      <Award className="w-10 h-10 text-yellow-500" />
                      <div>
                        <p className="text-white font-bold text-xl">Proven Success</p>
                        <p className="text-gray-400 text-sm">Empowering clients since 2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 rounded-3xl border border-gray-800 p-8 md:p-16 mb-24">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">What Sets Us Apart</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    "Proven credit improvement methodologies",
                    "No personal guarantee business funding strategies",
                    "Comprehensive EIN-linked credit building",
                    "Expert navigational support throughout the process",
                    "Deep insights into lender underwriting standards",
                    "Advanced business compliance and fundability reviews"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      </div>
                      <p className="text-gray-300 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <CTA />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
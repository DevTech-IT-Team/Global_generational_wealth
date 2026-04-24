import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Shield, 
  FileText, 
  Globe, 
  Phone, 
  Landmark, 
  Hash, 
  Users, 
  CheckCircle2, 
  Gavel, 
  BadgeCheck, 
  Briefcase,
  Building2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const membershipFeatures = [
  { title: 'Exclusive Memberships', desc: 'Core program and CREDIXOR access for 1 year.', icon: BadgeCheck },
  { title: 'Private Platforms', desc: 'Meetings, lectures, and specialized education.', icon: Globe },
  { title: 'Banking Coaching', desc: 'Open accounts via private Trust Instruments.', icon: Landmark }
];

const businessFeatures = [
  { title: 'Common-Law Entity', desc: 'UBOT structure based on American Jurisprudence.', icon: Gavel },
  { title: 'Digital Presence', desc: 'EIN, personal domain, website, and 800 line.', icon: FileText },
  { title: 'Operational Fortress', desc: 'Professional address and DUNS credit profile.', icon: Building2 }
];

export default function PricingPage() {
  return (
    <div className="bg-black min-h-screen text-[#1a1a1a] font-serif selection:bg-[#c5a059] selection:text-white">
      <Navbar />

      {/* Main Container with Background Image */}
      <section 
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/pricing_bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section - Positioned at the top with better visibility */}
          <div className="text-center mb-12 border-b-2 border-[#c5a059]/20 pb-8 bg-white/15 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
            <h1 className="text-4xl md:text-7xl font-black text-black leading-tight tracking-tighter uppercase mb-2 drop-shadow-sm">
              The $3333 Mastery Package
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#c5a059] tracking-[0.2em] uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
              Build Your Private Financial Fortress
            </h2>
          </div>

          {/* Main Grid: Left Column | Center (Empty Space for BG Image) | Right Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pt-10">
            
            {/* Left Column: Membership & Knowledge */}
            <div className="lg:col-span-4 space-y-10 lg:pt-20">
              <div className="border-l-4 border-[#c5a059] pl-6 py-2 bg-white/10 backdrop-blur-sm rounded-r-lg">
                <h3 className="text-lg font-black uppercase tracking-widest mb-1">Membership & Knowledge</h3>
              </div>

              <div className="space-y-6">
                {membershipFeatures.map((item, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#c5a059]/10 shadow-sm transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(197,160,89,0.2)] cursor-default group">
                    <h4 className="text-base font-black mb-1 flex items-center gap-2 group-hover:text-[#c5a059] transition-colors">
                      <item.icon className="w-5 h-5 text-[#c5a059] group-hover:scale-125 transition-transform" />
                      {item.title}
                    </h4>
                    <p className="text-[#333] text-xs leading-relaxed italic font-bold">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column: Empty space to let the Spartan Background show through */}
            <div className="hidden lg:block lg:col-span-4 h-96"></div>

            {/* Right Column: Business Infrastructure */}
            <div className="lg:col-span-4 space-y-10 text-right lg:pt-20">
              <div className="border-r-4 border-[#c5a059] pr-6 py-2 bg-white/10 backdrop-blur-sm rounded-l-lg">
                <h3 className="text-lg font-black uppercase tracking-widest mb-1">Business Infrastructure</h3>
              </div>

              <div className="space-y-6">
                {businessFeatures.map((item, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#c5a059]/10 shadow-sm transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(197,160,89,0.2)] cursor-default group text-right">
                    <h4 className="text-base font-black mb-1 flex flex-row-reverse items-center gap-2 group-hover:text-[#c5a059] transition-colors">
                      <item.icon className="w-5 h-5 text-[#c5a059] group-hover:scale-125 transition-transform" />
                      {item.title}
                    </h4>
                    <p className="text-[#333] text-xs leading-relaxed italic font-bold text-right">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid Features - Styled to look like the footer of the image */}
          <div className="bg-black p-10 md:p-12 rounded-3xl border-2 border-[#c5a059] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 relative z-10">
              {[
                { title: 'Business Trust (UBOT)', icon: Shield, sub: '(Advanced Structuring)' },
                { title: 'EIN SET UP', icon: FileText, sub: '(Private tax identity)' },
                { title: 'Domain & Website', icon: Globe, sub: '(Professional presence)' },
                { title: '800 Number', icon: Phone, sub: '(Dedicated line setup)' },
                { title: 'Banking Coaching', icon: Briefcase, sub: '(Legacy setup)' },
                { title: 'Business Address', icon: Building2, sub: '(Professional fortress)' },
                { title: 'DUNS Number', icon: CheckCircle2, sub: '(Credit foundation)' },
                { title: 'Exclusive Access', icon: Users, sub: '(Meetings & software)' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-default">
                  <item.icon className="w-10 h-10 text-[#c5a059] mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                  <h5 className="text-white text-xs font-black uppercase tracking-wider mb-1 group-hover:text-[#c5a059] transition-colors">{item.title}</h5>
                  <span className="text-white/40 text-[9px] font-bold">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Buttons */}
          <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link 
              to="/contact" 
              className="w-full sm:w-auto px-16 py-6 bg-black text-white font-black text-2xl rounded-2xl hover:bg-[#c5a059] hover:text-black transition-all duration-300 border-2 border-[#c5a059] shadow-2xl hover:-translate-y-1 active:translate-y-0"
             >
               JOIN THE MASTERY
             </Link>
             <Link 
              to="/contact" 
              className="w-full sm:w-auto px-16 py-6 border-2 border-black/20 text-black font-black text-2xl rounded-2xl hover:bg-black/5 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
             >
               STRATEGY CALL
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

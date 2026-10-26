import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Calendar, 
  Shield, 
  Sparkles, 
  ChevronRight, 
  Building2, 
  FileCheck2, 
  Lock, 
  Clock, 
  Globe2, 
  PhoneCall, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

export default function Pricing() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            Transparent Corporate Advisory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-serif">
            Advisory Packages & Pricing
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Engineered packages built to establish corporate credibility, streamline bureau reporting, and secure non-recourse commercial funding.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Card 1: Foundation Package ($999) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Tier 1 Compliance</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase">
                  Launchpad
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Foundation Package</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Essential corporate credit setup and commercial bureau registration for emerging enterprises.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-zinc-800">
                <span className="text-5xl font-black text-white">$999</span>
                <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">/ one-time</span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3.5 text-xs text-zinc-300 mb-8">
                <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-2">
                  Key Deliverables & Benefits:
                </div>
                {[
                  'Comprehensive Business Entity Compliance Audit',
                  'Dun & Bradstreet (DUNS) Number Setup & Registration',
                  'Experian Commercial & Equifax Business Filing Verification',
                  'Establish 5+ Tier-1 Vendor Credit Accounts (Net-30)',
                  'Target PAYDEX 80+ Commercial Score Blueprint',
                  'Corporate Identity & Banking Guidelines Review',
                  '1-on-1 Strategy Session with Senior Credit Consultant',
                  'Lifetime Access to Corporate Education Guides & Templates'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-900">
              <Link
                to="/contact?package=foundation"
                className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 text-center block border border-zinc-700"
              >
                Inquire Foundation Package
              </Link>
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-zinc-400 hover:text-[#D4AF37] text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Schedule 30-Min Strategy Call
              </a>
            </div>
          </div>

          {/* Card 2: Presence Package ($2,222) - Featured */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col justify-between relative transform lg:-translate-y-2 group">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">
              Most Selected Corporate Solution
            </div>

            <div>
              <div className="flex justify-between items-center mb-6 pt-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Full Digital & Credit Suite</span>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase">
                  Institutional Ready
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Presence Package</h3>
              <p className="text-zinc-300 text-xs leading-relaxed mb-6">
                Complete commercial market presence, Tier-2/Tier-3 credit facilities, and multi-tier bank fundability.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-zinc-800">
                <span className="text-5xl font-black text-white">$2,222</span>
                <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">/ one-time</span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3.5 text-xs text-zinc-200 mb-8">
                <div className="font-bold text-[#D4AF37] text-[11px] uppercase tracking-wider mb-2">
                  Everything in Foundation, PLUS:
                </div>
                {[
                  'Professional Corporate Web Presence & Modern Landing Page',
                  'Custom Commercial Domain & Professional Email Setup',
                  'Dedicated 800 Toll-Free Business Telephony System',
                  'National 411 Directory Listing & Directory Assistance Verification',
                  'Commercial Physical Address & Registered Agent Compliance',
                  'Tier 2 & Tier 3 Revolving Corporate Accounts Setup',
                  'Unsecured 0% APR Business Credit Line Preparation',
                  'Business Trust (UBOT) Structuring Advisory & Asset Shielding',
                  'Bank Rating Optimization (Target Low-5 to Mid-5 Balance)',
                  'Priority Advisory Support & Bi-Weekly Progress Reviews'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <Link
                to="/contact?package=presence"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 text-center block shadow-lg"
              >
                Inquire Presence Package
              </Link>
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-[#D4AF37] hover:text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Schedule 30-Min Strategy Call
              </a>
            </div>
          </div>

          {/* Card 3: Management Package (Excluded from Public Pricing) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between relative group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Private Client Group</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Confidential
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Management Package</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                End-to-end multi-entity portfolio management, active capital deployment, and legacy wealth governance.
              </p>

              {/* Price: Excluded from public pricing */}
              <div className="mb-8 pb-6 border-b border-zinc-800">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-1">Public Pricing Excluded</div>
                <div className="text-2xl font-black text-zinc-300">By Private Consultation</div>
                <p className="text-zinc-500 text-[11px] mt-1">Available via selective engagement & confidential evaluation.</p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3.5 text-xs text-zinc-400 mb-8">
                <div className="font-bold text-zinc-300 text-[11px] uppercase tracking-wider mb-2">
                  Scope of Private Engagement:
                </div>
                {[
                  'Bespoke Multi-Entity Corporate Holding Architecture',
                  'Dedicated Fractional Chief Credit Officer (CCO) Representation',
                  'Private Banking & High-Net-Worth Relationship Introduction',
                  'Custom UBOT Trust Indenture Execution & Trustee Protocols',
                  'Active Bureau Monitoring & Institutional Underwriting Defense',
                  'Continuous 0% APR Capital Optimization & Refinancing',
                  'Direct Executive Cell Access to Managing Partners'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-900">
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 text-center block border border-zinc-800 flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Request Private Consultation
              </a>
              <Link
                to="/contact?package=management"
                className="w-full py-2.5 text-zinc-500 hover:text-zinc-300 text-xs font-semibold text-center block transition-colors"
              >
                Submit Management Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* crediXor Platform Status Notice - In Development */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-lg font-bold text-white">crediXor Platform</h4>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-black uppercase tracking-wider">
                  In Development
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                crediXor is our proprietary automated credit intelligence & underwriting prediction engine. <strong>Currently in active private development</strong>. Not yet publicly available. Clients enrolled in our Foundation and Presence packages receive priority invitation to the private enterprise beta upon commercial release.
              </p>
            </div>
          </div>

          <Link
            to="/contact?interest=credixor_beta"
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-zinc-700 shrink-0 transition-colors"
          >
            Join Beta Waitlist
          </Link>
        </div>

      </div>
    </section>
  );
}

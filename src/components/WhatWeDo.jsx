import React from 'react';
import { ShieldCheck, TrendingUp, Landmark, Building2, CheckCircle2, ChevronRight, Layers, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    tag: "Commercial Credit",
    badge: "Tier 1-3 Setup",
    title: "Commercial Credit Architecture",
    description: "Establish robust, multi-tier corporate credit profiles with Dun & Bradstreet, Experian Commercial, and Equifax Business that stand completely independent of personal credit.",
    highlights: [
      "Dun & Bradstreet (DUNS) Registration",
      "5+ Tier-1 Vendor Accounts (Net-30)",
      "Target PAYDEX 80+ Credit Blueprint",
      "Experian & Equifax Commercial Files"
    ],
    linkText: "Foundation Package ($999)",
    linkUrl: "/pricing"
  },
  {
    tag: "Capital Access",
    badge: "0% APR Facilities",
    title: "Institutional Funding Roadmaps",
    description: "Secure $50,000 to $250,000+ in zero-interest introductory capital facilities and revolving lines without pledging personal guarantees or diluting corporate equity.",
    highlights: [
      "Low-5 to High-5 Bank Rating Strategy",
      "Automated Underwriting Compliance Check",
      "0% Introductory APR Extraction Protocols",
      "Multi-Lender Portfolio Matching"
    ],
    linkText: "Presence Package ($2,222)",
    linkUrl: "/pricing"
  },
  {
    tag: "Asset Protection",
    badge: "Private Common Law",
    title: "UBOT & Private Asset Fortresses",
    description: "Structure Unincorporated Business Organization Trusts (UBOT) to bifurcate legal ownership from beneficial enjoyment, shielding assets and eliminating probate delays.",
    highlights: [
      "Constitutional Contract Law Heritage",
      "Separation of Legal & Equitable Title",
      "Private Fiduciary Banking Documentation",
      "Generational Wealth Succession Plans"
    ],
    linkText: "Explore UBOT Advisory",
    linkUrl: "/about"
  },
  {
    tag: "Operational Presence",
    badge: "Lender-Grade Compliance",
    title: "Corporate Identity & Fundability",
    description: "Configure the critical 25-point digital and operational checklist demanded by automated underwriting algorithms before submitting credit applications.",
    highlights: [
      "Dedicated 800 Toll-Free Telephony",
      "National 411 Directory Assistance Filing",
      "Commercial Domain & Branded Email Setup",
      "Secretary of State & FinCEN BOI Alignment"
    ],
    linkText: "Explore Presence Package",
    linkUrl: "/pricing"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="what-we-do">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Core Advisory Capabilities
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight mb-4">
            Strategic Financial Solutions
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Four foundational pillars engineered to eliminate personal liability, establish institutional credibility, and unlock non-recourse capital.
          </p>
        </div>

        {/* Bento Grid: 4 Sorted, Clean Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-black border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>

              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                    {pillar.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Checklist of Deliverables */}
                <div className="space-y-2.5 pb-8 border-b border-zinc-900 text-xs text-zinc-300">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 flex items-center justify-between">
                <Link
                  to={pillar.linkUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest font-mono">
                  Pillar 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

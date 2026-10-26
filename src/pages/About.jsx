import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { MEETING_CALENDAR_URL } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Compass, 
  Layers, 
  LineChart, 
  Lock, 
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const leadershipRoles = [
  {
    role: "Commercial Credit Advisory",
    dept: "Underwriting & Bureau Relations",
    description: "Specializing in commercial credit bureau architecture (Dun & Bradstreet, Experian Commercial, Equifax Business) to construct tier-1 through tier-3 credit profiles that bypass personal guarantees.",
    metrics: "Tier 1-3 Multi-Bureau Specialization"
  },
  {
    role: "Corporate Entity & Trust Counsel",
    dept: "Fiduciary & Asset Protection",
    description: "Expert structuring of Unincorporated Business Organization Trusts (UBOTs) and private common-law holding structures to shield commercial assets and ensure clean generational transmission.",
    metrics: "UBOT & Private Jurisprudence"
  },
  {
    role: "Institutional Banking Relations",
    dept: "Capital Markets & Lending Facilities",
    description: "Liaising with commercial banks, credit unions, and alternative capital providers to optimize bank ratings and structure non-recourse 0% APR revolving corporate lines.",
    metrics: "Low-5 to High-5 Bank Optimization"
  },
  {
    role: "Client Experience & Concierge",
    dept: "Onboarding & Milestone Execution",
    description: "Dedicated account managers who guide each client through our step-by-step compliance checkpoints, ensuring frictionless document verification and swift bureau reporting.",
    metrics: "Dedicated 1-on-1 Fiduciary Oversight"
  }
];

const clientJourneyStages = [
  {
    step: "01",
    name: "Diagnostic Profile Audit",
    title: "Bureau & Compliance Reconnaissance",
    desc: "We perform an in-depth baseline evaluation of your entity, reviewing Secretary of State records, IRS tax documentation, commercial bureau files, and lender blacklist registries."
  },
  {
    step: "02",
    name: "Entity & Presence Alignment",
    title: "Institutional Fundability Setup",
    desc: "We configure your corporate digital footprint—commercial domain, branded telephony, 411 directory registration, physical compliance, and DUNS number initialization."
  },
  {
    step: "03",
    name: "Tiered Credit Acquisition",
    title: "Net-30 to Revolving Credit Lines",
    desc: "We establish 5+ Tier-1 vendor trade lines reporting prompt payment metrics, accelerating your PAYDEX score past 80 before unlocking Tier 2 and Tier 3 revolving commercial facilities."
  },
  {
    step: "04",
    name: "Capital & Wealth Fortress",
    title: "0% APR Deployment & Asset Shielding",
    desc: "We position your entity for $50K - $250K+ in zero-interest capital lines, while transitioning operating equity into private Common-Law Trusts (UBOT) for multi-generational security."
  }
];

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-20 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Identity & Firm Overview
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 font-serif leading-tight">
              About <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] bg-clip-text text-transparent">Our Firm</span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Global Generational Wealth is an institutional commercial credit advisory and asset structuring firm. We build corporate credit fortresses and sustainable wealth strategies for ambitious entrepreneurs, founders, and enterprises nationwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="about-schedule-meeting-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                Schedule 30-Min Strategy Call
              </a>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors"
              >
                Explore Advisory Packages
              </Link>
            </div>
          </div>
        </section>

        {/* Corporate Mission & Vision Split Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                Company Mission & Heritage
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-serif">
                Bridging Enterprise Ambition With Institutional Capital
              </h2>

              <p className="text-zinc-300 text-base leading-relaxed">
                Too many brilliant founders are held back by the misconception that business growth requires personal credit guarantees, risky debt, or sacrificing equity. Global Generational Wealth was established to rewrite that script.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                By instituting institutional-grade commercial compliance, separating personal liability from corporate entities, and mastering the algorithmic rulebooks of Dun & Bradstreet, Experian, and commercial underwriters, we position businesses to access high-limit funding on their own commercial merits.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <span className="text-3xl font-black text-[#D4AF37] block mb-1">0% APR</span>
                  <span className="text-xs text-zinc-400 font-medium">Revolving Corporate Capital Guidance</span>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <span className="text-3xl font-black text-[#D4AF37] block mb-1">UBOT</span>
                  <span className="text-xs text-zinc-400 font-medium">Private Common-Law Asset Structuring</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-2 rounded-3xl bg-gradient-to-b from-amber-500/30 via-zinc-800 to-transparent">
                <div className="aspect-[4/3] rounded-[1.4rem] bg-zinc-950 overflow-hidden relative group">
                  <img
                    src="/Accredited leadership pathways that actually work.jpg"
                    alt="Corporate Team Strategic Planning"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Governance</h3>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Every strategy we execute conforms rigorously with commercial lending regulations, FinCEN corporate transparency guidelines, and fiduciary best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Multidisciplinary Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
                <Users className="w-3.5 h-3.5" />
                Our Multidisciplinary Team
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
                Corporate Advisory Collective
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Global Generational Wealth combines decades of specialized experience across commercial credit underwriting, entity jurisprudence, and institutional banking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-[#D4AF37]">
                      <Briefcase className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                      {role.dept}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {role.role}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      {role.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900">
                    <span className="text-[11px] font-bold text-zinc-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {role.metrics}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* The 4-Stage Client Experience Roadmap */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto">
            
            <div className="p-8 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37] block mb-2">
                  The Client Experience
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-serif mb-4">
                  Our 4-Stage Execution Methodology
                </h2>
                <p className="text-zinc-400 text-sm">
                  From initial bureau reconnaissance to institutional capital deployment, our process is structured for measurable progress and total clarity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {clientJourneyStages.map((stage, idx) => (
                  <div key={idx} className="relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-850 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-[#D4AF37]/50 font-mono">
                        {stage.step}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                        {stage.name}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href={MEETING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  Schedule a Consultation on Your Entity
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* crediXor Platform Spotlight: In Development */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Technology Horizon • In Development
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                crediXor AI Underwriting Engine
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                crediXor is currently being developed as an internal analytical tool to accelerate risk-scoring predictions and commercial lender matches. <strong>It is not currently available as a commercial product.</strong>
              </p>
            </div>
            <Link
              to="/contact?interest=credixor_beta"
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-zinc-700 shrink-0 transition-colors"
            >
              Learn More & Join Waitlist
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
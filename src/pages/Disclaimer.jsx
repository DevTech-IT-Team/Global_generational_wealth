import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { MEETING_CALENDAR_URL } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ShieldAlert, Calendar, ArrowLeft, Clock, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  const lastUpdated = "October 26, 2026";

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Header Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#D4AF37] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Corporate Regulatory Statement
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight mb-4">
              Corporate & Regulatory Disclaimer
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span>Global Generational Wealth, LLC</span>
              <span>•</span>
              <span>Professional Advisory Disclosure</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-zinc-300 space-y-10 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-zinc-950 border border-amber-500/30 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                Important Notice To All Clients & Site Visitors
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Please read this Corporate & Regulatory Disclaimer carefully before engaging Global Generational Wealth, purchasing advisory packages (Foundation Package $999, Presence Package $2,222, Management Package), downloading publications, or scheduling consultations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                1. Educational & Strategic Business Consulting Only
              </h2>
              <p>
                Global Generational Wealth is an independent corporate consulting and education company. We provide strategic guidance, commercial bureau navigation (Dun & Bradstreet, Experian Commercial, Equifax Business), entity compliance blueprints, and educational frameworks designed to optimize business fundability.
              </p>
              <p>
                <strong>We are not a law firm, certified public accounting (CPA) firm, registered investment advisor (RIA), or licensed broker-dealer.</strong> None of the materials, presentations, discussions, or downloadable PDF guides provided through our website or staff should be construed as formal legal, accounting, tax, or investment advice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                2. Unincorporated Business Organization Trust (UBOT) Advisory
              </h2>
              <p>
                Information and guidance regarding Unincorporated Business Organization Trusts (UBOTs), common-law entities, and asset protection instruments are provided strictly for educational and organizational structuring purposes under American jurisprudence and private contract law principles.
              </p>
              <p>
                Asset structuring laws vary significantly by state and federal jurisdiction. Clients are strongly encouraged to have any trust indentures, operational agreements, and fiduciary instruments reviewed by independent legal and tax counsel licensed in their respective jurisdiction prior to execution.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                3. Independent Underwriting & Absence of Guarantees
              </h2>
              <p>
                Global Generational Wealth does not issue loans, credit cards, or lines of credit directly. All financing approvals, revolving credit limits, interest rates (including 0% introductory APR terms), and underwriting decisions are governed solely and independently by third-party banks, credit unions, and financial institutions.
              </p>
              <p>
                We do not guarantee that any client will be approved for any specific amount of capital or any specific credit score (e.g., PAYDEX 80+). Individual and corporate underwriting outcomes depend upon factors beyond our control, including bank depository balances, macro-economic conditions, business revenue, and bureau reporting timelines.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                4. crediXor Platform Status
              </h2>
              <p>
                crediXor is a proprietary credit analytics and underwriting prediction engine currently undergoing active internal development. It is not currently available as a commercial public software product. Mentions of crediXor across our site describe internal algorithmic roadmap capabilities under development for future enterprise deployment.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                5. Client Due Diligence & Discretion
              </h2>
              <p>
                Business credit acquisition, debt leverage, and capital management entail inherent financial and operational risks. You are solely responsible for conducting your own due diligence and making prudent financial decisions suitable for your enterprise.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-zinc-800 pb-2">
                6. Contact for Legal Clarifications
              </h2>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-1 text-xs sm:text-sm">
                <p><strong className="text-white">Global Generational Wealth, LLC</strong></p>
                <p>Compliance Desk: 600 1st Ave, Ste 102 - 2534, Seattle, WA 98104, USA</p>
                <p>Email: <a href="mailto:service@globalgenerationalwealth.net" className="text-[#D4AF37] hover:underline">service@globalgenerationalwealth.net</a></p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

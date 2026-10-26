import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Shield, 
  Calendar, 
  Check, 
  X, 
  Sparkles, 
  Lock, 
  Globe, 
  Phone, 
  Building2, 
  FileText, 
  Landmark, 
  Award, 
  ChevronRight, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

const comparisonFeatures = [
  { name: 'Commercial Entity & EIN Compliance Verification', foundation: true, presence: true, management: 'Custom' },
  { name: 'Dun & Bradstreet (DUNS) Number Registration', foundation: true, presence: true, management: 'Custom' },
  { name: 'Experian Commercial & Equifax Business Setup', foundation: true, presence: true, management: 'Custom' },
  { name: 'Tier 1 Net-30 Vendor Accounts (5+ Trade Lines)', foundation: true, presence: true, management: 'Custom' },
  { name: 'PAYDEX 80+ Target Credit Score Blueprint', foundation: true, presence: true, management: 'Custom' },
  { name: 'Professional Domain & Corporate Email Configuration', foundation: false, presence: true, management: 'Custom' },
  { name: 'High-Converting Business Website & Digital Presence', foundation: false, presence: true, management: 'Custom' },
  { name: 'Dedicated 800 Toll-Free Business Telephony System', foundation: false, presence: true, management: 'Custom' },
  { name: 'National 411 Directory Listing & Verification', foundation: false, presence: true, management: 'Custom' },
  { name: 'Physical Commercial Address & Registered Agent Audit', foundation: false, presence: true, management: 'Custom' },
  { name: 'Tier 2 & Tier 3 Revolving Corporate Credit Accounts', foundation: false, presence: true, management: 'Custom' },
  { name: '0% APR Unsecured Business Credit Acquisition Strategy', foundation: false, presence: true, management: 'Custom' },
  { name: 'UBOT Asset Protection & Private Trust Advisory', foundation: false, presence: true, management: 'Custom' },
  { name: 'Bank Rating Optimization (Low-5 to High-5 Balance)', foundation: false, presence: true, management: 'Custom' },
  { name: 'crediXor AI Platform Early Beta Access (In Development)', foundation: 'Priority', presence: 'Priority VIP', management: 'Private' },
  { name: 'Multi-Entity Holding & Fractional Chief Credit Officer', foundation: false, presence: false, management: true },
  { name: 'Active Institutional Underwriting Representation', foundation: false, presence: false, management: true },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('onetime');

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-20 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-yellow-500/5 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3.5 h-3.5" />
              Corporate Advisory & Structuring
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 font-serif leading-tight">
              Packages & <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] bg-clip-text text-transparent">Corporate Pricing</span>
            </h1>
            
            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Clear, transparent deliverables designed to turn your business into an institutional funding magnet. Choose the tier engineered for your operational maturity.
            </p>

            {/* Prominent SCHEDULE A MEETING Google Calendar CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-hero-schedule-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-sm uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                Schedule 30-Min Strategy Call
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-sm rounded-xl border border-zinc-700 transition-colors"
              >
                Inquire via Direct Form
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Foundation Package ($999) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Core Tier</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase">
                    Launchpad
                  </span>
                </div>

                <h2 className="text-3xl font-black text-white mb-2">Foundation Package</h2>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Ideal for emerging businesses establishing initial commercial credit profiles and compliance standards.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-zinc-800">
                  <span className="text-6xl font-black text-white">$999</span>
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">/ one-time investment</span>
                </div>

                {/* Benefits & Deliverables */}
                <div className="space-y-4 text-xs text-zinc-300 mb-8">
                  <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-2">
                    Package Benefits & Deliverables:
                  </div>
                  {[
                    'Full Commercial Credit & Bureau Baseline Audit',
                    'Secretary of State & EIN Compliance Reconciliation',
                    'Dun & Bradstreet (DUNS) Number Setup & Profile Initiation',
                    'Experian Commercial & Equifax Business Registry Setup',
                    'Establish 5+ Tier-1 Vendor Credit Lines (Net-30 Reporting)',
                    'PAYDEX Score 80+ Target Acceleration Framework',
                    'Commercial Banking Compliance & Titling Guidelines',
                    '1-on-1 Dedicated Strategy Session with Senior Credit Architect',
                    'Access to Master Checklist & Regulatory Guides'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-900">
                <Link
                  to="/contact?package=foundation"
                  className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 text-center block border border-zinc-700"
                >
                  Enroll in Foundation Package
                </Link>
                <a
                  href={MEETING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-zinc-400 hover:text-[#D4AF37] text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule Onboarding Call
                </a>
              </div>
            </div>

            {/* Presence Package ($2,222) - Featured */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.2)] flex flex-col justify-between relative transform lg:-translate-y-3">
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-[11px] uppercase tracking-widest rounded-full shadow-lg">
                Recommended For Maximum Funding
              </div>

              <div>
                <div className="flex justify-between items-center mb-6 pt-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Comprehensive Tier</span>
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase">
                    Enterprise Grade
                  </span>
                </div>

                <h2 className="text-3xl font-black text-white mb-2">Presence Package</h2>
                <p className="text-zinc-300 text-xs leading-relaxed mb-6">
                  Complete commercial digital presence, multi-tier credit building, and institutional bank fundability.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-zinc-800">
                  <span className="text-6xl font-black text-white">$2,222</span>
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">/ one-time investment</span>
                </div>

                {/* Benefits & Deliverables */}
                <div className="space-y-4 text-xs text-zinc-200 mb-8">
                  <div className="font-bold text-[#D4AF37] text-[11px] uppercase tracking-wider mb-2">
                    Everything in Foundation Package, PLUS:
                  </div>
                  {[
                    'Custom Commercial Domain & Branded Corporate Email Infrastructure',
                    'High-Conversion Corporate Website Framework & Landing Presence',
                    'Dedicated 800 Toll-Free Telephony & IVR Setup',
                    'National 411 Directory Listing & Directory Assistance Verification',
                    'Commercial Physical Address & Registered Agent Verification',
                    'Tier 2 & Tier 3 Revolving Corporate Credit Accounts Setup',
                    '0% APR Unsecured Business Credit Blueprint ($50K - $150K+)',
                    'UBOT & Private Trust Structuring Overview for Asset Shielding',
                    'Bank Rating Optimization (Target Low-5 to Mid-5 Average Daily Balance)',
                    'Priority Concierge Support with Bi-Weekly Milestone Audits'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-800">
                <Link
                  to="/contact?package=presence"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 text-center block shadow-lg"
                >
                  Enroll in Presence Package
                </Link>
                <a
                  href={MEETING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-[#D4AF37] hover:text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule 30-Min Strategy Call
                </a>
              </div>
            </div>

            {/* Management Package (Excluded from Public Pricing) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Private Advisory</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Private Retainer
                  </span>
                </div>

                <h2 className="text-3xl font-black text-white mb-2">Management Package</h2>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Executive wealth governance, multi-entity portfolio architecture, and fractional Chief Credit Officer leadership.
                </p>

                {/* Price: Excluded from public pricing */}
                <div className="mb-8 pb-6 border-b border-zinc-800">
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-500/90 mb-1">
                    Public Pricing Excluded
                  </div>
                  <div className="text-3xl font-black text-zinc-300">By Private Consultation</div>
                  <p className="text-zinc-500 text-[11px] mt-1.5">
                    Excluded from public pricing. Engagements are tailored exclusively upon confidential evaluation.
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 text-xs text-zinc-400 mb-8">
                  <div className="font-bold text-zinc-300 text-[11px] uppercase tracking-wider mb-2">
                    Scope of Private Management Engagement:
                  </div>
                  {[
                    'Bespoke Multi-Entity Corporate Holding Architecture',
                    'Fractional Chief Credit Officer (CCO) Representation',
                    'Private Banking & High-Net-Worth Commercial Introductions',
                    'Custom Common-Law Trust (UBOT) Indenture Execution',
                    'Continuous Underwriting Defense & Credit Bureau Monitoring',
                    'Strategic 0% APR Capital Extraction & Refinancing Rounds',
                    'Direct Executive Access & Confidential Fiduciary Oversight'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-900">
                <a
                  href={MEETING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 text-center block border border-zinc-800 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Request Private Consultation
                </a>
                <Link
                  to="/contact?package=management"
                  className="w-full py-2 text-zinc-500 hover:text-zinc-300 text-xs font-semibold text-center block transition-colors"
                >
                  Submit Confidential Inquiry
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* crediXor Platform Notice Banner - In Development */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Proprietary Technology Spotlight • In Development
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  crediXor Credit & Underwriting Intelligence Platform
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  crediXor is currently being engineered by our team as a next-generation platform for algorithmic loan matching, automated bank rating diagnostics, and real-time commercial credit monitoring. 
                </p>
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                  <strong>Notice:</strong> crediXor is actively <strong>in internal development</strong> and is not presented as an available public software product today. Clients enrolled in our Foundation or Presence packages will receive early beta invitations upon deployment.
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/contact?interest=credixor_beta"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg"
                >
                  Join crediXor Beta Waitlist
                </Link>
                <a
                  href={MEETING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-xl text-center border border-zinc-700 transition-colors"
                >
                  Discuss Platform Timeline
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-4xl font-black text-white font-serif mb-3">
                Deliverables Comparison Matrix
              </h3>
              <p className="text-zinc-400 text-sm">
                A granular breakdown of deliverables included in each package tier.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/60 text-xs uppercase tracking-wider">
                    <th className="p-5 text-zinc-300 font-bold">Service Deliverables</th>
                    <th className="p-5 text-center text-white font-black">
                      Foundation
                      <span className="block text-[#D4AF37] text-sm mt-0.5">$999</span>
                    </th>
                    <th className="p-5 text-center text-[#D4AF37] font-black bg-amber-500/5 border-x border-amber-500/20">
                      Presence
                      <span className="block text-white text-sm mt-0.5">$2,222</span>
                    </th>
                    <th className="p-5 text-center text-zinc-400 font-bold">
                      Management
                      <span className="block text-zinc-500 text-[11px] mt-0.5">Custom</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850 text-xs sm:text-sm">
                  {comparisonFeatures.map((item, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="p-4 sm:p-5 text-zinc-300 font-medium">{item.name}</td>
                      <td className="p-4 sm:p-5 text-center">
                        {typeof item.foundation === 'boolean' ? (
                          item.foundation ? (
                            <Check className="w-5 h-5 text-[#D4AF37] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-[11px] text-zinc-400 font-semibold">{item.foundation}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center bg-amber-500/5 border-x border-amber-500/20">
                        {typeof item.presence === 'boolean' ? (
                          item.presence ? (
                            <Check className="w-5 h-5 text-[#D4AF37] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-[11px] text-[#D4AF37] font-bold">{item.presence}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {typeof item.management === 'boolean' ? (
                          item.management ? (
                            <Check className="w-5 h-5 text-zinc-400 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-[11px] text-amber-400 font-semibold">{item.management}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-zinc-400 text-sm">
                Have questions before selecting an advisory package?
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How does the Foundation Package differ from the Presence Package?",
                  a: "The Foundation Package ($999) establishes your foundational commercial bureau profiles (D&B, Experian, Equifax) and initial 5+ Net-30 accounts. The Presence Package ($2,222) provides a complete operational presence (commercial website, custom domain email, 800 toll-free phone, 411 directory registration, address compliance) plus Tier 2/3 revolving credit accounts and 0% APR capital roadmaps."
                },
                {
                  q: "Why is the Management Package excluded from public pricing?",
                  a: "The Management Package is designed for complex, multi-entity corporate structures and high-capital enterprises. Because each engagement requires custom underwriting audits, asset protection trust (UBOT) execution, and dedicated fractional CCO oversight, terms are determined upon a confidential consultation."
                },
                {
                  q: "What is the status of the crediXor platform?",
                  a: "crediXor is our proprietary automated credit intelligence engine currently in active internal development. It is not currently available for public commercial purchase. Clients who enroll in our corporate advisory programs will receive priority early access to the private beta once released."
                },
                {
                  q: "Can I schedule a meeting before paying?",
                  a: "Yes. We encourage all prospective clients to book a free 30-minute introductory meeting with our advisory team to discuss their specific entity needs and ensure the best package fit."
                }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Bottom Schedule Meeting CTA Bar */}
            <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-amber-500/30">
              <h4 className="text-xl font-bold text-white mb-2">Still deciding on the right package?</h4>
              <p className="text-zinc-400 text-sm mb-6">
                Book a 30-minute introductory call directly with our senior corporate advisory desk.
              </p>
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Schedule 30-Minute Meeting
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

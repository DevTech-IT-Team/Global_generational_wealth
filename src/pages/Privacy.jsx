import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { MEETING_CALENDAR_URL } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Shield, Calendar, ArrowLeft, Lock, Clock, FileText, CheckCircle2, Eye, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
              <Lock className="w-3.5 h-3.5" />
              Privacy & Data Protection Protocol
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight mb-4">
              Privacy Policy
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span>Global Generational Wealth, LLC</span>
              <span>•</span>
              <span>CCPA, GDPR & Washington Privacy Compliant</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-zinc-300 space-y-12 text-sm sm:text-base leading-relaxed">
            
            {/* Quick Summary Alert */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-amber-500/30 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                Our Fiduciary Privacy Commitment
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Global Generational Wealth ("Company", "we", "us", or "our") is dedicated to safeguarding the privacy, confidentiality, and data sovereignty of our clients. We operate under strict corporate non-disclosure standards: <strong>we do not sell, rent, monetize, or trade your personal or business data</strong> to third-party brokers or advertisers.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                1. Information We Collect
              </h2>
              <p>
                In order to deliver our corporate advisory services, fulfill resource downloads, and schedule strategic consultations, we collect information across the following categories:
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-1">
                  <span className="font-bold text-white block">A. Information You Voluntarily Provide:</span>
                  <p className="text-zinc-400">
                    • <strong>Contact Details:</strong> Full name, corporate email address, optional phone number, and physical commercial address.<br />
                    • <strong>Corporate Inquiries:</strong> Service interest preferences (e.g., Foundation Package $999, Presence Package $2,222, Private Management Retainer), and narrative descriptions of your entity goals.<br />
                    • <strong>Meeting Scheduling Data:</strong> Appointment times, meeting agenda notes, and video conference contact data provided through our integrated Google Calendar system.<br />
                    • <strong>Resource Downloads:</strong> Download requests for our PDF publications (*Corporate Credit Blueprint*, *UBOT Handbook*, *Fundability Audit*).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-1">
                  <span className="font-bold text-white block">B. Information Collected Automatically:</span>
                  <p className="text-zinc-400">
                    • <strong>Device & Telemetry Data:</strong> IP address, browser type, operating system, device identifiers, referring URLs, and page viewing timestamps for fraud prevention and performance optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information solely for legitimate commercial advisory and operational purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
                <li>Facilitating and delivering contracted advisory packages (Foundation, Presence, Management).</li>
                <li>Conducting 30-minute introductory meetings scheduled via Google Calendar.</li>
                <li>Routing inquiry forms to our advisory desk at <strong className="text-zinc-200">service@globalgenerationalwealth.net</strong> and responding within 24 business hours.</li>
                <li>Delivering requested downloadable PDF ebooks, templates, and notified edition updates.</li>
                <li>Providing advance beta waitlist notices for our proprietary crediXor platform upon commercial readiness.</li>
                <li>Complying with applicable commercial law, financial record-keeping, and FinCEN transparency rules.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                3. Strict Non-Sale & Data Sharing Policy
              </h2>
              <p>
                <strong className="text-white">We never sell, rent, or lease your personal or commercial data to third-party data brokers, marketers, or lead generation aggregators.</strong>
              </p>
              <p>
                Information is only shared under strictly controlled circumstances with trusted infrastructure processors bound by contractual confidentiality:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
                <li><strong className="text-zinc-200">Google Calendar:</strong> To host and synchronize scheduled 30-minute introductory meetings.</li>
                <li><strong className="text-zinc-200">Web3Forms / Secure Routing:</strong> To securely relay website form inquiries directly to <code>service@globalgenerationalwealth.net</code>.</li>
                <li><strong className="text-zinc-200">Cloud Infrastructure (Vercel / AWS):</strong> Enterprise-grade hosting providers operating under SOC 2 and ISO 27001 data security compliance.</li>
                <li><strong className="text-zinc-200">Legal Authorities:</strong> Solely if required by subpoena, search warrant, or enforceable legal mandate.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                4. Data Security & Cryptographic Protection
              </h2>
              <p>
                Global Generational Wealth implements rigorous technical, administrative, and physical safeguards to protect your personal and corporate records against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                All communications between your browser and our servers are encrypted in transit using industry-standard Transport Layer Security (TLS 1.3 / SSL with 256-bit encryption). Access to client records is restricted strictly to authorized advisory personnel on a need-to-know basis under binding confidentiality covenants.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                5. Cookies & Operational Analytics
              </h2>
              <p>
                We use cookies and similar browser tracking technologies exclusively for functional site operation, session management, and aggregated traffic analytics (e.g., verifying page performance).
              </p>
              <p>
                We do not deploy invasive third-party cross-site advertising trackers. You can configure your browser to decline or delete cookies at any time; however, some interactive features (such as active session states) may be impaired.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                6. Your Privacy Rights (CCPA, GDPR & State Laws)
              </h2>
              <p>
                Depending on your location, you possess specific legal rights regarding your personal data under the California Consumer Privacy Act (CCPA), the EU General Data Protection Regulation (GDPR), and the Washington State Privacy Act:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
                <li><strong className="text-zinc-200">Right to Access:</strong> Request a copy of the specific personal data we maintain about you.</li>
                <li><strong className="text-zinc-200">Right to Rectification:</strong> Request correction of inaccurate or incomplete corporate records.</li>
                <li><strong className="text-zinc-200">Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal contact data, subject to statutory record-keeping retention requirements.</li>
                <li><strong className="text-zinc-200">Right to Opt-Out:</strong> Unsubscribe from non-essential educational newsletters or edition update emails at any time.</li>
              </ul>
              <p className="text-sm pt-2">
                To exercise any of these rights, email our Data Governance desk at <a href="mailto:service@globalgenerationalwealth.net" className="text-[#D4AF37] hover:underline font-bold">service@globalgenerationalwealth.net</a> with the subject line <em>"Privacy Rights Request"</em>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                7. Data Retention Schedule
              </h2>
              <p>
                We retain client consultation notes and engagement data for the duration of your advisory relationship, plus a statutory retention period of seven (7) years to comply with commercial tax, corporate record, and dispute-resolution requirements. Inactive prospect inquiry forms without active engagements are purged from active memory after twenty-four (24) months.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                8. Children's Privacy Notice
              </h2>
              <p>
                Our services are strictly directed to commercial businesses, adult founders, and individuals aged 18 and older. We do not knowingly collect or solicit personal data from minors under the age of 18. If we learn that personal data of a minor has been collected, it will be immediately expunged from our records.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                9. Policy Revisions & Updates
              </h2>
              <p>
                We reserve the right to revise this Privacy Policy periodically to reflect changes in our operational procedures, regulatory statutes, or technological integrations. The effective date at the top of this document indicates when changes were last implemented. Continued engagement with our website constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                10. Contacting Our Data Protection Officer
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data governance practices, please reach out directly:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-2 text-xs sm:text-sm">
                <p><strong className="text-white">Global Generational Wealth, LLC</strong></p>
                <p>Data Protection & Privacy Desk: 600 1st Ave, Ste 102 - 2534, Seattle, WA 98104, USA</p>
                <p>Official Email: <a href="mailto:service@globalgenerationalwealth.net" className="text-[#D4AF37] hover:underline">service@globalgenerationalwealth.net</a></p>
                <p>Toll-Free Phone: (888) 687-6829</p>
              </div>
            </div>

            {/* Schedule a Meeting Callout */}
            <div className="pt-8 text-center p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Want to discuss confidential advisory?</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Schedule a private 30-minute introductory meeting with our executive advisory desk.
              </p>
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4 text-black" />
                Schedule a Meeting (30 Min)
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

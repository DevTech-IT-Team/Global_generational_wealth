import React from 'react';
import Navbar from '../components/Navbar';
import Footer, { MEETING_CALENDAR_URL } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Shield, Calendar, ArrowLeft, Mail, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
              <FileText className="w-3.5 h-3.5" />
              Legal & Corporate Governance
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight mb-4">
              Terms & Conditions
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span>Global Generational Wealth, LLC</span>
              <span>•</span>
              <span>Governing Jurisdiction: Washington, USA</span>
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
                Executive Summary
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                By accessing this website, scheduling meetings, downloading our publications, or engaging Global Generational Wealth ("Company", "we", "us", or "our") for advisory packages (including our Foundation Package, Presence Package, or Private Management engagements), you agree to be bound by these Terms and Conditions. Please review them thoroughly before engaging our corporate advisory services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                1. Acceptance of Terms & Entity Representation
              </h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement between Global Generational Wealth and you, whether personally or on behalf of an entity you represent ("Client", "you"). If you are entering into these terms on behalf of a company, partnership, trust, or other legal entity, you represent and warrant that you possess the lawful legal authority to bind such entity to these provisions.
              </p>
              <p>
                If you do not agree with all of these Terms and Conditions, you are expressly prohibited from using this website, ordering advisory packages, accessing downloadable resources, or participating in strategic advisory consultations.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                2. Scope of Corporate Advisory & Consulting Services
              </h2>
              <p>
                Global Generational Wealth provides strategic business consulting, corporate credit infrastructure guidance, and commercial fundability optimization. Our scope of services includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
                <li>
                  <strong className="text-zinc-200">Foundation Package ($999):</strong> Guidance on entity compliance verification, Dun & Bradstreet (DUNS) number registration, commercial credit bureau filing procedures (Experian Commercial, Equifax Business), initial Tier-1 Net-30 vendor trade line establishment, and target PAYDEX score acceleration frameworks.
                </li>
                <li>
                  <strong className="text-zinc-200">Presence Package ($2,222):</strong> Everything in Foundation, plus guidance on corporate digital infrastructure (custom commercial domain, business email, website framework, dedicated 800 telephony, 411 national directory listing), Tier-2 and Tier-3 revolving commercial credit accounts, 0% APR business lines preparation, and bank rating optimization.
                </li>
                <li>
                  <strong className="text-zinc-200">Management Package (Private Consultation):</strong> Multi-entity holding architecture, fractional Chief Credit Officer (CCO) representation, and custom corporate trust governance provided under a separate written retainer agreement.
                </li>
                <li>
                  <strong className="text-zinc-200">crediXor Platform Notice:</strong> crediXor is our proprietary credit intelligence software engine actively in internal development. It is not currently sold as a standalone commercial software product. Enrolled clients receive priority invitations to private beta access upon commercial release.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                3. Non-Legal & Non-Accounting Regulatory Disclaimer
              </h2>
              <p>
                <strong className="text-[#D4AF37]">CRITICAL NOTICE:</strong> Global Generational Wealth is an independent corporate consulting and educational firm. We are NOT an accredited law firm, legal practice, certified public accountant (CPA) firm, investment advisory firm, or registered broker-dealer.
              </p>
              <p>
                No communication, consultation, document template, guide, or information provided through our website or staff constitutes formal legal, tax, securities, or accounting counsel. Information concerning Unincorporated Business Organization Trusts (UBOTs), common-law entities, and corporate structures is provided strictly for educational and strategic planning purposes under American contract law jurisprudence. You are advised to consult with an independent licensed attorney and CPA prior to executing any legal documents or organizational indentures.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                4. Independent Underwriting & No Approval Guarantees
              </h2>
              <p>
                While our methodologies are engineered according to institutional underwriting best practices, Global Generational Wealth does not and cannot guarantee specific credit line approvals, loan amounts, interest rates, or credit scores (such as PAYDEX, FICO SBSS, or Intelliscore).
              </p>
              <p>
                All lending facilities, lines of credit, and credit cards are approved or denied solely at the independent discretion of third-party banks, financial institutions, and credit bureaus based upon their independent risk metrics, market conditions, and regulatory compliance algorithms.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                5. Client Responsibilities & Truthful Disclosures
              </h2>
              <p>
                As a condition of receiving advisory services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
                <li>Provide accurate, complete, and truthful information regarding your entity's legal formation, tax identification numbers (EIN), and ownership structure.</li>
                <li>Refrain from utilizing synthetic identities, fabricated credit histories, or unauthorized personal data.</li>
                <li>Maintain all ongoing state annual report filings, registered agent fees, and mandatory FinCEN Beneficial Ownership Information (BOI) reporting.</li>
                <li>Make timely payments on all established vendor and revolving trade lines to preserve commercial bureau scoring integrity.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                6. Fees, Payment Terms & Refund Policy
              </h2>
              <p>
                All fees for advisory packages (such as the Foundation Package at $999 and Presence Package at $2,222) represent one-time investments for specialized strategic consulting time, proprietary roadmaps, vendor access lists, and intellectual property.
              </p>
              <p>
                Because proprietary educational materials, compliance checklists, and dedicated consultant hours are committed immediately upon engagement, <strong>all package fees are non-refundable once strategy delivery has commenced</strong>. In the event of an unavoidable onboarding conflict, credit toward future advisory services may be granted at the Company's sole discretion.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                7. Intellectual Property & License Grants
              </h2>
              <p>
                All content, downloadable PDF books and resources (including *The Corporate Credit & 0% APR Blueprint*, *UBOT & Private Trust Structuring Handbook*, *Commercial Lender Underwriting Decoded*, and *The 25-Point Business Fundability Audit*), site design, graphics, and trademarks are the exclusive property of Global Generational Wealth.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable, revocable license to download and print copies for your own internal corporate use only. You may not resell, redistribute, white-label, or publicly re-publish our materials without express written authorization.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                8. Confidentiality & Mutual Non-Disclosure
              </h2>
              <p>
                Both parties acknowledge that in the course of advisory engagements, confidential proprietary business information, financial profiles, and trade secrets may be exchanged. We maintain strict fiduciary confidentiality protocols and will never disclose your corporate data to unapproved third parties except as strictly required to execute vendor setups or comply with court orders.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                9. Limitation of Liability & Indemnification
              </h2>
              <p>
                To the fullest extent permitted by applicable law, in no event shall Global Generational Wealth, its officers, directors, consultants, or agents be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profits or business disruption.
              </p>
              <p>
                Our total liability to you for any cause whatsoever shall at all times be limited to the amount paid, if any, by you to the Company for the specific advisory package during the six (6) month period prior to the cause of action arising.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                10. Governing Law, Dispute Resolution & Arbitration
              </h2>
              <p>
                These Terms and Conditions and your use of our services are governed by and construed in accordance with the laws of the State of Washington, without regard to conflict of law principles.
              </p>
              <p>
                Any controversy, dispute, or claim arising out of or relating to these Terms or breach thereof shall be resolved through confidential binding arbitration in King County, Washington, in accordance with the Commercial Arbitration Rules of the American Arbitration Association (AAA).
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                11. Contact & Legal Inquiries
              </h2>
              <p>
                If you have questions, inquiries, or notices regarding these Terms & Conditions, please contact our legal desk:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-2 text-xs sm:text-sm">
                <p><strong className="text-white">Global Generational Wealth, LLC</strong></p>
                <p>Corporate Headquarters: 600 1st Ave, Ste 102 - 2534, Seattle, WA 98104, USA</p>
                <p>Email: <a href="mailto:service@globalgenerationalwealth.net" className="text-[#D4AF37] hover:underline">service@globalgenerationalwealth.net</a></p>
                <p>Telephone: (888) 687-6829</p>
              </div>
            </div>

            {/* Schedule a Meeting Callout */}
            <div className="pt-8 text-center p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Have questions about our advisory terms?</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Book a 30-minute introductory meeting with our corporate team to review terms and package scope.
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

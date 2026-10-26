import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { RESOURCES_DATA } from '../data/resources';
import { 
  Download, 
  Share2, 
  Calendar, 
  Check, 
  FileText, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Copy, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  Layers,
  Info
} from 'lucide-react';

export const MEETING_CALENDAR_URL = "https://calendar.app.google/94T74SFZmhARq4xt9";

export default function Resources() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedChangelog, setSelectedChangelog] = useState(null);

  const handleShareLink = (resource) => {
    const shareableUrl = `${window.location.origin}${resource.fileUrl}`;
    navigator.clipboard.writeText(shareableUrl).then(() => {
      setCopiedId(resource.id);
      setTimeout(() => setCopiedId(null), 3500);
    }).catch(() => {
      // Fallback
      prompt('Copy shareable download link:', shareableUrl);
    });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Executive Publications & Ebooks
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 font-serif">
              Corporate Books & <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] bg-clip-text text-transparent">Resources</span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Download our institutional playbooks, credit frameworks, and asset protection guides. All publications are released as downloadable PDFs with active versioning and shareable links.
            </p>

            {/* Edition & Versioning Notice Banner */}
            <div className="max-w-3xl mx-auto p-4 rounded-xl bg-zinc-950/80 border border-amber-500/30 flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-zinc-300">
                <span className="font-bold text-[#D4AF37]">Active Edition System:</span> All publications are maintained with edition control and updated automatically whenever commercial lending algorithms or credit bureau guidelines change.
              </div>
            </div>
          </div>
        </section>

        {/* Toast Notification when link is copied */}
        {copiedId && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-black border-2 border-[#D4AF37] shadow-2xl text-white flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <div className="text-xs font-bold text-white">Shareable Link Copied!</div>
              <div className="text-[11px] text-zinc-400">Direct PDF download URL copied to clipboard.</div>
            </div>
          </div>
        )}

        {/* Books & Resources Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES_DATA.map((res) => (
              <div
                key={res.id}
                id={res.id}
                className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between relative group shadow-xl"
              >
                <div>
                  {/* Category & Edition Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#D4AF37] text-[10px] font-black uppercase tracking-wider">
                      {res.category}
                    </span>

                    {/* Active Edition Tag */}
                    <button
                      onClick={() => setSelectedChangelog(res)}
                      className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider hover:bg-amber-500/20 transition-colors flex items-center gap-1.5"
                      title="View Edition Changelog"
                    >
                      <span>{res.edition}</span>
                      <Info className="w-3 h-3 text-[#D4AF37]" />
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                    {res.title}
                  </h2>
                  <p className="text-[#D4AF37] text-xs font-semibold mb-4">
                    {res.subtitle}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>

                  {/* Highlights */}
                  <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-850 mb-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                      Core Content Inside:
                    </span>
                    {res.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-900 text-center text-xs text-zinc-400 mb-6">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Format</span>
                      <span className="font-semibold text-zinc-200">PDF Document</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Pages</span>
                      <span className="font-semibold text-zinc-200">{res.pages}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Downloads</span>
                      <span className="font-semibold text-zinc-200">{res.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Download PDF & Shareable Download Link */}
                <div className="space-y-3 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Direct PDF Download Button */}
                    <a
                      href={res.fileUrl}
                      download={res.fileName}
                      className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-center"
                    >
                      <Download className="w-4 h-4 text-black" />
                      Download PDF
                    </a>

                    {/* Shareable Download Link Button */}
                    <button
                      onClick={() => handleShareLink(res)}
                      className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      {copiedId === res.id ? (
                        <>
                          <Check className="w-4 h-4 text-[#D4AF37]" />
                          <span>Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 text-[#D4AF37]" />
                          <span>Share Download Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] text-zinc-500">
                      Release: {res.releaseDate} • SHA-256 Verified Clean
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prominent Google Calendar Schedule Meeting Banner */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-amber-500/30 shadow-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              1-on-1 Strategic Consultation
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white font-serif">
              Want Personal Guidance on Implementing These Strategies?
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Book a direct 30-minute introductory meeting with our senior advisory desk. We will analyze your entity, review your credit baseline, and map out your optimal funding roadmap.
            </p>

            <div>
              <a
                href={MEETING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="resources-schedule-meeting-btn"
                className="inline-flex items-center gap-2.5 px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-sm uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-black" />
                Schedule a Meeting (30 Min)
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Changelog & Version Control Modal */}
      {selectedChangelog && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-2xl max-w-xl w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
              <div>
                <h4 className="text-lg font-bold text-white">{selectedChangelog.title}</h4>
                <span className="text-xs text-[#D4AF37] font-semibold">Active Edition: {selectedChangelog.edition}</span>
              </div>
              <button 
                onClick={() => setSelectedChangelog(null)}
                className="text-zinc-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 my-6 text-xs text-zinc-300">
              <p className="leading-relaxed">
                Our publications undergo continuous revisions to reflect updated underwriting standards, lender algorithm shifts, and corporate regulatory policies.
              </p>

              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block">
                  Edition History:
                </span>
                {selectedChangelog.changelog.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="font-bold text-amber-400 block mb-1">{item.version}</span>
                    <span className="text-zinc-400 text-xs">{item.notes}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
              <a
                href={selectedChangelog.fileUrl}
                download={selectedChangelog.fileName}
                className="px-5 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-lg"
              >
                Download This Edition
              </a>
              <button
                onClick={() => setSelectedChangelog(null)}
                className="px-4 py-2 text-zinc-400 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
}

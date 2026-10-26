import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer, { SOCIAL_LINKS, MEETING_CALENDAR_URL } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get('package');
  const preselectedInterest = searchParams.get('interest');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Optional phone number
    serviceInterest: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set preselected service interest from URL
  useEffect(() => {
    if (preselectedPackage === 'foundation') {
      setFormData(prev => ({ ...prev, serviceInterest: 'Foundation Package ($999)' }));
    } else if (preselectedPackage === 'presence') {
      setFormData(prev => ({ ...prev, serviceInterest: 'Presence Package ($2,222)' }));
    } else if (preselectedPackage === 'management') {
      setFormData(prev => ({ ...prev, serviceInterest: 'Management Package (Private Retainer)' }));
    } else if (preselectedInterest === 'credixor_beta') {
      setFormData(prev => ({ ...prev, serviceInterest: 'crediXor Platform Beta Waitlist' }));
    }
  }, [preselectedPackage, preselectedInterest]);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
  const hubspotPortalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID || '';
  const hubspotFormId = import.meta.env.VITE_HUBSPOT_FORM_ID || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validate required fields: Name, Email, Service Interest, Message
    if (!formData.name.trim() || !formData.email.trim() || !formData.serviceInterest || !formData.message.trim()) {
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields (Name, Email, Service Interest, and Message).' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // If HubSpot Form API is configured, forward lead to HubSpot
      if (hubspotPortalId && hubspotFormId) {
        try {
          await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fields: [
                { name: 'firstname', value: formData.name },
                { name: 'email', value: formData.email },
                { name: 'phone', value: formData.phone || '' },
                { name: 'service_interest', value: formData.serviceInterest },
                { name: 'message', value: formData.message }
              ]
            })
          });
        } catch (hsErr) {
          console.warn('HubSpot sync notice:', hsErr);
        }
      }

      // If Web3Forms access key is configured, submit via API
      if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            service_interest: formData.serviceInterest,
            subject: `Corporate Inquiry: ${formData.serviceInterest} - ${formData.name}`,
            message: formData.message,
            from_name: formData.name,
            reply_to: formData.email,
            recipient_email: 'service@globalgenerationalwealth.net'
          })
        });

        const result = await response.json();
        if (result.success) {
          setStatus({
            type: 'success',
            message: 'Inquiry routed successfully to service@globalgenerationalwealth.net! An executive advisor will respond within 24 business hours.'
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            serviceInterest: '',
            message: ''
          });
          return;
        }
      }

      // Fallback: Direct Mailto / Confirmed Notification with routing to service@globalgenerationalwealth.net
      const mailtoSubject = encodeURIComponent(`Corporate Inquiry: ${formData.serviceInterest} - ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Service Interest: ${formData.serviceInterest}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nInquiry routed directly to service@globalgenerationalwealth.net`
      );

      // Open mailto link so user's client is addressed to service@globalgenerationalwealth.net
      window.location.href = `mailto:service@globalgenerationalwealth.net?subject=${mailtoSubject}&body=${mailtoBody}`;

      setStatus({
        type: 'success',
        message: 'Inquiry prepared and addressed directly to service@globalgenerationalwealth.net. Our client desk will respond promptly.'
      });

    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: 'Unable to route message automatically. Please contact us directly at service@globalgenerationalwealth.net or book a meeting below.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        
        {/* Header Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
              <Mail className="w-3.5 h-3.5" />
              Corporate Inquiries & Advisory Desk
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-6 font-serif">
              Connect With <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] bg-clip-text text-transparent">Our Firm</span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Inquire about our corporate advisory packages, enterprise credit structuring, or private wealth trusts. All communications are strictly confidential.
            </p>
          </div>
        </section>

        {/* Main Content Grid: Schedule Meeting Callout & Inquiry Form */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Calendar Booking & Corporate Details */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Prominent Google Calendar Booking Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#D4AF37] text-xs font-black uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    Priority Direct Booking
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    Schedule a Meeting
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    Skip email delays. Book a direct 30-minute introductory meeting with a senior corporate strategist right on our calendar to evaluate your funding roadmap.
                  </p>

                  <div className="pt-2">
                    <a
                      href={MEETING_CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-schedule-meeting-btn"
                      className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-center"
                    >
                      <Calendar className="w-4 h-4 text-black" />
                      Book 30-Min Strategy Call
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Instant confirmation • Video conference link provided</span>
                  </div>
                </div>
              </div>

              {/* Corporate Headquarters & Office Info */}
              <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-850">
                  <img src="/Modern Geometric Head Logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                  <div>
                    <h4 className="text-base font-black text-white leading-tight">Global Generational Wealth</h4>
                    <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Corporate Advisory</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-zinc-300">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Routing Email</span>
                      <a href="mailto:service@globalgenerationalwealth.net" className="font-bold text-white hover:text-[#D4AF37] transition-colors">
                        service@globalgenerationalwealth.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Corporate Line</span>
                      <a href="tel:+18886876829" className="font-bold text-white hover:text-[#D4AF37] transition-colors">
                        (888) 687-6829
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Headquarters</span>
                      <p className="text-zinc-300">
                        600 1st Ave, Ste 102 - 2534<br />
                        Seattle, WA 98104, United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-zinc-500">Business Hours</span>
                      <p className="text-zinc-300">
                        Monday – Saturday: 11:00 AM – 7:00 PM (Mountain Time)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Official Business Social Media Links */}
                <div className="pt-4 border-t border-zinc-850">
                  <span className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-3">
                    Official Company Pages
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={SOCIAL_LINKS.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 hover:border-[#D4AF37] flex items-center justify-center text-zinc-300 transition-all duration-200 hover:scale-105 shadow-sm"
                      aria-label="LinkedIn"
                      title="LinkedIn Company Page"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                      </svg>
                    </a>

                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 hover:border-[#D4AF37] flex items-center justify-center text-zinc-300 transition-all duration-200 hover:scale-105 shadow-sm"
                      aria-label="Facebook"
                      title="Facebook Business Page"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 hover:border-[#D4AF37] flex items-center justify-center text-zinc-300 transition-all duration-200 hover:scale-105 shadow-sm"
                      aria-label="Instagram"
                      title="Instagram Business Profile"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Client Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
                
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-serif mb-2">
                    Client Inquiry Form
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Inquiries are securely encrypted and routed directly to <strong className="text-white">service@globalgenerationalwealth.net</strong>.
                  </p>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`mb-6 p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 1: Name (Required) */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Alexandra Vance"
                      className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Field 2: Email (Required) */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Corporate or Personal Email <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexandra@yourcompany.com"
                      className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Field 3: Optional Phone Number */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                        Phone Number
                      </label>
                      <span className="text-[11px] text-zinc-500 font-semibold italic">Optional</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Field 4: Service Interest (Dropdown) */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Service Interest <span className="text-amber-500">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      required
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    >
                      <option value="">Select Primary Service Interest</option>
                      <option value="Foundation Package ($999)">Foundation Package — $999 (Commercial Credit & D&B Setup)</option>
                      <option value="Presence Package ($2,222)">Presence Package — $2,222 (Full Digital Suite & Tier 2/3 Credit)</option>
                      <option value="Management Package (Private Retainer)">Management Package (Private Multi-Entity Retainer)</option>
                      <option value="UBOT & Asset Protection Trust">UBOT & Asset Protection Trust Advisory</option>
                      <option value="0% APR Commercial Credit Strategy">0% APR Commercial Line of Credit Strategy</option>
                      <option value="crediXor Platform Beta Waitlist">crediXor AI Platform (Beta Waitlist Inquiry)</option>
                      <option value="General Corporate Inquiries">General Corporate / Institutional Inquiry</option>
                    </select>
                  </div>

                  {/* Field 5: Message (Required) */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Inquiry Details & Objectives <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your entity status, current credit standing, or key funding goals..."
                      className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    ></textarea>
                  </div>

                  {/* Routing Disclaimer */}
                  <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-850 flex items-center gap-2 text-zinc-400 text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Inquiries route securely to <strong>service@globalgenerationalwealth.net</strong></span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C2] to-[#D4AF37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>{isSubmitting ? 'Routing Inquiry...' : 'Submit Inquiry'}</span>
                  </button>

                </form>

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
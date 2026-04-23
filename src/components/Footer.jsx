import React, { useState } from 'react';

export default function Footer() {
  const [showModal, setShowModal] = useState(null);

  const openModal = (modalType) => {
    setShowModal(modalType);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <footer className="py-16 sm:py-24 bg-gradient-to-b from-[var(--gray-900)] to-black border-t border-[var(--gold)]/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="space-y-5 animate-fadeInUp">
            <div className="mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 text-white">
                <div className="relative group">
                  <img src="/Modern Geometric Head Logo.png" alt="Logo" className="h-10 w-10 sm:h-14 sm:w-14 object-contain" />
                  <div className="absolute inset-0 bg-yellow-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-sm sm:text-base font-black leading-tight">GLOBAL<br/>GENERATIONAL<br/>WEALTH</h3>
              </div>
              <p className="text-yellow-500 font-bold tracking-[0.1em] text-xs uppercase">Build Credit. Access Funding. Grow Wealth.</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering individuals and business owners with the strategies needed to achieve long-term financial stability and success.
            </p>
          </div>

          {/* Contact Section */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="group">
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">LinkedIn</p>
                <a href="https://www.linkedin.com/in/tommy-hong-9963063a5/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 block leading-relaxed">
                  Tommy Hong
                </a>
              </div>
              <div className="pt-2">
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Address</p>
                <p className="text-gray-300 leading-relaxed">600 1st Ave, Ste 102 - 2534</p>
                <p className="text-gray-300">Seattle, WA 98104</p>
                <p className="text-gray-300">United States</p>
              </div>
              
              <div className="pt-2">
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Phone</p>
                <a href="tel:+18886876829" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 block leading-relaxed">
                  (888) 687-6829
                </a>
              </div>
              
              <div className="pt-2">
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Business Hours</p>
                <p className="text-gray-300 leading-relaxed">
                  11am - 7pm (Mountain Time)<br />
                  Monday - Saturday
                </p>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Follow Us</h4>
            <div className="space-y-4">
              <a href="http://www.youtube.com/@GLOBALGENERATIONALWEALTH" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
                <span className="text-lg">▶</span>
                <span className="text-sm font-medium">YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@globalgenerationalwealth" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
                <span className="text-lg">♪</span>
                <span className="text-sm font-medium">TikTok</span>
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Legal</h4>
            <div className="space-y-4">
              <button onClick={() => openModal('terms')} className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300 cursor-pointer w-full text-left">
                <span className="text-base">📄</span>
                <span className="text-sm font-medium">Terms & Conditions</span>
              </button>
              <button onClick={() => openModal('privacy')} className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300 cursor-pointer w-full text-left">
                <span className="text-base">🔒</span>
                <span className="text-sm font-medium">Privacy Policy</span>
              </button>
              <button onClick={() => openModal('disclaimer')} className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300 cursor-pointer w-full text-left">
                <span className="text-base">⚠️</span>
                <span className="text-sm font-medium">Disclaimer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-glow"></div>
          </div>
        </div>

        {/* Copyright & Additional Info */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-400 animate-fadeIn">
            © {new Date().getFullYear()} <span className="text-yellow-500 font-bold">Global Generational Wealth</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Leading the way in credit education, business funding, and strategic wealth development for a new generation of entrepreneurs.
          </p>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showModal === 'terms' && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[var(--gray-900)] to-black border border-[var(--gold)]/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Terms & Conditions</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-[var(--gold)] text-2xl">&times;</button>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="font-bold">Last Updated: December 15, 2025</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">1. Acceptance of Terms</h3>
                <p>By accessing or using the services provided by Global Generational Wealth, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">2. Services</h3>
                <p>Global Generational Wealth provides educational and consulting services related to personal development, financial literacy, and business strategy. All services are provided for educational purposes only.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">3. Intellectual Property</h3>
                <p>All content, materials, and intellectual property provided by Global Generational Wealth are protected by copyright and other intellectual property laws. Unauthorized use is strictly prohibited.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">4. User Responsibilities</h3>
                <p>You agree to use our services responsibly and not engage in any unlawful activities. You are responsible for maintaining the confidentiality of your account information.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">5. Limitation of Liability</h3>
                <p>Global Generational Wealth shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">6. Changes to Terms</h3>
                <p>We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the revised terms.</p>
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[var(--gray-900)] to-black border border-[var(--gold)]/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Privacy Policy</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-[var(--gold)] text-2xl">&times;</button>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="font-bold">Last Updated: December 15, 2025</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you contact us, register for services, or participate in surveys. This may include your name, email address, phone number, and payment information.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">2. How We Use Your Information</h3>
                <p>We use your information to provide and improve our services, communicate with you, process transactions, and comply with legal obligations.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">3. Information Sharing</h3>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">4. Data Security</h3>
                <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">5. Cookies and Tracking</h3>
                <p>We may use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">6. Your Rights</h3>
                <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">7. Changes to Privacy Policy</h3>
                <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.</p>
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showModal === 'disclaimer' && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[var(--gray-900)] to-black border border-[var(--gold)]/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">Disclaimer</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-[var(--gold)] text-2xl">&times;</button>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="font-bold">Last Updated: December 15, 2025</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">1. Educational Purposes Only</h3>
                <p>All content provided by Global Generational Wealth is for educational and informational purposes only. We are not financial advisors, lawyers, or accountants. Nothing on this website constitutes professional advice.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">2. No Guarantees</h3>
                <p>We make no guarantees about the results you may achieve from implementing our strategies or purchasing our services. Past performance is not indicative of future results.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">3. Third-Party Content</h3>
                <p>Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or opinions expressed on these sites.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">4. Investment Risks</h3>
                <p>Investing involves risk, including the potential loss of principal. Any investment decisions you make are solely your responsibility.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">5. Testimonials</h3>
                <p>Testimonials and case studies represent exceptional results and are not typical. Individual results will vary.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">6. Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, Global Generational Wealth shall not be liable for any direct, indirect, incidental, special, or consequential damages.</p>
                
                <h3 className="text-xl font-bold text-[var(--gold)] mt-6">7. Governing Law</h3>
                <p>These disclaimers shall be governed by and construed in accordance with the laws of the State of Washington.</p>
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
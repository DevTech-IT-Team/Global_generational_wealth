import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Users, 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  Mail, 
  Globe, 
  Phone, 
  Hash, 
  Landmark, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const features = [
  { text: '1-Year access to the CREDIXOR platform', icon: Sparkles },
  { text: 'Private group meetings and expert-led sessions', icon: Users },
  { text: 'Structured lectures and financial programs', icon: BookOpen },
  { text: 'Business credit and funding guidance', icon: Briefcase },
  { text: 'Advanced UBOT setup guidance', icon: ShieldCheck },
  { text: 'EIN setup assistance', icon: FileText },
  { text: 'Custom domain business email', icon: Mail },
  { text: 'Professional business website', icon: Globe },
  { text: 'Dedicated business phone (800 number)', icon: Phone },
  { text: 'DUNS number assistance', icon: Hash },
  { text: 'Business bank account coaching', icon: Landmark }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-200/10 border border-yellow-500 text-yellow-500 text-sm font-medium mb-6">
            <span>Premium Membership</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Exclusive Membership Access</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Unlock advanced financial education, business setup guidance, and credit-building strategies through our premium platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Pricing Card */}
          <div className="lg:col-span-5">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#161616] border border-yellow-600 shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full group-hover:bg-yellow-500/20 transition-all"></div>
              
              <div className="relative z-10">
                <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Limited-Time Membership Offer</span>
                
                <div className="flex items-baseline space-x-2 mb-8">
                  <span className="text-6xl md:text-7xl font-black text-white">$3,333</span>
                  <span className="text-gray-500 font-medium">/one-time</span>
                </div>

                <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg inline-block mb-10">
                  <span className="text-yellow-500 font-bold">1-Year Full Access Included</span>
                </div>

                <Link 
                  to="/contact"
                  className="w-full py-5 bg-yellow-500 text-black font-black text-xl rounded-2xl hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-yellow-500/20 mb-6 group flex items-center justify-center space-x-3"
                >
                  <span>Get Started</span>
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
                
                <p className="text-center text-gray-500 text-sm">
                  Secure checkout • Immediate platform access
                </p>
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {features.slice(0, 6).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 group p-4 rounded-2xl hover:bg-yellow-500/5 transition-all duration-300 border border-transparent hover:border-yellow-500/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-yellow-500 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium leading-tight group-hover:text-white transition-colors pt-2">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-yellow-500 font-bold text-lg hover:gap-4 transition-all duration-300 mt-4 px-6 py-2 rounded-xl bg-yellow-500/5 border border-yellow-500/20 hover:bg-yellow-500/10"
              >
                Learn More About The Package
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex items-center space-x-4 flex-1">
                <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-500 text-xs">
                  All services are presented as <span className="text-yellow-500 font-bold">guidance and educational support</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

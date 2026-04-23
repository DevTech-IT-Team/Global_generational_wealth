import React from 'react';
import { ShieldAlert, Scale, FileText, CheckCircle } from 'lucide-react';

const benefits = [
  'Enhanced Asset Protection',
  'Legal Flexibility',
  'Private Business Structure',
  'Long-term Wealth Preservation'
];

export default function UBOT() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="ubot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Advanced Structuring</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Advanced Asset Structuring 
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Unincorporated Business Organization Trust is a legal business structure option focused on asset protection and flexibility. It provides a robust framework for managing and safeguarding your assets while maintaining operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20"
              >
                Schedule a Consultation
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gray-900 border border-gray-800 relative overflow-hidden group shadow-2xl">
              <img 
                src="/money.jpg" 
                alt="Asset Growth" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-bold mb-2 text-white">Advanced Wealth Protection</h4>
                  <p className="text-gray-300 text-sm">
                    Our structures are designed to safeguard your capital while providing the legal framework for exponential growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

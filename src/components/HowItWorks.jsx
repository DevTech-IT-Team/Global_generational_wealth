import React from 'react';
import { Search, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Analyze Your Credit Profile',
    description: 'We perform a deep dive into your current credit standing to identify areas for improvement and optimization.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Improve and Optimize',
    description: 'We implement proven strategies to enhance your credit score and build a robust financial profile.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Apply for Funding',
    description: 'With a strong profile, we guide you through strategic funding applications to secure the capital you need.',
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Our streamlined 3-step process is designed to take you from where you are to where you want to be.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-yellow-50 border border-gray-800 rounded-full flex items-center justify-center mb-8 relative z-10 group hover:border-yellow-500 transition-all duration-500 shadow-xl">
                  <step.icon className="w-8 h-8 text-yellow-500" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Target, TrendingUp, UserCheck, Calendar } from 'lucide-react';

const reasons = [
  {
    title: 'Step-by-Step Guidance',
    description: 'No fluff. We provide clear, actionable steps to improve your credit and access funding.',
    icon: Target,
  },
  {
    title: 'Real-World Strategies',
    description: 'Our methods are tested and proven in the real world, helping thousands achieve financial success.',
    icon: TrendingUp,
  },
  {
    title: 'Personalized Approach',
    description: 'Every financial situation is unique. We tailor our strategies to fit your specific needs and goals.',
    icon: UserCheck,
  },
  {
    title: 'Long-Term Planning',
    description: 'We don\'t just fix problems; we help you build a foundation for sustainable, long-term wealth.',
    icon: Calendar,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-black overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are committed to your financial empowerment through education, strategy, and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="relative p-10 md:p-16 bg-[#161b22] border border-yellow-600/30 rounded-[3rem] group hover:border-yellow-500/60 transition-all duration-500 min-h-[400px] flex flex-col justify-center"
            >
              {/* Top Right Gold Semicircle/Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-100 to-yellow-600 rounded-bl-full flex items-start justify-end p-8 shadow-2xl">
                <reason.icon className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 px-6 py-4 md:px-10 md:py-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-tr-[3rem] rounded-bl-3xl shadow-2xl border-4 border-black">
                <span className="text-[10px] font-black uppercase text-black/50 block tracking-widest">Option</span>
                <span className="text-2xl md:text-3xl font-black text-black">0{index + 1}</span>
              </div>

              <div className="relative z-10 pr-12">
                <h3 className="text-3xl md:text-4xl font-black text-yellow-500 mb-8 font-serif leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Subtle decorative bullet points to match screenshot feel */}
                <div className="mt-8 space-y-2 opacity-40">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                    <div className="w-4 h-px bg-yellow-500"></div> Strategic Planning
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                    <div className="w-4 h-px bg-yellow-500"></div> Growth Mindset
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

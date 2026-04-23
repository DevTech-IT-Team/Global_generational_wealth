import React from 'react';
import { UserCheck, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

const activities = [
  {
    title: 'Personal Credit Improvement',
    description: 'Optimize your personal credit profile to qualify for the best rates and opportunities.',
    icon: UserCheck,
    tag: 'Profile'
  },
  {
    title: 'Business Credit Building',
    description: 'Establish a strong business credit foundation that stands independent of your personal score.',
    icon: Briefcase,
    tag: 'Business'
  },
  {
    title: 'Funding Strategies',
    description: 'Access capital with proven strategies designed for sustainable growth and expansion.',
    icon: DollarSign,
    tag: 'Funding'
  },
  {
    title: 'Financial Education',
    description: 'Master the principles of wealth management and long-term financial stability.',
    icon: GraduationCap,
    tag: 'Education'
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">What We Do</h2>
          <p className="text-gray-100 max-w-2xl mx-auto text-lg">
            We provide the tools and expertise you need to take control of your financial destiny and build lasting wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="px-8 py-12 rounded-[2rem] bg-[#161616] border border-gray-800/50 flex flex-col items-center text-center group hover:border-[#8B7355] transition-all duration-500"
            >
              <div className="w-24 h-24 bg-[#FFC627] rounded-full flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden">
                {/* Subtle inner shadow/glow for the circle */}
                <div className="absolute inset-0 bg-[#FFC627]"></div>
                <activity.icon className="w-10 h-10 text-[#F4E5C2] relative z-10" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[4rem] flex items-center justify-center">
                {activity.title}
              </h3>
              
              <p className="text-white text-sm leading-relaxed mb-8 flex-grow">
                {activity.description}
              </p>

              <div className="mt-auto">
                <span className="inline-block px-6 py-1.5 border border-gray-300 rounded-full text-[10px] uppercase tracking-[0.2em] text-gray-100 font-bold group-hover:border-[#CD9C20]/50 group-hover:text-gray-200 transition-colors">
                  {activity.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a]/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}

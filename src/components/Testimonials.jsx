import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'My credit score improved by over 120 points in just 4 months. This allowed me to secure the funding I needed to open my second location.',
    success: 'Credit Improved: 580 → 705',
    avatarColor: 'bg-blue-500'
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    content: 'The business credit setup was a game-changer. I was able to get a $50,000 line of credit without using my personal guarantee.',
    success: 'Funding Secured: $50,000',
    avatarColor: 'bg-green-500'
  },
  {
    name: 'David Rodriguez',
    role: 'Real Estate Investor',
    content: 'The financial education program taught me how to leverage my credit effectively. I\'ve now successfully applied for multiple funding rounds.',
    success: 'Strategy Implemented',
    avatarColor: 'bg-purple-500'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Heres what our clients have achieved with our strategies and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 flex flex-col h-full hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-yellow-300/50 mb-4" />
              
              <p className="text-gray-300 text-lg mb-8 italic flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <div className="p-3 rounded-xl bg-yellow-500/50 border border-yellow-500/20 text-yellow-500 text-sm font-bold mb-6">
                  {testimonial.success}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
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

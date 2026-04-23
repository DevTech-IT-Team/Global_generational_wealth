import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Personal Credit Repair',
    category: 'Optimization',
    description: 'Optimize your personal credit score for maximum borrowing power.',
    id: 'personal-credit',
    image: '/download (1).jpg',
    span: 'col-span-1 md:col-span-2 aspect-[21/7]'
  },
  {
    title: 'Business Credit Setup',
    category: 'Infrastructure',
    description: 'Build a strong business credit profile independent of personal liability.',
    id: 'business-credit',
    image: '/Accredited leadership pathways that actually work.jpg',
    span: 'col-span-1 aspect-[16/11]'
  },
  {
    title: 'Credit Education Program',
    category: 'Knowledge',
    description: 'Master the principles of wealth management and stability.',
    id: 'education',
    image: '/student-online-cute-guy-checked-shirt-with-glasses-studying-computer-looking-up.jpg',
    span: 'col-span-1 aspect-[16/11]'
  },
  {
    title: 'Funding Strategy',
    category: 'Capital',
    description: 'Personalized roadmaps to help you secure business capital.',
    id: 'funding',
    image: '/download (2).jpg',
    span: 'col-span-1 md:col-span-2 aspect-[21/7]'
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Our Services</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Selected financial strategies to grow your wealth. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.span} rounded-2xl relative overflow-hidden group border border-gray-800 shadow-xl`}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
              />
              
              {/* Overlay - Lighter to make image visible */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Extra gradient for text protection */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6">
                  <Link 
                    to={`/service/${service.id}`}
                    className="inline-flex items-center px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-md hover:bg-[#D4AF37] transition-colors"
                  >
                    Details
                  </Link>
                  <p className="text-gray-300 text-xs md:text-sm hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import UBOT from '../components/UBOT';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="app bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Services />
        <UBOT />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
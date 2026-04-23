import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';

export default function ServicesPage() {
  return (
    <div className="app bg-black min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white">Our Solutions</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Comprehensive financial and credit strategies tailored to your needs.</p>
        </div>
        <Services />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
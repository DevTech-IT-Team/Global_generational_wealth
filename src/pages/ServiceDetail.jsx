import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { CheckCircle, ArrowLeft, ShieldCheck, Zap, BookOpen, Lightbulb } from 'lucide-react';

const services = [
  {
    id: "personal-credit",
    title: "Personal Credit Repair",
    desc: "Legally remove inaccuracies and optimize your personal credit score for maximum borrowing power.",
    icon: ShieldCheck,
    price: "Custom Pricing",
    details: "Our Personal Credit Repair program is a comprehensive service designed to help you clean up your credit report and improve your credit score. We work directly with credit bureaus to dispute and remove inaccurate, outdated, or unverifiable information. Beyond just repair, we provide you with the tools and education to maintain a high credit score long-term.",
    includes: [
      "In-depth credit report analysis",
      "Dispute management for inaccuracies",
      "Debt-to-income ratio optimization",
      "Credit building guidance",
      "Monthly progress tracking",
      "Dedicated account manager"
    ]
  },
  {
    id: "business-credit",
    title: "Business Credit Setup",
    desc: "Build a strong business credit profile that allows you to access funding without personal liability.",
    icon: Zap,
    price: "Custom Pricing",
    details: "The Business Credit Setup service is designed to help entrepreneurs establish a robust credit profile for their businesses. This allows you to access capital, lines of credit, and vendor accounts based solely on your business's performance, protecting your personal assets and increasing your overall borrowing capacity.",
    includes: [
      "EIN and business structure verification",
      "DUNS number and D&B profile setup",
      "Establishing initial trade lines",
      "Navigating business credit bureaus",
      "Lender-ready compliance check",
      "Strategic funding roadmap"
    ]
  },
  {
    id: "education",
    title: "Credit Education Program",
    desc: "Comprehensive courses and workshops to understand the credit system and how to leverage it.",
    icon: BookOpen,
    price: "Custom Pricing",
    details: "Knowledge is power. Our Credit Education Program provides you with the deep industry insights needed to master the credit system. Whether you're an individual or a business owner, this program will teach you the mechanics of credit, how scores are calculated, and the strategies used by the top 1% to leverage credit for wealth building.",
    includes: [
      "Wealth-building strategy workshops",
      "Understanding credit bureau algorithms",
      "Leveraging credit for investments",
      "Financial management best practices",
      "Ongoing educational resources",
      "Access to expert webinars"
    ]
  },
  {
    id: "funding",
    title: "Funding Strategy Guidance",
    desc: "Personalized roadmaps to help you secure business loans, lines of credit, and other capital.",
    icon: Lightbulb,
    price: "Custom Pricing",
    details: "Getting funded requires more than just a good credit score; it requires a strategic approach. Our Funding Strategy Guidance service helps you prepare your business for funding, identifies the best lending sources for your needs, and guides you through the application process to maximize your approval rates and loan amounts.",
    includes: [
      "Fundability assessment",
      "Lender matching and selection",
      "Loan application preparation",
      "Line of credit strategies",
      "SBA and alternative funding options",
      "Long-term capital planning"
    ]
  }
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-20 flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <Link to="/" className="text-yellow-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6">{service.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              
              <div className="prose prose-invert max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.details}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:sticky lg:top-32">
              <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
                <div className="text-center mb-8">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest block mb-2">Pricing Starting From</span>
                  <div className="text-4xl font-black text-yellow-500">{service.price}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <Link 
                    to="/contact" 
                    className="block w-full py-5 bg-yellow-500 text-black font-black text-center rounded-xl hover:bg-yellow-400 Transition-all duration-300"
                  >
                    Start Your Application
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block w-full py-5 bg-transparent border border-gray-700 text-white font-bold text-center rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
                
                <div className="pt-8 border-t border-gray-800">
                  <p className="text-gray-500 text-xs text-center leading-relaxed">
                    Personalized strategy and result-driven execution. Results may vary depending on individual profile and history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

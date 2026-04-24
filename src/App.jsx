import React from 'react';
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import PricingPage from './pages/PricingPage'
import { ThemeProvider } from './contexts/ThemeContext'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
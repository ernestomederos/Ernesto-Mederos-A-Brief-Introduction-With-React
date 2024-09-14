import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Contact from './components/pages/ContactUs';

function App() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-back",
    once: true,
  });
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
export default App;

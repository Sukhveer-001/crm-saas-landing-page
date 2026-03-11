import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../pages/HeroSection";
import Features from "../pages/Features";
import Working from "../pages/Working";
import Pricing from "../pages/Pricing";
import FaqSection from "../pages/FaqSection";
import Footer from "../components/Footer";
import Testimonials from "../pages/Testimonials";
import Cta from "../pages/Cta";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <Working />
      <Pricing />
      <Testimonials />
      <Cta />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;

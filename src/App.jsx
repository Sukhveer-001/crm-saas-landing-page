import React from "react";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/pages/HeroSection";
import Features from "../src/pages/Features";
import Working from "../src/pages/Working";
import Pricing from "../src/pages/Pricing";
import FaqSection from "../src/pages/FaqSection";
import Footer from "../src/components/Footer";
import Testimonials from "../src/pages/Testimonials";
import Cta from "../src/pages/Cta";

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

import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import "../index.css";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Banners from "../components/Banners";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <Testimonials />
      </div>
      <Features />
      <Banners />
      <Faq />
      <Footer />
    </>
  );
};

export default Landing;

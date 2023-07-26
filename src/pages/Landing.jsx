import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import "../index.css";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Banners from "../components/Banners";

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
    </>
  );
};

export default Landing;

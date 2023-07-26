import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import "../index.css";
import Testimonials from "../components/Testimonials";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <Testimonials />
      </div>
    </>
  );
};

export default Landing;

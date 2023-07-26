import React from "react";
import "../styles/Testimonials.css";
import { BsStarFill } from "react-icons/bs";
import { TestData } from "../data/testData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="testimonials">
      <h1 className="testimonials__header">
        Trust by 21+ million customers <br /> around the world
      </h1>

      <div className="testimonials__carousel">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={10}
          nav={true}
          dots={false}
          responsive={{
            0: {
              items: 1,
            },
            500: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 2,
            },
            1500: {
              items: 3,
            },
          }}
        >
          {TestData.map((test, index) => (
            <div className="testimonials__card" key={index}>
              <>
                <div>
                  <h4 className="testimonials__card--header">{test.title}</h4>
                  <div className="star__container">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star half" />
                    <p className="testimonials__card--para">{test.paragraph}</p>
                  </div>
                </div>
                <p className="testimonials__name">{test.name}</p>
              </>
            </div>
          ))}
        </OwlCarousel>
        <div></div>
      </div>
      <div className="testimonials__trust-pilot">
        <BsStarFill className="trust-star" />
        <h2 className="testimonials__trust-pilot--header">Trustpilot</h2>
      </div>
      <BsStarFill className="star trust" />
      <BsStarFill className="star trust" />
      <BsStarFill className="star trust" />
      <BsStarFill className="star trust" />
      <BsStarFill className="star trust half" />
      <p style={{ fontWeight: "bold" }}>
        4.7 out of 5 stars based on 74,463 reviews &nbsp;{" "}
        <span className="grey">|</span> &nbsp; Showing our 4 and 5 stars
        reviews.
      </p>
    </section>
  );
};

export default Testimonials;

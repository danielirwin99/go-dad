import React from "react";
import "../styles/Features.css";
import { first, fourth, second, third } from "../assets/features";

const Features = () => {
  return (
    <section id="features">
      <h1 className="features__header">
        {" "}
        All the help and tools <br /> you need to be online.
      </h1>
      <div className="features__container">
        {/* FIRST */}
        <div className="features__card">
          <div className="features__card--info">
            <small className="features__card--subHeader">
              Websites + Marketing
            </small>
            <h2 className="features__card--header">
              Get more than just a <br /> website
            </h2>
            <p className="features__card--para">
              Easily create a modern, professional website — no technical skills
              required — thanks to 100s of industry-specific templates.
            </p>
            <p className="features__card--para">
              Take the guesswork out of building your business with GoDaddy
              InSight, A.I.-powered advice that's tailored to your business
            </p>
            <p className="features__card--para">
              Get found on the sites your customers visit most with built-in
              tools for SEO, social media and email marketing.
            </p>
            <p className="features__card--para">
              Add an online store to sell physical and digital products, track
              your inventory and even let customers book appointments online.
            </p>
            <button className="features__card--btn">Start for Free</button>
            <p className="features__card--plan">
              No charge, no obligation, nothing to cancel. **
            </p>
          </div>
          <div className="features__card--image">
            <img className="features__image" src={first} alt="first" />
          </div>
        </div>
        {/* SECOND */}
        <div className="features__card">
          <div className="features__card--image">
            <img className="features__image" src={second} alt="first" />
          </div>
          <div className="features__card--info">
            <small className="features__card--subHeader">
              Professional Email
            </small>
            <h2 className="features__card--header">
              Earn your customers’ trust.
            </h2>
            <p className="features__card--para">
              A professional email address that matches your domain shows
              customers that you take your business seriously. Plus, it helps
              you stay organized with a built-in calendar, address book and task
              lists.
            </p>
            <button className="features__card--btn">Start for Free</button>
          </div>
        </div>
        {/* THIRD */}
        <div className="features__card">
          <div className="features__card--info">
            <small className="features__card--subHeader">SSL Security</small>
            <h2 className="features__card--header">
              Protect your data and your customers.
            </h2>
            <p className="features__card--para">
              An SSL Certificate protects the data going to and from your site{" "}
              <br /> — from personal info to credit card numbers. And when
              visitors feel safe, they're more likely to give you their
              business.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button className="features__card--btn">Get Secure</button>
              <p className="features__card--para third">Check your security</p>
            </div>
          </div>
          <div className="features__card--image">
            <img className="features__image" src={third} alt="first" />
          </div>
        </div>
        <div className="features__card">
          <div className="features__card--image">
            <img className="features__image" src={fourth} alt="first" />
          </div>
          <div className="features__card--info">
            <small className="features__card--subHeader">Hosting</small>
            <h2 className="features__card--header">
              Fast, secure and always online.
            </h2>
            <p className="features__card--para">
              Already have a website? Give it the home it deserves. With free
              SSL, industry-leading load times, guaranteed 99.9% uptime and
              expert, 24/7 support, your site couldn’t ask for more.
            </p>
            <button className="features__card--btn">
              See Web Hosting Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

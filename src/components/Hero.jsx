import React from "react";
import "../styles/Hero.css";
import { camera, co, com, shop } from "../assets/nav/index";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import ai from "../assets/ai.jpg";

const Hero = () => {
  return (
    <header>
      <div className="form__section">
        {/* <div className="contact-us">
          <div className="contact-us__border">
            <button className="contact-us__btn">
              <div className="contact-us__white">
                {" "}
                <RiMessage3Line className="chat-box" />
                Contact Us
              </div>
            </button>
          </div>
        </div> */}
        <form className="form">
          <input
            className="form__input"
            type="text"
            placeholder="Type the domain you want"
          />
          <button type="submit" className="form__btn">
            Search Domain
          </button>
        </form>
        <ul className="domain">
          <li className="domain__links">
            <img src={co} alt="" />
            <a href="">$3.64</a>
          </li>
          <li className="domain__links">
            <img src={com} alt="" />
            <a href="">$0.02</a>
          </li>
          <li className="domain__links">
            <img src={shop} alt="" />
            <a href="">$2.73</a>
          </li>
          <li className="domain__links">
            <img src={camera} alt="" />
            <a href="">$69.36</a>
          </li>
        </ul>
      </div>
      <div className="header__section">
        {/* The big blue header section */}
        <div className="domain__container">
          <div className="domain__containerLeft">
            <h4 className="domain__subHeader">Domain Names</h4>
            <h1 className="domain__header">
              Grab a .com.au for <br /> $0.02/1st yr.
            </h1>
            <p className="domain__para">
              3-year purchase required. Additional year(s) $21.95
            </p>
            <button className="domain__btn">
              <span>Find Your Domain</span>{" "}
              <AiOutlineArrowRight className="arrow" />
            </button>
          </div>
          <div className="domain__containerRight">
            <p className="domain__container--name">Corrin & Roxane</p>
            <p className="domain__container--name">Barkery Deluxe Dog Treats</p>
            <p className="domain__container--website">
              barkerydeluxedogtreats.com.au
            </p>
          </div>
        </div>
        <div className="website__container">
          <h2>Websites + Marketing</h2>
          <h1>Create your free website.</h1>
          <div className="website__btn--container">
            <button className="website__btn">Start for Free</button>
            <h3>Learn more</h3>
          </div>
          <p className="website__para">
            No charge, no obligation, nothing to cancel. **
          </p>
        </div>
      </div>
      <div className="pricing__section">
        <div className="pricing__container">
          <div className="pricing__wrapper">
            <p>.com</p>
            <p>$0.28/1st yr</p>
          </div>
          <div className="pricing__wrapper">
            <p>SSL Security</p>
            <p>$109.95/yr</p>
          </div>
          <div className="pricing__wrapper">
            <p>Email</p>
            <p>$3.95/mo</p>
          </div>
          <div className="pricing__wrapper">
            <p>Microsoft 365</p>
            <p>$12.95/mo</p>
          </div>
          <div className="pricing__wrapper span">
            <img src={ai} alt="" />
            <p>$95.06/1st yr, 2-yr term.</p>
            <p>.ai is the future.</p>
          </div>
          <div className="pricing__wrapper">
            <p>Web Hosting</p>
            <p>$5.95/mo</p>
            <p>Includes free SSL</p>
          </div>
          <div className="pricing__wrapper">
            <p>Domain + Email</p>
            <p>$4.5* /mo</p>
          </div>
          <div className="pricing__wrapper">
            <p>WordPress</p>
            <p>$7.95/mo</p>
          </div>
          <div className="pricing__wrapper last">
            <p>Website Design Services</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

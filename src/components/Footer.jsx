import React from "react";
import "../styles/Footer.css";
import godadGuide from "../assets/godad-footer.jpg";
import godad from "../assets/godad-white.jpg";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* Guides */}
      <div>
        <h3 className="footer__subHeading">We're here to help</h3>
        <img
          className="footer__logo--image"
          src={godadGuide}
          alt="guides-logo"
        />
      </div>
      {/* Prices */}
      <div className="footer__line" />
      <div className="footer__prices">
        <p>Prices include applicable taxes and ICANN fees.</p>
      </div>
      <div className="footer__line" />
      {/* Links */}
      <div className="footer__links--container">
        {/* First Link */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">About GoDaddy</li>
          <li className="footer__links">
            <a className="footer__link">About Us</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Careers</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Contact Us</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">GoDaddy Blog</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Investor Relations</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Trust Center</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Legal</a>
          </li>
        </ul>
        {/* Second Link List */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">Support</li>
          <li className="footer__links">
            <a className="footer__link">Product</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Support</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Community</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Report Abuse</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Resources</a>
          </li>
        </ul>
        {/* Third Link List */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">Resources</li>
          <li className="footer__links">
            <a className="footer__link">Webmail</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">WHOIS</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">ICANN Confirmation</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Designers & Developers</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Redeem Code</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Product Catalog</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Business Name</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Generator</a>
          </li>
        </ul>
        {/* Fourth Link List */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">Partner Programs</li>
          <li className="footer__links">
            <a className="footer__link">Affiliates</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Reseller Programs</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">GoDaddy Pro</a>
          </li>
        </ul>
        {/* Fifth Link List */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">Account</li>
          <li className="footer__links">
            <a className="footer__link">My Products</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Renewals & Billing</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Create Account</a>
          </li>
        </ul>
        {/* Sixth Link List */}
        <ul className="footer__links--wrapper">
          <li className="footer__links title">Shopping</li>
          <li className="footer__links">
            <a className="footer__link">
              Buy a <br /> Domain
            </a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Websites</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">WordPress</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Hosting</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">Web Security</a>
          </li>
          <li className="footer__links">
            <a className="footer__link">
              Email & <br /> Office
            </a>
          </li>
        </ul>
      </div>
      {/* Currency */}
      <div className="footer__currency--container">
        <div className="footer__currency--info">
          <img className="footer__currency--img" src={godad} alt="" />
          {/* THIS WILL BE MODALS */}
          <p>Australia - English</p>
          <p>AUD $</p>
        </div>
        <div className="footer__currency--symbols">
          <BsFacebook className="footer__currency--symbol" />
          <BsInstagram className="footer__currency--symbol" />
          <BsLinkedin className="footer__currency--symbol" />
          <BsYoutube className="footer__currency--symbol" />
        </div>
      </div>
      <div className="footer__line" />
      {/* Copyright */}
      <div className="footer__copyright--container">
        <div className="footer__copyright--left">
          <p>
            Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All Rights
            Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
            Operating Company, LLC in the US and other countries.
          </p>
          <p>
            The “GO” logo is a registered trademark of GoDaddy.com, LLC in the
            US.
          </p>
        </div>
        <div className="footer__copyright--right">
          <span>Legal</span>
          <span> Privacy Policy</span>
          <span>Cookies</span>
        </div>
      </div>
      <p className="footer__copyright--para">
        Use of this Site is subject to express terms of use. By using this site,
        you signify that you agree to be bound by these Universal Terms of
        Service.
      </p>
      <div className="footer__line" />
    </footer>
  );
};

export default Footer;

import React from "react";
import "../styles/NavBar.css";
import godaddy from "../assets/go-daddy.png";

import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav>
      <div className="navLeft">
        <a href="/">
          <img className="navLeft__logo" src={godaddy} alt="Logo" />
        </a>
        <ul className="navLeft__container">
          <li className="navLeft__links">
            <a className="navLeft__link" href="">
              Domain Names
            </a>
          </li>
          <li className="navLeft__links">
            <a className="navLeft__link" href="">
              Website & Hosting
            </a>
          </li>
          <li className="navLeft__links">
            <a className="navLeft__link" href="">
              Email & Marketing
            </a>
          </li>
        </ul>
      </div>
      <ul className="navRight">
        <li className="navRight__links">
          <a className="navRight__link" href="">
            (02) 8042 8920
          </a>
        </li>
        <li className="navRight__links">
          <a className="navRight__link" href="">
            Help
          </a>
        </li>
        <li className="navRight__links">
          <a className="navRight__link" href="">
            Sign In
          </a>
        </li>
        <li className="navRight__links">
          <a className="navRight__link" href="">
            <FiShoppingCart className="cart" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

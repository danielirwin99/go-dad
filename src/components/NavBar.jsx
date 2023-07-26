import React from "react";
import "../styles/NavBar.css";
import godaddy from "../assets/go-daddy.png";

import { FiShoppingCart } from "react-icons/fi";
import { BsTelephone, BsPerson } from "react-icons/bs";
import { BiHelpCircle, BiCart } from "react-icons/bi";
import BurgerBar from "./Material/BurgerBar";

const NavBar = () => {
  return (
    <nav>
      <div className="navLeft">
        <div className="navLeft--mobile">
          <div className="navLeft__burger">
            <BurgerBar />
          </div>
          <a href="/">
            <img className="navLeft__logo" src={godaddy} alt="Logo" />
          </a>
        </div>
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
      <div className="navSymbols">
        <BsTelephone className="symbol" />
        <BiHelpCircle className="symbol" />
        <BsPerson className="symbol" />
        <BiCart className="symbol" />
      </div>
    </nav>
  );
};

export default NavBar;

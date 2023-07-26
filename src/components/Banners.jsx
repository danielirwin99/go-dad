import React from "react";
import "../styles/Banners.css";

const Banners = () => {
  return (
    <section id="banners">
      <div className="banners__card">
        <h2 className="banners__card--header">
          It all starts with a domain
        </h2>
        <p className="banners__card--para">
          Make your idea real. Claim your space online with a domain.
        </p>
        <form className="banners__domain">
          <input
            className="banners__domain--input"
            type="text"
            placeholder="Find your perfect domain"
          />
          <button className="banners__domain--btn">Search</button>
        </form>
      </div>
      
    </section>
  );
};

export default Banners;

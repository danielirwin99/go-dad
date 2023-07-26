import React from "react";
import "../styles/Faq.css";
import BasicAccordion from "./Material/Accordion.jsx";

const Faq = () => {
  return (
    <section id="faq">
      <div className="faq__container">
        <h1 className="faq__header">
          Millions of customers <br /> rely on our domains <br /> and web
          hosting to get <br />
          their ideas online.
        </h1>
        <h3 className="faq__subHeader">Frequenty Asked Questions</h3>
        <div className="faq__accordion">
          <BasicAccordion />
        </div>
      </div>
      <div className="faq__policy">
        <p className="underline">
          *, ** View product limitations and legal policies
        </p>
        <p>
          Third-party logos and marks are registered trademarks of their
          respective owners. All rights reserved.
        </p>
      </div>
      <h3 className="faq__helpline">
        Get the help you need 24/7. Call our expert Guides on (02) 8042 8920.
        We're here for you every step of the way.{" "}
      </h3>
    </section>
  );
};

export default Faq;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer" id="contact">
      <h3>GET IN TOUCH!</h3>
      <form
        action="https://formspree.io/f/mzblgrjq"
        method="POST"
        className="formContainer"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          autoComplete="true"
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          autoComplete="true"
          required
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Drop a Message"
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
    </footer>
  );
};

export default Footer;

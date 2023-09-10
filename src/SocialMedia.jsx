import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./socialmedia.css";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="socialContainer">
      <a
        href="https://www.linkedin.com/in/atagher-james-217714265"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/ataghejames/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;

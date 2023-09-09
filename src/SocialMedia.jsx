import { FaLinkedDn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import React from "react";

const SocialMedia = () => {
  return (
    <div className="socialContainer">
      <a href="www.linkedin.com/in/atagher-james-217714265" target="_blank">
        <FaLinkedDn />
      </a>
      <a href="" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;

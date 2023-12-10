import React from "react";
import { GiNigeria } from "react-icons/gi";
import "./introduction.css";
const Introduction = () => {
  return (
    <>
      <div className="introContainer">
        <div className="left">
          <h1>Frontend React Developer</h1>
          <p>
            Hi, I am Atagher James a passionate Frontend Web Developer based in
            Nigeria &nbsp;
            <GiNigeria style={{ color: "green" }} />
          </p>
        </div>
        <div className="right">
          <img src="/asset/Atagher.png" alt="Atagher James" />
        </div>
      </div>
    </>
  );
};

export default Introduction;

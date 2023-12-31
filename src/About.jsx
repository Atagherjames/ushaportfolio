import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutLeft">
        <img src="/asset/about.jpg" alt="" />
      </div>

      <div className="aboutRight">
        <h2>ABOUT ME</h2>
        <h3>A Passionate Frontend Developer that Brings Value to Buiness</h3>
        <p>
          Hello, I'm Atagher James, a passionate Frontend Developer with a
          unique blend of skills. I'm not your typical Developer; I'm also a
          dedicated medical student. I am proficient in frontend technologies
          like HTML, CSS, Javascript, React, NextJs, React Native, Bootstrap and
          MUI. I transform ideas into stunning and user-friendly web
          applications. If you have a project that needs a creative touch, a
          commitment to excellence, and a dash of medical precision, let's
          collaborate! Let's shape the future, one line of code and one patient
          at a time.
        </p>
      </div>
    </div>
  );
};

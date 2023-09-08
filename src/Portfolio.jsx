import React, { useState } from "react";
import "./portfolio.css";
import PortComponent from "./PortComponent";
import { portfolioSkeleton } from "./portfolioSkeleton";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2>PORTFOLIO</h2>
      <h3>EACH PROJECT SHOWS MY APPROACH TO PROBLEM SOLVING</h3>
      <PortComponent
        data={portfolioSkeleton[0]}
        url="/asset/ungwa-resturant.png"
      />
    </div>
  );
};

export default Portfolio;

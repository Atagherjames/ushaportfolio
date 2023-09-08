import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./header.css";
import Link from "./Link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const Modal = isOpen && "Open";

  const linkActive = (data) => {
    setOpen(data);
  };

  return (
    <header>
      <div className="headerContainer">
        <div className="logo">
          <span>Usha.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop">
          <Link deviceType="desktop" />
        </div>

        {/* Mobile Menu */}
        <div className="mobile">
          <Hamburger
            className="hamburger"
            toggle={setOpen}
            toggled={isOpen}
            duration={0.4}
          />
          <div className={"mobileLink menu" + Modal}>
            <Link deviceType="mobile" linkActive={linkActive} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

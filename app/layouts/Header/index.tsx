"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./index.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="header__body">
          <div className="header__body-logo">
            <Image src="/logo.png" alt="logo" width={100} height={42} />
          </div>

          {/* Hamburger Menu Icon */}
          <div
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Header Menu */}
          <ul className={`header__body-menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Find a doctor</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

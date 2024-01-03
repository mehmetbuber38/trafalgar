"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./index.scss";
import Link from "next/link";

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
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Find a doctor</Link>
            </li>
            <li>
              <Link href="#">Apps </Link>
            </li>
            <li>
              <Link href="#">Testimonials</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

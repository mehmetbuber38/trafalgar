import React from "react";
import Image from "next/image";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__body-logo">
            <Image src="/logo.png" alt="logo" width={100} height={42} />
          </div>

          <ul className="header__body-menu">
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

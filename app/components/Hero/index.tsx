import React from "react";
import "./index.scss";
import { HeroProps } from "./types";
import Image from "next/image";

const Hero = ({ title, description, buttonText, url }: HeroProps) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__body">
          <div className="hero__body-menu">
            <div className="hero__body-menu-title">{title}</div>
            <div className="hero__body-menu-description">{description}</div>
            <button className="hero__body-menu-button">{buttonText}</button>
          </div>
          <div className="hero__body-image">
            <Image src={url} alt="hero" width={662} height={563} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

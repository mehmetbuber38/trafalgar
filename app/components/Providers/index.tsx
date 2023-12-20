import React from "react";
import "./index.scss";
import Image from "next/image";
import { ProvidersProps } from "./types";

const Providers = ({ title, description, buttonText, url }: ProvidersProps) => {
  return (
    <div className="providers">
      <div className="container">
        <div className="providers__body">
          <div className="providers__body-image">
            <Image src={url} alt="hero" width={650} height={477} />
          </div>
          <div className="providers__body-menu">
            <div className="providers__body-menu-title">{title}</div>
            <div className="providers__body-menu-description">
              {description}
            </div>

            <button className="providers__body-menu-button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;

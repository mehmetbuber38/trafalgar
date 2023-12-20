import React from "react";
import "./index.scss";
import Image from "next/image";
import { OurServicesProps } from "./types";
const OurServices = ({ title, description }: OurServicesProps) => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="our-services__title">{title}</div>

        <div className="our-services__description">{description}</div>

      </div>
    </div>
  );
};

export default OurServices;

import React from "react";
import "./index.scss";
import Image from "next/image";
import { OurServicesCardProps } from "./types";


const OurServicesCard = ({ title, description, url }: OurServicesCardProps) => {
  return (
    <div className="ourServicesCard">
    <div className="ourServicesCard__body">
      <div className="ourServicesCard__body-content">
        <div className="ourServicesCard__body-content-image">
          <Image src={url} alt="icon" width={70} height={70} />
        </div>
        <div className="ourServicesCard__body-content-title">{title}</div>
        <div className="ourServicesCard__body-content-description">
          {description}
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurServicesCard;

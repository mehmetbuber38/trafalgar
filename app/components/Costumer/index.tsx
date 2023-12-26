import React from "react";
import "./index.scss";
import Image from "next/image";
import { CostumerProps } from "./types";


const Costumer = ({ title, subTitle, description, url }: CostumerProps) => {
  return (
    <div className="costumer">
      <div className="container">
        <div className="costumer__body">
          <div className="costumer__body-image">
            <Image src={url} alt="costumer" width={120} height={120} />
          </div>
          <div className="costumer__body-name">
            <div className="costumer__body-title">{title}</div>
            <div className="costumer__body-subtitle">{subTitle}</div>
          </div>
          <div className="costumer__body-description">{description}</div>
        </div>
      </div>
    </div>
  );
};



export default Costumer;

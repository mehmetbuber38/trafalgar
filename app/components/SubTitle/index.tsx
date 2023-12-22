import React from "react";
import "./index.scss";
import Image from "next/image";
import { SubTitleProps } from "./types";
const SubTitle = ({ title, description }: SubTitleProps) => {
  return (
    <div className="subTitle">
      <div className="container">
        <div className="subTitle__title">{title}</div>

        <div className="subTitle__description">{description}</div>
      </div>
    </div>
  );
};

export default SubTitle;

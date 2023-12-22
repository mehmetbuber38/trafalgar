import React from "react";
import "./index.scss";
import Image from "next/image";
import { DownloadProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Download = ({ title, description, buttonText, url }: DownloadProps) => {
  return (
    <div className="download">
      <div className="container">
        <div className="download__body">
          <div className="download__body-menu">
            <div className="download__body-menu-title">{title}</div>
            <div className="download__body-menu-description">{description}</div>
            <button className="download__body-menu-button">
              {buttonText}
              <FontAwesomeIcon className="download__body-menu-button-icon"
                icon={faArrowDown}
                style={{ width: "15px", height: "15px", color: "#458FF6;" }}
              />
            </button>
          </div>
          <div className="download__body-image">
            <Image src={url} alt="hero" width={662} height={433} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

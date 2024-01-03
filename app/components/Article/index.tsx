import React from "react";
import "./index.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArticleProps } from "./types";
const Article = ({ buttonText, description, url, cardTitle }: ArticleProps) => {
  return (
    <div className="article">
      <div className="article__body">
        <div className="article__body-image">
          <Image src={url} alt="icon" width={350} height={240} />
        </div>
        <div className="article__body-title">{cardTitle}</div>
        <div className="article__body-description">{description}</div>
        <button className="article__body-button">
          {buttonText}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              width: "15px",
              height: "15px",
              color: "#458FF6;",
              marginLeft: "20px",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Article;

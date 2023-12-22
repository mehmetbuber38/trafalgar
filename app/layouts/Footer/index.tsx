import React from "react";
import "./index.scss";
import { FooterProps } from "./types";

const Footer = ({
  title,
  description,
  links,
  company,
  region,
  help,
  companyTitle,
  regionTitle,
  helpTitle,
}: FooterProps) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__content">
            <div className="footer__content-title">
              <span>T</span> {title}
            </div>
            <div className="footer__content-description">{description}</div>
            <div className="footer__content-links">{links}</div>
          </div>

          <div className="footer__menu">
            <div className="footer__menu-company list">
              <div className="footer__menu-title">{companyTitle}</div>
              {company && (
                <div className="footer__menu-items">
                  {company.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="footer__menu-region list">
              <div className="footer__menu-title">{regionTitle}</div>
              {region && (
                <div className="footer__menu-items">
                  {region.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="footer__menu-help list">
              <div className="footer__menu-title">{helpTitle}</div>
              {help && (
                <div className="footer__menu-items">
                  {help.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "../styles/Header.css";

import locationImage from "../images/eva_pin-outline.png";
import phoneImage from "../images/carbon_phone.png";
import youtubeLogo from "../images/iconoir_youtube.png";
import instaLogo from "../images/ant-design_instagram-outlined.png";
import facebookLogo from "../images/la_facebook.png";
import companyLogo from "../images/Group 21.png";
const HeaderComonent = () => {
  return (
    <>
      <div className="pre-header">
        <div className="pre-header-first-section">
          <ul className="header-nav">
            <li>
              <img src={locationImage} alt="location" />
            </li>

            <li>256 B Street 45 Newyork, Newyork</li>

            <li>
              <img src={phoneImage} alt="location" />
            </li>

            <li>+92 31304754657</li>
          </ul>
        </div>

        <div className="pre-header-second-section">
          <ul className="header-nav">
            <li>
              <img src={youtubeLogo} alt="youtubr" />
            </li>

            <li>
              <img src={instaLogo} alt="insta" />
            </li>

            <li>
              <img src={facebookLogo} alt="facebook" />
            </li>
          </ul>
        </div>
      </div>

      <div className="post-header">
        <div className="post-header-first-section">
          <img src={companyLogo} alt="facebook" />
        </div>

        <div className="post-header-second-section">
          <ul className="header-nav">
            <li>Home</li>

            <li>About US</li>

            <li>Projects</li>
            <li>Carrer</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComonent;

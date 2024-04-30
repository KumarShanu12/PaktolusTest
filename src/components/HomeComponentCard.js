import React from "react";
// import card1Home from "../images/Mask group.png";
import "../styles/Home.css";

const HomeComponentCard = ({ flexRev,img, homeCardHeading,textDiscription, btn1Text,btn2Text,btn3Text,btn4Text,btn5Text}) => {
  return (
    <div className="homecompo-root" style={{ display: "flex" , flexDirection: flexRev ? "row-reverse" : ''  }}>
      <div className="home-card-image-section">
        <img src={img} alt="" />
      </div>
      <div className="home-card-text-section">
        <p className="home-card-head">{homeCardHeading}</p>
        <p className="text-desc">
           {textDiscription}
        </p>
        <div className="home-first-btn-container">
          <button className="home-first-btn-container-btn">{btn1Text}</button>
          <button className="home-first-btn-container-btn">{btn2Text}</button>
          <button className="home-first-btn-container-btn">{btn3Text}</button>
        </div>
        <div className="home-sec-btn-container">
          <button className="home-sec-btn-container-btn">{btn4Text}</button>
          <button className="home-sec-btn-container-btn home-sec-btn-container-light-btn">{btn5Text}</button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponentCard;

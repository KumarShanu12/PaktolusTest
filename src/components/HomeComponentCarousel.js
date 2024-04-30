import React from "react";
import carousalImage1 from "../images/carousalImage1.png";
import carousalLabel from "../images/apartLabel1.png";
const HomeComponentCarousel = ({btn1Text,btn2Text,btn3Text,btn4Text,carousalImage1Prop,carousalImage2Prop,carousalImage3Prop,
flatName1,flatPrice1,flatName2,flatPrice2,flatName3,flatPrice3
}) => {
  return (
    <div>
      <div className="home-carousal-btns">
        <div className="home-carousal-btns-first-container">
          <button>{btn1Text}</button>
          <button>{btn2Text}</button>
          <button>{btn3Text}</button>
          <button>{btn4Text}</button>
        </div>

        <div className="home-carousal-right-btns">
          <button class="circular-button left-side">
            <span class="arrow arrow-left">&#10132;</span>
          </button>

          <button class="circular-button">
            <span class="arrow">&#10132;</span>
          </button>
        </div>
      </div>

      <div className="carousal-image-section">
        <div>
          <img src={carousalImage1Prop} alt="" />
          <img src={carousalLabel} alt="" style={{float:"left",padding:"0.7rem"}} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "98%",
              color: "#8D8D8D",
            }}
          >
            {" "}
            <p style={{paddingLeft: "0.7rem"}}>{flatName1}</p> <p>{flatPrice1}</p>{" "}
          </div>
        </div>

        <div>
          <img src={carousalImage2Prop} alt="" />
          <img src={carousalLabel} alt="" style={{float:"left",padding:"0.7rem"}} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "98%",
              color: "#8D8D8D",
            }}
          >
            {" "}
            <p style={{paddingLeft: "0.7rem"}}>{flatName2}</p><p>{flatPrice2}</p>{" "}
          </div>
        </div>

        <div>
          <img src={carousalImage3Prop} alt="" />
          <img src={carousalLabel} alt="" style={{float:"left",padding:"0.7rem"}}/>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "98%",
              color: "#8D8D8D",
            }}
          >
            {" "}
            <p style={{paddingLeft: "0.7rem"}}>{flatName3}</p><p>{flatPrice3}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponentCarousel;

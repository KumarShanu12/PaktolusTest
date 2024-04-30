import React from "react";
import "../styles/Home.css";
import fb from "../images/fb-dark-logo.png";
import insta from "../images/insta-dark-logo.png";
import linkdin from "../images/linkdin-dark-logo.png";
import companyLogo from "../images/Group 21.png";
import homeBackgroundImage from "../images/Image.png";
import HomeComponentCard from "./HomeComponentCard";
import card1Home from "../images/Mask group.png";
import card2Home from "../images/HomePageImg2.png";
import card3Home from "../images/HomePageimg3.png";
import HomeComponentCarousel from "./HomeComponentCarousel";
import carousalImage1 from "../images/carousalImage1.png";
import carousalImage2 from "../images/carousalImage2.png";
import carousalImage3 from "../images/carousalImage3.png";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const HomeComponent = () => {
  return (
    <>
      <div className="home-container">
        <img src={homeBackgroundImage} alt="hh" />

        <div className="home-content">
          <h1>Lorem ipsum dolor</h1>
          <p className="page-disc">
            Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet
            urpis in pellentesque sem id ut. Feugiat quam porttitor in augue sed
            quis
          </p>
          <button className="button-page-home">Click here</button>
        </div>
      </div>

      <div className="home-card-heading">
        {" "}
        <h1>Lorem ipsum</h1>{" "}
      </div>

      <HomeComponentCard
        img={card1Home}
        homeCardHeading={"Lorem ipsum dolor sit at"}
        textDiscription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniamullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in"
        }
        btn1Text={"UI&UX Design"}
        btn2Text={"Development"}
        btn3Text={"Marketing"}
        btn4Text={"Click me"}
        btn5Text={"Click me"}
      />

      <HomeComponentCard
        flexRev={true}
        img={card2Home}
        homeCardHeading={"Lorem ipsum dolor sit at"}
        textDiscription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniamullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in"
        }
        btn1Text={"UI&UX Design"}
        btn2Text={"Development"}
        btn3Text={"Marketing"}
        btn4Text={"Click me"}
        btn5Text={"Click me"}
      />

      <HomeComponentCard
        img={card3Home}
        homeCardHeading={"Lorem ipsum dolor sit at"}
        textDiscription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniamullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in"
        }
        btn1Text={"UI&UX Design"}
        btn2Text={"Development"}
        btn3Text={"Marketing"}
        btn4Text={"Click me"}
        btn5Text={"Click me"}
      />

      <div className="home-card-heading-carousal">
        <h1>LOREM IPSUM DOLOR</h1>
      </div>
      <HomeComponentCarousel
        btn1Text={"1 BEDROOM"}
        btn2Text={"2 BEDROOM"}
        btn3Text={"3 BEDROOM"}
        btn4Text={"4 BEDROOM"}
        carousalImage1Prop={carousalImage1}
        carousalImage2Prop={carousalImage2}
        carousalImage3Prop={carousalImage3}
        flatName1={"Abbotsford, Victoria"}
        flatPrice1={"Abbotsford, Victoria"}
        flatName2={"Abbotsford, Victoria"}
        flatPrice2={"from $700,000"}
        flatName3={"Abbotsford, Victoria"}
        flatPrice3={"from $700,000"}
      />

<div className="home-contact-heading">
         
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
    </div>

    <ContactUs/>

    <Footer 
    footerNavFIrstText={"Home"} 
    footerNavSecondText={"About"} 
    footerNavThirdText={"Service"} 
    footerNavFourthText={"Get in Touch"}
    footerNavFifthText={"FAQs"}
    companyLogo={companyLogo}
    socialMedia1={fb}
    socialMedia2={insta}
    socialMedia3={linkdin}
    lang1={"English"}
    lang2={"Arabic"}
    lang3={"French"}
    copyRightText={"Non Copyrighted © 2022 Upload by rich technologies"}/>

    </>
  );
};

export default HomeComponent;

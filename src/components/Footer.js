import React from "react";


import "../styles/Footer.css"

const Footer = ({footerNavFIrstText,footerNavSecondText,footerNavThirdText,footerNavFourthText,footerNavFifthText,companyLogo,
socialMedia1,socialMedia2,socialMedia3,lang1,lang2,lang3,copyRightText
}) => {
  return (
    <div className="footer-container">
      <div className="footer-logo-image">
        <img src={companyLogo} alt="logo" />{" "}
      </div>
      <div>
        <ul className="footer-nav">
          <li>{footerNavFIrstText}</li>
          <li>{footerNavSecondText}</li>
          <li>{footerNavThirdText}</li>
          <li>{footerNavFourthText}</li>
          <li>{footerNavFifthText}</li>
        </ul>
      </div>
      <div style={{padding:"2rem 0"}}>
        <ul className="footer-nav">
          <li>
            <img src={socialMedia1} alt="logo" />
          </li>
          <li>
            <img src={socialMedia2} alt="logo" />
          </li>
          <li>
            <img src={socialMedia3} alt="logo" />
          </li>
        </ul>
      </div>
      <div className="footer-sub-section">

         <div>
            <button>{lang1}</button>
            <button>{lang2}</button>
            <button>{lang3}</button>
             </div>

         <div>
            <p>{copyRightText}</p>
            </div>    

      </div>
    </div>
  );
};

export default Footer;

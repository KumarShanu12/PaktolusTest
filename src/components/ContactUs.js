import React from "react";
import phoneLogo from "../images/bxs_phone-call.png";
import mailLogo from "../images/ic_sharp-email.png";
import locationLogo from "../images/eva_pin-outline.png";

import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-container-first-sec">
        <h1>Contact Information</h1>
        <p>Say something to start a live chat!</p>
        <div className="contact-us-info">
          <img src={phoneLogo} alt="" />
          <span>+1012 3456 789</span>
        </div>

        <div className="contact-us-info contact-us-location-info">
          <img src={mailLogo} alt="" />
          <span>demo@gmail.com</span>
        </div>

        <div className="contact-us-info">
          <img src={locationLogo} alt="" />
          <span className="address-sec">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </div>

      <div className="contact-us-container-second-sec">
        <div className="contact-us-name-section">
          <div>
            <label>First Name</label>
            <br />
            <input className="contact-us-first-name-input" />
          </div>

          <div>
            <label>Last Name</label>
            <br />
            <input className="contact-us-first-name-input" />
          </div>
        </div>

        <div className="contact-us-name-section">
          <div>
            <label>Email</label>
            <br />
            <input type="email" className="contact-us-first-name-input" />
          </div>

          <div>
            <label>Phone Number</label>
            <br />
            <input className="contact-us-first-name-input" />
          </div>
        </div>

        <div className="contact-us-choose-subject">
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingLeft: "5.5rem",
              fontWeight: "600",
            }}
          >
            Select Subject?
          </p>

          <div className="contact-us-subject-radio">
            <input type="radio" id="option1" name="option" />
            <label for="option1">General Inquiry</label>
            <input type="radio" id="option2" name="option" />
            <label for="option2">General Inquiry</label>

            <input type="radio" id="option3" name="option" />
            <label for="option3">General Inquiry</label>

            <input type="radio" id="option4" name="option" />
            <label for="option4">General Inquiry</label>
          </div>
        </div>

        <div className="contact-us-message">
          <p>Message</p>
          <input placeholder="Write your message" />
          <div className="contact-message-btn"> <button>Send Message</button></div>
           
        </div>

       
            
         

        
      </div>
    </div>
  );
};

export default ContactUs;

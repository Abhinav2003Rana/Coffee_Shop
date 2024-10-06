import React from "react";
import "./Contact.css";
import address from "../Assets/location.png";
import phone from "../Assets/phone.png";
import email from "../Assets/email.png";

export const Contactus = () => {
  return (
    <>
      <h2 className="h2">Find Us</h2>
      <p className="up-parra">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        necessitatibus saepe, porro autem sunt beatae et assumenda illo deleniti
        iste.
      </p>
      <div className="contact">
        <div className="left-contact">
          <div className="icons">
            <img src={address} alt="" />
            <div className="icons-right">
              <span>Address</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                doloribus.
              </p>
            </div>
          </div>
          <div className="icons">
            <img src={phone} alt="" />
            <div className="icons-right">
              <span>Phone</span>
              <p>
                +91 9289609276
              </p>
            </div>
          </div>
          <div className="icons">
            <img src={email} alt="" />
            <div className="icons-right">
              <span>Email</span>
              <p>
                2003ranaabhinav@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <h3>Send Message</h3>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Type Your Message" />
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

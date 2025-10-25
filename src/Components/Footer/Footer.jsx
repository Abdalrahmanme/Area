import React from "react";
import "./footer.css";
import Image from "../../assets/Union.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="links">
        <a href="#benefits">Benefits</a>
        <a href="#table">Specifications</a>
        <a href="#how">How to</a>
      </div>
      <div className="bottom">
        <div>
          <img src={Image} alt="" /> <p>© Area. &nbsp;&nbsp;&nbsp;&nbsp; 2025</p>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

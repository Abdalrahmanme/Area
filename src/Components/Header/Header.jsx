import React from "react";
import "./header.css";
import desktop from "../../assets/Inner screen.png";
import tablet from "../../assets/Inner screen2.png";
import mobile from "../../assets/Inner screen3.png";

const Header = () => {
  return (
    <div id="header">
      <h1>Browse everything.</h1>
      <div className="image">
        <div><img src={desktop} alt="" className="desktop" /></div>
        <div><img src={tablet} alt="" className="tablet" /></div>
        <div><img src={mobile} alt="" className="mobile" /></div>
      </div>
    </div>
  );
};

export default Header;

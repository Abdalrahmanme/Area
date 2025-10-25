import React from "react";
import "./logo.css";
import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import Three from "../../assets/three.png";
import Four from "../../assets/four.png";
import Five from "../../assets/five.png";
import Six from "../../assets/six.png";

const logo = () => {
  return (
    <div id="logo">
      <p>Trusted by:</p>
      <div className="slider">
        <div className="track">
          <img src={One} alt="" />
          <img src={Two} alt="" />
          <img src={Three} alt="" />
          <img src={Four} alt="" />
          <img src={Five} alt="" />
          <img src={Six} alt="" />
          <img src={One} alt="" />
          <img src={Two} alt="" />
          <img src={Three} alt="" />
          <img src={Four} alt="" />
          <img src={Five} alt="" />
          <img src={Six} alt="" />
        </div>
      </div>
    </div>
  );
};

export default logo;

import React from "react";
import "./testimonial.css";
import Image from "../../assets/Image3.png";

const Testimonial = () => {
  return (
    <div id="test">
      <div className="left">
        <img src={Image} alt="" />
      </div>
      <div className="right">
        <div className="quote">
          “I was skeptical, but Area has completely transformed the way I manage
          my business. The data visualizations are so clear and intuitive, and
          the platform is so easy to use. I can't imagine running my company
          without it.”
        </div>
        <div className="author">John Smith</div>
        <p>Head of Data</p>
      </div>
    </div>
  );
};

export default Testimonial;

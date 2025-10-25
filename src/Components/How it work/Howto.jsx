import React from "react";
import "./howto.css";

const Howto = () => {
  window.addEventListener("scroll", () => {
    const target = document.querySelector("#how");
    const sectionTop = target.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos >= sectionTop) {
      target.classList.add("active"); // add a class or do anything you want
    } else {
      target.classList.remove("active");
    }
  });
  return (
    <div id="how">
      <div className="top">
        <h2>Map Your Success</h2>
        <button>Discover More</button>
      </div>
      <div className="three-rules">
        <div className="rule">
          <p>01</p>
          <p>Get Started</p>
          <p>With our intuitive setup, you're up and running in minutes</p>
        </div>
        <div className="rule">
          <p>02</p>
          <p>Customize and Configure</p>
          <p>Adapt area to your specific requirements and preferences</p>
        </div>
        <div className="rule">
          <p>03</p>
          <p>Grow Your Business</p>
          <p>Make informed decisions to exceed your goals</p>
        </div>
      </div>
    </div>
  );
};

export default Howto;

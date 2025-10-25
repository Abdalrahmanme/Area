import React from "react";
import "./benefits.css";
import mount from "../../assets/image.jpg";

const Benefits = () => {
  window.addEventListener("scroll", () => {
    const target = document.querySelector("#benefits");
    const sectionTop = target.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos >= sectionTop) {
      target.classList.add("active"); // add a class or do anything you want
    } else {
      target.classList.remove("active");
    }
  });
  return (
    <div id="benefits">
      <div className="top">
        <p>Benefits</p>
        <h2>We've cracked the code.</h2>
        <p>Area provides real insights, without the data overload</p>
      </div>
      <div className="bottom">
        <div className="grid">
          <div className="grid-card">
            <i className="fas fa-link"></i>
            <h3>Amplify Insights</h3>
            <p>
              Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth
            </p>
          </div>
          <div className="grid-card">
            <i className="fa-solid fa-earth-americas"></i>
            <h3>Control Your Global Presence</h3>
            <p>
              Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere
            </p>
          </div>
          <div className="grid-card">
            <i className="fa-solid fa-user"></i>
            <h3>Remove Language Barriers</h3>
            <p>
              Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience
            </p>
          </div>
          <div className="grid-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Visualize Growth</h3>
            <p>
              Generate precise, visually compelling reports that illustrate your
              growth trajectories across all regions
            </p>
          </div>
        </div>
        <div className="image">
          <img src={mount} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;

import React from "react";
import "./features.css";
import Image from "../../assets/Image4.png";

const Features = () => {
  window.addEventListener("scroll", () => {
    const target = document.querySelector("#features");
    const sectionTop = target.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos >= sectionTop) {
      target.classList.add("active"); // add a class or do anything you want
    } else {
      target.classList.remove("active");
    }
  });
  return (
    <div id="features">
      <div className="left">
        <h2>See The Big Picture</h2>
        <p>
          Area turns your data into clear, vilbrant visuals that show you
          exactly what's happening in each region
        </p>
        <ol>
          <li>Spot trends in Seconds: No more digging through numbers</li>
          <li>
            Get Everyone on the Same Page: share easy-to-understand reports with
            you team
          </li>
          <li>
            make Presentations Pop: Interactive maps and dashboards keep your
            audience engaged
          </li>
          <li>
            Your Global Snapshot: Get a quick, clear overview of you entire
            operation
          </li>
        </ol>
        <button>Discover More</button>
      </div>
      <div className="right">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Features;

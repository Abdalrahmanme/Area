import React from "react";
import "./cta.css";

const CTA = () => {
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
    <div id="cta">
      <h2>Connect with us</h2>
      <p>
        Schedule a quick call to learn how Area can turn your regional data into
        a powerful advantage.
      </p>
      <button>
        Learn More <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default CTA;

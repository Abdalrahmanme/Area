import React from "react";
import "./nav.css";

const Nav = () => {

  function animation(event) {
    document.querySelector(".links").classList.add("animate");
    event.target.classList.add("hidden-small");
    document.querySelector(".xmark").classList.remove("hidden")
  }
  
  function cancelAnimation(event) {
    document.querySelector(".links").classList.remove("animate");
    event.target.classList.add("hidden");
    document.querySelector(".burger").classList.remove("hidden-small")
  }

  return (
    <div className="nav">
      <div className="logo" onClick={() => window.location.reload()}>
        Area
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#table">Specifications</a>
          </li>
          <li>
            <a href="#how">How-to</a>
          </li>
          <li>
            <a href="#cta">Contact Us</a>
          </li>
        </ul>
        <div className="learn">
          Learn More <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
      <i className="fa-solid fa-bars hidden burger" onClick={animation}></i>
      <i className="fa-solid fa-xmark hidden xmark" onClick={cancelAnimation}></i>
    </div>
  );
};

export default Nav;

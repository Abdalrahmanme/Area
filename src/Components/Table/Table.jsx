import React from "react";
import "./table.css";

const Table = () => {
  window.addEventListener("scroll", () => {
    const target = document.querySelector("#table");
    const sectionTop = target.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos >= sectionTop) {
      target.classList.add("active"); // add a class or do anything you want
    } else {
      target.classList.remove("active");
    }
  });
  return (
    <div id="table">
      <div className="content">
        <p>Specs</p>
        <h2>Why Choose Area?</h2>
        <p className="txt">
          You need a solution that keeps up. That's why we developed Area. A
          developer-friendly approach to streamline your business
        </p>
        <button>Descover More</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>WebSurge</th>
              <th>HyperView</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Ultra-fast browsing
              </td>
              <td>
                <i className="fa-solid fa-check"></i> Fast browsing
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> moderate speeds
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Advanced AI insights
              </td>
              <td>
                <i className="fa-solid fa-check"></i> Basic AI recommendations
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> No AI assistance
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Seamless integration
              </td>
              <td>
                <i className="fa-solid fa-check"></i> Restricts customization
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> Steep learning curve
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Advanced AI insights
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> Basic AI insights
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> No Ai assistance
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Ultra-fast browsing
              </td>
              <td>
                <i className="fa-solid fa-check"></i> Fast browsing
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> Moderate speeds
              </td>
            </tr>
            <tr>
              <td>
                <i className="fa-solid fa-check"></i> Full UTF-8 support
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> Potential display errors
              </td>
              <td>
                <i className="fa-solid fa-xmark"></i> Partial UTF-8 support
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

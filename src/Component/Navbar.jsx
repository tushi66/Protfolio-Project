import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png"

function MyNavbar() {


 const [sticky, setSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (

    <nav className={`navbar navbar-expand-lg ${sticky ? "sticky-nav" : ""}`}>
      <div className="container-fluid">

        <a className="navbar-brand ms-5" href="#">
          <img src={logo} className="logo" />
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto gap-5">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                HOME
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                RESUME
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                PORTFOLIO
              </a>
            </li>

            <li className="nav-item me-5">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default MyNavbar;

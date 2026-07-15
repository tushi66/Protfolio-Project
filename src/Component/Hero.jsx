import React from "react";
import profile from "../assets/images/pic.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center bg-dark text-white"
    >
      <div className="container mb-lg-0">
        <div className="row align-items-center hero-sec">


          <div className="col-lg-5 mb-4 mb-lg-0 text-start mx-auto">

            <h5 className="intro">Hello I'm</h5>

            <h1 className="heading">
              A FRONTEND<br />
              Developer <span className="clr">Tushar Patel</span><br />
              Based in SURAT,<br />
              INDIA
            </h1>

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Frontend Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="text-danger fw-200 typeanime"
            />

            <p className="mt-4 intro">
              I build responsive websites using React,
              Bootstrap and modern JavaScript.
            </p>

            <button className="btn btn-danger mt-3">
              About ME
            </button>
          </div>

          <div className="col-lg-5 mb-4 mb-lg-0 hero-img">
            <img
              src={profile}
              alt="Profile"
              
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
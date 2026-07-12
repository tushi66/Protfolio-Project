import React from "react";
import profile from "../assets/images/pic.png";

function Hero() {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center bg-dark text-white"
    >
      <div className="container mb-lg-0">
        <div className="row align-items-center hero-sec">


          <div className="col-lg-7 mb-4 mb-lg-0 mt-5 text-start">

            <h5>Hello I'm</h5>

            <h1 className="display-3 fw-bold">
              Tushar Patel
            </h1>

            <h3 className="text-danger">
              React Developer
            </h3>

            <p className="mt-4">
              I build responsive websites using React,
              Bootstrap and modern JavaScript.
            </p>

            <button className="btn btn-danger mt-3">
              Download CV
            </button>
          </div>

          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
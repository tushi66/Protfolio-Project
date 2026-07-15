import React from "react";
import profile from "../assets/images/profile.jpg";

function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-5 mb-4 mb-lg-0">
            <img
              src={profile}
              alt="Profile"
              className="img shadow image-box"
            />
          </div>

          <div className="col-lg-7">
            <h6 className="text-danger text-uppercase">About Me</h6>

            <h2 className="fw-bold mb-4 abouthead">
              A Passionate MERN Stack Developer
            </h2>

            <p className="para">
              I'm a frontend developer who enjoys creating responsive,
              user-friendly web applications using React, Bootstrap,
              JavaScript, HTML, and CSS.
            </p>

            <p className="para">
              I enjoy solving problems, learning new technologies,
              and turning creative ideas into interactive websites.
            </p>

            <div className="row mt-4">

              <div className="col-md-6">
                <p className="intro"><strong>Name:</strong> Tushar Patel</p>
                <p className="intro"><strong>Email:</strong> tusharpatel051997@email.com</p>
              </div>

              <div className="col-md-6">
                <p className="intro"><strong>Location:</strong> India</p>
                <p className="intro"><strong>Experience:</strong> 1+ Years</p>
              </div>

            </div>

            <button className="btn btn-danger mt-3">
              Download Resume
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
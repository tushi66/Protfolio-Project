import React from "react";
import profile from "../assets/images/profile.jpg";

function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-lg-7">
            <h6 className="text-danger text-uppercase">About Me</h6>

            <h2 className="fw-bold mb-4">
              A Passionate React Developer
            </h2>

            <p className="text-secondary">
              I'm a frontend developer who enjoys creating responsive,
              user-friendly web applications using React, Bootstrap,
              JavaScript, HTML, and CSS.
            </p>

            <p className="text-secondary">
              I enjoy solving problems, learning new technologies,
              and turning creative ideas into interactive websites.
            </p>

            <div className="row mt-4">

              <div className="col-md-6">
                <p><strong>Name:</strong> Tushar Patel</p>
                <p><strong>Email:</strong> tusharpatel051997@email.com</p>
              </div>

              <div className="col-md-6">
                <p><strong>Location:</strong> India</p>
                <p><strong>Experience:</strong> 1+ Years</p>
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
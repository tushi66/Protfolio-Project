import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-danger">CONTACT</h6>
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="text-secondary">
            Feel free to contact me for work, collaboration, or questions.
          </p>
        </div>

        <div className="row g-5">

          <div className="col-lg-5">

            <div className="contact-info">

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <p>tusharpatel051997@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h5>Phone</h5>
                  <p>+91 9876556765</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h5>Location</h5>
                  <p>Gujarat, India</p>
                </div>
              </div>

              <div className="social-icons mt-4">
                <a href="https://github.com/tushi66" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/tusharpatel8066/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <form>

              <div className="row">

                <div className="col-md-6 mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="6"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-danger">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";

function Footer() {

  return (
    <footer className="footer py-5 bg-dark">
      <div className="container text-center">
            <hr />
        <h3 className="mb-3 cmcolor display-5">Tushar Patel</h3>

        <p className="intro">
          Frontend Developer | React Developer
        </p>

        <div className="social-icons justify-content-center d-flex my-4">

          <a
            href="https://github.com/tushi66"
            target="_blank"
            rel="gith"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tusharpatel8066/"
            target="_blank"
            rel="linkdin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/ptushar66"
            target="_blank"
            rel="insta"
          >
            <FaInstagram />
          </a>

        </div>

        <p className="mb-0 text-secondary">
          © 2026 All Rights Reserved by Tushar Patel |
          Made with <FaHeart className="text-danger" /> using React
        </p>

      </div>
    </footer>
  );
}

export default Footer;
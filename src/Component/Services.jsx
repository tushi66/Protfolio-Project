import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Build fast and responsive websites using React, Bootstrap, HTML, CSS, and JavaScript.",
  },  
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "Create clean, modern, and user-friendly interfaces with a great user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Develop websites that work perfectly on desktop, tablet, and mobile devices.",
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Develop interactive frontend applications using modern JavaScript and React.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Improve website speed, SEO, and overall user experience.",
  },
  {
    icon: <FaDatabase />,
    title: "API Integration",
    description:
      "Connect React applications with REST APIs and external services.",
  },
];

function Services() {
  return (
    <section id="services" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-danger">WHAT I DO</h6>
          <h2 className="fw-bold">My Services</h2>
          <p className="text-secondary">
            I help businesses and individuals build modern web applications.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div className="service-card h-100">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
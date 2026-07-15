import React from "react";
import p1 from "../assets/images/project1.jpg";
import p2 from "../assets/images/project2.jpg";
import p3 from "../assets/images/project3.jpg";
import p4 from "../assets/images/project4.jpg";
import p5 from "../assets/images/project5.jpg";
import p6 from "../assets/images/project6.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    image: p1,
    title: "Amazon Website",
    category: "Html, CSS",
    description:
      "A responsive website built with Html and CSS.",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/4.CSS/Amazon%20Prime",
    demo: "#",
  },
  {
    image: p2,
    title: "Housing Website",
    category: "Boostrap",
    description:
      "Single Page Website using Boostrap.",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/5.MEDIA%20QAURY/Cabin%20booking%20Responsive/Cabin%20booking%20Responsive",
    demo: "#",
  },
  {
    image: p3,
    title: "Netflix App",
    category: "JavaScript, Media Quary",
    description:
      "Netflix app using HTML, CSS, Media Quary ,JAVASCRIPT",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/5.MEDIA%20QAURY/Netflix",
    demo: "#",
  },
  {
    image: p4,
    title: "E-Commerce Website",
    category: "Bootstrap",
    description:
      "Modern shopping website with cart and product pages.",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/4.CSS/Project%20Ecomm",
    demo: "#",
  },
  {
    image: p5,
    title: "E-Commerce Website",
    category: "HTML/CSS",
    description:
      "Modern shopping website with cart and product pages.",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/4.CSS/E-Commerce%20Projects",
    demo: "#",
  },
  {
    image: p6,
    title: "Resturent Website",
    category: "React",
    description:
      "Responsive landing page for a restaurant.",
    github: "https://github.com/tushi66/RW_Tushar_Patel_10859_LMS_Projects/tree/main/6.BOOTSTAP/Exam%20Projects",
    demo: "#",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-danger">HERE IS A SAMPLE OF PROJECTS I'VE WORKED ON.</h6>
          <h2 className="fw-bold cmcolor display-3 ">Selected Projects</h2>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />

                <div className="project-content">

                  <span className="badge bg-danger mb-2">
                    {project.category}
                  </span>

                  <h3 className="cmcolor">{project.title}</h3>

                  <p className="intro">{project.description}</p>

                  <div className="d-flex gap-2">

                    <a
                      href={project.github}
                      className="btn btn-outline-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.demo}
                      className="btn btn-danger"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;


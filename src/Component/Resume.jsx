import React from "react";

const education = [
  {
    title: "Full Stack Developer",
    institute: "Red and White Institute",
    year: "2025 - Present",
    description:
      "Learning modern full-stack web development, including frontend and backend technologies, database management, REST APIs, and deployment through practical projects.",
  },
  {
    title: "Bachelor of Computer Sciences & Engineering",
    institute: "Bhagwan Mahavir University",
    year: "2015 - 2019",
    description:
      "Studied web development, programming, databases, and software engineering.",
  }
];

const experience = [
  {
    title: "React Developer",
    company: "Freelance",
    year: "2026 - Present",
   description: "Provided freelance React.js development services by building scalable frontend applications, integrating APIs, fixing UI issues, and optimizing application performance."
  },
  {
    title: "Frontend Intern",
    company: "It Shopno Technology",
    year: "2024 - 2025",
    description:
      "Worked on landing pages and responsive UI development.",
  },
];

function Resume() {
  return (
    <section id="resume" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-danger">RESUME</h6>
          <h2 className="fw-bold">Education & Experience</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 mb-5">
            <h3 className="mb-4">Education</h3>

            {education.map((item, index) => (
              <div className="timeline-card" key={index}>
                <span className="timeline-year">
                  {item.year}
                </span>

                <h4>{item.title}</h4>

                <h6>{item.institute}</h6>

                <p>{item.description}</p>
              </div>
            ))}

          </div>

          <div className="col-lg-6">
            <h3 className="mb-4">Experience</h3>

            {experience.map((item, index) => (
              <div className="timeline-card" key={index}>
                <span className="timeline-year">
                  {item.year}
                </span>

                <h4>{item.title}</h4>

                <h6>{item.company}</h6>

                <p>{item.description}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;
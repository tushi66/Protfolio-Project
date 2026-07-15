import React from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Git & GitHub", level: 75 },
];

function Skills() {
  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-danger">MY SKILLS</h6>
          <h2 className="fw-bold display-5 cmcolor">My Technical Skills</h2>
          <p className="intro">
            Here are the technologies I work with.
          </p>
        </div>

        <div className="row">

          <div className="col-lg-8 mx-auto">

            {skills.map((skill, index) => (
              <div className="mb-4" key={index}>

                <div className="d-flex justify-content-between mb-2">
                  <span className="intro">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress skill-progress">

                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                  >
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
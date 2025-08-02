import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="title">About Me</h2>

        <p className="intro">
          Hi, I'm <strong>Harish M R</strong>, a passionate <strong>Java Full Stack Developer</strong> based in Bangalore. I specialize in building robust web applications using Java, Spring Boot, React, and MySQL. I'm always eager to learn, improve, and solve real-world problems through code.
        </p>

        <h3 className="subtitle">Skills</h3>
        <div className="skills-grid">
          <div className="skill-box">
            <span>Java</span>
            <div className="bar"><div className="bar-fill java"></div></div>
          </div>
          <div className="skill-box">
            <span>Spring Boot</span>
            <div className="bar"><div className="bar-fill spring"></div></div>
          </div>
          <div className="skill-box">
            <span>React</span>
            <div className="bar"><div className="bar-fill react"></div></div>
          </div>
          <div className="skill-box">
            <span>MySQL</span>
            <div className="bar"><div className="bar-fill mysql"></div></div>
          </div>
          <div className="skill-box">
            <span>HTML/CSS</span>
            <div className="bar"><div className="bar-fill html"></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

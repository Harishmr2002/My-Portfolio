import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="role">Java Full Stack Intern</h3>
          <span className="duration">Feb 2025 – Present</span>
        </div>
        <p className="company">Skyllx Technologies Pvt Ltd · Bengaluru</p>
        <ul className="experience-list">
          <li>Developed responsive web applications using Java, Spring Core/MVC, and MySQL.</li>
          <li>Created RESTful APIs and integrated them with ReactJS frontend.</li>
          <li>Explored Spring Boot and microservice concepts.</li>
          <li>Collaborated in Agile environment, actively involved in code reviews and debugging.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;

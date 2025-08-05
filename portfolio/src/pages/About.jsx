import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>

      {/* Intro Section */}
      <div className="about-box">
        <h3>👋 Hello!</h3>
        <p>
          I'm <strong>Harish M R</strong>, a passionate Java Full Stack Developer based in Bengaluru. 
          I enjoy building responsive and efficient web applications using technologies like Java, Spring Boot, React, and MySQL.
        </p>
      </div>

      {/* Skills Section */}
      <div className="about-box">
        <h3>🛠️ Skills</h3>
        <div className="skill">
          <label>Java</label>
          <div className="bar"><span style={{ width: "80%" }}></span></div>
        </div>
        <div className="skill">
          <label>Spring Boot</label>
          <div className="bar"><span style={{ width: "76%" }}></span></div>
        </div>
        <div className="skill">
          <label>React</label>
          <div className="bar"><span style={{ width: "78%" }}></span></div>
        </div>
        <div className="skill">
          <label>MySQL</label>
          <div className="bar"><span style={{ width: "75%" }}></span></div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about-box">
        <h3>🎓 Education</h3>
        <p>
          <strong>MCA</strong> – Maharaja Institute of Technology, Mysore <br />
          <em>Post Graduated: 2024</em>
        </p>
      </div>

      {/* Personal Info Section */}
      <div className="about-box">
        <h3>👤 Personal Info</h3>
        <ul>
          <li><strong>Name:</strong> Harish M R</li>
          <li><strong>Email:</strong> harishharshamr@gmail.com</li>
          <li><strong>Phone:</strong> +91-9632364513</li>
          <li><strong>Location:</strong> Bengaluru, India</li>
        </ul>
      </div>
    </section>
  );
}

export default About;

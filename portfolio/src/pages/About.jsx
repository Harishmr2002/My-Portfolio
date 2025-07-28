import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm <strong>Harish Yenmar</strong>, a passionate and detail-oriented Java Full Stack Developer with hands-on experience in building dynamic and responsive web applications. 
        I work with technologies like <strong>Java, Spring Boot, ReactJS, JDBC, and MySQL</strong>.
      </p>

      <h2>🎓 Education</h2>
      <p>
        Master's in Computer Application (MCA) <br />
        <em>Maharaja Institute of Technology, Mysore</em>
      </p>

      <h2>💻 Skills</h2>
      <ul>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>ReactJS</li>
        <li>JDBC & MySQL</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Git & GitHub</li>
      </ul>

      <h2>🚀 Career Goals</h2>
      <p>
        I enjoy solving real-world problems and transforming ideas into web-based applications. 
        My goal is to become a professional full stack developer and contribute to impactful projects in the tech industry.
      </p>

      <h2>🎯 Hobbies</h2>
      <p>
        Apart from coding, I love exploring new tech tools, watching movies, and creating educational content on YouTube.
      </p>

      {/* Optional Resume Download */}
      <a href="/Harish_Yenmar_Resume.pdf" download className="resume-button">
        📄 Download Resume
      </a>
    </div>
  );
};

export default About;

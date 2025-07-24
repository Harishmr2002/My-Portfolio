import React from "react";
import "./Home.css";
import myPhoto from "../assets/ME.jpeg"; // image inside src/assets

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hello, I'm <span className="highlight">Harish M R</span>
        </h1>
        <h2>Java Full Stack Developer</h2>
        <p>
          I build responsive, dynamic web applications using Java, Spring Boot,
          React, and MySQL.
        </p>
        <div className="hero-buttons">
          <a href="/Harish_M_R.pdf" download className="btn">
            📄 Download Resume
          </a>
          <a href="/contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={myPhoto} alt="Harish" />
      </div>
    </section>
  );
}

export default Home;

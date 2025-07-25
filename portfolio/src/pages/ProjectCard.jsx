import React from "react";
import "./Projects.css";

function ProjectCard({ title, description, tech, link, live }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {tech.join(", ")}
      </p>
      <div className="project-links">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

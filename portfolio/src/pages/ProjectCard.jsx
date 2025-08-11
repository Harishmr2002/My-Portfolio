import React from "react";

function ProjectCard({ title, description, tech, link, live, tags }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p><strong>Tech Stack:</strong> {tech.join(", ")}</p>
      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      {/* {tags && (
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )} */}
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

function ProjectSection() {
  const projects = [
    {
      title: "Quiz App",
      description: "A React-based quiz application with dynamic score tracking.",
      link: "https://github.com/Harishmr2002/QuizApp"
    },
    {
      title: "Bank Management",
      description: "Console-based Java project using JDBC and MySQL.",
      link: "https://github.com/Harishmr2002"
    },
    {
      title: "TravelLink",
      description: "Java Full Stack social media web app to find travel buddies.",
      link: "https://github.com/Harishmr2002"
    },
  ];

  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            description={proj.description}
            link={proj.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;

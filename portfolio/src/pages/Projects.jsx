import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Quiz App",
      description: "A quiz application built using React for frontend and Spring Boot for backend.",
      tech: ["React", "Spring Boot", "MySQL"],
      link: "https://github.com/Harishmr2002/QuizApp",
      live: "https://quizapp-harish.netlify.app" // ✅ Replace with your real link
    },
    {
      title: "Student Management",
      description: "Core Java console app to manage students using JDBC.",
      tech: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/StudentApp"
    },
    {
      title: "TravelLink",
      description: "Java Full Stack project to find travel buddies with login, posts, and friend request.",
      tech: ["JSP", "Servlet", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/TravelLink"
    },
    {
      title: "Quiz App",
      description: "A quiz application built using React for frontend and Spring Boot for backend.",
      tech: ["React", "Spring Boot", "MySQL"],
      link: "https://github.com/Harishmr2002/QuizApp",
      live: "https://quizapp-harish.netlify.app" // ✅ Replace with your real link
    },
    {
      title: "Student Management",
      description: "Core Java console app to manage students using JDBC.",
      tech: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/StudentApp"
    },
    {
      title: "TravelLink",
      description: "Java Full Stack project to find travel buddies with login, posts, and friend request.",
      tech: ["JSP", "Servlet", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/TravelLink"
    }
  ];

  return (
    <section className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;

import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: `A core Java console-based project to manage student information. 
Implements CRUD operations with JDBC for MySQL database interaction. 
Supports student registration, fee tracking, and data search.`,
      tech: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/StudentApp",
      tags: ["#Java", "#JDBC", "#ConsoleApp"]
    },
    {
      title: "TravelLink",
      description: `A Java Full Stack social media-style platform to find travel buddies. 
Includes features like user registration, login, post creation, and friend request management. 
Implemented using JSP, Servlet, JDBC and MySQL.`,
      tech: ["JSP", "Servlet", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/TravelLink",
      tags: ["#FullStack", "#JavaEE", "#SocialPlatform"]
    },
    {
      title: "Quiz App",
      description: `A responsive quiz application built with React for the frontend and Spring Boot for the backend. 
It allows users to take quizzes, view scores, and track their performance. Includes admin panel for quiz management.`,
      tech: ["React", "Spring Boot", "MySQL"],
      link: "https://github.com/Harishmr2002/QuizApp",
      live: "https://quizapp-harish.netlify.app",
      tags: ["#FullStack", "#React", "#SpringBoot"]
    },
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

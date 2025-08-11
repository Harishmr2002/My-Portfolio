import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
     {
      title: "AI-Powered Q&A and Feedback Web App",
      description: `•	Built a full-stack AI assistant using Spring Boot and React to answer user questions and provide feedback via OpenAI API.
      •	Built a responsive React frontend with a single text input supporting multiple modes (Q&A, feedback) and a real-time loading indicator.
      •	Used Axios for asynchronous API calls with proper error handling and form validation.
      •	Deployed frontend and backend to cloud hosting (e.g., Render / Netlify) for public access.
      `,
      tech: ["Spring Boot", "React.js", "OpenAI API", "Axios","CSS3","REST API","JSON"],
      link: "https://github.com/Harishmr2002/TravelLink",
    },
    {
      title: "TravelLink",
      description: `•	Developed a full-stack web application to connect travelers and find travel partners.
      •	Implemented features like user registration, login/logout, friend request system, and post sharing.
      •	Users can send/accept/reject friend requests and view posts from accepted friends.
      •	Built using MVC architecture, JDBC for database interaction, and MySQL for data persistence.
      •	Designed a responsive UI using HTML/CSS and Bootstrap.
      `,
      tech: ["JSP", "Servlet", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/TravelLink",
    },
    {
      title: "Banking & Student Management Console App ",
      description: `•	Built a console-based Java application to manage banking and student operations.
      •	Implemented CRUD operations for student records and secure money transfer features.
      •	Handled user authentication, balance updates, and transaction rollback on failure.
      •	Used PreparedStatement, ResultSet, and transaction management using JDBC.
      •	Pushed daily progress to GitHub. 
     `,
      tech: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/Harishmr2002/StudentApp",
    },
    {
      title: "Personal Portfolio Website",
      description: `•	Designed and developed a responsive personal portfolio to showcase skills, education, projects, and experience.  
•	Implemented a dark/light theme toggle, interactive skill bars, and a sticky navbar with smooth scrolling. 
•	Integrated downloadable resume feature and linked GitHub and LinkedIn profiles.  
     `,
      tech: ["HTML", "CSS", "JavaScript","React"],
      link: "https://github.com/Harishmr2002/StudentApp",
    },
    {
      title: "Quiz App",
      description: `⦁	Developed an interactive quiz application with multiple-choice questions using React functional
      components and useState hooks.
      ⦁	 Designed a responsive user interface with dynamic question rendering and real-time score calculation.
      ⦁	 Implemented conditional rendering to track user selections, highlight correct options, and display final
      score at the end.
      ⦁	 Styled the app with modern UI using custom CSS, ensuring consistent layout and mobile
      responsiveness.`,
      tech: ["React", "HTML","CSS", "JavaScript"],
      link: "https://github.com/Harishmr2002/QuizApp",
      live: "https://quizapp-harishmr.netlify.app/",
    },
     {
      title: "Car crash detection and reporting in signals using a deep learning approach (ACADEMIC PROJECT)",
      description: `•	Designed and implemented an individual academic project using deep learning and computer vision.
      •	 Built a real-time system to detect car crashes and automatically send alerts via email/SMS.
      •	Achieved 90% accuracy using the YOLOv8 model integrated with Flask for the backend.
      `,
      tech: ["Python", "YOLOv8", "Flask", "OpenCV"],
      link: "https://github.com/Harishmr2002/TravelLink",
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


import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "WanderLust",
      desc: "Full-stack travel application built using Node.js, Express.js, MongoDB, and EJS. Implemented secure authentication with Passport.js, session management, CRUD operations for listings and reviews, Joi validation, image uploads with Multer, search and filtering, multi-language support, and centralized error handling.",
      link: "https://github.com/rishikeshprajapat/travel_project/",
    },
    {
      title: "Real-Time Chat Application",
      desc: "MERN-based real-time chat application with secure JWT authentication, protected routes, and real-time messaging using Socket.io. Designed MongoDB schemas and developed REST APIs for efficient user and message management.",
      link: "https://github.com/rishikeshprajapat/chatapp_rishi",
    },
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Latest Projects</h2>

      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <a
              href={p.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <button
          className="more-btn"
          onClick={() => setShowAll(true)}
        >
          And many more
        </button>
      )}
    </section>
  );
}

export default Projects;
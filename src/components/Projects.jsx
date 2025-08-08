import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Feed Forward ",
    tech: "MERN Stack",
    link: "https://github.com/sanjivani2005/Fee-Forward---Minor-Project-.git"
  },
  {
    title: "To-Do List Web App",
    tech: "React Full stack Application",
    link: "https://github.com/sanjivani2005/todo-List.git"
  },
  {
    title: "Bistro Restro Application",
    tech: "React ",
    link: "https://github.com/sanjivani2005/react-landing-page.git"
  },
  {
    title: "Personal Finance Tracker",
    tech: "MERN Stack",
    link: "https://github.com/sanjivani2005/PersonalFinancialTracker.git"
  },
  {
    title: "Her Bloom ",
    tech: "MERN Stack ",
    link: "https://github.com/sanjivani2005/Her-Bloom"}
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

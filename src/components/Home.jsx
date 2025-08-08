import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import profileImg from './profile.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">

        {/* Left: Text */}
        <div className="text-content">
          <h2>Hi, I'm <span>Sanjivani Shende</span></h2>
          <p className="tagline">
            Aspiring Software Engineer | MERN Stack Developer | Data Analyst
          </p>
          <p className="description">
            I'm a Final-year Computer Science & Business Systems student passionate about developing impactful web applications,
            solving real-world problems, and exploring data-driven insights. I believe in continuous learning, clean code, and
            meaningful collaboration.
          </p>

          <div className="buttons vertical-buttons">
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaLinkedin style={{ marginRight: '8px' }} />
              LinkedIn
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub style={{ marginRight: '8px' }} />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn"
            >
              <FaDownload style={{ marginRight: '8px' }} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="image-content">
          <img src={profileImg} alt="Sanjivani Shende" />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact">
        <h3>Let's Connect</h3>
        <p>
          Whether you're interested in collaborating, hiring, or just having a chat — feel free to reach out!
        </p>
        <Link 
          to="/contact" 
          className="btn contact-btn" 
          aria-label="Navigate to contact page"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

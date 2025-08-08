import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>Python</li>
          <li>C</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>R</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Web Development</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Data Science & Analytics</h3>
        <ul>
          <li>Pandas</li>
          <li>Numpy</li>
          <li>Matplotlib</li>
          <li>Seaborn</li>
          <li>Power BI</li>
          <li>Alteryx</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Jupyter Notebook</li>
          <li>Figma</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Problem Solving</li>
          <li>Communication</li>
        </ul>
      </div>
    </section>
  );
}

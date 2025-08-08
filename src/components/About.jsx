import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-box">
      <h2>About Me</h2>
      <p>
        Hi, I’m Sanjivani Shende, a Final-year engineering student at St. Vincent Pallotti College of Engineering, Nagpur, specializing in Computer Science and Business Systems (CSBS). I’m passionate about blending technology with analytical thinking, and currently sharpening my skills in data analysis, machine learning, and web development.
      </p>
      <p>
        I’ve worked on academic and personal projects involving data visualization, sentiment analysis, and portfolio website design. My coursework spans a wide range of topics including compiler design, cloud computing, behavioral economics, financial accounting, design thinking.
      </p>
      <p>
        I’ve participated in several hackathons:
        <ul>
          <li>IIM Telegram Mini App Hackathon – worked on a Telegram Mini App</li>
          <li>SGMCET Sheogaon – developed a gamified education project for children</li>
        </ul>
      </p>
      <p>
        Project Experience:
        <ul>
          <li>Mini Project – FeedForward (Bridge the Gap Between Waste Food To Needy People)</li>
          <li>Micro Project – Her Bloom (women-centered initiative)</li>
          <li>Major Project – Safe Route (crowd-sourced road safety platform)</li>
        </ul>
      </p>
      <p>
        Beyond academics, I’m on a journey to grow in confidence, coding, and communication. Coming from a challenging background, I’m determined to build a strong future for myself and support my younger brother. I believe in continuous learning, embracing my journey, and using technology to solve real-world problems.
      </p>
      <p className="tags">
        🌱 Lifelong Learner &nbsp; | &nbsp; 💡 Problem Solver &nbsp; | &nbsp; 🤝 Open to Collaboration
      </p>
    </div>
  );
}

export default About;

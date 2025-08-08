import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Jr. Software Developer Intern",
    company: "PugArch Technology Pvt. Ltd.",
    duration: "July 15, 2025 – Present",
    location: "Nagpur, Maharashtra, India",
    image: "PugArch.png",
  },
  {
    title: "Data Analyst Intern",
    company: "Osis Infobytes",
    duration: "July – August 2024",
    location: "Remote",
    image: "Osis.png",
  },
  {
    title: "Python Programming Intern",
    company: "CodSoft",
    duration: "August – September 2024",
    location: "Remote",
    image: "CodSoft.png",
  },
  {
    title: "Web Development Intern",
    company: "InternPe",
    duration: "August – September 2023",
    location: "Remote",
    image: "InternPe.png",
  },
  {
    title: "Back Office Executor",
    company: "CC Services",
    duration: "August – October 2024",
    location: "Remote",
    image: "ccservices.jpg",
  },
  {
    title: "CDC Coordinator – CSBS",
    company: "St. Vincent Pallotti College of Engineering & Technology",
    duration: "August 2023 – Present",
    location: "Nagpur, Maharashtra, India",
    image: "cdc.png",
  },
  {
    title: "Member",
    company: "Computer Society of India",
    duration: "April 2024 – May 2025",
    location: "Nagpur, Maharashtra, India",
    image: "CSI.png",
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-row" key={index}>
          <div className="experience-text">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p><strong>Location:</strong> {exp.location}</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${exp.image}`}
            alt={exp.company}
            className="experience-image"
            onError={(e) => {
              console.error("Failed to load image:", exp.image);
              e.target.style.display = "none"; // Hide broken image
            }}
          />
        </div>
      ))}
    </section>
  );
}

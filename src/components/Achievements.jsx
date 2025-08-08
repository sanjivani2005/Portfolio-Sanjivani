import React, { useState } from 'react';
import './Achievements.css';

export default function Achievements() {
  const [showAwards, setShowAwards] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  const publicPath = process.env.PUBLIC_URL;

  return (
    <section className="achievements">
      <h2>Achievements</h2>

      <div className="button-container">
        <button className="toggle-btn" onClick={() => setShowAwards(!showAwards)}>
          {showAwards ? 'Hide Awards 🏆' : 'Show Awards 🏆'}
        </button>

        {showAwards && (
          <div className="gallery">
            <div className="card">
              <img src={`${publicPath}/assets/a1.png`} alt="Award 1"
                onLoad={() => console.log("Image loaded successfully")}
                onError={() => console.error("Failed to load image")}
              />
              <h3>1st Rank in College Examination</h3>
              <p>Awarded as a Topper of the Department of Computer Science and Business System.</p>
            </div>
            <div className="card">
              <img src={`${publicPath}/assets/a2.png`} alt="Award 2" />
              <h3>Tech Saksham</h3>
              <p>Secured 2nd position at Regional Showcase in Pune under Microsoft SAP CSR initiative.</p>
            </div>
            <div className="card">
              <img src={`${publicPath}/assets/a3.png`} alt="Award 3" />
              <h3>Meritious Award</h3>
              <p>Awarded as a Meritorious Student in 2019–2020 by Somalwar Education Society.</p>
            </div>
            <div className="card">
              <img src={`${publicPath}/assets/a4.png`} alt="Award 4" />
              <h3>Academic Excellence Award</h3>
              <p>Awarded as Academic Excellence student by the CSBS Department.</p>
            </div>
            <div className="card">
              <img src={`${publicPath}/assets/a5.png`} alt="Award 5" />
              <h3>Research Scholar</h3>
              <p>Presented research paper at National Level Conference at SGT University, Haryana.</p>
            </div>
          </div>
        )}

        <button className="toggle-btn" onClick={() => setShowCertificates(!showCertificates)}>
          {showCertificates ? 'Hide Certifications 📜' : 'Show Certifications 📜'}
        </button>

        {showCertificates && (
          <div className="gallery">
            {["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"].map((c, i) => (
              <div className="card" key={i}>
                <img src={`${publicPath}/assets/${c}.png`} alt={`Certificate ${i + 1}`} />
                <h3>{[
                  "NPTEL Certification",
                  "Data Analysis",
                  "JavaScript Training",
                  "TCSion Certificate",
                  "MERN Stack Development",
                  "Cloud Security Internship",
                  "AI/ML Virtual Internship",
                  "Data Analytics Internship",
                  "LinkedIn Certification"
                ][i]}</h3>
                <p>{[
                  "Completed Python Certification from NPTEL.",
                  "Completed Data Analysis course by Coursera.",
                  "Completed JavaScript Training by SkillUp.",
                  "Certified in Career Edge - Young Professionals by TCSion.",
                  "Completed 90 hrs MERN Stack training by TechSaksham (Microsoft CSR).",
                  "Zero Trust Cloud Security Virtual Training by AICTE & Zscaler.",
                  "AI ML Virtual Training by AICTE & Google Developers.",
                  "Data Analytics Process Automation by AICTE & Alteryx.",
                  "Certified in Career Essentials in Software Development by LinkedIn."
                ][i]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

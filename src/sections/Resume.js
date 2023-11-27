// src/sections/Resume.js
import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
  // Example proficiency data, replace with your own
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Download my resume: <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>
      <div className="proficiencies">
        <h3>Proficiencies:</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;

// src/components/Project.js
import React from 'react';
import './Project.css';

const Project = ({ title, image, deployedLink, githubLink }) => {
  const deployedLinkStyle = {
    color: 'blue', // Change this to the desired color for the deployed link
  };

  const githubLinkStyle = {
    color: 'green', // Change this to the desired color for the GitHub link
  };

  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          style={deployedLinkStyle}
        >
          Deployed Link
        </a>
        {' | '}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={githubLinkStyle}
        >
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;


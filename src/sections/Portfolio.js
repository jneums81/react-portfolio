// src/sections/Portfolio.js
import React from 'react';
import Project from '../components/Project'; // Import the Project component
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  // Example project data, replace with your own
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.png',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

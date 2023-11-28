// src/sections/Portfolio.js
import React from 'react';
import Project from '../components/Project'; // Import the Project component
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  // Example project data, replace with your own
  const projects = [
    {
      title: 'Meal Planner App',
      image: 'MealPlanner.png',
      deployedLink: 'https://lizfischstix.github.io/mealplannerapp/',
      githubLink: 'https://github.com/lizfischstix/mealplannerapp',
    },
    {
      title: 'Chatterbox App',
      image: 'image.png',
      deployedLink: 'https://grisly-skeleton-98871-e156069b1ed4.herokuapp.com',
      githubLink: 'https://github.com/kevinpatto/super-duper-fortnight'
    }
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

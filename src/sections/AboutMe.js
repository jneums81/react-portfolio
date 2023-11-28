// src/sections/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const avatarFileName = 'Avatar.jpg'
  return (
    <section className="about-me">
      {/* Content for the About Me section goes here */}
      <h2>About Me</h2>
      <img
        src={`${process.env.PUBLIC_URL}/${avatarFileName}`}
        alt="Jackson Neuman Avatar"
        className="avatar"
      />
      <p>Hello, I'm Jackson Neuman, a passionate web developer based in Naperville, Illinois. With a love for coding and a knack for problem-solving, I thrive on turning ideas into innovative and user-friendly digital experiences.

I specialize in front-end technologies, including HTML, CSS, and JavaScript, with expertise in building responsive and dynamic web applications. Whether it's creating a seamless user interface or diving into the intricacies of web development frameworks, I'm always excited to take on new challenges.

My journey in the world of web development began with a curiosity to understand how things work on the internet. Since then, I've had the pleasure of working on diverse projects that range from personal websites to collaborative applications.

When I'm not coding, you can find me exploring the latest trends in tech, experimenting with new coding techniques, or enjoying a good cup of coffee while brainstorming my next project.

Let's connect! I'm always open to collaborations, discussions about technology, or just a friendly chat. Feel free to reach out through the Contact page—I'd love to hear from you!</p>
    </section>
  );
};

export default AboutMe;

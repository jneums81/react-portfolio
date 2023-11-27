// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/jneums81" target="_blank" rel="noopener noreferrer">GitHub</a>
        {' | '}
        <a href="https://linkedin.com/in/jackson-neuman-2126a7227" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' | '}
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;

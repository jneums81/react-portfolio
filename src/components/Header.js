// src/components/Header.js
import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <Navigation />
    </header>
  );
};

export default Header;

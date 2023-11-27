// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './sections/AboutMe'; // Create AboutMe.js component
import Portfolio from './sections/Portfolio'; // Create Portfolio.js component
import Contact from './sections/Contact'; // Create Contact.js component
import Resume from './sections/Resume'; // Create Resume.js component
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add a default route or a 404 component if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



import { Link } from "react-scroll";
import './Navbar.css';

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1>Reshmi Ruksala</h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        <a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

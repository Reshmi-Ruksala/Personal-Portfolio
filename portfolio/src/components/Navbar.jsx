import React from "react";
import './Navbar.css'; // Optional if you want separate CSS for navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>beWell+</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

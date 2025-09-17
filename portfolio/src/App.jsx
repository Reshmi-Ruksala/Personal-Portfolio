import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Make sure your CSS is imported

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" className="hero">
        <h1>Welcome to beWell+ Portfolio</h1>
        <p>Frontend Developer | Designer | Creator</p>
        <button>View Projects</button>
      </section>

      <section id="about" className="about">
  <img src="/assets/profile.jpg" alt="Profile" />
  <div className="content">
    <h2>About Me</h2>
    <p>
      Hi! I’m Reshmi, a passionate Frontend Developer and Designer. 
      I love creating beautiful, responsive, and interactive web applications. 
      My focus is on clean code, user-friendly interfaces, and modern design.
    </p>
    <p>
      I specialize in React, JavaScript, HTML, CSS, and graphic design. 
      I’m always eager to learn new technologies and improve my skills.
    </p>
  </div>
</section>

      <section id="projects" className="projects">
        {/* Projects content will go here */}
      </section>

      <section id="skills" className="skills">
        {/* Skills content will go here */}
      </section>

      <section id="contact" className="contact">
        {/* Contact content will go here */}
      </section>

      <footer>
        &copy; 2025 beWell+. All rights reserved.
      </footer>
    </div>
    
  );
}

export default App;

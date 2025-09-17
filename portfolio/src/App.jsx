import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Make sure your CSS is imported
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import emailjs from "emailjs-com";
import { useRef } from "react";



function App() {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_7vffzg7",
    "template_lnontxx",
    formRef.current,
    "6rXlkVdIacBfi2meu"
  ).then(
    (result) => {
      alert("Message sent successfully!");
      formRef.current.reset();
    },
    (error) => {
      alert("Failed to send message, please try again.");
      console.log(error.text);
    }
  );
};

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    
    <div>
      <Navbar />

      <section id="home" className="hero">
        <h1>Welcome to beWell+ Portfolio</h1>
        <p>Frontend Developer | Designer | Creator</p>
        <button>View Projects</button>
      </section>

      <section id="about" className="about" data-aos="fade-up">
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

      <section id="projects" className="projects" data-aos="fade-up">
  <div className="project-card">
    <img src="/assets/project1.jpg" alt="Project 1" />
    <h3>Portfolio Website</h3>
    <p>A personal portfolio website built with React and CSS to showcase my projects and skills.</p>
  </div>

  <div className="project-card">
    <img src="/assets/project2.jpg" alt="Project 2" />
    <h3>Online Store</h3>
    <p>An e-commerce website with product listings, cart functionality, and checkout page built using React.</p>
  </div>

  <div className="project-card">
    <img src="/assets/project3.jpg" alt="Project 3" />
    <h3>Blog Platform</h3>
    <p>A blogging platform built with React and JavaScript, featuring post creation and comments.</p>
  </div>
</section>


      <section id="skills" className="skills" data-aos="fade-up">
  <div className="skill">
    <h4>HTML</h4>
  </div>
  <div className="skill">
    <h4>CSS</h4>
  </div>
  <div className="skill">
    <h4>JavaScript</h4>
  </div>
  <div className="skill">
    <h4>React</h4>
  </div>
  <div className="skill">
    <h4>Git & GitHub</h4>
  </div>
  <div className="skill">
    <h4>Graphic Design</h4>
  </div>
</section>
<section id="resume" className="resume">
  <h2>My Resume</h2>
  <p>Click the button below to download my CV:</p>
  <a href="/assets/Resume.pdf" download className="download-btn">
    Download CV
  </a>
</section>


    <section id="contact" className="contact">
  <h2>Contact Me</h2>
  <form ref={form => formRef = form} onSubmit={sendEmail}>
    <input type="text" name="user_name" placeholder="Your Name" required />
    <input type="email" name="user_email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>


      <footer>
  <p>&copy; 2025 beWell+. All rights reserved.</p>
  <div className="social-links">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
  </div>
</footer>

    </div>
    
  );
}

export default App;

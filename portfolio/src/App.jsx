import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Make sure your CSS is imported
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from './assets/profile.jpg';

import emailjs from "emailjs-com";




function App() {
  const formRef = useRef();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setShowScrollTop(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    
    <div>
      <Navbar />

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Reshmi Ruksala</h1>
          <p className="subtitle">Frontend Developer & UI/UX Designer</p>
          <p className="description">
            I create beautiful, responsive, and interactive web experiences that combine 
            modern design with clean code. Passionate about turning ideas into digital reality.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="about" data-aos="fade-up">
        <div className="about-container">
          <div className="about-image">
            <img src={profileImage} alt="Reshmi Ruksala" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hi! I'm Reshmi, a passionate Frontend Developer and UI/UX Designer with a love for 
              creating beautiful, responsive, and interactive web experiences. I believe in the 
              power of clean code, intuitive design, and user-centered development.
            </p>
            <p>
              With expertise in React, JavaScript, HTML, CSS, and modern design principles, 
              I transform ideas into digital reality. I'm constantly learning new technologies 
              and staying up-to-date with the latest trends in web development.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects" data-aos="fade-up">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/assets/project1.jpg" alt="Portfolio Website" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Modern Portfolio Website</h3>
              <p>
                A responsive and interactive portfolio website built with React, featuring modern design, 
                smooth animations, and a contact form. Showcases my projects and skills with a clean, 
                professional layout.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">AOS</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/assets/project2.jpg" alt="E-commerce Store" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>E-commerce Store</h3>
              <p>
                A full-featured online store with product listings, shopping cart functionality, 
                user authentication, and secure checkout process. Built with modern React patterns 
                and responsive design.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/assets/project3.jpg" alt="Blog Platform" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Blog Platform</h3>
              <p>
                A modern blogging platform with post creation, editing, commenting system, and 
                user management. Features a rich text editor, image uploads, and responsive design 
                for all devices.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">JWT</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="skills" data-aos="fade-up">
        <div className="skills-header">
          <h2>Skills & Technologies</h2>
          <p className="skills-subtitle">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">⚛️</div>
                <div className="skill-info">
                  <div className="skill-name">React</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">💻</div>
                <div className="skill-info">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <div className="skill-info">
                  <div className="skill-name">CSS3</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📱</div>
                <div className="skill-info">
                  <div className="skill-name">HTML5</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">🔧</div>
                <div className="skill-info">
                  <div className="skill-name">Git & GitHub</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">⚡</div>
                <div className="skill-info">
                  <div className="skill-name">Vite</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📦</div>
                <div className="skill-info">
                  <div className="skill-name">npm</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎯</div>
                <div className="skill-info">
                  <div className="skill-name">Responsive Design</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Design & UX</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <div className="skill-info">
                  <div className="skill-name">UI/UX Design</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🖼️</div>
                <div className="skill-info">
                  <div className="skill-name">Graphic Design</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📐</div>
                <div className="skill-info">
                  <div className="skill-name">Figma</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">✨</div>
                <div className="skill-info">
                  <div className="skill-name">Animation</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-subtitle">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>reshmi.ruksala@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input 
                  type="text" 
                  id="user_name"
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input 
                  type="email" 
                  id="user_email"
                  name="user_email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Tell me about your project..." 
                  rows="5" 
                  required
                ></textarea>
              </div>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>


      <footer>
        <div className="footer-content">
          <div className="footer-logo">Reshmi Ruksala</div>
          <p className="footer-description">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            Let's build something amazing together.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/reshmi-ruksala" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>📱</span>
            </a>
            <a href="https://www.linkedin.com/in/reshmi-ruksala/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>💼</span>
            </a>
            <a href="https://twitter.com/reshmi_ruksala" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐦</span>
            </a>
            <a href="mailto:reshmi.ruksala@example.com" className="social-link">
              <span>📧</span>
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Reshmi Ruksala. All rights reserved. Built with ❤️ and React.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </div>
    
  );
}

export default App;

import { useEffect, useRef } from "react";
import "./TemplatePreview.css";

function TemplatePreview() {
  const previewRef = useRef(null);

  useEffect(() => {
    if (!previewRef.current) return;

    const elements = previewRef.current.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("animated")
        ),
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={previewRef} className="template-container">
      <div className="template-frame">
        {/* NAV */}
        <nav className="template-nav">
          <ul>
            <li><a href="#main">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="template-scroll">
          {/* MAIN SECTION */}
          <section id="main" className="template-section">
            <div className="main-container animate-on-scroll">
              <div className="image-wrapper">
                <div className="rotating-border">
                  <div className="profile-placeholder"></div>
                </div>
              </div>
              <div className="intro-text">
                <h1>Hi!, I am John Doe</h1>
                <p>A passionate developer with expertise in creating amazing web experiences.</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
                <button className="btn">Download CV</button>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" className="template-section">
            <div className="about-box animate-on-scroll">
              <h2>About Me</h2>
              <p>
                Hello! I'm a passionate developer dedicated to creating high-quality software solutions.
                With expertise in modern web technologies and a keen eye for detail, I bring ideas to life
                through clean, efficient code.
              </p>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="template-section">
            <div className="animate-on-scroll">
              <h2>Skills</h2>
              <div className="skills-container">
                <div className="skills-column">
                  <h3>Social Skills</h3>
                  <ul>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Leadership</li>
                    <li>Time Management</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Technical Skills</h3>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section id="education" className="template-section">
            <div className="animate-on-scroll">
              <h2>Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>Bachelor's Degree</h3>
                    <p>University Name</p>
                    <span className="year">2020 - 2024</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>High School</h3>
                    <p>School Name</p>
                    <span className="year">2018 - 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS SECTION */}
          <section id="certifications" className="template-section">
            <div className="animate-on-scroll">
              <h2>Certifications</h2>
              <div className="certifications-container">
                <div className="certification-card">
                  <div className="cert-placeholder"></div>
                  <h3>Certificate 1</h3>
                  <p>Description of the certification and what was learned.</p>
                </div>
                <div className="certification-card">
                  <div className="cert-placeholder"></div>
                  <h3>Certificate 2</h3>
                  <p>Description of the certification and what was learned.</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="template-section">
            <div className="animate-on-scroll">
              <h2>Projects</h2>
              <div className="projects-container">
                <div className="project-card">
                  <div className="project-placeholder"></div>
                  <h3>Project 1</h3>
                  <p>A brief description of the project and technologies used.</p>
                </div>
                <div className="project-card">
                  <div className="project-placeholder"></div>
                  <h3>Project 2</h3>
                  <p>A brief description of the project and technologies used.</p>
                </div>
                <div className="project-card">
                  <div className="project-placeholder"></div>
                  <h3>Project 3</h3>
                  <p>A brief description of the project and technologies used.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="template-section">
            <div className="animate-on-scroll">
              <h2>Contact Me</h2>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Your Message"></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="template-footer">
            <h3>Thank you for visiting!</h3>
            <p>&copy; 2026 Portfolio. All rights reserved.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default TemplatePreview;

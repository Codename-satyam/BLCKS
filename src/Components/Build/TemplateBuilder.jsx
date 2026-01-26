import { useState } from "react";
import "./TemplateBuilder.css";

const portfolioTemplate = {
  hero: {
    title: "Hi!, I am John Doe",
    subtitle: "A passionate developer with expertise in creating amazing web experiences."
  },
  about: {
    text: "Hello! I'm a passionate developer dedicated to creating high-quality software solutions. With expertise in modern web technologies and a keen eye for detail, I bring ideas to life through clean, efficient code."
  },
  skills: {
    social: ["Communication", "Teamwork", "Leadership", "Time Management"],
    technical: ["HTML & CSS", "JavaScript", "React", "Node.js"]
  },
  education: {
    items: [
      { title: "Bachelor's Degree", institution: "University Name", year: "2020 - 2024", details: "4.0 GPA" },
      { title: "High School", institution: "School Name", year: "2018 - 2020", details: "90% average" }
    ]
  },
  projects: {
    items: [
      { title: "Project 1", description: "A brief description of the project and technologies used." },
      { title: "Project 2", description: "A brief description of the project and technologies used." },
      { title: "Project 3", description: "A brief description of the project and technologies used." }
    ]
  },
  certifications: {
    items: [
      { title: "Certificate 1", description: "Description of the certification and what was learned." },
      { title: "Certificate 2", description: "Description of the certification and what was learned." }
    ]
  },
  ui: {
    bgColor: "#667eea",
    textColor: "#ffffff",
    accentColor: "#764ba2"
  }
};

function TemplateBuilder() {
  const [templateData, setTemplateData] = useState(portfolioTemplate);
  const [activeTab, setActiveTab] = useState("hero");
  const [showPreview, setShowPreview] = useState(true);

  const handleChange = (section, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: prev[section].items.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const handleAddItem = (section) => {
    setTemplateData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: [...prev[section].items, { title: "New Item", description: "" }]
      }
    }));
  };

  const handleRemoveItem = (section, index) => {
    setTemplateData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        items: prev[section].items.filter((_, i) => i !== index)
      }
    }));
  };

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, ${templateData.ui.bgColor} 0%, ${templateData.ui.accentColor} 100%);
      color: ${templateData.ui.textColor};
    }
    
    nav {
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: 15px 20px;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    nav ul {
      display: flex;
      justify-content: center;
      gap: 15px;
      list-style: none;
      flex-wrap: wrap;
    }
    
    nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      padding: 5px 10px;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    nav a:hover {
      background: ${templateData.ui.bgColor};
      color: white;
    }
    
    section {
      padding: 60px 30px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    section h2 {
      font-size: 48px;
      text-align: center;
      margin-bottom: 40px;
    }
    
    .main-container {
      display: flex;
      align-items: center;
      gap: 30px;
      max-width: 800px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .image-wrapper {
      position: relative;
      flex-shrink: 0;
    }
    
    .rotating-border {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      padding: 4px;
      animation: rotate 3s linear infinite;
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .profile-pic {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .intro-text {
      flex: 1;
      min-width: 250px;
    }
    
    .intro-text h1 {
      font-size: 36px;
      margin-bottom: 15px;
    }
    
    .intro-text p {
      line-height: 1.8;
      margin-bottom: 20px;
      opacity: 0.95;
    }
    
    .social-icons {
      display: flex;
      gap: 15px;
      margin: 20px 0;
      justify-content: center;
    }
    
    .social-icons a {
      width: 45px;
      height: 45px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    
    .social-icons a:hover {
      background: white;
      color: ${templateData.ui.bgColor};
      transform: translateY(-3px);
    }
    
    .btn {
      padding: 12px 30px;
      background: white;
      color: ${templateData.ui.bgColor};
      border: none;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 15px auto;
      display: block;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .about-box {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 40px;
      border-radius: 15px;
      max-width: 800px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .about-box p {
      line-height: 1.8;
      font-size: 16px;
    }
    
    .skills-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      max-width: 800px;
    }
    
    .skills-column {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 25px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .skills-column h3 {
      font-size: 20px;
      margin-bottom: 20px;
    }
    
    .skills-column ul {
      list-style: none;
    }
    
    .skills-column li {
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .skills-column li:last-child {
      border-bottom: none;
    }
    
    .timeline {
      max-width: 800px;
      position: relative;
      padding-left: 40px;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255,255,255,0.3);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 40px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 20px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 20px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: white;
      border: 3px solid ${templateData.ui.bgColor};
    }
    
    .timeline-item h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    
    .timeline-item p {
      opacity: 0.9;
      margin: 5px 0;
    }
    
    .projects-container,
    .certifications-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
      max-width: 1000px;
    }
    
    .project-card,
    .certification-card {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 25px;
      border: 1px solid rgba(255,255,255,0.2);
      transition: transform 0.3s ease;
    }
    
    .project-card:hover,
    .certification-card:hover {
      transform: translateY(-5px);
    }
    
    .project-card h3,
    .certification-card h3 {
      font-size: 18px;
      margin-bottom: 12px;
    }
    
    .project-card p,
    .certification-card p {
      line-height: 1.6;
      opacity: 0.9;
    }
    
    .contact-form {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .contact-form input,
    .contact-form textarea {
      padding: 12px;
      border: 1px solid rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      color: white;
      font-family: 'Poppins', sans-serif;
    }
    
    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: rgba(255,255,255,0.6);
    }
    
    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      border-color: white;
      background: rgba(255,255,255,0.15);
    }
    
    footer {
      background: rgba(0,0,0,0.3);
      padding: 40px;
      text-align: center;
    }
    
    footer h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    
    footer p {
      opacity: 0.8;
      margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
      .skills-container {
        grid-template-columns: 1fr;
      }
      
      .projects-container,
      .certifications-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section id="home">
    <div class="main-container">
      <div class="image-wrapper">
        <div class="rotating-border">
          <img src="https://via.placeholder.com/150" alt="Profile" class="profile-pic">
        </div>
      </div>
      <div class="intro-text">
        <h1>${templateData.hero.title}</h1>
        <p>${templateData.hero.subtitle}</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
        </div>
        <button class="btn">Download CV</button>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="about-box">
      <h2>About Me</h2>
      <p>${templateData.about.text}</p>
    </div>
  </section>

  <section id="skills">
    <div style="width: 100%; max-width: 900px;">
      <h2>Skills</h2>
      <div class="skills-container">
        <div class="skills-column">
          <h3>Social Skills</h3>
          <ul>
            ${templateData.skills.social.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
        <div class="skills-column">
          <h3>Technical Skills</h3>
          <ul>
            ${templateData.skills.technical.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="education">
    <div style="width: 100%; max-width: 900px;">
      <h2>Education</h2>
      <div class="timeline">
        ${templateData.education.items.map(edu => `
          <div class="timeline-item">
            <h3>${edu.title}</h3>
            <p><strong>${edu.institution}</strong></p>
            <p><em>${edu.year}</em></p>
            <p>${edu.details}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="certifications">
    <div style="width: 100%; max-width: 1100px;">
      <h2>Certifications</h2>
      <div class="certifications-container">
        ${templateData.certifications.items.map(cert => `
          <div class="certification-card">
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="projects">
    <div style="width: 100%; max-width: 1100px;">
      <h2>Projects</h2>
      <div class="projects-container">
        ${templateData.projects.items.map(project => `
          <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="contact">
    <form class="contact-form">
      <h2>Contact Me</h2>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea rows="5" placeholder="Your Message" required></textarea>
      <button type="submit" class="btn">Send Message</button>
    </form>
  </section>

  <footer>
    <h2>Thank you for visiting!</h2>
    <p>&copy; 2026 Portfolio. All rights reserved.</p>
    <div class="social-icons">
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fas fa-envelope"></i></a>
    </div>
  </footer>

  <script>
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      });
    });
  </script>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio.html';
    a.click();
  };

  return (
    <div className="template-builder">
      <div className="builder-header">
        <h1>Portfolio Template Editor</h1>
        <p>Edit your portfolio template and export the code</p>
      </div>

      <div className="builder-layout">
        {/* EDITOR PANEL */}
        <div className="editor-panel">
          <div className="tabs-container">
            {['hero', 'about', 'skills', 'education', 'projects', 'certifications', 'ui'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="editor-content">
            {/* HERO */}
            {activeTab === 'hero' && (
              <div className="form-section">
                <h3>Hero Section</h3>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={templateData.hero.title}
                    onChange={(e) => handleChange('hero', 'title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Subtitle</label>
                  <textarea
                    value={templateData.hero.subtitle}
                    onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                    rows="3"
                  />
                </div>
              </div>
            )}

            {/* ABOUT */}
            {activeTab === 'about' && (
              <div className="form-section">
                <h3>About Section</h3>
                <div className="form-group">
                  <label>About Text</label>
                  <textarea
                    value={templateData.about.text}
                    onChange={(e) => handleChange('about', 'text', e.target.value)}
                    rows="6"
                  />
                </div>
              </div>
            )}

            {/* SKILLS */}
            {activeTab === 'skills' && (
              <div className="form-section">
                <h3>Skills Section</h3>
                <div className="form-group">
                  <label>Social Skills (comma-separated)</label>
                  <textarea
                    value={templateData.skills.social.join(', ')}
                    onChange={(e) => handleChange('skills', 'social', e.target.value.split(',').map(s => s.trim()))}
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label>Technical Skills (comma-separated)</label>
                  <textarea
                    value={templateData.skills.technical.join(', ')}
                    onChange={(e) => handleChange('skills', 'technical', e.target.value.split(',').map(s => s.trim()))}
                    rows="3"
                  />
                </div>
              </div>
            )}

            {/* EDUCATION */}
            {activeTab === 'education' && (
              <div className="form-section">
                <h3>Education Section</h3>
                {templateData.education.items.map((item, i) => (
                  <div key={i} className="item-group">
                    <input
                      type="text"
                      placeholder="Degree"
                      value={item.title}
                      onChange={(e) => handleArrayChange('education', i, 'title', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Institution"
                      value={item.institution}
                      onChange={(e) => handleArrayChange('education', i, 'institution', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={item.year}
                      onChange={(e) => handleArrayChange('education', i, 'year', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Details (CGPA, %)"
                      value={item.details}
                      onChange={(e) => handleArrayChange('education', i, 'details', e.target.value)}
                    />
                    <button className="btn-remove" onClick={() => handleRemoveItem('education', i)}>Remove</button>
                  </div>
                ))}
                <button className="btn-add-item" onClick={() => handleAddItem('education')}>+ Add Education</button>
              </div>
            )}

            {/* PROJECTS */}
            {activeTab === 'projects' && (
              <div className="form-section">
                <h3>Projects Section</h3>
                {templateData.projects.items.map((item, i) => (
                  <div key={i} className="item-group">
                    <input
                      type="text"
                      placeholder="Project Name"
                      value={item.title}
                      onChange={(e) => handleArrayChange('projects', i, 'title', e.target.value)}
                    />
                    <textarea
                      placeholder="Project Description"
                      value={item.description}
                      onChange={(e) => handleArrayChange('projects', i, 'description', e.target.value)}
                      rows="3"
                    />
                    <button className="btn-remove" onClick={() => handleRemoveItem('projects', i)}>Remove</button>
                  </div>
                ))}
                <button className="btn-add-item" onClick={() => handleAddItem('projects')}>+ Add Project</button>
              </div>
            )}

            {/* CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <div className="form-section">
                <h3>Certifications Section</h3>
                {templateData.certifications.items.map((item, i) => (
                  <div key={i} className="item-group">
                    <input
                      type="text"
                      placeholder="Certificate Name"
                      value={item.title}
                      onChange={(e) => handleArrayChange('certifications', i, 'title', e.target.value)}
                    />
                    <textarea
                      placeholder="Certificate Description"
                      value={item.description}
                      onChange={(e) => handleArrayChange('certifications', i, 'description', e.target.value)}
                      rows="3"
                    />
                    <button className="btn-remove" onClick={() => handleRemoveItem('certifications', i)}>Remove</button>
                  </div>
                ))}
                <button className="btn-add-item" onClick={() => handleAddItem('certifications')}>+ Add Certification</button>
              </div>
            )}

            {/* UI */}
            {activeTab === 'ui' && (
              <div className="form-section">
                <h3>UI Colors</h3>
                <div className="form-group">
                  <label>Primary Color</label>
                  <div className="color-input">
                    <input
                      type="color"
                      value={templateData.ui.bgColor}
                      onChange={(e) => handleChange('ui', 'bgColor', e.target.value)}
                    />
                    <span>{templateData.ui.bgColor}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label>Accent Color</label>
                  <div className="color-input">
                    <input
                      type="color"
                      value={templateData.ui.accentColor}
                      onChange={(e) => handleChange('ui', 'accentColor', e.target.value)}
                    />
                    <span>{templateData.ui.accentColor}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="editor-actions">
            <button className="btn-export" onClick={exportHTML}>
              📤 Export HTML
            </button>
          </div>
        </div>

        {/* PREVIEW PANEL */}
        <div className={`preview-panel ${!showPreview ? 'hidden' : ''}`}>
          <div className="preview-controls">
            <h3>Live Preview</h3>
            <button onClick={() => setShowPreview(!showPreview)}>✕</button>
          </div>
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  * { margin: 0; padding: 0; box-sizing: border-box; }
                  body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, ${templateData.ui.bgColor} 0%, ${templateData.ui.accentColor} 100%); color: ${templateData.ui.textColor}; }
                  nav { position: sticky; top: 0; background: rgba(255,255,255,0.95); padding: 15px; z-index: 100; }
                  nav ul { display: flex; justify-content: center; gap: 10px; list-style: none; flex-wrap: wrap; }
                  nav a { color: #333; text-decoration: none; font-weight: 500; padding: 5px 10px; border-radius: 4px; font-size: 12px; }
                  section { padding: 40px 20px; min-height: 500px; display: flex; align-items: center; justify-content: center; flex-direction: column; }
                  h2 { font-size: 32px; margin-bottom: 30px; text-align: center; }
                  h1 { font-size: 28px; margin-bottom: 15px; }
                  p { line-height: 1.6; opacity: 0.95; }
                  .main-container { display: flex; gap: 30px; align-items: center; flex-wrap: wrap; justify-content: center; max-width: 600px; }
                  .intro-text { flex: 1; min-width: 200px; }
                  .about-box { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 10px; max-width: 600px; }
                  .skills-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 700px; width: 100%; }
                  .skills-column { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
                  .skills-column h3 { font-size: 18px; margin-bottom: 15px; }
                  .skills-column ul { list-style: none; }
                  .skills-column li { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 14px; }
                  .projects-container, .certifications-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px; width: 100%; }
                  .project-card, .certification-card { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
                  .timeline { position: relative; padding-left: 30px; max-width: 600px; }
                  .timeline::before { content: ''; position: absolute; left: 10px; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.3); }
                  .timeline-item { position: relative; margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; }
                  .timeline-item::before { content: ''; position: absolute; left: -24px; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: white; }
                  .timeline-item h3 { font-size: 16px; margin-bottom: 5px; }
                  .timeline-item p { font-size: 13px; margin: 3px 0; }
                  .btn { padding: 10px 20px; background: white; color: ${templateData.ui.bgColor}; border: none; border-radius: 20px; font-weight: 600; cursor: pointer; margin: 15px auto; display: block; }
                  .social-icons { display: flex; gap: 10px; justify-content: center; margin: 15px 0; }
                  .social-icons a { width: 35px; height: 35px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; font-size: 14px; }
                  footer { background: rgba(0,0,0,0.3); padding: 30px; text-align: center; }
                  footer h2 { font-size: 24px; margin-bottom: 10px; }
                  @media (max-width: 600px) { .skills-container { grid-template-columns: 1fr; } section { padding: 30px 15px; min-height: auto; } }
                </style>
              </head>
              <body>
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
                <section>
                  <div class="main-container">
                    <div style="text-align: center; flex: 1;">
                      <h1>${templateData.hero.title}</h1>
                      <p>${templateData.hero.subtitle}</p>
                      <div class="social-icons">
                        <a href="#">📘</a>
                        <a href="#">💼</a>
                        <a href="#">📧</a>
                      </div>
                      <button class="btn">Download CV</button>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="about-box">
                    <h2>About Me</h2>
                    <p>${templateData.about.text}</p>
                  </div>
                </section>
                <section>
                  <div style="width: 100%; max-width: 700px;">
                    <h2>Skills</h2>
                    <div class="skills-container">
                      <div class="skills-column">
                        <h3>Social Skills</h3>
                        <ul>
                          ${templateData.skills.social.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                      </div>
                      <div class="skills-column">
                        <h3>Technical Skills</h3>
                        <ul>
                          ${templateData.skills.technical.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </body>
              </html>
            `}
            className="preview-iframe"
            title="Portfolio Preview"
          />
        </div>
      </div>
    </div>
  );
}

export default TemplateBuilder;

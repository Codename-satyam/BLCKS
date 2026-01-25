import { useEffect, useRef } from "react";
import "./PortfolioPreview.css";

function PortfolioPreview({ data }) {
  const previewRef = useRef(null);

  const hero = data.hero || {};
  const about = data.about || {};
  const skills = data.skills || {};
  const education = data.education?.items || [];
  const projects = data.projects?.items || [];
  const certifications = data.certifications?.items || [];
  const ui = data.ui || {};
  const contact = data.contact || {};

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
    <div
      ref={previewRef}
      className="portfolio-preview"
      style={{
        backgroundColor: ui.bgColor || "#1a1a1a",
        color: ui.textColor || "#ffffff",
      }}
    >
      {/* NAV */}
      <nav>
        <ul>
          {["home","about","skills","education","projects","certifications","contact"].map(
            (id) => (
              <li key={id}>
                <a href={`#${id}`}>{id.toUpperCase()}</a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* HERO */}
      <section id="home">
        <div className="main-container animate-on-scroll">
          <div className="intro-text">
            <h1>{hero.title || ""}</h1>
            <p>{hero.subtitle || ""}</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-box animate-on-scroll">
          <h2>About</h2>
          {(about.text || "")
            .split("\n\n")
            .filter(Boolean)
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="animate-on-scroll">
          <h2>Skills</h2>
          <div className="skills-container">
            <SkillColumn title="Social Skills" items={skills.social} />
            <SkillColumn title="Technical Skills" items={skills.technical} />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((e, i) => (
            <div key={i} className="timeline-item">
              <h3>{e.title}</h3>
              <p>{e.institution}</p>
              <span>{e.year}</span>
              <p>{e.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              {p.image && <img src={p.image} alt={p.title} />}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <h2>Certifications</h2>
        <div className="certifications-container">
          {certifications.map((c, i) => (
            <div key={i} className="certification-card">
              {c.image && <img src={c.image} alt={c.title} />}
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>{contact.email || ""}</p>
      </section>

      <footer>
        © 2025 {hero.title?.replace("Hi! I am ", "") || ""}
      </footer>
    </div>
  );
}

/* SAFE SKILL COLUMN */
function SkillColumn({ title, items }) {
  return (
    <div className="skills-column">
      <h3>{title}</h3>
      <ul>
        {(items || "")
          .split(",")
          .filter(Boolean)
          .map((skill) => (
            <li key={skill.trim()}>{skill.trim()}</li>
          ))}
      </ul>
    </div>
  );
}

export default PortfolioPreview;

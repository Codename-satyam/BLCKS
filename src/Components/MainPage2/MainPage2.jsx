import { useEffect, useState } from "react";
import "./MainPage2.css";

import box1 from "../../Content/images/box1.jpg";
import box2 from "../../Content/images/box2.jpg";
import box3 from "../../Content/images/box3.jpg";
import box4 from "../../Content/images/box4.jpg";
import box5 from "../../Content/images/box5.jpg";
import box6 from "../../Content/images/box6.jpg";
import box7 from "../../Content/images/box7.jpg";
import box8 from "../../Content/images/box8.jpg";
import box9 from "../../Content/images/box9.jpg";
import box10 from "../../Content/images/box10.jpg";

const projects = [
  { id: 1, src: box1, title: "Modern Architecture", desc: "A deep dive into minimalist structural design and glass facades." },
  { id: 2, src: box2, title: "Urban Jungle", desc: "Exploring the intersection of nature and concrete in metropolitan areas." },
  { id: 3, src: box3, title: "Digital Horizon", desc: "A conceptual piece focusing on neon aesthetics and futuristic UI." },
  { id: 4, src: box4, title: "Abstract Flow", desc: "Experimental motion graphics captured in a single frame." },
  { id: 5, src: box5, title: "Timber & Steel", desc: "Industrial interior design showcasing raw materials." },
  { id: 6, src: box6, title: "Serene Landscapes", desc: "Capturing the tranquility of untouched natural environments." },
  { id: 7, src: box7, title: "Vibrant Streets", desc: "A colorful exploration of street art and urban culture." },
  { id: 8, src: box8, title: "Futuristic Mobility", desc: "Concept designs for next-gen transportation solutions." },
  { id: 9, src: box9, title: "Culinary Artistry", desc: "A visual feast highlighting modern gastronomy presentations." },
  { id: 10, src: box10, title: "Ethereal Forms", desc: "Sculptural designs inspired by fluid dynamics and organic shapes." },
];

function MainPage2() {
  const [offset, setOffset] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section className="carousel-section">
      <div className="upper_head">
        <h2>Featured Work</h2>
        <p>Explore some of our latest projects and designs</p>
      </div>

      {/* TOP LANE */}
      <div className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(${offset}px)` }}>
          {[...projects, ...projects].map((project, i) => (
            <div key={`top-${i}`} className="carousel-item" onClick={() => setSelectedProject(project)}>
              <img src={project.src} alt={project.title} />
              <div className="item-hover-layer">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LANE */}
      <div className="carousel">
        <div className="carousel-track right" style={{ transform: `translateX(${-offset}px)` }}>
          {[...projects, ...projects].map((project, i) => (
            <div key={`bottom-${i}`} className="carousel-item" onClick={() => setSelectedProject(project)}>
              <img src={project.src} alt={project.title} />
              <div className="item-hover-layer">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img src={selectedProject.src} alt={selectedProject.title} />
              </div>
              <div className="modal-text">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.desc}</p>
                <div className="modal-meta">
                  <span><strong>Client:</strong> Creative Agency</span>
                  <span><strong>Year:</strong> 2024</span>
                </div>
                <button className="visit-project-btn">Visit Live Project →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MainPage2;
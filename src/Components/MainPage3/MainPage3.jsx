import { useEffect, useRef, useState } from "react";
import "./MainPage3.css";
import TemplatePreview from "../TemplatePreview/TemplatePreview.jsx";

function MainPage3() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`capabilities ${visible ? "show" : ""}`}
    >
      <div className="cap-layout">
        {/* LEFT FEATURES */}
        <div className="cap-column left">
          <div className="feature top">
            <h3>Live Editing</h3>
            <p>Instant visual feedback as you customize layouts.</p>
          </div>

          <div className="feature bottom">
            <h3>Component Driven</h3>
            <p>Reusable blocks that scale across pages.</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="cap-center">
          <h2 className="preview-title">Template Preview</h2>
          <TemplatePreview />
        </div>

        {/* RIGHT FEATURES */}
        <div className="cap-column right">
          <div className="feature top">
            <h3>Motion Ready</h3>
            <p>Built-in transitions for smooth interactions.</p>
          </div>

          <div className="feature bottom">
            <h3>Fully Responsive</h3>
            <p>Optimized layouts across all screen sizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage3;

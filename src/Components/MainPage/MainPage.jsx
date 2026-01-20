import { useEffect, useRef, useState } from "react";
import "./MainPage.css";

function Homepage() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`zero ${visible ? "show" : ""}`}
    >
      {/* UI Boxes (each different) */}
      <div className="ui-box top-left" style={{ "--x": "-120px", "--delay": "0.1s" }} > </div>
      <div className="ui-box left-card" style={{ "--x": "-160px", "--delay": "0.2s" }} > </div>
      <div className="ui-box top-right" style={{ "--x": "120px", "--delay": "0.3s" }} > </div>
      <div className="ui-box right-card" style={{ "--x": "160px", "--delay": "0.4s" }} > </div>

      {/* Center Content */}
      <div className="zero-center">
        <h1>
          Create a website <br /> without limits
        </h1>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}

export default Homepage;

import { useEffect, useState } from "react";
import "./Homepage.css";
import Background from "../../Content/background1.mp4";

function Homepage() {
  const [darken, setDarken] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const value = Math.min(window.scrollY / 300, 0.6);
      setDarken(value);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="background-video">
        <video autoPlay muted loop playsInline>
          <source src={Background} type="video/mp4" />
        </video>
        <div
          className="video-overlay"
          style={{ background: `rgba(0,0,0,${darken})` }}
        />
      </div>

      <div className="hero-content fade-in">
        <h1>Welcome To BLCKS</h1>

        <div className="scroll_down" onClick={scrollDown}>
          <div className="head">scroll down</div>
          <span className="arrow">&#8595;</span>
        </div>
      </div>
    </section>
  );
}

export default Homepage;

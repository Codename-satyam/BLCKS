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
const images = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
];

function MainPage2() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="carousel-section">
      <div className="upper_head">
        <h2>Featured Work</h2>
        <p>Explore some of our latest projects and designs</p>
      </div>
      {/* TOP LANE */}
      <div className="carousel">
        <div
          className="carousel-track left"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {[...images, ...images].map((src, i) => (
            <div className="carousel-item" key={`top-${i}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LANE */}
      <div className="carousel">
        <div
          className="carousel-track right"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {[...images, ...images].map((src, i) => (
            <div className="carousel-item" key={`bottom-${i}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainPage2;

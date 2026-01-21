import { useEffect, useState } from "react";
import "./TemplatePreview.css";
import img1 from "../../Content/images/1.png";
import img2 from "../../Content/images/2.png";
import img3 from "../../Content/images/3.png";

const previews = [img1, img2, img3];

function TemplatePreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % previews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="template-container">
      <div className="template-frame">
        <img
          src={previews[active]}
          className="template-image"
          key={active}
          alt="template preview"
        />
      </div>
    </div>
  );
}

export default TemplatePreview;

import { useState } from "react";
import "./PageBuilder.css";

function PageBuilder() {
  const [title, setTitle] = useState("Welcome to My Website");
  const [subtitle, setSubtitle] = useState("Build pages visually with live preview");
  const [bgColor, setBgColor] = useState("#0b0f1a");
  const [textColor, setTextColor] = useState("#ffffff");

  return (
    <div className="builder">
      {/* LEFT: EDITOR PANEL */}
      <div className="builder-panel">
        <h2>Page Settings</h2>

        <label>
          Page Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Subtitle
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </label>

        <label>
          Background Color
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>

        <label>
          Text Color
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
      </div>

      {/* RIGHT: LIVE PREVIEW */}
      <div className="builder-preview">
        <div
          className="preview-page"
          style={{ background: bgColor, color: textColor }}
        >
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default PageBuilder;

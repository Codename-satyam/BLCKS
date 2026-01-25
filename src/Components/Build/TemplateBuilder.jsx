import { useState } from "react";
import "./TemplateBuilder.css";

// Presaved Templates
const presetTemplates = [
  {
    id: 1,
    name: "Business Portfolio",
    category: "Portfolio",
    thumbnail: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    sections: [
      { type: "hero", title: "Welcome to Our Business", subtitle: "Professional services you can trust" },
      { type: "features", items: ["Quality", "Reliability", "Innovation"] },
      { type: "cta", text: "Get Started Today", buttonText: "Contact Us" }
    ]
  },
  {
    id: 2,
    name: "Creative Agency",
    category: "Agency",
    thumbnail: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    sections: [
      { type: "hero", title: "Creative Solutions", subtitle: "Bringing your ideas to life" },
      { type: "portfolio", count: 6 },
      { type: "testimonials", count: 3 }
    ]
  },
  {
    id: 3,
    name: "E-Commerce Store",
    category: "E-commerce",
    thumbnail: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    sections: [
      { type: "hero", title: "Shop the Latest Trends", subtitle: "Quality products at great prices" },
      { type: "products", grid: "3x3" },
      { type: "footer", links: true }
    ]
  },
  {
    id: 4,
    name: "Landing Page",
    category: "Marketing",
    thumbnail: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    sections: [
      { type: "hero", title: "Launch Your Product", subtitle: "Everything you need to succeed" },
      { type: "features", items: ["Fast", "Secure", "Scalable"] },
      { type: "pricing", plans: 3 }
    ]
  },
  {
    id: 5,
    name: "Blog Theme",
    category: "Blog",
    thumbnail: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    sections: [
      { type: "hero", title: "Share Your Stories", subtitle: "A beautiful blogging experience" },
      { type: "posts", layout: "grid" },
      { type: "sidebar", widgets: true }
    ]
  },
  {
    id: 6,
    name: "Restaurant Menu",
    category: "Restaurant",
    thumbnail: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    sections: [
      { type: "hero", title: "Delicious Cuisine", subtitle: "Experience culinary excellence" },
      { type: "menu", categories: ["Appetizers", "Main Course", "Desserts"] },
      { type: "reservation", form: true }
    ]
  },
  {
    id: 7,
    name: "SaaS Product",
    category: "SaaS",
    thumbnail: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    sections: [
      { type: "hero", title: "Streamline Your Workflow", subtitle: "All-in-one platform for teams" },
      { type: "features", items: ["Collaboration", "Analytics", "Automation"] },
      { type: "pricing", plans: 3 }
    ]
  },
  {
    id: 8,
    name: "Photography Portfolio",
    category: "Portfolio",
    thumbnail: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    sections: [
      { type: "hero", title: "Capturing Moments", subtitle: "Professional photography services" },
      { type: "gallery", layout: "masonry" },
      { type: "contact", form: true }
    ]
  }
];

function TemplateBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isBuilding, setIsBuilding] = useState(false);

  const categories = ["All", ...new Set(presetTemplates.map(t => t.category))];

  const filteredTemplates = activeCategory === "All" 
    ? presetTemplates 
    : presetTemplates.filter(t => t.category === activeCategory);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  const handleStartBuilding = () => {
    if (selectedTemplate) {
      setIsBuilding(true);
    }
  };

  const handleReset = () => {
    setIsBuilding(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="template-builder">
      {!isBuilding ? (
        <>
          {/* Header Section */}
          <div className="builder-header">
            <h1>Template Builder</h1>
            <p>Choose from our presaved templates and start building your website</p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Template Grid */}
          <div className="templates-grid">
            {filteredTemplates.map(template => (
              <div
                key={template.id}
                className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                onClick={() => handleSelectTemplate(template)}
              >
                <div 
                  className="template-thumbnail" 
                  style={{ background: template.thumbnail }}
                >
                  <div className="template-overlay">
                    <span className="preview-text">Preview</span>
                  </div>
                </div>
                <div className="template-info">
                  <h3>{template.name}</h3>
                  <span className="template-category">{template.category}</span>
                  <div className="template-sections">
                    {template.sections.length} sections
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Template Details */}
          {selectedTemplate && (
            <div className="template-details">
              <div className="details-content">
                <h2>{selectedTemplate.name}</h2>
                <p className="details-category">Category: {selectedTemplate.category}</p>
                
                <div className="sections-list">
                  <h3>Template Sections:</h3>
                  <ul>
                    {selectedTemplate.sections.map((section, idx) => (
                      <li key={idx}>
                        <strong>{section.type.toUpperCase()}</strong>
                        {section.title && ` - ${section.title}`}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="action-buttons">
                  <button className="btn-primary" onClick={handleStartBuilding}>
                    Start Building
                  </button>
                  <button className="btn-secondary" onClick={() => setSelectedTemplate(null)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        // Builder Canvas
        <div className="builder-canvas">
          <div className="canvas-header">
            <h2>Building: {selectedTemplate.name}</h2>
            <button className="btn-back" onClick={handleReset}>← Back to Templates</button>
          </div>

          <div className="canvas-workspace">
            <div className="canvas-sidebar">
              <h3>Sections</h3>
              <div className="sections-panel">
                {selectedTemplate.sections.map((section, idx) => (
                  <div key={idx} className="section-item">
                    <span className="section-icon">📄</span>
                    <span className="section-name">{section.type}</span>
                  </div>
                ))}
              </div>

              <div className="add-section">
                <button className="btn-add">+ Add Section</button>
              </div>
            </div>

            <div className="canvas-preview">
              <div className="preview-container">
                <div className="preview-header">
                  <div className="preview-controls">
                    <button className="control-btn active">💻 Desktop</button>
                    <button className="control-btn">📱 Mobile</button>
                  </div>
                </div>

                <div className="preview-frame">
                  {selectedTemplate.sections.map((section, idx) => (
                    <div key={idx} className="preview-section">
                      <div className="section-content">
                        <h4>{section.type.toUpperCase()}</h4>
                        {section.title && <p className="section-title">{section.title}</p>}
                        {section.subtitle && <p className="section-subtitle">{section.subtitle}</p>}
                        {section.items && (
                          <div className="section-items">
                            {section.items.map((item, i) => (
                              <span key={i} className="item-tag">{item}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button className="edit-section-btn">✏️ Edit</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="canvas-actions">
                <button className="btn-save">💾 Save Template</button>
                <button className="btn-export">📤 Export Code</button>
                <button className="btn-publish">🚀 Publish</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateBuilder;

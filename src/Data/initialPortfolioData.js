const initialData = {
  hero: {
    title: "Hi! I am Riya Kumari",
    subtitle:
      "A third-year software testing student passionate about quality assurance.",
    enabled: true,
  },

  about: {
    text:
      "Hello! I'm Riya Kumari, a third-year student pursuing a career in software testing.",
    enabled: true,
  },

  skills: {
    social: "Communication, Teamwork, Leadership, Time Management",
    technical: "HTML, CSS, JavaScript, React, Python",
    enabled: true,
  },

  education: {
    enabled: true,
    items: [
      {
        title: "B.Tech",
        institution: "Lovely Professional University",
        year: "2022 - Present",
        details: "4.5 CGPA",
      },
    ],
  },

  projects: {
    enabled: true,
    items: [
      {
        title: "AniBuy",
        description: "Anime merchandise e-commerce platform",
        image: null,
      },
    ],
  },

  certifications: {
    enabled: true,
    items: [
      {
        title: "Gen AI for Everyone",
        description: "Introduction to Generative AI",
        image: null,
      },
    ],
  },

  contact: {
    email: "riya06354@gmail.com",
    enabled: true,
  },

  ui: {
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
    device: "desktop", // desktop | tablet | mobile
  },

  order: [
    "hero",
    "about",
    "skills",
    "education",
    "projects",
    "certifications",
    "contact",
  ],
};

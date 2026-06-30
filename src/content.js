export const personalInfo = {
  name: "Haripriyan A",
  role: "Software Engineer",
  email: "haripriyan0109r@gmail.com",
  phone: "9787586293",
  location: "India",
  resumeUrl: "#", 
  status: "Open to SDE Internships 2025/2026",
  bio: "As a second-year CSE student at Sri Eshwar College of Engineering, I build production-grade web applications and AI systems that solve real problems. Passionate about software architecture, system design, and open-source contributions."
};

export const socialLinks = {
  github: "https://github.com/haripri0109r",
  linkedin: "https://linkedin.com/in/haripriyan-a",
  portfolio: "https://haripri0109r.github.io/Portfolio"
};

const placeholderSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='800' height='600' fill='%231a1c23'/><path d='M350 250 L450 250 L400 200 Z' fill='%23333'/><path d='M300 350 L500 350 L400 250 Z' fill='%23444'/></svg>";

export const projectsData = [
  {
    id: "course-finder",
    title: "Course Finder",
    category: "Full Stack",
    date: "2026",
    github: "https://github.com/haripri0109r/course-finder",
    shortDescription: "A full-stack course discovery platform enabling users to explore, track, and manage learning progress.",
    description: "Architected and deployed a full-stack course discovery platform enabling users to explore, track, and manage learning progress with personalized recommendations, course completion tracking, and push notifications with deep linking. Built scalable RESTful APIs using Node.js and Express.js integrated with MongoDB, and optimized React Native front-end performance for a seamless cross-platform user experience.",
    techStack: "MongoDB, Express.js, React Native, Node.js, JavaScript",
    images: [placeholderSvg, placeholderSvg, placeholderSvg]
  },
  {
    id: "focustube",
    title: "FocusTube",
    category: "Chrome Extension",
    date: "2026",
    github: "https://github.com/haripri0109r/focustube",
    shortDescription: "A productivity extension that enhances focus by analyzing and filtering YouTube content.",
    description: "Designed and deployed a cross-browser productivity extension that enhances focus by analyzing and filtering YouTube content based on user-defined learning preferences. Built dynamic feed processing, Shorts blocking, educational content prioritization, channel management, and persistent local storage features, resulting in a personalized and distraction-free video consumption experience while maintaining seamless integration with YouTube's interface.",
    techStack: "React, TypeScript, Plasmo, Chrome Extension API, IndexedDB, Tailwind CSS",
    images: [placeholderSvg, placeholderSvg, placeholderSvg]
  },
  {
    id: "smart-research",
    title: "Smart Research Assistant",
    category: "AI / ML System",
    date: "2026",
    github: "https://github.com/haripri0109r/smart-research",
    shortDescription: "A multi-agent AI research platform that automates paper discovery and summarization.",
    description: "Designed and deployed a multi-agent AI research platform that automates paper discovery, summarization, comparison, document-grounded chat, and research report generation. Implemented a RAG pipeline using ChromaDB, BGE embeddings, and cosine similarity search with Ollama-hosted Qwen2.5 models, enabling accurate semantic retrieval and reducing hallucinations. Built PDF/DOCX export, persistent chat history, task tracking, and intelligent caching mechanisms to optimize research workflows and system performance.",
    techStack: "FastAPI, React.js, SQLite, ChromaDB, Ollama, Qwen2.5, BGE Embeddings, OpenAlex API",
    images: [placeholderSvg, placeholderSvg, placeholderSvg]
  }
];

export const skillsData = {
  categories: [
    {
      title: "Frontend & UI",
      skills: [
        { name: "ReactJS" },
        { name: "React Native" },
        { name: "Javascript" }
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "NodeJS" },
        { name: "Express" },
        { name: "Python" },
        { name: "C / C++" }
      ]
    },
    {
      title: "Tools & DBs",
      skills: [
        { name: "SQL / PostgresSQL" },
        { name: "MongoDB" },
        { name: "Docker / AWS" },
        { name: "Git / GitHub" }
      ]
    }
  ]
};

export const aboutData = {
  experience: [
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      duration: "2026",
      highlights: [
        "Contributing to open-source projects through GSSoC 2026 by resolving GitHub issues, developing new features, and submitting pull requests using Git, GitHub, and collaborative development workflows."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Better Tomorrow",
      duration: "2025",
      highlights: [
        "Developed a full-stack E-commerce web application using React.js, Node.js, Express.js, and MongoDB, implementing CRUD APIs, user authentication with JWT, cart functionality, and product listing features."
      ]
    },
    {
      role: "B.E. Computer Science",
      company: "Sri Eshwar College of Engineering",
      duration: "2024 - 2028",
      highlights: [
        "CGPA: 7.5 (IIIrd - sem)",
        "2nd Runner - CodeLee Programming Competition (Leetcode) April 2025",
        "2nd Runner - Freshathon (Web-design Competition) December 2025"
      ]
    }
  ]
};

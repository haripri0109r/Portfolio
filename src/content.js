export const personalInfo = {
  name: "Haripriyan A",
  email: "haripri0109r@gmail.com",
  phone: "+91 9787586293",
  resumeUrl: "https://drive.google.com/drive/folders/1wX26pGf0KfKY6PvdkUqqDys_dPoMGPGG"
};

export const socialLinks = {
  github: "https://github.com/haripri0109r",
  linkedin: "https://www.linkedin.com/in/haripriyana677/",
  portfolio: "https://haripri0109r.github.io/Portfolio"
};

export const educationData = [
  {
    institution: "Sri Eshwar College of engineering",
    score: "7.8(IVrd - sem)",
    degree: "B.E CSE",
    duration: "2024-2028"
  },
  {
    institution: "Ambal Matriculation Higher Secondary School",
    score: "81.6%",
    degree: "HSC",
    duration: "2023-2024"
  },
  {
    institution: "Ambal Matriculation Higher Secondary School",
    score: "83.2%",
    degree: "SSLC",
    duration: "2021-2022"
  }
];

export const internshipsData = [
  {
    role: "Better Tomorrow",
    company: "Better Tomorrow",
    duration: "2025",
    description: "Developed a full-stack E-commerce web application using React.js, Node.js, Express.js, and MongoDB, implementing CRUD APIs, user authentication with JWT, cart functionality, and product listing features."
  }
];

export const openSourceData = [
  {
    role: "Open Source Contributor",
    company: "Learning Unlimited",
    duration: "2026",
    description: "Contributed to Learning Unlimited's open-source projects by resolving GitHub issues, implementing new features, fixing bugs, and submitting pull requests using Git, GitHub, and collaborative software development workflows."
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    duration: "2026",
    description: "Contributing to open-source projects through GSSoC 2026 by resolving GitHub issues, developing new features, and submitting pull requests using Git, GitHub, and collaborative development workflows."
  }
];


export const projectsData = [
  {
    id: "devpilot",
    title: "DevPilot – Multi-Agent AI Software Development Platform",
    category: "Agent AI System",
    date: "2026",
    github: "https://github.com/haripri0109r/Devpilot",
    shortDescription: "An intelligent multi-agent platform automating the complete software development lifecycle.",
    description: "Architected an intelligent multi-agent software development platform that automates the complete software development lifecycle through specialized AI agents. Designed an orchestrated workflow integrating Chat, Planner, Architect, Coder, Validator, Tester, Reviewer, Fixer, Writer, and GitHub agents to transform natural-language requirements into production-ready software.",
    longDescriptionHTML: `
      <p><strong>DevPilot</strong> is a <strong>CLI-based, LLM-powered multi-agent software development platform</strong> designed to assist developers throughout the software development lifecycle. It uses Large Language Models (LLMs) as the intelligence layer behind specialized AI agents that collaborate to understand requirements, plan solutions, generate code, analyze implementations, debug issues, and review code.</p>
      <br/>
      <p>Unlike a traditional single-prompt coding assistant, DevPilot follows a <strong>multi-agent approach</strong>, where different agents can focus on specific software engineering responsibilities. Developers interact with the system directly through the terminal, allowing AI-assisted development to fit naturally into a command-line development workflow.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>LLM-Powered Development</strong> – Uses Large Language Models to understand natural-language requirements, reason about software tasks, generate implementations, and assist with debugging.</li>
        <li><strong>Multi-Agent Architecture</strong> – Organizes development capabilities into specialized AI agents with defined responsibilities.</li>
        <li><strong>CLI-Based Workflow</strong> – Provides a terminal-first interface for interacting with the AI development system.</li>
        <li><strong>Requirement Understanding</strong> – Converts natural-language requirements into structured development tasks.</li>
        <li><strong>AI-Assisted Planning</strong> – Breaks complex software requirements into smaller, manageable implementation steps.</li>
        <li><strong>Code Generation</strong> – Generates code based on requirements, project context, and planned tasks.</li>
        <li><strong>Code Analysis & Review</strong> – Uses LLM reasoning to inspect implementations and identify potential issues or improvements.</li>
        <li><strong>Debugging Assistance</strong> – Analyzes errors and existing code to identify possible causes and suggest fixes.</li>
        <li><strong>Iterative Development</strong> – Supports an iterative workflow of planning, implementation, analysis, and refinement rather than one-shot code generation.</li>
        <li><strong>Codebase-Aware Interaction</strong> – Designed to work with project context so generated solutions can be aligned with the existing codebase.</li>
      </ul>

      <h3>Architecture</h3>
      <p>The platform follows a <strong>CLI → Orchestrator → Specialized Agents → Codebase → Validation</strong> workflow.</p>
      <br/>
      <p>The CLI acts as the developer-facing interface, while the orchestration layer manages the interaction between the different LLM-powered agents. Each agent can specialize in a particular software engineering task, allowing complex development requests to be decomposed into smaller AI-driven operations.</p>
      <br/>
      <p>This architecture makes DevPilot extensible: additional agents and development capabilities can be introduced without turning the entire system into a single monolithic AI workflow.</p>

      <h3>Technical Focus</h3>
      <p>DevPilot explores the practical application of <strong>LLMs and agentic AI to software engineering</strong>. The project focuses not only on generating code, but on using LLMs as reasoning components within a structured development workflow.</p>
      <br/>
      <p>The project demonstrates concepts such as:</p>
      <p><strong>Large Language Models · Multi-Agent Systems · Agent Orchestration · CLI Development · Task Decomposition · Code Generation · Code Analysis · AI-Assisted Debugging · Software Engineering Automation</strong></p>
    `,
    techStack: "Python, LangGraph, LangChain, OpenAI GPT, RAG, ChromaDB, FastAPI, React.js, TypeScript, PostgreSQL, GitHub API, Docker",
    images: ["/images/devpilot1.png", "/images/Devpolit2.png"]
  },
  {
    id: "learnyt",
    title: "LearnYT – YouTube Productivity Extension",
    category: "Chrome Extension",
    date: "2026",
    github: "https://github.com/haripri0109r/Focus_tube",
    shortDescription: "A YouTube learning productivity extension that creates a focused learning environment while tracking activity and generating analytics.",
    description: "Learnyt is a YouTube learning productivity extension that creates a more focused learning environment while tracking user activity and generating learning analytics. It helps users reduce distractions, monitor their learning behavior, and develop more intentional and productive YouTube-based learning habits.",
    longDescriptionHTML: `
      <p><strong>Learnyt</strong> is a <strong>browser-based YouTube productivity and learning extension</strong> designed to transform YouTube from a general entertainment platform into a more focused learning environment. The project helps users improve their learning productivity by reducing distractions while providing <strong>learning analytics and activity tracking</strong> to help users understand and improve their study habits.</p>
      <br/>
      <p>The extension focuses on making learning sessions more intentional by tracking learning activity and providing insights into how users interact with educational content over time.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>YouTube Learning Mode</strong> – Creates a more focused environment for users who use YouTube primarily for learning.</li>
        <li><strong>Distraction Reduction</strong> – Minimizes unnecessary or distracting content that can interrupt a learning session.</li>
        <li><strong>Learning Activity Tracking</strong> – Tracks user learning activity to provide a clearer picture of study and viewing behavior.</li>
        <li><strong>Learning Analytics</strong> – Converts tracked activity into useful learning insights, helping users understand their consistency and productivity.</li>
        <li><strong>Progress Monitoring</strong> – Allows users to monitor their learning activity over time and identify patterns in their study behavior.</li>
        <li><strong>Learning-Focused Experience</strong> – Designed around intentional learning rather than passive content consumption.</li>
        <li><strong>Productivity-Oriented Workflow</strong> – Helps users maintain focus and build more structured YouTube learning habits.</li>
      </ul>

      <h3>How It Works</h3>
      <p>Learnyt operates as a browser extension integrated with the YouTube environment. It observes relevant learning activity, records useful usage information, and processes that data into meaningful analytics.</p>
      <br/>
      <p>The general workflow is:</p>
      <p><strong>YouTube Activity → Activity Tracking → Learning Data → Analytics → User Insights</strong></p>
      <br/>
      <p>This allows the extension to go beyond simply blocking distractions. Instead, it gives users visibility into their learning behavior and helps them make better decisions about how they use YouTube for education.</p>

      <h3>Technical Focus</h3>
      <p>Learnyt combines <strong>browser extension development, user activity tracking, data processing, and learning analytics</strong> to address a practical productivity problem: the difficulty of staying focused while using a platform designed for both education and entertainment.</p>
      <br/>
      <p>The project demonstrates concepts including:</p>
      <p><strong>Browser Extension Development · Productivity Engineering · Activity Tracking · Learning Analytics · Data Processing · User-Centric Design</strong></p>
    `,
    techStack: "React, TypeScript, Plasmo, Chrome Extension API, IndexedDB, Tailwind CSS",
    images: ["/images/learnYt1.png", "/images/learnYt2.png", "/images/learnYt3.png"]
  },
  {
    id: "smart-research",
    title: "Smart Research Assistant",
    category: "Agent AI System",
    date: "2026",
    github: "https://github.com/haripri0109r/Smart_research_assistant",
    shortDescription: "An AI-powered research platform that uses LLMs to streamline information discovery, processing, and summarization.",
    description: "Smart Research Assistant is an AI-powered research platform that uses LLMs to streamline information discovery, content processing, summarization, and insight generation. It transforms a natural-language research query into structured, understandable knowledge, reducing the manual effort required to research complex topics.",
    longDescriptionHTML: `
      <p><strong>Smart Research Assistant</strong> is an <strong>AI-powered research assistant</strong> designed to simplify and accelerate the process of researching information from multiple sources. The system uses <strong>Large Language Models (LLMs)</strong> to help users understand research topics, process information, and generate concise, structured insights from collected content.</p>
      <br/>
      <p>Instead of requiring users to manually read through large amounts of information and organize their findings themselves, the assistant is designed to support the research workflow by combining information retrieval, content processing, and LLM-powered reasoning.</p>

      <h3>Key Capabilities</h3>
      <ul>
        <li><strong>AI-Powered Research</strong> – Uses LLMs to understand research queries and assist users in exploring complex topics.</li>
        <li><strong>Natural-Language Queries</strong> – Allows users to describe what they want to research using normal conversational language.</li>
        <li><strong>Information Processing</strong> – Processes gathered research content and extracts the information most relevant to the user's query.</li>
        <li><strong>Intelligent Summarization</strong> – Converts lengthy research material into concise and understandable summaries.</li>
        <li><strong>Context-Aware Responses</strong> – Uses the available research context to produce responses that are more relevant to the user's specific question.</li>
        <li><strong>Research Organization</strong> – Helps structure scattered information into a more usable research workflow.</li>
        <li><strong>Insight Generation</strong> – Uses LLM reasoning to identify important points, relationships, and conclusions from research material.</li>
        <li><strong>Productivity Improvement</strong> – Reduces the amount of repetitive manual work involved in collecting, reading, and organizing research information.</li>
      </ul>

      <h3>Research Workflow</h3>
      <p>The assistant follows an AI-assisted research pipeline:</p>
      <br/>
      <p><strong>Research Query → Information Gathering → Content Processing → LLM Analysis → Summarization & Insights → User</strong></p>
      <br/>
      <p>The LLM acts as the intelligence layer, processing the available research context and transforming raw information into structured knowledge that users can understand and work with.</p>

      <h3>Technical Focus</h3>
      <p>The project explores the use of <strong>LLMs for knowledge discovery and research automation</strong>, focusing on how AI can assist with information-heavy tasks rather than simply providing conversational responses.</p>
      <br/>
      <p>It demonstrates concepts including:</p>
      <p><strong>Large Language Models · AI-Assisted Research · Natural Language Processing · Information Retrieval · Content Processing · Text Summarization · Context-Aware AI · Knowledge Extraction</strong></p>
    `,
    techStack: "FastAPI, React.js, SQLite, ChromaDB, Ollama, Qwen2.5, BGE Embeddings, OpenAlex API",
    images: ["/images/smart_reseach_assistent1 (1).png", "/images/smart_reseach_assistent2.png", "/images/smart_reseach_assistent3.png"]
  },
  {
    id: "course-finder",
    title: "Course Finder",
    category: "Full Stack",
    date: "2026",
    github: "https://github.com/haripri0109r/course-finder",
    shortDescription: "A full-stack course aggregation platform that centralizes online learning resources into a searchable and personalized experience.",
    description: "Course Finder is a full-stack course aggregation and discovery platform that centralizes online learning resources into a searchable and personalized experience. Built with the MERN ecosystem and integrated with external course sources, the platform provides course aggregation, metadata processing, intelligent search, filtering, recommendations, JWT authentication, cloud media handling, and real-time communication.",
    longDescriptionHTML: `
      <p><strong>Course Finder</strong> is a <strong>full-stack course discovery and aggregation platform</strong> designed to help learners find relevant online courses from multiple learning platforms through a unified interface. Instead of requiring users to search across different platforms individually, the system collects and organizes course information into a centralized platform with search, filtering, recommendations, and personalized learning features.</p>
      <br/>
      <p>The platform was built to address the problem of fragmented online learning resources by providing users with a single place to discover courses based on their interests, technologies, and learning requirements.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Multi-Platform Course Aggregation</strong> – Collects and organizes course metadata from external learning platforms into a unified course discovery experience.</li>
        <li><strong>Intelligent Course Search</strong> – Enables users to search for courses using technologies, topics, keywords, and course titles.</li>
        <li><strong>Advanced Filtering</strong> – Allows users to narrow results based on relevant course attributes and learning preferences.</li>
        <li><strong>Course Recommendations</strong> – Provides relevant course suggestions based on user interests and course metadata.</li>
        <li><strong>Technology-Aware Search</strong> – Handles technology and programming-related terms to improve course discovery for technical learners.</li>
        <li><strong>Course Metadata Processing</strong> – Normalizes and processes information obtained from external sources so that courses can be presented consistently.</li>
        <li><strong>User Authentication</strong> – Provides secure user authentication and authorization using JWT-based authentication.</li>
        <li><strong>Personalized User Experience</strong> – Supports user-specific interactions and learning-related functionality.</li>
        <li><strong>Cloud-Based Media Handling</strong> – Integrates Cloudinary for handling application media and assets.</li>
        <li><strong>Real-Time Communication</strong> – Uses Socket.IO to support real-time application interactions where required.</li>
      </ul>

      <h3>System Architecture</h3>
      <p>Course Finder follows a modern <strong>MERN-based full-stack architecture</strong>:</p>
      <br/>
      <p><strong>React Native / React → Node.js & Express → REST APIs → MongoDB → External Course Sources</strong></p>
      <br/>
      <p>The backend is responsible for authentication, course processing, metadata management, search and filtering logic, and communication with external services. MongoDB is used for persistent data storage, while the frontend provides the user-facing course discovery experience.</p>
      <br/>
      <p>The system also uses validation and structured backend services to improve the reliability and maintainability of API operations.</p>

      <h3>Backend Engineering</h3>
      <p>The backend was developed using <strong>Node.js, Express.js, and MongoDB</strong>, with a modular service-oriented structure.</p>
      <br/>
      <p>Important backend capabilities include:</p>
      <ul>
        <li>REST API development</li>
        <li>JWT authentication and authorization</li>
        <li>MongoDB/Mongoose data modeling</li>
        <li>Request validation</li>
        <li>External API integration</li>
        <li>Course metadata normalization</li>
        <li>Search and filtering</li>
        <li>Recommendation logic</li>
        <li>Error handling</li>
        <li>Cloudinary integration</li>
        <li>Socket.IO real-time communication</li>
      </ul>
      <br/>
      <p>The platform also includes dedicated metadata-processing logic to handle inconsistent or incomplete information from external course sources and provide a consistent representation within the application.</p>

      <h3>Technical Focus</h3>
      <p>Course Finder demonstrates practical full-stack engineering through the integration of frontend applications, backend APIs, databases, third-party services, authentication, and data-processing workflows.</p>
      <br/>
      <p>The project demonstrates:</p>
      <p><strong>MERN Stack · React · React Native · Node.js · Express.js · MongoDB · Mongoose · REST APIs · JWT · Cloudinary · Socket.IO · API Integration · Search & Filtering · Recommendation Systems · Data Processing</strong></p>
    `,
    techStack: "MongoDB, Express.js, React Native, Node.js, JavaScript",
    images: ["/images/course_finder1.png", "/images/course_finder2.png", "/images/course_finder3.png"]
  }
];

export const achievementsData = [
  {
    title: "2nd Runner - CodeLee Programming Competition (Leetcode)",
    date: "April 2025"
  },
  {
    title: "2nd Runner - Freshathon (Web-design Competition)",
    date: "December 2025"
  }
];

export const codingProfilesData = [
  {
    platform: "Leetcode",
    details: "Max Rating:1767| Global Rank: 106,530| Problems Solved : 308",
    link: "https://leetcode.com/u/Haripriyan_2307/"
  },
  {
    platform: "SkillRack",
    details: "Bronze Medals : 315 | Global Rank: 17,961| Problems Solved : 1124",
    link: "https://skillrack.com/faces/resume.xhtml?id=514928&key=0d345d3d9db64288c59d67b5a48ac479abc78610"
  },
  {
    platform: "Codechef",
    details: "Bronze Badge | Problems Solved : 60 |Rating: 906",
    link: "https://www.codechef.com/users/leap_list_99"
  },
  {
    platform: "GeeksforGeeks",
    details: "Problems Solved : 78 | Coding Score: 153",
    link: "https://www.geeksforgeeks.org/profile/hariprio8qw"
  },
  {
    platform: "Codeforces",
    details: "Max Rating: 373 (Newbie)",
    link: "https://codeforces.com/profile/haripri0109r"
  }
];

export const certificationsData = [
  {
    title: "Design Thinking (Elite Silver)",
    issuer: "NPTEL",
    date: "2026"
  },
  {
    title: "Python Programming Masterclass",
    issuer: "Udemy",
    date: "2025"
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "2025"
  },
  {
    title: "Complete Guide to C programming Foundations",
    issuer: "LinkedIn Learning",
    date: "2025"
  },
  {
    title: "Java Basic and Advanced Concepts",
    issuer: "Udemy",
    date: "2025"
  }
];

export const skillsData = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "C++" }, { name: "Java" }, { name: "Javascript" }, { name: "Python" }
      ]
    },
    {
      title: "Technologies/Frameworks",
      skills: [
        { name: "NodeJS" }, { name: "Express" }, { name: "ReactJS" }, { name: "React Native" }, { name: "Cloud Computing" }, { name: "FireBase" }, { name: "RAG" }, { name: "Agentic AI" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "SQL" }, { name: "Mongodb" }, { name: "PostgresSQL" }, { name: "SQLite" }, { name: "ChromaDB" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" }, { name: "GitHub" }, { name: "Postman" }, { name: "Docker" }, { name: "Vercel" }, { name: "AWS" }, { name: "Render" }, { name: "Colab" }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms" }, { name: "OOP" }, { name: "DBMS" }, { name: "Computer Networks" }, { name: "Operating Systems" }
      ]
    }
  ]
};

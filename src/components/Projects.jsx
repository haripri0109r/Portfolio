import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './TiltCard.jsx';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AI Gesture-Based Home Automation System',
      description: 'A webcam-based AI application using Python and Computer Vision to help physically disabled individuals control home appliances hands-free. The system recognizes facial gestures like eye blink, mouth open, and head tilt, and includes an absence-detection feature with WhatsApp alerts for improved safety.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Twilio API'],
      category: 'ai',
      date: 'AUG 2024',
      link: '#',
      github: 'https://github.com/haripri0109r/smart_home_automation_System_with_gesture-.git'
    },
    {
      title: 'BellyFull (Food Delivery Website)',
      description: 'A front-end website designed to satisfy instant cravings with a user-friendly interface and smart recommendations, enabling quick access to favorite dishes and seamless ordering.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      category: 'web',
      date: 'NOV 2024',
      link: '#',
      github: 'https://github.com/haripri0109r/BellyFull-.git'
    },
    {
      title: 'Voting Management System',
      description: 'Developed a secure digital voting platform using Python to conduct fair and transparent elections. Features include user authentication, real-time vote counting, and an intuitive admin panel for result management.',
      tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
      category: 'fullstack',
      date: 'APR 2025',
      link: '#',
      github: 'https://github.com/haripri0109r/voting-system-.git'
    },
    {
      title: 'Invoice Generator',
      description: 'Engineered a user-friendly web application to create and manage invoices efficiently. The system automates invoice generation with customizable fields, improving accuracy and saving time for small businesses and freelancers.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      date: 'JAN 2024',
      link: '#',
      github: 'https://github.com/haripri0109r/invoice2.git'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-5 bg-darkBg" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">Projects</h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-8 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 text-base border-2 ${
                filter === cat.id 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent' 
                  : 'bg-cardBg text-slate-400 border-transparent hover:border-primary hover:text-slate-50'
              }`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <TiltCard
              key={index}
              strength={10}
              className="card card-gradient-border will-change-transform p-8 transition-all duration-300 relative overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-primary before:via-secondary before:to-accent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="text-sm text-primary font-semibold bg-primary/10 px-4 py-1 rounded-full">
                  {project.date}
                </span>
                <div className="flex gap-4">
                  <a href={project.github} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-slate-50 text-base transition-all duration-300 hover:bg-primary hover:scale-110" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.link} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-slate-50 text-base transition-all duration-300 hover:bg-primary hover:scale-110" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl text-slate-50 mb-4 font-bold">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-5 text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

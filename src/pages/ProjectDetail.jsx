import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../content.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import AnimatedDivider from '../components/AnimatedDivider.jsx';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-dark">
        <h1 className="heading-section">Project Not Found</h1>
        <Link to="/" className="btn-pill-light mt-8">Go Home</Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar isProjectPage={true} />
      
      {/* Exit Button */}
      <div className="fixed top-24 left-4 z-50 md:left-8">
        <a href="/#projects" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors bg-dark/50 p-2 rounded-full backdrop-blur-sm border border-cream/10 hover:bg-dark/80">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="sr-only md:not-sr-only md:pr-2 text-sm font-mono uppercase tracking-widest">Back to Projects</span>
        </a>
      </div>

      {/* Work Hero Section (Dark) */}
      <section className="section-dark min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              layoutId={`project-title-${project.id}`}
              className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight mb-8"
            >
              {project.title}
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-cream/70 font-body leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wave Transition */}
      <AnimatedDivider color="#F0F0EB" />

      {/* Work Body Details (Light) */}
      <section className="section-light">
        <div className="container-custom">
          
          {/* Metadata Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 mb-12 border-b border-dark/10">
            <div className="text-sm font-mono uppercase tracking-widest text-dark/70 mb-4 md:mb-0 w-full md:w-1/3 text-left">
              {project.category}
            </div>
            <div className="text-sm font-mono uppercase tracking-widest text-dark/70 mb-4 md:mb-0 w-full md:w-1/3 text-left md:text-center">
              {project.date}
            </div>
            <div className="w-full md:w-1/3 flex justify-start md:justify-end">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <span className="text-sm font-mono uppercase tracking-widest text-dark font-medium">View Source</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Long Description (If exists) */}
          {project.longDescriptionHTML && (
            <div 
              className="mb-16 max-w-4xl mx-auto font-body text-lg text-dark/80 space-y-4 [&>h3]:text-2xl [&>h3]:font-display [&>h3]:text-dark [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>p]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.longDescriptionHTML }}
            />
          )}

          {/* Tech Stack Info */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-60 mb-4">Tech Stack</h3>
            <p className="font-body text-lg text-dark/80">{project.techStack}</p>
          </div>

          {/* Image Grid */}
          <div className="bg-dark rounded-[2rem] p-6 md:p-12 mb-12 flex flex-col gap-6 md:gap-12">
            {project.images.map((img, index) => (
              <motion.div 
                key={index}
                layoutId={index === 0 ? `project-image-${project.id}` : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`rounded-2xl overflow-hidden shadow-2xl ${
                  project.id === "course-finder" ? "max-w-sm md:max-w-md mx-auto" : "w-full"
                }`}
              >
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      <Footer />
    </motion.main>
  );
};

export default ProjectDetail;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../content.js';

const Projects = () => {
  return (
    <section id="projects" className="section-dark">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading-section border-b border-cream/20 pb-8">PROJECTS</h2>
        </motion.div>

        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={`/project/${project.id}`}
                  className="list-row group relative"
                >
                <div className="w-[70%] md:w-3/4 pr-4">
                  <motion.h3 
                    layoutId={`project-title-${project.id}`}
                    className="list-row-title"
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <div className="w-[30%] md:w-1/4 flex justify-end absolute top-8 right-0 md:relative md:top-0">
                  <div className="overflow-hidden h-6">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                      <span className="text-sm font-mono uppercase tracking-widest text-right">{project.category}</span>
                      <span className="text-sm font-mono uppercase tracking-widest text-cream text-right">{project.category}</span>
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

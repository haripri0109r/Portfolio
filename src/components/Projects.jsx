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
          <h2 className="heading-section border-b border-cream/20 pb-8">SINCE 2023</h2>
          <p className="text-xl md:text-2xl max-w-2xl text-cream/70 mt-8">
            I have worked with modern web technologies and AI models to create full-stack systems and automated workflows.
          </p>
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
              <Link 
                to={`/project/${project.id}`}
                className="list-row group"
              >
                <div className="w-full md:w-2/3">
                  <h3 className="list-row-title">{project.title}</h3>
                </div>
                <div className="w-full md:w-1/3 flex justify-start md:justify-end mt-4 md:mt-0">
                  <div className="overflow-hidden h-6">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                      <span className="text-sm font-mono uppercase tracking-widest">{project.category}</span>
                      <span className="text-sm font-mono uppercase tracking-widest text-cream">{project.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

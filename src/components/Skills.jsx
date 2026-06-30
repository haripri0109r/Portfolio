import React from 'react';
import { motion } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider.jsx';
import { skillsData } from '../content.js';

const Skills = () => {
  return (
    <>
      <AnimatedDivider color="#F0F0EB" />
      <section id="skills" className="section-light">
        <div className="container-custom">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-32 text-center"
          >
            <h2 className="heading-section">MY SKILLS</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {skillsData.categories.map((cat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col"
              >
                <div className="grid-number border-b border-dark/10 pb-4 mb-6">
                  {String(index + 1).padStart(3, '0')}
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">{cat.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">
                  {cat.skills.map(s => s.name).join(', ')}.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;

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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex flex-col p-6 rounded-2xl transition-colors hover:bg-dark/5"
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

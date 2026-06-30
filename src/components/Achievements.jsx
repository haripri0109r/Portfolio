import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../content.js';

const Achievements = () => {
  return (
    <section id="achievements" className="section-dark">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading-section border-b border-cream/20 pb-8">EXPERIENCE</h2>
        </motion.div>

        <div className="flex flex-col">
          {aboutData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="list-row items-start group hover:bg-white/5 px-4 -mx-4 rounded-xl transition-colors"
            >
              <div className="w-full md:w-2/3">
                <h3 className="list-row-title text-3xl md:text-5xl">{exp.role}</h3>
                <p className="text-xl mt-4 font-display opacity-80">{exp.company}</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-start md:items-end mt-4 md:mt-0 text-left md:text-right">
                <span className="text-sm font-mono uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4">
                  {exp.duration}
                </span>
                <ul className="text-cream/60 text-sm space-y-2 mt-2 font-body max-w-sm">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider.jsx';
import { educationData } from '../content.js';

const About = () => {
  return (
    <>
      <AnimatedDivider color="#F0F0EB" />
      <section id="education" className="section-light">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="heading-section text-dark border-b border-dark/20 pb-8">EDUCATION</h2>
          </motion.div>

          <div className="flex flex-col space-y-8 text-dark">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dark/10 pb-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-medium">{edu.institution}</h3>
                  <p className="text-dark/70 font-mono mt-1">{edu.degree}</p>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <span className="bg-dark/10 px-3 py-1 text-sm rounded-full font-mono font-medium">{edu.score}</span>
                  <p className="text-dark/60 text-sm mt-2 font-mono uppercase">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

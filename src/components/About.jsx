import React from 'react';
import { motion } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider.jsx';

const About = () => {
  return (
    <>
      <AnimatedDivider color="#F0F0EB" />
      <section id="about" className="section-light min-h-[70vh] flex flex-col items-center justify-center">
        <div className="container-custom py-12 md:py-24 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-tight mb-12">
              As a second-year CSE student, I ship production-grade systems that most developers take years to build.
            </h2>
            
            <a href="#projects" className="btn-pill-dark">
              EXPLORE MY WORK
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;

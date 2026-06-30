import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="section-dark min-h-screen flex items-center justify-center relative overflow-hidden pb-32">
      <div className="container-custom relative z-10 w-full text-center">
        
        {/* Massive Name */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden leading-none"
          >
            <h1 className="heading-display">HARIPRIYAN</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden leading-none"
          >
            <h1 className="heading-display">A.</h1>
          </motion.div>
        </div>

        {/* Floating Centered Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 floating w-64 h-80 bg-cream rounded-2xl p-6 shadow-2xl flex flex-col justify-between hidden md:flex text-dark"
        >
          <div className="w-full h-48 bg-lightGray rounded-xl mb-4 flex items-center justify-center overflow-hidden">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-display font-bold uppercase text-lg leading-tight">Software<br/>Engineer</p>
            <p className="text-xs mt-2 uppercase tracking-widest opacity-60">Status: Open</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-8 rounded-full bg-cream text-dark flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

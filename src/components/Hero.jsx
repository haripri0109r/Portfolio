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
            className="overflow-hidden leading-none mb-8 md:mb-12"
          >
            <h1 className="heading-display">HARIPRIYAN A</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-cream/20 shadow-2xl transition-all duration-500 ease-in-out cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105 active:grayscale-0 active:scale-105">
                <img src="/Haripriyan A photo.jpeg" alt="Haripriyan A" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>



      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-8 h-8 rounded-full bg-cream text-dark flex items-center justify-center shadow-lg">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

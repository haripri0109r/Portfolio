import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
const Hero = () => {
  const name = "HARIPRIYAN A";
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 1000], [0, prefersReducedMotion ? 0 : 150]);
  const imageY = useTransform(scrollY, [0, 1000], [0, prefersReducedMotion ? 0 : 300]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="section-dark min-h-screen flex items-center justify-center relative overflow-hidden pb-32">
      <div className="container-custom relative z-10 w-full text-center">
        
        {/* Massive Name */}
        <div className="flex flex-col items-center">
          <motion.div
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden leading-none mb-8 md:mb-12 flex justify-center will-change-transform"
          >
            <h1 className="heading-display flex">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={char === " " ? "w-[3vw] sm:w-[2vw]" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="will-change-transform"
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

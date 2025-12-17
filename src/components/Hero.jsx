import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Magnetic from './Magnetic.jsx';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-24 pb-12 relative overflow-hidden" id="home">
      <div className="absolute inset-0 -z-10" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(201, 162, 39, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(230, 199, 90, 0.12) 0%, transparent 50%)'
      }}></div>
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full animate-blob -z-10" />
      <div className="absolute bottom-0 -right-10 w-80 h-80 bg-secondary/20 blur-3xl rounded-full animate-blob -z-10" style={{ animationDelay: '2s' }} />
      
      <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-15 items-center max-md:text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="z-10 max-md:order-last" variants={itemVariants}>
          <motion.h3 className="text-2xl max-md:text-xl text-primary mb-2.5 font-semibold" variants={itemVariants}>
            Hi, I'm
          </motion.h3>
          <motion.h1 className="text-6xl max-md:text-4xl font-extrabold mb-2.5 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight" variants={itemVariants}>
            Haripriyan A
          </motion.h1>
          <motion.h2 className="text-3xl max-md:text-2xl text-slate-400 mb-5 font-semibold" variants={itemVariants}>
            Full Stack Developer & Problem Solver
          </motion.h2>
          <motion.p className="text-lg max-md:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl" variants={itemVariants}>
            B.E. CSE Student at Sri Eshwar College of Engineering | 
            Building innovative web solutions with modern technologies
          </motion.p>

          <motion.div className="flex gap-5 mb-10 max-md:flex-col max-md:items-center" variants={itemVariants}>
            <a href="#projects" className="btn-primary btn-shine">
              View Projects
            </a>
            <a href="#contact" className="btn-outline btn-shine">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="flex gap-5 max-md:justify-center" variants={itemVariants}>
            <Magnetic className="hover-glow"><a href="https://github.com/haripri0109r" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-cardBg flex items-center justify-center text-slate-50 text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"><FaGithub /></a></Magnetic>
            <Magnetic className="hover-glow"><a href="https://www.linkedin.com/in/haripriyana677/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-cardBg flex items-center justify-center text-slate-50 text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"><FaLinkedin /></a></Magnetic>
            <Magnetic className="hover-glow"><a href="mailto:haripri0109r@gmail.com" className="w-12 h-12 rounded-full bg-cardBg flex items-center justify-center text-slate-50 text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"><FaEnvelope /></a></Magnetic>
            <Magnetic className="hover-glow"><a href="tel:+919787586293" className="w-12 h-12 rounded-full bg-cardBg flex items-center justify-center text-slate-50 text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"><FaPhone /></a></Magnetic>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center max-md:order-first max-md:mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-30" />
            <div className="w-72 h-72 max-md:w-52 max-md:h-52 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-float shadow-2xl shadow-primary/40">
              <span className="text-8xl max-md:text-6xl font-extrabold text-white">HP</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-primary rounded-3xl flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-primary rounded animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

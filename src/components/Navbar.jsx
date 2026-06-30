import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../content.js';

const Navbar = ({ isProjectPage = false }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
      {/* Left: Text Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto"
      >
        {isProjectPage ? (
          <Link to="/" className="font-display font-bold text-xl uppercase tracking-widest text-cream">
            PORTFOLIO
          </Link>
        ) : (
          <a href="#hero" className="font-display font-bold text-xl uppercase tracking-widest text-cream">
            PORTFOLIO
          </a>
        )}
      </motion.div>

      {/* Right: Pill Button & Hamburger */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="flex items-center gap-4 pointer-events-auto"
      >
        <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-pill-light hidden sm:flex">
          RESUME
        </a>
        {isProjectPage ? (
          <Link to="/#contact" className="btn-pill-light">
            SCHEDULE A CALL
          </Link>
        ) : (
          <a href="#contact" className="btn-pill-light">
            SCHEDULE A CALL
          </a>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;

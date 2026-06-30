import React from 'react';
import { personalInfo, socialLinks } from '../content.js';
import AnimatedDivider from './AnimatedDivider.jsx';

const Footer = () => {
  return (
    <>
      <AnimatedDivider color="#0B0C0F" />
      <footer className="bg-dark text-cream py-12 pt-32 -mt-20 z-0 relative">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-display font-bold text-2xl uppercase tracking-widest mb-2">HARIPRIYAN A.</h2>
            <p className="text-sm font-mono opacity-50">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          <div className="flex gap-8">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-sm font-mono uppercase tracking-widest hover:text-white transition-colors opacity-70 hover:opacity-100">
              GITHUB
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sm font-mono uppercase tracking-widest hover:text-white transition-colors opacity-70 hover:opacity-100">
              LINKEDIN
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono uppercase tracking-widest hover:text-white transition-colors opacity-70 hover:opacity-100">
              EMAIL
            </a>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

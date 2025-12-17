import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBg py-16 px-5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_2fr_1fr] gap-12 mb-10">
          <div className="max-w-sm">
            <h3 className="text-3xl font-bold text-slate-50 mb-4">
              Haripriyan<span className="text-primary text-4xl">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-slate-50 text-xl mb-5 font-semibold">Quick Links</h4>
              <ul className="list-none p-0">
                <li className="mb-3">
                  <a href="#home" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Home</a>
                </li>
                <li className="mb-3">
                  <a href="#about" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">About</a>
                </li>
                <li className="mb-3">
                  <a href="#projects" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Projects</a>
                </li>
                <li className="mb-3">
                  <a href="#skills" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Skills</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-50 text-xl mb-5 font-semibold">Connect</h4>
              <ul className="list-none p-0">
                <li className="mb-3">
                  <a href="#achievements" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Achievements</a>
                </li>
                <li className="mb-3">
                  <a href="#contact" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Contact</a>
                </li>
                <li className="mb-3">
                  <a href="mailto:haripri0109r@gmail.com" className="text-slate-400 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-1 link-underline">Email Me</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-slate-50 text-xl mb-5 font-semibold">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/haripri0109r" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 bg-cardBg rounded-lg flex items-center justify-center text-slate-50 text-xl no-underline transition-all duration-300 border border-primary/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 hover:border-transparent">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/haripriyana677/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 bg-cardBg rounded-lg flex items-center justify-center text-slate-50 text-xl no-underline transition-all duration-300 border border-primary/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 hover:border-transparent">
                <FaLinkedin />
              </a>
              <a href="mailto:haripri0109r@gmail.com" aria-label="Email" className="w-11 h-11 bg-cardBg rounded-lg flex items-center justify-center text-slate-50 text-xl no-underline transition-all duration-300 border border-primary/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 hover:border-transparent">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-10"></div>

        <div className="flex justify-between items-center flex-wrap gap-5">
          <p className="text-slate-400 text-sm">
            © {currentYear} Haripriyan A. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2 max-md:justify-center">
            Made with <FaHeart className="text-red-500 animate-heartbeat" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Achievements', link: '#achievements' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-glow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-slate-50 hover:scale-105 transition-transform duration-300">
          Haripriyan<span className="text-primary text-4xl">.</span>
        </a>
        
        <ul className={`flex gap-10 list-none items-center max-md:fixed max-md:flex-col max-md:bg-darkBg/98 max-md:backdrop-blur-md max-md:w-full max-md:text-center max-md:transition-all max-md:duration-300 max-md:py-8 max-md:gap-5 max-md:top-[70px] ${
          isOpen ? 'max-md:left-0' : 'max-md:-left-full'
        }`}>
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a 
                href={item.link} 
                className="text-slate-400 font-medium text-base transition-colors duration-300 hover:text-slate-50 link-underline"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-md:block text-2xl text-slate-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

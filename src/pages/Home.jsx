import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Achievements from '../components/Achievements.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

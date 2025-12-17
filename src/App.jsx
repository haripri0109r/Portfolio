import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SpotlightCursor from './components/SpotlightCursor.jsx';
import ParallaxOrbs from './components/ParallaxOrbs.jsx';
import AnimatedDivider from './components/AnimatedDivider.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen relative bg-darkBg">
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 aurora animate-aurora" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="noise-overlay" />
      <SpotlightCursor />
      <ParallaxOrbs />
      <Navbar />
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <Projects />
      <AnimatedDivider />
      <Skills />
      <AnimatedDivider />
      <Achievements />
      <AnimatedDivider />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import AntigravityParticles from './components/background/AntigravityParticles';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 relative overflow-x-hidden">
      {/* Antigravity Particle Layer */}
      <AntigravityParticles />
      
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default App;

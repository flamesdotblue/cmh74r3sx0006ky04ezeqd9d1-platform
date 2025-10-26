import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter selection:bg-purple-600/30 selection:text-purple-200">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

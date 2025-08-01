import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ProjectTimeline from './components/ProjectTimeline';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        <main className="relative">
          <Hero />
          <Experience />
          <ProjectTimeline />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

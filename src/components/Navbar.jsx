import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Home',       href: '#Home' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Projects',   href: '#Projects' },
  { name: 'Skills',     href: '#Skills' },
  { name: 'Contact',    href: '#Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress }   = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg,var(--accent-cyan),var(--accent-blue),var(--accent-purple))',
          transformOrigin: '0%', zIndex: 9999,
        }}
      />

      <motion.nav
        style={{ position: 'fixed', top: 2, left: 0, right: 0, zIndex: 100 }}
        className={scrolled ? 'nav-blur' : ''}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.04 }} style={{ cursor:'pointer' }} onClick={() => go('#Home')}>
              <img
                src={logo}
                alt="Logo"
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                style={{ filter:'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(145deg)', opacity: 0.9 }}
              />
            </motion.div>

            {/* Desktop Nav */}
            <div style={{ display:'flex', gap:'6px', alignItems:'center' }} className="hidden md:flex">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => go(item.href)}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ color: 'var(--accent-cyan)' }}
                  style={{
                    background:'transparent', border:'none', cursor:'pointer',
                    padding:'8px 14px', borderRadius:'6px',
                    fontFamily:'Fira Code, monospace', fontSize:'0.8rem',
                    color:'var(--text-secondary)', letterSpacing:'0.04em',
                    position:'relative', transition:'color 0.2s'
                  }}
                  className="nav-item"
                >
                  <span style={{ color:'var(--accent-cyan)', marginRight:'2px', fontSize:'0.7rem' }}>//</span> {item.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf" download="Aromal_AJ_Resume.pdf"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="btn-outline-cyber"
                style={{ marginLeft:'12px', textDecoration:'none' }}
              >
                <span>resume.pdf</span>
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden"
              style={{ background:'transparent', border:'none', cursor:'pointer', color:'var(--text-secondary)', padding:'8px' }}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow:'hidden', borderTop: isOpen ? '1px solid var(--border)' : 'none' }}
          className="md:hidden nav-blur"
        >
          <div className="container-main" style={{ padding:'1rem 1.5rem 1.5rem', display:'flex', flexDirection:'column', gap:'4px' }}>
            {navItems.map((item) => (
              <button key={item.name} onClick={() => go(item.href)}
                style={{
                  background:'transparent', border:'none', cursor:'pointer',
                  padding:'10px 12px', textAlign:'left', borderRadius:'6px',
                  fontFamily:'Fira Code, monospace', fontSize:'0.85rem', color:'var(--text-secondary)',
                  transition:'color 0.2s, background 0.2s'
                }}
                onMouseEnter={e => { e.target.style.color='var(--accent-cyan)'; e.target.style.background='rgba(0,245,212,0.05)'; }}
                onMouseLeave={e => { e.target.style.color='var(--text-secondary)'; e.target.style.background='transparent'; }}
              >
                <span style={{ color:'var(--accent-cyan)', marginRight:'4px' }}>&gt;</span> {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;

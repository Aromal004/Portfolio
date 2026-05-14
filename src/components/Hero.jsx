import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowDown } from 'react-icons/fa';
import profileImage from '../assets/PIC.jpg';

const roles = ['Software Engineer', 'Backend Developer', 'Cloud Enthusiast', 'Problem Solver'];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const socialLinks = [
    { icon: FaGithub,    href: 'https://github.com/Aromal004',                          label: 'GitHub' },
    { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aromal-a-j-46931a281/',     label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/a.r_o.m.a.l/',               label: 'Instagram' },
  ];

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div
      id="Home"
      className="grid-pattern"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: '80px', paddingBottom: '40px', position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Background Orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '-8%',
        width: 'clamp(250px, 50vw, 400px)', height: 'clamp(250px, 50vw, 400px)',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(67,97,238,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: 'clamp(200px, 45vw, 350px)', height: 'clamp(200px, 45vw, 350px)',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,245,212,0.09) 0%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(40px)'
      }} />

      <div className="container-main" style={{ width: '100%' }}>
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 'clamp(2rem, 5vw, 3rem)',
          }}
          className="lg:flex-row lg:items-center lg:justify-between"
        >
          {/* ── Text Column ── */}
          <motion.div variants={fadeUp} style={{ flex: 1, maxWidth: '600px' }}
            className="text-center lg:text-left"
          >
            {/* Terminal greeting */}
            <motion.div variants={fadeUp}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', border: '1px solid rgba(0,245,212,0.2)',
                borderRadius: '4px', marginBottom: '1.5rem', background: 'rgba(0,245,212,0.04)'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', display:'inline-block', animation:'glow-pulse 2s infinite' }} />
              <span className="font-code" style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
                Active
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="font-code"
              style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.08em' }}
            >
              &gt; Hello, I'm
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-display"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '0.75rem', color: '#fff' }}
            >
              Aromal <span className="gradient-cyber">AJ</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem', height: '2rem', display:'flex', alignItems:'center' }}
              className="justify-center lg:justify-start"
            >
              <span className="font-code" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--accent-cyan)', letterSpacing: '0.03em' }}>
                {displayed}
                <span style={{ animation: 'blink 1s step-end infinite', opacity: 1 }}>▋</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.96rem', maxWidth: '520px', marginBottom: '2rem' }}
              className="mx-auto lg:mx-0"
            >
              Passionate about tackling logic-driven challenges and turning abstract ideas into tangible outcomes.
              I thrive in environments that value reasoning, problem-solving, and continuous learning.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2rem' }}
              className="justify-center lg:justify-start"
            >
              <motion.a
                href="/resume.pdf" download="Aromal_AJ_Resume.pdf"
                className="btn-filled-cyber"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{ textDecoration: 'none' }}
              >
                <FaDownload size={14} /> Download Resume
              </motion.a>
              <motion.button
                onClick={() => document.querySelector('#Contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-cyber"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              >
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '10px' }}
              className="justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label={label}
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            style={{ flexShrink: 0 }}
          >
            {/* Outer decorative ring */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div className="float" style={{
                width: 'clamp(220px, 50vw, 340px)', height: 'clamp(220px, 50vw, 340px)',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--accent-cyan), var(--accent-blue), var(--accent-purple), var(--accent-cyan))',
                padding: '3px',
                animation: 'float 4s ease-in-out infinite'
              }}>
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: 'var(--bg-primary)', padding: '6px'
                }}>
                  <img
                    src={profileImage}
                    alt="Aromal AJ"
                    style={{
                      width: '100%', height: '100%', borderRadius: '50%',
                      objectFit: 'cover', display: 'block',
                      filter: 'contrast(1.05) brightness(0.95)'
                    }}
                  />
                </div>
              </div>

              {/* Decorative corner elements - hidden on mobile */}
              <div className="hidden sm:block" style={{
                position: 'absolute', top: '-16px', right: '-16px',
                width: 'clamp(40px, 8vw, 60px)', height: 'clamp(40px, 8vw, 60px)',
                border: '2px solid rgba(0,245,212,0.3)',
                borderRadius: '10px', transform: 'rotate(15deg)',
                pointerEvents: 'none'
              }} />
              <div className="hidden sm:block" style={{
                position: 'absolute', bottom: '-12px', left: '-12px',
                width: 'clamp(30px, 6vw, 40px)', height: 'clamp(30px, 6vw, 40px)',
                background: 'rgba(67,97,238,0.2)',
                borderRadius: '8px', transform: 'rotate(-10deg)',
                pointerEvents: 'none'
              }} />

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden sm:flex"
                style={{
                  position: 'absolute', bottom: '10px', right: '-20px',
                  background: 'var(--bg-card)', border: '1px solid rgba(0,245,212,0.25)',
                  borderRadius: '10px', padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 14px)',
                  alignItems: 'center', gap: 'clamp(6px, 1.5vw, 8px)',
                  backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <span style={{ width:'clamp(6px, 1.5vw, 8px)', height:'clamp(6px, 1.5vw, 8px)', borderRadius:'50%', background:'var(--accent-green)', display:'inline-block', boxShadow:'0 0 8px var(--accent-green)' }} />
                <span className="font-code" style={{ fontSize:'clamp(0.6rem, 1.5vw, 0.68rem)', color:'var(--text-secondary)', whiteSpace:'nowrap' }}>
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:block"
          style={{ textAlign: 'center', marginTop: 'clamp(2rem, 5vw, 4rem)' }}
        >
          <FaArrowDown style={{ color: 'rgba(0,245,212,0.35)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', margin: '0 auto' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

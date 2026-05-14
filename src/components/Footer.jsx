import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const socials = [
    { icon: FaGithub,    href: 'https://github.com/Aromal004',                      label: 'GitHub' },
    { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aromal-a-j-46931a281/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/a.r_o.m.a.l/',           label: 'Instagram' },
  ];

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgba(0,245,212,0.07)', padding: 'clamp(2rem, 5vw, 2.5rem) 0' }}>
      <div className="container-main">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'clamp(1rem, 3vw, 1.5rem)' }}>
          <p className="font-code sm:w-auto sm:text-left" style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.78rem)', color: 'var(--text-muted)', textAlign: 'center', width: '100%' }}>
            © {year} <span style={{ color: 'var(--accent-cyan)' }}>Aromal AJ</span>
          </p>
          <div className="sm:w-auto" style={{ display: 'flex', gap: 'clamp(8px, 2vw, 10px)', justifyContent: 'center', width: '100%' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="social-btn" aria-label={label}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                style={{ width:'clamp(32px, 8vw, 34px)', height:'clamp(32px, 8vw, 34px)' }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

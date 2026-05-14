import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

const Technologies = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="Skills" style={{ padding: '6rem 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.2), transparent)' }} />

      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>// tech stack</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff' }}>
            Skills<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: '60px',
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
        </motion.div>

        {/* Terminal-style container */}
        <div className="terminal-box" style={{ padding: 0 }}>
          <div style={{ padding: '12px 16px 8px', display: 'flex', gap: '6px', borderBottom: '1px solid rgba(0,245,212,0.08)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            <span className="font-code" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
              ~/skills &gt; ls -la
            </span>
          </div>
          <div style={{ padding: '2rem' }}>
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {technologies.map((tech, index) => (
                <motion.div key={index} variants={item}>
                  <motion.div
                    whileHover={{ scale: 1.12, y: -5 }}
                    whileTap={{ scale: 0.93 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 2vw, 10px)',
                      padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(0.5rem, 2vw, 0.75rem)',
                      background: 'rgba(0,245,212,0.02)',
                      border: '1px solid rgba(0,245,212,0.08)',
                      borderRadius: 'clamp(8px, 2vw, 10px)',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      minHeight: 'clamp(80px, 20vw, 100px)'
                    }}
                    onHoverStart={e => {}}
                    className="tech-hover-card"
                  >
                    <div className={`${tech.color}`}
                      style={{
                        filter: 'drop-shadow(0 0 8px currentColor)',
                        transition: 'filter 0.3s',
                        fontSize: 'clamp(2rem, 8vw, 2.25rem)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <tech.icon />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

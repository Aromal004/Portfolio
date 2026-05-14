import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectTimeline = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };
  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="Projects" style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(67,97,238,0.25), transparent)' }} />

      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 3.5rem)' }}
        >
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>// selected work</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, color: '#fff' }}>
            Projects<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: 'clamp(50px, 10vw, 60px)',
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid', gap: 'clamp(1rem, 3vw, 1.5rem)',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))'
          }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardAnim}>
              <motion.div
                className="card-glass"
                whileHover={{ y: -6, borderColor: 'var(--border-hover)', boxShadow: 'var(--glow-cyan), 0 20px 50px rgba(0,0,0,0.5)' }}
                style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {/* Top Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                    <FaCalendarAlt size={11} />
                    <span className="font-code" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.7rem)', color: 'var(--accent-cyan)' }}>{project.year}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 10px)' }}>
                    <motion.a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, color: 'var(--accent-cyan)' }}
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    >
                      <FaGithub size={16} />
                    </motion.a>
                    <motion.a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, color: 'var(--accent-cyan)' }}
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    >
                      <FaExternalLinkAlt size={14} />
                    </motion.a>
                  </div>
                </div>

                {/* Decorative line */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)', marginBottom: 'clamp(0.75rem, 2vw, 1rem)', opacity: 0.3 }} />

                <h3 className="font-display"
                  style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', fontWeight: 700, color: '#fff', marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)', lineHeight: 1.4 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 1.9vw, 0.85rem)', lineHeight: 1.7, flex: 1, marginBottom: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                  {project.description}
                </p>

                <motion.a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className="font-code"
                  style={{
                    fontSize: 'clamp(0.7rem, 1.7vw, 0.75rem)', color: 'var(--accent-cyan)',
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                    marginTop: 'auto', letterSpacing: '0.05em',
                    transition: 'gap 0.2s'
                  }}
                  whileHover={{ gap: '10px' }}
                >
                  view_project() <FaExternalLinkAlt size={10} />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 'clamp(2rem, 5vw, 3rem)' }}
        >
          <motion.a
            href="https://github.com/Aromal004" target="_blank" rel="noopener noreferrer"
            className="btn-outline-cyber"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ textDecoration: 'none', display: 'inline-flex', fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)' }}
          >
            <FaGithub size={15} />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTimeline;

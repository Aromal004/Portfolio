import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.1 } }
  };

  return (
    <section id="Experience" style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--bg-primary)', position: 'relative' }}>
      {/* Subtle divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.2), transparent)' }} />

      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>// work history</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, color: '#fff' }}>
            Experience<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: 'clamp(50px, 10vw, 60px)',
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          style={{ position: 'relative', paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          {/* Vertical line */}
          <div className="hidden sm:block" style={{
            position: 'absolute', left: '5px', top: '8px',
            bottom: 0, width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-blue), var(--accent-purple), transparent)'
          }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index} variants={fadeUp}
              style={{ position: 'relative', marginBottom: index < experiences.length - 1 ? 'clamp(1.5rem, 4vw, 2.5rem)' : 0 }}
            >
              {/* Dot */}
              <div className="timeline-dot hidden sm:block" style={{ position: 'absolute', left: 'clamp(-1.85rem, -4vw, -2.15rem)', top: '6px' }} />

              <motion.div
                className="card-glass"
                whileHover={{ borderColor: 'var(--border-hover)' }}
                style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 4vw, 2rem)' }}
              >
                {/* Top Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'clamp(0.5rem, 2vw, 0.75rem)', marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)' }}>
                  <div style={{ flex: '1 1 auto', minWidth: '200px' }}>
                    <h3 className="font-display" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', flexWrap: 'wrap' }}>
                      <FaBriefcase size={12} />
                      <span className="font-code" style={{ fontSize: 'clamp(0.72rem, 1.8vw, 0.8rem)', fontWeight: 600 }}>{exp.company}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', flexShrink: 0 }}>
                    <FaCalendarAlt size={11} />
                    <span className="font-code" style={{ fontSize: 'clamp(0.68rem, 1.6vw, 0.72rem)' }}>{exp.year}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.82rem, 2vw, 0.9rem)', lineHeight: 1.7, marginBottom: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  {exp.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(5px, 1.5vw, 6px)' }}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

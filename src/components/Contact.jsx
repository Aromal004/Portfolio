import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email',    value: 'aromalaj9111@gmail.com',  href: 'mailto:aromalaj9111@gmail.com' },
    { icon: FaPhone,    label: 'Phone',    value: '+91 956 271 7654',         href: 'tel:+919562717654' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kerala, India',       href: '#' },
  ];

  const socials = [
    { icon: FaGithub,    href: 'https://github.com/Aromal004',                        label: 'GitHub' },
    { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aromal-a-j-46931a281/',   label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/a.r_o.m.a.l/',             label: 'Instagram' },
  ];

  return (
    <section id="Contact" style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(67,97,238,0.25), transparent)' }} />

      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 3.5rem)' }}
        >
          <p className="section-tag" style={{ marginBottom: '0.5rem' }}>// get in touch</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, color: '#fff' }}>
            Contact<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: 'clamp(50px, 10vw, 60px)',
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
        </motion.div>

        <div style={{ display: 'grid', gap: 'clamp(2rem, 5vw, 3rem)' }} className="lg:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 'clamp(1.5rem, 4vw, 2rem)', fontSize: 'clamp(0.85rem, 2.2vw, 0.96rem)', maxWidth: '420px' }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)', marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a key={i} href={href}
                  className="card-glass"
                  whileHover={{ x: 6, borderColor: 'var(--border-hover)' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 'clamp(0.75rem, 2vw, 1rem)',
                    padding: 'clamp(0.85rem, 2.2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem)', textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    width: 'clamp(34px, 8vw, 38px)', height: 'clamp(34px, 8vw, 38px)', borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon size={15} style={{ color: '#050914' }} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p className="font-code" style={{ fontSize: 'clamp(0.62rem, 1.5vw, 0.68rem)', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '2px' }}>{label}</p>
                    <p style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', wordBreak: 'break-word' }}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 10px)', flexWrap: 'wrap' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label={label}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="terminal-box" style={{ padding: 0 }}>
              <div style={{ padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px) clamp(6px, 1.5vw, 8px)', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(0,245,212,0.08)' }}>
                <div style={{ width: 'clamp(8px, 2vw, 9px)', height: 'clamp(8px, 2vw, 9px)', borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
                <div style={{ width: 'clamp(8px, 2vw, 9px)', height: 'clamp(8px, 2vw, 9px)', borderRadius: '50%', background: '#febc2e', flexShrink: 0 }} />
                <div style={{ width: 'clamp(8px, 2vw, 9px)', height: 'clamp(8px, 2vw, 9px)', borderRadius: '50%', background: '#28c840', flexShrink: 0 }} />
                <span className="font-code" style={{ fontSize: 'clamp(0.62rem, 1.5vw, 0.68rem)', color: 'var(--text-muted)', marginLeft: '6px' }}>
                  send_message.sh
                </span>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: 'clamp(1.25rem, 3.5vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                <div>
                  <label className="font-code" style={{ display: 'block', fontSize: 'clamp(0.68rem, 1.6vw, 0.72rem)', color: 'var(--accent-cyan)', marginBottom: '6px', letterSpacing: '0.08em' }}>
                    $ name:
                  </label>
                  <input type="text" className="input-field" placeholder="Your name" required
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="font-code" style={{ display: 'block', fontSize: 'clamp(0.68rem, 1.6vw, 0.72rem)', color: 'var(--accent-cyan)', marginBottom: '6px', letterSpacing: '0.08em' }}>
                    $ email:
                  </label>
                  <input type="email" className="input-field" placeholder="your@email.com" required
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="font-code" style={{ display: 'block', fontSize: 'clamp(0.68rem, 1.6vw, 0.72rem)', color: 'var(--accent-cyan)', marginBottom: '6px', letterSpacing: '0.08em' }}>
                    $ message:
                  </label>
                  <textarea className="input-field" rows={5} placeholder="Your message..." required
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    style={{ resize: 'none', minHeight: 'clamp(100px, 25vw, 120px)' }} />
                </div>
                <motion.button type="submit"
                  className="btn-filled-cyber"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)' }}
                >
                  <FaPaperPlane size={13} />
                  {sent ? 'Message Sent! ✓' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

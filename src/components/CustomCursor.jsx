import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef    = useRef(null);
  const ringRef   = useRef(null);
  const trailsRef = useRef([]);
  const pos       = useRef({ x: -100, y: -100 });
  const ring      = useRef({ x: -100, y: -100 });
  const rafId     = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    /* ── Trail particles ── */
    const TRAIL_COUNT = 8;
    const trails = [];
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed; pointer-events:none; z-index:99994;
        border-radius:50%; transform:translate(-50%,-50%);
        background:var(--accent-cyan);
        will-change:transform,opacity;
        transition:none;
      `;
      document.body.appendChild(el);
      trails.push({ el, x: -100, y: -100 });
    }
    trailsRef.current = trails;

    /* ── Mouse tracking ── */
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      }
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);

    const onEnter = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const role = e.target.getAttribute('role');
      if (
        tag === 'a' || tag === 'button' || tag === 'input' ||
        tag === 'textarea' || tag === 'select' || role === 'button' ||
        e.target.classList.contains('cursor-pointer')
      ) setHovering(true);
    };
    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove',   onMove);
    window.addEventListener('mousedown',   onDown);
    window.addEventListener('mouseup',     onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);

    /* ── Animation loop ── */
    const LERP = 0.13;
    let prevPositions = Array(TRAIL_COUNT).fill({ x: -100, y: -100 });

    const tick = () => {
      /* Ring follows with lag */
      ring.current.x += (pos.current.x - ring.current.x) * LERP;
      ring.current.y += (pos.current.y - ring.current.y) * LERP;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`;
      }

      /* Trails cascade */
      const newPositions = [{ x: pos.current.x, y: pos.current.y }];
      for (let i = 1; i < TRAIL_COUNT; i++) {
        newPositions.push({
          x: prevPositions[i - 1].x + (prevPositions[i].x - prevPositions[i - 1].x) * 0.45,
          y: prevPositions[i - 1].y + (prevPositions[i].y - prevPositions[i - 1].y) * 0.45,
        });
      }
      prevPositions = newPositions;

      trails.forEach((t, i) => {
        const progress = 1 - i / TRAIL_COUNT;
        const size = Math.max(2, 7 * progress);
        t.el.style.cssText = `
          position:fixed; pointer-events:none; z-index:99994;
          border-radius:50%; transform:translate(${newPositions[i].x}px,${newPositions[i].y}px) translate(-50%,-50%);
          width:${size}px; height:${size}px;
          background:var(--accent-cyan);
          opacity:${0.55 * progress};
          will-change:transform;
        `;
      });

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove',   onMove);
      window.removeEventListener('mousedown',   onDown);
      window.removeEventListener('mouseup',     onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      cancelAnimationFrame(rafId.current);
      trails.forEach(t => t.el.remove());
    };
  }, []);

  /* hide on touch devices */
  const isTouchDevice = typeof window !== 'undefined' &&
    window.matchMedia('(hover:none)').matches;
  if (isTouchDevice) return null;

  /* ── Dot (snappy, instant) ── */
  const dotSize   = clicking ? 6  : hovering ? 5  : 7;
  const ringSize  = clicking ? 28 : hovering ? 46 : 36;
  const ringColor = hovering ? 'var(--accent-cyan)' : 'var(--accent-cyan)';
  const ringOpacity = hovering ? 0.85 : 0.5;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position:  'fixed',
          pointerEvents: 'none',
          zIndex:    99997,
          width:  `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          boxShadow: '0 0 8px var(--accent-cyan)',
          transition: 'width 0.15s, height 0.15s',
          top: 0, left: 0,
          willChange: 'transform',
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99996,
          width:  `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: '50%',
          border: `1.5px solid ${ringColor}`,
          opacity: ringOpacity,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, border-color 0.2s',
          top: 0, left: 0,
          willChange: 'transform',
          /* rotating dashes when hovering */
          borderStyle: hovering ? 'dashed' : 'solid',
          animation: hovering ? 'spin 2.5s linear infinite' : 'none',
        }}
      />

      {/* Spin keyframe injected once */}
      <style>{`
        @keyframes spin { to { rotate: 360deg; } }
        * { cursor: none !important; }
        @media (hover: none) { * { cursor: auto !important; } }
      `}</style>
    </>
  );
};

export default CustomCursor;
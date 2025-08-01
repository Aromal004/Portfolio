import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    const isTouch = checkTouchDevice();

    // If it's a touch device, don't initialize custom cursor
    if (isTouch) {
      return;
    }

    const updateMousePosition = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Smooth animation loop
    const animate = () => {
      const dx = mousePositionRef.current.x - currentPositionRef.current.x;
      const dy = mousePositionRef.current.y - currentPositionRef.current.y;
      
      currentPositionRef.current.x += dx * 0.15;
      currentPositionRef.current.y += dy * 0.15;
      
      setMousePosition({
        x: currentPositionRef.current.x,
        y: currentPositionRef.current.y
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor only on non-touch devices */}
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor dot with color inversion */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) scale(${isHovering ? 1.8 : 1})`,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: isHovering 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'linear-gradient(45deg, #8b5cf6, #ec4899)',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          opacity: isClicking ? 0.6 : 1,
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 255, 255, 0.5)' 
            : '0 0 10px rgba(139, 92, 246, 0.3)',
        }}
      />

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 2.5 : 1})`,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: isHovering 
            ? '2px solid rgba(255, 255, 255, 0.4)' 
            : '2px solid rgba(139, 92, 246, 0.3)',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* Click ripple effect */}
      {isClicking && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9997] animate-ping"
          style={{
            transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid rgba(236, 72, 153, 0.6)',
            animationDuration: '0.4s',
            animationIterationCount: '1',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-accent mix-blend-difference"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2 : isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
          borderColor: isHovering ? '#ec4899' : '#6366f1',
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-accent"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.05 }}
      />
    </>
  );
}

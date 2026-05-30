import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for tracking cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Check if device supports hover/coarse pointer
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      // Offset by half of cursor width/height (150px / 2 = 75px)
      mouseX.set(e.clientX - 75);
      mouseY.set(e.clientY - 75);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[150px] h-[150px] rounded-full pointer-events-none z-30 opacity-[0.25] blur-[40px] bg-gradient-to-r from-brand-start to-brand-end"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CursorGlow;

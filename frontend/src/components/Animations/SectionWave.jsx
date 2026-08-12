import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const SectionWave = ({ 
  direction = 'up', // parallax flow: 'up' | 'down' 
  position = 'left', // 'left' | 'right'
  intensity = 'medium',
  targetRef = null,
  className = ""
}) => {
  const localRef = useRef(null);
  const scrollTarget = targetRef || localRef;
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });

  // Scroll animations
  const pathLength = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Parallax offsets based on direction
  const movePrimary = direction === 'down' ? [150, -150] : direction === 'up' ? [-150, 150] : [0, 0];
  const moveSecondary = direction === 'down' ? [100, -100] : direction === 'up' ? [-100, 100] : [0, 0];
  const moveXPrimary = direction === 'right' ? [150, -150] : direction === 'left' ? [-150, 150] : [-30, 30];
  
  const yMovePrimary = useTransform(smoothProgress, [0, 1], movePrimary);
  const yMoveSecondary = useTransform(smoothProgress, [0, 1], moveSecondary);
  const xMove = useTransform(smoothProgress, [0, 1], moveXPrimary);

  let pathCount = 3;
  if (intensity === 'light' || isMobile) pathCount = 2;
  if (intensity === 'high' && !isMobile) pathCount = 5;

  // Determine container positioning
  const positioningClasses = `top-[-10%] bottom-[-10%] h-[120%] w-[300px] md:w-[400px] ${position === 'left' ? 'left-[-50px] md:left-0' : 'right-[-50px] md:right-0'}`;

  const uniqueId = useRef(Math.random().toString(36).substring(7)).current;

  const renderPaths = () => {
    return (
      <motion.svg className="w-full h-full mix-blend-screen opacity-70" viewBox="0 0 400 1200" preserveAspectRatio="none" style={{ opacity }}>
         <defs>{SharedDefs(uniqueId)}</defs>
         
         {/* Vertical Flows */}
         <motion.path
            d={position === 'left' ? "M 100 -100 C 250 200, 50 400, 150 800 C 200 1000, 100 1200, 150 1300" : "M 300 -100 C 150 200, 350 400, 250 800 C 200 1000, 300 1200, 250 1300"}
            fill="none" stroke={`url(#v-grad-1-${uniqueId})`} strokeWidth="2" filter={`url(#wave-glow-${uniqueId})`}
            style={{ pathLength, y: yMovePrimary }}
         />
         {pathCount > 1 && (
           <motion.path
              d={position === 'left' ? "M 50 -100 C -20 300, 150 500, 50 900 C 0 1100, 100 1200, 80 1300" : "M 350 -100 C 420 300, 250 500, 350 900 C 400 1100, 300 1200, 320 1300"}
              fill="none" stroke={`url(#v-grad-2-${uniqueId})`} strokeWidth="1.5" filter={`url(#wave-glow-${uniqueId})`}
              style={{ pathLength, y: yMoveSecondary }}
           />
         )}
         
         {/* Horizontal intersecting flows */}
         {pathCount > 2 && (
           <motion.path
              d={position === 'left' ? "M -100 300 C 200 250, 150 450, 450 350" : "M 500 300 C 200 250, 250 450, -50 350"}
              fill="none" stroke={`url(#h-grad-1-${uniqueId})`} strokeWidth="1" opacity="0.6"
              style={{ pathLength, y: yMovePrimary }}
           />
         )}
         {pathCount > 3 && (
           <motion.path
              d={position === 'left' ? "M -100 700 C 150 600, 300 800, 500 750" : "M 500 700 C 250 600, 100 800, -100 750"}
              fill="none" stroke={`url(#h-grad-2-${uniqueId})`} strokeWidth="1.2" opacity="0.5" filter={`url(#wave-glow-${uniqueId})`}
              style={{ pathLength, y: yMoveSecondary }}
           />
         )}
         {pathCount > 4 && (
           <motion.path
              d={position === 'left' ? "M -100 900 C 300 1000, 50 1100, 450 1050" : "M 500 900 C 100 1000, 350 1100, -50 1050"}
              fill="none" stroke={`url(#v-grad-1-${uniqueId})`} strokeWidth="0.5" opacity="0.8"
              style={{ pathLength, y: yMovePrimary }}
           />
         )}
      </motion.svg>
    );
  };

  return (
    <div ref={localRef} className={`absolute pointer-events-none z-0 overflow-visible ${positioningClasses} ${className}`}>
       {renderPaths()}
    </div>
  );
};

const SharedDefs = (uniqueId) => (
  <>
    <linearGradient id={`h-grad-1-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#6C3BFF" stopOpacity="0" />
      <stop offset="20%" stopColor="#6C3BFF" stopOpacity="0.9" />
      <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
      <stop offset="80%" stopColor="#ec4899" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
    </linearGradient>
    <linearGradient id={`h-grad-2-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
      <stop offset="30%" stopColor="#ec4899" stopOpacity="0.8" />
      <stop offset="70%" stopColor="#6C3BFF" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#6C3BFF" stopOpacity="0" />
    </linearGradient>
    
    <linearGradient id={`v-grad-1-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#6C3BFF" stopOpacity="0" />
      <stop offset="20%" stopColor="#6C3BFF" stopOpacity="0.9" />
      <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
      <stop offset="80%" stopColor="#ec4899" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
    </linearGradient>
    <linearGradient id={`v-grad-2-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
      <stop offset="30%" stopColor="#ec4899" stopOpacity="0.8" />
      <stop offset="70%" stopColor="#6C3BFF" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#6C3BFF" stopOpacity="0" />
    </linearGradient>

    <filter id={`wave-glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </>
);

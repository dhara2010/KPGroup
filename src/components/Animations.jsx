"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

// ScrollReveal component for triggering reveal animations on scroll
export function ScrollReveal({ 
  children, 
  variant = "fade-up", 
  delay = 0, 
  duration = 0.8, 
  threshold = 0.1, 
  once = true, 
  className = "", 
  ...props 
}) {
  const getVariants = () => {
    switch (variant) {
      case "fade-up": return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case "fade-down": return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case "fade-left": return { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
      case "fade-right": return { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
      case "zoom-in": return { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } };
      case "zoom-out": return { hidden: { opacity: 0, scale: 1.08 }, visible: { opacity: 1, scale: 1 } };
      case "blur-in": return { hidden: { opacity: 0, filter: "blur(12px)", y: 20 }, visible: { opacity: 1, filter: "blur(0px)", y: 0 } };
      case "3d-unfold": return { hidden: { opacity: 0, rotateX: -25, y: 60, transformPerspective: 1200 }, visible: { opacity: 1, rotateX: 0, y: 0 } };
      case "3d-flip-left": return { hidden: { opacity: 0, rotateY: 25, x: 60, transformPerspective: 1200 }, visible: { opacity: 1, rotateY: 0, x: 0 } };
      case "3d-flip-right": return { hidden: { opacity: 0, rotateY: -25, x: -60, transformPerspective: 1200 }, visible: { opacity: 1, rotateY: 0, x: 0 } };
      case "3d-zoom": return { hidden: { opacity: 0, scale: 0.8, z: -120, transformPerspective: 1200 }, visible: { opacity: 1, scale: 1, z: 0 } };
      default: return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// TextReveal component for stagger-revealing character by character
export function TextReveal({ text, className = "", delay = 0, once = true }) {
  const words = text.split(" ");
  const containerVariants = { 
    hidden: {}, 
    visible: { transition: { staggerChildren: 0.015, delayChildren: delay } } 
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 45, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.span 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once, amount: 0.15 }} 
      className={`inline-block perspective-1000 ${className}`}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, cIdx) => (
            <motion.span 
              key={cIdx} 
              variants={letterVariants} 
              className="inline-block origin-bottom-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-colors duration-300"
            >
              {char}
            </motion.span>
          ))}
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

// ThreeDTilt component for responsive card hover tilt effects
export function ThreeDTilt({ 
  children, 
  className = "", 
  tiltMax = 12, 
  glareOpacity = 0.15, 
  scale = 1.03,
  perspective = 1000,
  style = {},
  ...props
}) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 120, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);
  
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);
  
  const [hovered, setHovered] = useState(false);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseEnter = () => {
    setHovered(true);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: perspective,
        ...style
      }}
      animate={{
        scale: hovered ? scale : 1,
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`relative select-none ${className}`}
      {...props}
    >
      <motion.div
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 60%)`
          ),
          opacity: hovered ? 1 : 0,
          mixBlendMode: "overlay",
        }}
        className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] transition-opacity duration-300"
      />
      {children}
    </motion.div>
  );
}

// Scroll3DSection component for section-based 3D transform animations
export function Scroll3DSection({ children, className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.92, 1, 1, 0.92]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [15, 0, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.5, 1, 1, 0.5]);
  const z = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-120, 0, 0, -120]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-visible ${className}`}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          opacity,
          z,
          transformStyle: "preserve-3d"
        }}
        className="w-full origin-center"
      >
        {children}
      </motion.div>
    </div>
  );
}

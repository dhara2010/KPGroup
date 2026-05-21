"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ThreeDTilt({ 
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
  
  // Motion values for x and y coordinates relative to the element's center (from -0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics configuration
  const springConfig = { damping: 20, stiffness: 120, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);
  
  // Glare effect position
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);
  
  const [hovered, setHovered] = useState(false);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized coordinates (-0.5 to 0.5)
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
      {/* Glare Overlay */}
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


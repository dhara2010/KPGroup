"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Scroll3DSection({ children, className = "" }) {
  const containerRef = useRef(null);

  // Track the scroll progress of this specific section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map progress to premium 3D transforms:
  // - Entering (scrollYProgress 0 -> 0.4): Tilt rotateX 15deg -> 0deg, scale 0.92 -> 1, opacity 0.5 -> 1, depth Z -120px -> 0px
  // - Centered (scrollYProgress 0.4 -> 0.6): Flat, full scale, full opacity, zero Z offset
  // - Exiting (scrollYProgress 0.6 -> 1.0): Tilt rotateX 0deg -> -15deg, scale 1 -> 0.92, opacity 1 -> 0.5, depth Z 0px -> -120px
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

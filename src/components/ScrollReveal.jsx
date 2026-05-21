"use client";
import { motion } from "framer-motion";
export default function ScrollReveal({ children, variant = "fade-up", delay = 0, duration = 0.8, threshold = 0.1, once = true, className = "", ...props }) {
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


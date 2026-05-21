"use client";
import { motion } from "framer-motion";
export default function TextReveal({ text, className = "", delay = 0, once = true }) {
  const words = text.split(" ");
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.015, delayChildren: delay } } };
  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 45, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };
  return (
    <motion.span variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once, amount: 0.15 }} className={`inline-block perspective-1000 ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, cIdx) => (
            <motion.span key={cIdx} variants={letterVariants} className="inline-block origin-bottom-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-colors duration-300">
              {char}
            </motion.span>
          ))}
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

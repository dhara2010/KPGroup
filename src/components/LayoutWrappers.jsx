"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// InteractiveCanvas component for background particle plexus effect
export function InteractiveCanvas() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const particleCount = 120;
    const mouse = { x: null, y: null, targetX: null, targetY: null, radius: 120 };
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    class Particle {
      constructor() {
        this.reset();
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() > 0.5 ? 220 : 270;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.y -= scrollVelocity * 0.2;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 1.5;
            this.y -= (dy / distance) * force * 1.5;
          }
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${this.alpha})`;
        ctx.fill();
        ctx.restore();
      }
    }
    
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    
    const animate = () => {
      ctx.fillStyle = "rgba(2, 2, 2, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (mouse.targetX !== null) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }
      scrollVelocity *= 0.92;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = ((90 - distance) / 90) * 0.06;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
      mouse.x = null;
      mouse.y = null;
    };
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#020202]" style={{ mixBlendMode: "screen" }} />;
}

// ScrollProgress component for top horizontal scroll progress bar
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 origin-[0%] z-[9999] shadow-[0_0_12px_rgba(59,130,246,0.6)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

// CustomCursor component for custom cursor design
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white/60 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}

// SmoothScroll component for smooth lenis scrolling
export function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {};
    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

// PageTransition component for premium page routing animations
export function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (pathname !== displayChildren.props?.childProp?.segment) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div className="relative w-full flex-1 flex flex-col">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"], transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ y: "-100%" }}
            className="fixed inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 z-[99999] pointer-events-none flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], transition: { duration: 1.0, ease: "easeInOut" } }}
              className="text-white text-2xl md:text-4xl font-black tracking-[0.35em] uppercase font-heading select-none filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              KP GLOBAL
            </motion.div>
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: ["0%", "40%", "100%", "100%"], transition: { duration: 1.0, ease: "easeInOut" } }} 
              className="h-[1px] bg-white/40 mt-6" 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        key={pathname} 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
        className="w-full flex-1 flex flex-col z-10"
      >
        {displayChildren}
      </motion.div>
    </div>
  );
}

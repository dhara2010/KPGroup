"use client";

import React, { useRef, useState, useEffect } from "react";

// ScrollReveal component for triggering reveal animations on scroll
export function ScrollReveal({ 
  children, 
  variant = "fade-up", 
  delay = 0, 
  duration = 0.8, 
  className = "", 
  ...props 
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransitionStyles = () => {
    if (inView) return "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";

    switch (variant) {
      case "fade-down": return "opacity-0 -translate-y-8";
      case "fade-left": return "opacity-0 translate-x-8";
      case "fade-right": return "opacity-0 -translate-x-8";
      case "zoom-in": return "opacity-0 scale-95";
      case "blur-in": return "opacity-0 blur-md translate-y-4";
      default: return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getTransitionStyles()} ${className}`}
      style={{
        transitionDuration: `${duration * 1000}ms`,
        transitionDelay: `${delay * 1000}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// TextReveal component for simple scroll fade-up header animation
export function TextReveal({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {text}
    </span>
  );
}

// ThreeDTilt component for simple, responsive hover scaling and neon glow card transition
export function ThreeDTilt({ 
  children, 
  className = "", 
  scale = 1.02,
  tiltMax,
  glareOpacity,
  style = {},
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        transform: hovered ? `scale(${scale})` : "scale(1)",
        boxShadow: hovered ? "0 0 30px rgba(99,102,241,0.15)" : "none",
        ...style
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}

// Scroll3DSection component for section-based viewport fade-in and scale animations
export function Scroll3DSection({ children, className = "" }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.05 });
    
    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-visible transition-all duration-1000 ease-out ${
        inView ? "opacity-100 scale-100" : "opacity-50 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
}


import React, { useEffect, useRef, useState } from "react";

import { Play, Sparkles, ArrowRight, Activity, Cpu, Zap, Star } from "lucide-react";

import { ScrollReveal } from "@/components/Animations";
import { SectionWave } from "@/components/Animations/SectionWave";
import { Button } from "@/components/ui/Button";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";
function GlassOrbitalSphere({ scale, opacity, zIndex, centerOpacity, ringOpacity, mousePos, isLg, progress }) {
  // Smooth 2D rotation on scroll to preserve 100% 1:1 circular geometry without 3D perspective distortion
  const scrollRotate = progress * 160;

  // Smoothly move from right-side placement to viewport center as user scrolls
  const leftPos = isLg ? `${62 - progress * 12}%` : "50%";
  const topPos = isLg ? `${46 + progress * 4}%` : "45%";

  return (
    <div
      style={{
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${scrollRotate}deg)`,
        opacity: opacity,
        zIndex: zIndex,
        left: leftPos,
        top: topPos,
        transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), left 0.15s ease-out, top 0.15s ease-out",
      }}
      className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[720px] lg:h-[720px] aspect-square flex items-center justify-center pointer-events-none will-change-transform"
    >
      
      {/* Central Core: /icon.webp Image (Guaranteed 1:1 Circular Aspect) */}
      <div
        style={{ opacity: centerOpacity }}
        className="relative z-10 w-52 h-52 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] lg:w-[540px] lg:h-[540px] aspect-square flex items-center justify-center pointer-events-none animate-[floatIcon_5s_ease-in-out_infinite]"
      >
        {/* /icon.webp Image with 360° Continuous Spin */}
        <img
          src="/icon.webp"
          alt="KP Global Icon"
          style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
          className="relative z-10 w-full h-full aspect-square object-contain filter drop-shadow-[0_0_70px_rgba(108,59,255,0.9)] animate-[spin_24s_linear_infinite]"
        />
      </div>

    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLg, setIsLg] = useState(false);
  const [theme, setTheme] = useState("dark");
  const canvasRef = useRef(null);

  // Monitor document theme class changes reactively
  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // HTML5 Constellation Canvas background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const particleCount = 65;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null, active: false };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2.0 + 1.0;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108, 59, 255, 0.4)"; // Primary Purple
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.28 * (1 - dist / 115)})`; // Accent Purple
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(108, 59, 255, ${0.50 * (1 - dist / 180)})`; // Primary Purple
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1 relative to center
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Compute scroll-triggered transformations for cinematic zoom & transition
  const maxScroll = 700;
  const progress = Math.min(1, scrollY / maxScroll);

  // Keep icon 100% visible throughout the Hero scroll, fading only when transition to next section is taking place (progress > 0.85)
  const portalScale = 1 + Math.pow(progress, 1.2) * 3.8; 
  const portalOpacity = progress < 0.82 ? 1 : Math.max(0, 1 - (progress - 0.82) / 0.18); 
  const portalZIndex = progress >= 0.82 ? 5 : 2;

  const centerOpacity = progress < 0.85 ? 1 : Math.max(0, 1 - (progress - 0.85) / 0.15);
  const ringOpacity = progress < 0.85 ? 0.9 : Math.max(0, 0.9 - (progress - 0.85) * 6);

  const bgScale = 1 + progress * 0.15;
  const bgOpacity = Math.max(0, 0.35 - progress * 0.35);

  const contentOpacity = progress < 0.78 ? 1 : Math.max(0, 1 - (progress - 0.78) / 0.22);
  const contentScale = Math.max(0.92, 1 - progress * 0.08);
  const contentY = -progress * 60;

  // 3D tilt styles for widgets
  const widgetTiltStyle = (depth) => {
    const rx = mousePos.y * 15;
    const ry = mousePos.x * 15;
    return {
      transform: `rotateX(${-rx}deg) rotateY(${ry}deg) translateZ(${depth}px)`,
      transformStyle: "preserve-3d",
      transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-8 md:py-12 transition-colors duration-300 bg-bg-dark`}>
      <div className={`absolute inset-0 z-0 transition-colors duration-300 bg-bg-dark`} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-90"
      />

      <SectionWave position="right" direction="up" intensity="high" />

      <style>{`
          @keyframes refill {
            0%, 100% { width: 25%; }
            50% { width: 88%; }
          }
          @keyframes floatIcon {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
        `}</style>

      <div
        style={{
          transform: `scale(${bgScale})`,
          opacity: bgOpacity
        }}
        className="absolute inset-0 z-0 origin-center transition-all duration-300 ease-out will-change-transform"
      >
        <img
          src="/hero_bg.webp"
          alt="Hero Background"
          fill
          priority
          className={`object-cover w-full h-full opacity-30`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent z-10" />
      </div>

      {mounted && (
        <GlassOrbitalSphere
          scale={portalScale}
          opacity={portalOpacity}
          zIndex={portalZIndex}
          centerOpacity={centerOpacity}
          ringOpacity={ringOpacity}
          mousePos={mousePos}
          isLg={isLg}
          progress={progress}
        />
      )}

      <div
        style={{
          opacity: contentOpacity,
          transform: `scale(${contentScale}) translateY(${contentY}px)`,
        }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between px-6 sm:px-8 lg:px-12 py-8 min-h-screen text-left transition-all duration-100 ease-out"
      >
        {/* Top Section: Main Heading */}
        <div className="w-full mt-24 md:mt-28">
          <ScrollReveal variant="3d-unfold" delay={0.3}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md mb-6 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">
                Technology • Network • Media • Talent • Skills
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-5xl">
              KP GLOBAL BUSINESS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-accent">
                Build. Connect. Grow.
              </span>
            </h1>
          </ScrollReveal>
        </div>

        {/* Bottom Section: Customer Review (Left) & Description/CTA (Right) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          
          {/* Left: Customer Review Block */}
          <ScrollReveal variant="3d-unfold" delay={0.5} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-ping"></span>
              <span className="text-xs md:text-sm font-semibold text-white/90 tracking-wide">Customer Review</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-3 items-center">
                <img src="/testimonials/avani.webp" alt="Customer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#06060c] object-cover shadow-md" />
                <img src="/testimonials/bhavya.webp" alt="Customer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#06060c] object-cover shadow-md" />
                <img src="/testimonials/moksh.webp" alt="Customer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#06060c] object-cover shadow-md" />
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-primary text-white font-extrabold text-xs md:text-sm shadow-lg shadow-blue-500/25 border border-blue-400/30">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span>4.9</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Description Paragraph & Two CTAs */}
          <ScrollReveal variant="3d-unfold" delay={0.7} className="flex flex-col items-start gap-6 max-w-[480px]">
            <p className="md:pt-36 text-white font-medium text-[15px] sm:text-[16px] leading-[1.7] max-w-[480px] drop-shadow-md opacity-95">
              One integrated ecosystem helping businesses, entrepreneurs and professionals grow through technology, trusted connections, visibility, talent and skills.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => {
                  const ecoSection = document.getElementById("ecosystem");
                  if (ecoSection) ecoSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6C3BFF] via-[#7E46FF] to-[#A855F7] text-white font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(108,59,255,0.4)] hover:shadow-[0_15px_40px_rgba(108,59,255,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore Ecosystem</span>
                <div className="w-8 h-8 rounded-full bg-[#A855F7] flex items-center justify-center text-white shadow-md group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-md"
              >
                Let's Connect
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

export default Hero;


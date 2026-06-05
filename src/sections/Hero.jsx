"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight, Activity, Cpu, Zap } from "lucide-react";

import { ScrollReveal } from "@/components/Animations";

function GlassOrbitalSphere({ scale, opacity, zIndex, centerOpacity, ringOpacity, mousePos, isLg, progress }) {
  // Rotate slightly based on mouse position
  const rotateX = mousePos.y * 15;
  const rotateY = mousePos.x * 15;

  // Move center slightly based on scroll progress to transition to viewport center
  const leftPos = isLg ? `${68 - progress * 18}%` : "50%";

  return (
    <div
      style={{
        transform: `translate3d(-50%, -50%, 0) scale(${scale}) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
        opacity: opacity,
        zIndex: zIndex,
        left: leftPos,
        top: "50%",
        transformStyle: "preserve-3d",
        perspective: 1200,
        transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), left 0.15s ease-out",
      }}
      className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center pointer-events-none will-change-transform"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/25 to-pink-500/20 blur-3xl animate-pulse" />

      {/* Rotating Ring 1 */}
      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[85%] h-[85%] rounded-full border border-cyan-300/20 shadow-[0_0_60px_rgba(34,211,238,0.25)] animate-[spin_30s_linear_infinite]"
      />

      {/* Orbiting Satellite 1 (Cyan) */}
      {ringOpacity > 0.1 && (
        <div
          style={{ opacity: ringOpacity }}
          className="absolute w-[85%] h-[85%] animate-[spin_10s_linear_infinite] pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-pulse" />
        </div>
      )}

      {/* Rotating Ring 2 (Reversed) */}
      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[72%] h-[72%] rounded-full border-[10px] border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-[1px] animate-[spin_40s_linear_infinite_reverse]"
      />

      {/* Orbiting Satellite 2 (Purple) */}
      {ringOpacity > 0.1 && (
        <div
          style={{ opacity: ringOpacity }}
          className="absolute w-[72%] h-[72%] animate-[spin_14s_linear_infinite_reverse] pointer-events-none"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
        </div>
      )}

      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[78%] h-[78%] rounded-full border border-white/10 rotate-45"
      />

      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[60%] h-[60%] rounded-full border border-purple-300/20 -rotate-12 animate-[spin_50s_linear_infinite]"
      />

      {/* Orbiting Satellite 3 (Pink) */}
      {ringOpacity > 0.1 && (
        <div
          style={{ opacity: ringOpacity }}
          className="absolute w-[60%] h-[60%] animate-[spin_7s_linear_infinite] pointer-events-none"
        >
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
        </div>
      )}

      {/* Central Core */}
      <div
        style={{ opacity: centerOpacity }}
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/70 via-blue-300/35 to-purple-500/30 blur-sm shadow-[0_0_80px_rgba(255,255,255,0.3)]"
      />

      <div
        style={{ opacity: centerOpacity }}
        className="absolute w-5 h-5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)] animate-pulse"
      />

      <Sparkles className="absolute top-[22%] right-[25%] w-5 h-5 text-cyan-200 opacity-80" />
      <Sparkles className="absolute bottom-[25%] left-[25%] w-4 h-4 text-purple-200 opacity-70" />
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
        ctx.fillStyle = "rgba(147, 197, 253, 0.55)";
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
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.28 * (1 - dist / 115)})`;
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
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.50 * (1 - dist / 180)})`;
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

  // Compute scroll-triggered transformations using standard linear math
  const maxScroll = 500;
  const progress = Math.min(1, scrollY / maxScroll);

  const portalScale = 1 + progress * 8; // scale from 1 to 9
  const portalOpacity = Math.max(0, 1 - progress);
  const portalZIndex = progress >= 0.5 ? 20 : 0;

  const centerOpacity = Math.max(0, 1 - progress * 1.5);
  const ringOpacity = Math.max(0, 0.9 - progress * 0.9);

  const bgScale = 1 + progress * 0.15;
  const bgOpacity = Math.max(0, 0.35 - progress * 0.35);

  const contentOpacity = Math.max(0, 1 - progress * 1.5);
  const contentScale = Math.max(0.95, 1 - progress * 0.05);
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
    <div className={`relative h-[150vh] transition-colors duration-300 ${theme === "light" ? "bg-[#fafafb]" : "bg-black"}`}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-8 md:py-12">
        <div className={`absolute inset-0 z-0 transition-colors duration-300 ${theme === "light" ? "bg-[#fafafb]" : "bg-black"}`} />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-90"
        />

        <style>{`
          @keyframes refill {
            0%, 100% { width: 25%; }
            50% { width: 88%; }
          }
        `}</style>

        <div
          style={{
            transform: theme === "dark" ? `scale(${bgScale})` : "scale(1)",
            opacity: theme === "dark" ? bgOpacity : 0.18
          }}
          className="absolute inset-0 z-0 origin-center transition-all duration-300 ease-out will-change-transform"
        >
          <Image
            src="/hero_bg.webp"
            alt="Hero Background"
            fill
            priority
            className={`object-cover ${theme === "light" ? "brightness-110 saturate-80" : ""}`}
          />
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
          className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-4 h-full text-left transition-all duration-100 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start pt-10">
              <ScrollReveal variant="3d-unfold" delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-black text-cyan-200 tracking-widest uppercase">
                    Technology • Branding • Growth
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="3d-unfold" delay={0.3}>
                <h1 className={`text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-6 drop-shadow-2xl font-heading transition-colors duration-300 ${theme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                  {theme === "light" ? (
                    <>
                      INNOVATE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">SMART</span>.
                      <br />
                      SCALE <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">SWIFT</span>.
                      <br />
                      SHAPE TOMORROW.
                    </>
                  ) : (
                    <>
                      BUILD <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300">BETTER</span>.
                      <br />
                      GROW <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400">FASTER</span>.
                      <br />
                      LEAD THE FUTURE.
                    </>
                  )}
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="3d-unfold" delay={0.5}>
                <p className={`text-sm md:text-base lg:text-lg mb-8 max-w-xl font-light leading-relaxed ${theme === "light" ? "text-gray-600" : "text-blue-100/75"
                  }`}>
                  {theme === "light"
                    ? "Empowering emerging enterprises and global networks through clean design, strategic corporate media, premium workforce training, and next-generation business architecture."
                    : "KP Global Business helps startups, companies, and professionals create a stronger digital presence through modern websites, branding, media networks, automation, and business growth solutions."
                  }
                </p>
              </ScrollReveal>

              <ScrollReveal variant="3d-unfold" delay={0.7}>
                <div className="flex flex-row items-center gap-4">
                  {/* Primary CTA */}
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] group"
                  >
                    Start Growing
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                      {/* Arrow colour: white on gradient bg always */}
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </button>

                  {/* Secondary CTA — adapts to theme */}
                  <button
                    onClick={() => {
                      const ecosystemSection = document.getElementById("ecosystem");
                      if (ecosystemSection) {
                        ecosystemSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`px-6 py-4 backdrop-blur-md border rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 text-xs group ${theme === "light"
                      ? "bg-black/5 hover:bg-black/10 border-black/10 text-gray-800"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-white"
                      }`}
                  >
                    Explore Services
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${theme === "light" ? "bg-black/10" : "bg-white/10"
                      }`}>
                      <Play className={`w-2.5 h-2.5 ${theme === "light" ? "text-indigo-600 fill-indigo-600" : "text-indigo-400 fill-indigo-400"
                        }`} />
                    </div>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Interactive 3D Cyber Widgets (Visible on lg screens) */}
            {isLg && (
              <div
                className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center pointer-events-none"
                style={{ perspective: 1000 }}
              >
                {/* System Status Card with Dynamic Micro-bar visualizer */}
                <div
                  style={widgetTiltStyle(40)}
                  className="absolute top-[15%] left-[-5%] px-5 py-3.5 rounded-2xl bg-[#07070a]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3 w-64 pointer-events-auto hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block leading-tight">System Status</span>
                    <span className="text-xs font-bold text-white uppercase block mt-0.5 tracking-wider">ECOSYSTEM LIVE</span>
                  </div>

                  {/* Jump micro-bars */}
                  <div className="flex items-end gap-0.5 h-3 ml-auto shrink-0 opacity-60">
                    <span className="w-[1.5px] bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_100ms] h-1.5" />
                    <span className="w-[1.5px] bg-cyan-400 rounded-full animate-[bounce_1s_infinite_300ms] h-3" />
                    <span className="w-[1.5px] bg-cyan-400 rounded-full animate-[bounce_0.7s_infinite_0ms] h-2" />
                  </div>
                </div>

                {/* Scalability Widget with Dynamic refilling progress line */}
                <div
                  style={{ ...widgetTiltStyle(70), transformStyle: "preserve-3d" }}
                  className="absolute top-[48%] right-[-10%] px-5 py-3.5 rounded-2xl bg-[#07070a]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2.5 w-60 pointer-events-auto hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block leading-tight">Branding Scale</span>
                      <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 uppercase block mt-0.5 tracking-wider font-extrabold">10x PERFORMANCE</span>
                    </div>
                  </div>
                  {/* Dynamic refill bar */}
                  <div className="w-full h-1 bg-purple-500/20 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-0"
                      style={{ animation: "refill 3.5s ease-in-out infinite" }}
                    />
                  </div>
                </div>

                {/* Automation Tracker with Spinning circular sync ring */}
                <div
                  style={widgetTiltStyle(50)}
                  className="absolute bottom-[12%] left-[10%] px-5 py-3.5 rounded-2xl bg-[#07070a]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3 w-64 pointer-events-auto hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block leading-tight">Workflow Optimization</span>
                    <span className="text-xs font-bold text-white uppercase block mt-0.5 tracking-wider font-extrabold">99.9% AUTOMATION</span>
                  </div>
                  {/* Sync ring */}
                  <div className="w-4 h-4 rounded-full border border-blue-500/20 border-t-blue-400 animate-spin shrink-0 ml-auto" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/Animations";

function GlassOrbitalSphere({ scale, opacity, zIndex, centerOpacity, ringOpacity }) {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none transition-transform duration-100 ease-out will-change-transform"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/25 to-pink-500/20 blur-3xl animate-pulse" />

      {/* Rotating Ring 1 */}
      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[80%] h-[80%] rounded-full border border-cyan-300/25 shadow-[0_0_60px_rgba(34,211,238,0.25)] animate-[spin_25s_linear_infinite]"
      />

      {/* Rotating Ring 2 (Reversed) */}
      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[70%] h-[70%] rounded-full border-[10px] border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-[1px] animate-[spin_35s_linear_infinite_reverse]"
      />

      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[75%] h-[75%] rounded-full border border-white/20 rotate-45"
      />

      <div
        style={{ opacity: ringOpacity }}
        className="absolute w-[55%] h-[55%] rounded-full border border-purple-300/30 -rotate-12 animate-[spin_40s_linear_infinite]"
      />

      {/* Central Core */}
      <div
        style={{ opacity: centerOpacity }}
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/80 via-blue-300/40 to-purple-500/30 blur-sm shadow-[0_0_80px_rgba(255,255,255,0.35)]"
      />

      <div
        style={{ opacity: centerOpacity }}
        className="absolute w-5 h-5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]"
      />

      <Sparkles className="absolute top-[22%] right-[25%] w-5 h-5 text-cyan-200 opacity-80" />
      <Sparkles className="absolute bottom-[25%] left-[25%] w-4 h-4 text-purple-200 opacity-70" />
    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll-triggered transformations using standard linear math
  const maxScroll = 65;
  const progress = Math.min(1, scrollY / maxScroll);

  const portalScale = 1 + progress * 21;
  const portalOpacity = Math.max(0, 1 - scrollY / maxScroll);
  const portalZIndex = scrollY >= 26 ? 20 : 0;

  const centerOpacity = Math.max(0, 1 - scrollY / 45);
  const ringOpacity = Math.max(0, 0.9 - (scrollY / 80) * 0.9);

  const bgScale = 1 + progress * 0.1;
  const bgOpacity = Math.max(0, 0.35 - progress * 0.35);

  const contentOpacity = Math.max(0, 1 - scrollY / 35);
  const contentScale = Math.max(0.97, 1 - (scrollY / 35) * 0.03);
  const contentY = -(scrollY / 35) * 14;

  return (
    <div className="relative h-[90vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 bg-black z-0" />

        <div
          style={{ 
            transform: `scale(${bgScale})`, 
            opacity: bgOpacity 
          }}
          className="absolute inset-0 z-0 origin-center transition-transform duration-100 ease-out will-change-transform"
        >
          <Image
            src="/hero_bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-grid mask-radial z-0 border-t border-white/5 mix-blend-screen opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black z-0" />

        {mounted && (
          <GlassOrbitalSphere
            scale={portalScale}
            opacity={portalOpacity}
            zIndex={portalZIndex}
            centerOpacity={centerOpacity}
            ringOpacity={ringOpacity}
          />
        )}

        <div
          style={{
            opacity: contentOpacity,
            transform: `scale(${contentScale}) translateY(${contentY}px)`,
          }}
          className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center gap-y-8 px-6 sm:px-8 lg:px-12 py-4 h-full text-left transition-all duration-100 ease-out"
        >
          <div className="w-full lg:w-[56%] flex flex-col items-start">
            <ScrollReveal variant="3d-unfold" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-indigo-200 tracking-wide uppercase">
                  Technology • Branding • Growth
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="3d-unfold" delay={0.3}>
              <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.08] mb-5 drop-shadow-xl">
                Build Better.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-200 to-purple-400">
                  Grow Faster.
                </span>
                <br />
                Lead the Future.
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="3d-unfold" delay={0.5}>
              <p className="text-sm md:text-base lg:text-lg text-blue-100/70 mb-6 max-w-xl font-light leading-relaxed">
                KP Global Business helps startups, companies, and professionals
                create a stronger digital presence through modern websites,
                branding, media, automation, and business growth solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="3d-unfold" delay={0.7}>
              <div className="flex flex-row items-center gap-3">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 group transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  Start Growing
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </button>

                <button 
                  onClick={() => {
                    const ecosystemSection = document.getElementById("ecosystem");
                    if (ecosystemSection) {
                      ecosystemSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 text-xs group"
                >
                  Explore Services
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <Play className="w-2.5 h-2.5 text-indigo-400 fill-indigo-400" />
                  </div>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

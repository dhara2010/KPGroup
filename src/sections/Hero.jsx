"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

import UniqueArrow from "@/components/UniqueArrow";
import ScrollReveal from "@/components/ScrollReveal";

function GlassOrbitalSphere({
  rotateX,
  rotateY,
  rotateZ,
  scale,
  opacity,
  x,
  y,
  zIndex,
  smoothScrollY,
}) {
  const centerOpacity = useTransform(smoothScrollY, [0, 45], [1, 0]);
  const ringOpacity = useTransform(smoothScrollY, [0, 80], [0.9, 0]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        rotateX,
        rotateY,
        rotateZ,
        x,
        y,
        zIndex,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none will-change-transform"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/25 to-pink-500/20 blur-3xl animate-pulse" />

      <motion.div
        style={{ opacity: ringOpacity }}
        className="absolute w-[80%] h-[80%] rounded-full border border-cyan-300/25 shadow-[0_0_60px_rgba(34,211,238,0.25)]"
      />

      <motion.div
        style={{ opacity: ringOpacity }}
        className="absolute w-[70%] h-[70%] rounded-full border-[10px] border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-[1px]"
      />

      <motion.div
        style={{ opacity: ringOpacity }}
        className="absolute w-[75%] h-[75%] rounded-full border border-white/20 rotate-45"
      />

      <motion.div
        style={{ opacity: ringOpacity }}
        className="absolute w-[55%] h-[55%] rounded-full border border-purple-300/30 -rotate-12"
      />

      <motion.div
        style={{ opacity: centerOpacity }}
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/80 via-blue-300/40 to-purple-500/30 blur-sm shadow-[0_0_80px_rgba(255,255,255,0.35)]"
      />

      <motion.div
        style={{ opacity: centerOpacity }}
        className="absolute w-5 h-5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]"
      />

      <Sparkles className="absolute top-[22%] right-[25%] w-5 h-5 text-cyan-200 opacity-80" />
      <Sparkles className="absolute bottom-[25%] left-[25%] w-4 h-4 text-purple-200 opacity-70" />
    </motion.div>
  );
}

function Hero() {
  const containerRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [timeRotation, setTimeRotation] = useState(0);
  const [desktopOffset, setDesktopOffset] = useState(0);

  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    damping: 30,
    stiffness: 130,
    mass: 0.4,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updateRotation = (time) => {
      setTimeRotation((time / 150) % 360);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDesktopOffset(window.innerWidth >= 1024 ? 270 : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portalScale = useTransform(smoothScrollY, [0, 65], [1, 22]);

  const portalOpacity = useTransform(
    smoothScrollY,
    [0, 45, 65],
    [0.9, 1, 0]
  );

  const portalRotateZ = useTransform(
    smoothScrollY,
    [0, 65],
    [timeRotation, timeRotation + 35]
  );

  const portalRotateX = useTransform(smoothScrollY, [0, 65], [10, 0]);
  const portalRotateY = useTransform(smoothScrollY, [0, 65], [-6, 0]);
  const portalX = useTransform(smoothScrollY, [0, 65], [desktopOffset, 0]);
  const portalY = useTransform(smoothScrollY, [0, 65], [0, -2]);
  const portalZIndex = useTransform(smoothScrollY, [0, 25, 26], [0, 0, 20]);

  const bgScale = useTransform(smoothScrollY, [0, 65], [1, 1.1]);
  const bgOpacity = useTransform(smoothScrollY, [0, 50, 65], [0.35, 0.08, 0]);

  const contentOpacity = useTransform(smoothScrollY, [0, 35], [1, 0]);
  const contentScale = useTransform(smoothScrollY, [0, 35], [1, 0.97]);
  const contentY = useTransform(smoothScrollY, [0, 35], [0, -14]);

  return (
    <div ref={containerRef} className="relative h-[90vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 bg-black z-0" />

        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 z-0 origin-center will-change-transform"
        >
          <Image
            src="/hero_bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-grid mask-radial z-0 border-t border-white/5 mix-blend-screen opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black z-0" />

        {mounted && (
          <GlassOrbitalSphere
            rotateX={portalRotateX}
            rotateY={portalRotateY}
            rotateZ={portalRotateZ}
            scale={portalScale}
            opacity={portalOpacity}
            x={portalX}
            y={portalY}
            zIndex={portalZIndex}
            smoothScrollY={smoothScrollY}
          />
        )}

        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            y: contentY,
          }}
          className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center gap-y-8 px-6 sm:px-8 lg:px-12 py-4 h-full text-left"
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
                <button className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden text-xs">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                  <span className="relative flex items-center gap-1.5">
                    Start Growing
                    <UniqueArrow className="w-3.5 h-3.5 ml-0.5" direction="right" />
                  </span>
                </button>

                <button className="px-5 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-xs group">
                  <Play className="w-3 h-3 text-indigo-400" />
                  Explore Services
                </button>
              </div>
            </ScrollReveal>
          </div>


        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
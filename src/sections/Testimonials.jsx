"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Star,
  Quote,
  GraduationCap,
  Briefcase,
  Activity,
  PlayCircle,
  User,
} from "lucide-react";
import Image from "next/image";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

const categories = [
  { id: "all", label: "All Stories" },
  { id: "client", label: "Client Reviews" },
  { id: "student", label: "Student Reviews" },
  { id: "video", label: "Video Testimonials" },
];

const iconMap = {
  client: Briefcase,
  student: GraduationCap,
  video: PlayCircle,
};

// Custom Video Modal component with premium controls
function VideoModal({ videoSrc, name, role, onClose }) {
  const vRef = useRef(null);
  const barRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [prog, setProg] = useState(0);
  const [showUI, setShowUI] = useState(true);
  const hideT = useRef(null);

  const resetHide = useCallback(() => {
    setShowUI(true);
    clearTimeout(hideT.current);
    hideT.current = setTimeout(() => setShowUI(false), 3000);
  }, []);

  useEffect(() => {
    resetHide();
    return () => clearTimeout(hideT.current);
  }, [resetHide]);

  const toggle = useCallback(() => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === " ") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, toggle]);

  const seek = (e) => {
    const v = vRef.current;
    const bar = barRef.current;
    if (!v || !bar || !v.duration || isNaN(v.duration) || !isFinite(v.duration)) return;
    const r = bar.getBoundingClientRect();
    if (r.width === 0) return;
    v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration;
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-xl transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 aspect-video rounded-3xl overflow-hidden bg-[#07070a] border border-white/10 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
        onClick={(e) => e.stopPropagation()}
        onMouseMove={resetHide}
        style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-[400] w-10 h-10 rounded-full bg-black/60 border border-white/10 hover:border-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-red-500/20 text-white"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          ref={vRef}
          src={videoSrc}
          autoPlay
          className="w-full h-full bg-black"
          onTimeUpdate={() => {
            const v = vRef.current;
            if (v?.duration && !isNaN(v.duration) && isFinite(v.duration)) {
              setProg((v.currentTime / v.duration) * 100);
            }
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={toggle}
        />

        {/* Custom Controls Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-between pointer-events-none transition-opacity duration-300 ${
            showUI ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Top Bar */}
          <div className="p-6 bg-gradient-to-b from-black/80 to-transparent">
            <span className="text-[10px] font-black uppercase text-cyan-400 tracking-widest">
              {role}
            </span>
            <h4 className="text-white font-extrabold text-lg mt-0.5 tracking-tight uppercase">
              {name}
            </h4>
          </div>

          {/* Centered Play Button (Visible when paused) */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer"
            onClick={toggle}
          >
            <div
              className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 ${
                playing ? "opacity-0 scale-75" : "opacity-100 scale-100"
              }`}
            >
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </div>
          </div>

          {/* Bottom Bar Controls */}
          <div className="p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-auto">
            {/* Timeline Progress Bar */}
            <div
              ref={barRef}
              onClick={seek}
              className="w-full h-5 flex items-center cursor-pointer group mb-4"
            >
              <div className="w-full h-1 bg-white/20 rounded-full group-hover:h-1.5 transition-all relative">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative"
                  style={{ width: `${prog}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform text-white"
              >
                {playing ? (
                  <Pause className="w-5 h-5" fill="white" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="white" />
                )}
              </button>

              <button
                onClick={() => {
                  const v = vRef.current;
                  if (v) {
                    v.muted = !v.muted;
                    setMuted(v.muted);
                  }
                }}
                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform text-white/80 hover:text-white"
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="ml-auto">
                <button
                  onClick={() => {
                    const v = vRef.current;
                    if (v?.requestFullscreen) v.requestFullscreen();
                  }}
                  className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform text-white/80 hover:text-white"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getGlowStyles = (colorStr, isHovered) => {
  if (!isHovered) {
    return {
      borderColor: "rgba(255, 255, 255, 0.08)",
      boxShadow: "none",
    };
  }
  let shadowColor = "rgba(6, 182, 212, 0.12)"; // Default Cyan
  let borderGlow = "rgba(6, 182, 212, 0.3)";
  if (colorStr?.includes("purple") || colorStr?.includes("pink") || colorStr?.includes("violet")) {
    shadowColor = "rgba(168, 85, 247, 0.12)"; // Purple
    borderGlow = "rgba(168, 85, 247, 0.3)";
  } else if (colorStr?.includes("amber") || colorStr?.includes("orange")) {
    shadowColor = "rgba(245, 158, 11, 0.12)"; // Amber
    borderGlow = "rgba(245, 158, 11, 0.3)";
  } else if (colorStr?.includes("rose") || colorStr?.includes("red")) {
    shadowColor = "rgba(244, 63, 94, 0.12)"; // Rose
    borderGlow = "rgba(244, 63, 94, 0.3)";
  } else if (colorStr?.includes("green") || colorStr?.includes("emerald")) {
    shadowColor = "rgba(16, 185, 129, 0.12)"; // Green
    borderGlow = "rgba(16, 185, 129, 0.3)";
  }
  return {
    borderColor: borderGlow,
    boxShadow: `0 15px 40px -10px ${shadowColor}, 0 0 25px 2px ${shadowColor}`,
  };
};

// Individual Testimonial Card Component to prevent unnecessary renders and manage hover states locally
function TestimonialCard({ testimonial, idx, onPlay }) {
  const [hov, setHov] = useState(false);
  const vRef = useRef(null);
  const Icon = iconMap[testimonial.cat] || Briefcase;

  // Handles playing silent preview on hover
  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    if (hov) {
      v.muted = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
    return () => {
      if (v) {
        v.pause();
      }
    };
  }, [hov]);

  const gridSpan = testimonial.isVideo && idx % 4 === 0
    ? "md:col-span-2 lg:col-span-2 aspect-auto"
    : "md:col-span-1 lg:col-span-1";

  return (
    <ScrollReveal
      variant="3d-unfold"
      delay={idx * 0.08}
      className={`h-full ${gridSpan}`}
    >
      <ThreeDTilt
        tiltMax={8}
        scale={1.02}
        glareOpacity={0.05}
        className="w-full h-full cursor-pointer rounded-[2.5rem]"
      >
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          onClick={() => {
            if (testimonial.isVideo) {
              onPlay(testimonial);
            }
          }}
          style={{
            ...getGlowStyles(testimonial.color, hov),
            transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
          }}
          className="group relative rounded-[2.5rem] bg-[#07070a]/90 border overflow-hidden h-full min-h-[420px] p-8 flex flex-col justify-between"
        >
          {testimonial.isVideo ? (
            // Video Testimonial Card Layout
            <>
              {/* Background Media with silent playback preview on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                  ref={vRef}
                  src={testimonial.videoSrc}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none"
                  style={{
                    opacity: hov ? 0.75 : 0.25,
                    transform: hov ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Cover image fallback - abstract gradient grid (no user face) */}
                {!hov && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07070a] via-black to-[#0d1527]/20 opacity-90 transition-all duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <div
                      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${
                        testimonial.color || "from-blue-600 to-cyan-500"
                      } opacity-10 rounded-full blur-3xl`}
                    />
                  </div>
                )}

                {/* Soft ambient background colored radial glow */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${
                    testimonial.color || "from-blue-600 to-cyan-500"
                  } opacity-15 rounded-full blur-3xl`}
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              </div>

              {/* Top Info Badge */}
              <div className="relative z-20 flex justify-between items-center w-full">
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[9px] font-black text-cyan-200 uppercase tracking-widest">
                    {testimonial.type || "Video Story"}
                  </span>
                </div>

                {/* Active Audio Visualizer on hover */}
                {hov && (
                  <div className="flex items-end gap-0.5 h-3 px-2">
                    <span className="w-[2px] bg-cyan-400 rounded-full anim-visualizer" style={{ height: "40%", animationDelay: "0.1s" }} />
                    <span className="w-[2px] bg-cyan-400 rounded-full anim-visualizer" style={{ height: "100%", animationDelay: "0.3s" }} />
                    <span className="w-[2px] bg-cyan-400 rounded-full anim-visualizer" style={{ height: "60%", animationDelay: "0.5s" }} />
                    <span className="w-[2px] bg-cyan-400 rounded-full anim-visualizer" style={{ height: "80%", animationDelay: "0.2s" }} />
                  </div>
                )}
              </div>

              {/* Immersive Play button with glowing hover ring */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/40 transition-all duration-500 shadow-xl"
                >
                  <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="relative z-20 w-full pt-16">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 font-heading tracking-tight uppercase">
                  {testimonial.name}
                </h3>
                <p className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-3">
                  {testimonial.role}
                </p>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </p>
              </div>
            </>
          ) : (
            // Standard static text review Card Layout
            <>
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#08080c] to-[#040407]" />
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/5 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-6">
                  <Quote
                    className="w-9 h-9 transition-all duration-500"
                    style={{
                      color: hov ? "rgba(168, 85, 247, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      transform: hov ? "rotate(-12deg) scale(1.15)" : "rotate(0deg) scale(1)",
                    }}
                  />
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                      {testimonial.type || "Review"}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 transition-all duration-500"
                      style={{
                        color: hov ? "#fbbf24" : "#d97706",
                        transform: hov ? `scale(1.1) translateY(-1px)` : "scale(1)",
                        transitionDelay: `${i * 50}ms`,
                        filter: hov ? "drop-shadow(0 0 5px rgba(251, 191, 36, 0.6))" : "none",
                      }}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-gray-300 font-light leading-relaxed text-xs md:text-sm italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* User Avatar Row - clean generic silhouette avatar (no user face) */}
              <div className="relative z-10 flex items-center gap-4 pt-5 border-t border-white/5 mt-6">
                <div
                  className="relative w-11 h-11 rounded-full border shrink-0 bg-gradient-to-br from-cyan-950 to-slate-900 flex items-center justify-center text-cyan-400/80 transition-all duration-500"
                  style={{
                    borderColor: hov ? "rgba(6, 182, 212, 0.4)" : "rgba(6, 182, 212, 0.2)",
                    transform: hov ? "scale(1.05) rotate(360deg)" : "scale(1) rotate(0deg)",
                    boxShadow: hov ? "0 0 12px rgba(6, 182, 212, 0.3)" : "none",
                  }}
                >
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white tracking-tight uppercase">
                    {testimonial.name}
                  </h4>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </ThreeDTilt>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        if (Array.isArray(data)) {
          setTestimonials(data);
        } else {
          console.error("Failed to fetch testimonials: response is not an array", data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Dynamically filter categories that actually contain items to avoid rendering empty states
  const availableCatIds = ["all", ...new Set(testimonials.map((t) => t.cat || "video"))];
  const displayCategories = categories.filter((cat) => availableCatIds.includes(cat.id));

  const filteredTestimonials =
    activeCat === "all"
      ? (Array.isArray(testimonials) ? testimonials : [])
      : (Array.isArray(testimonials) ? testimonials.filter((t) => t.cat === activeCat) : []);

  return (
    <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-white/5">
      <style>{`
        @keyframes visualizer {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1.0); }
        }
        .anim-visualizer {
          transform-origin: bottom;
          animation: visualizer 0.8s infinite ease-in-out;
        }
      `}</style>

      {/* Immersive background glows matching the vision page layout */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Cyber Grid line overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-200 tracking-wider uppercase">
                Ecosystem Reviews
              </span>
            </div>
          </ScrollReveal>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="SUCCESS STORIES." delay={0.2} />
          </h2>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
              Hear directly from the innovators, startup founders, and graduate engineers who have transformed their operations and careers through KP Global.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamic Category Tabs */}
        {displayCategories.length > 1 && (
          <ScrollReveal variant="3d-unfold" className="flex flex-wrap justify-center gap-4 mb-20">
            {displayCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                  activeCat === cat.id
                    ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105"
                    : "bg-white/5 text-gray-400 border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </ScrollReveal>
        )}

        {/* Testimonials Grid Layout - Standardized 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px] items-stretch">
          {filteredTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
              idx={idx}
              onPlay={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Component */}
      {activeVideo && (
        <VideoModal
          videoSrc={activeVideo.videoSrc}
          name={activeVideo.name}
          role={activeVideo.role}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, Star, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const REELS = [
  { id:1,  name:"Avani Parmar",   role:"Skill Academy Graduate",  videoSrc:"/videos/Avani_parmar.mp4",       accent:"#7c3aed", quote:"KP Global completely transformed my perspective on what's possible. The mentorship and community here are unparalleled — I've never felt more supported." },
  { id:2,  name:"Bhavya Chauhan", role:"IT Solutions, KP Global", videoSrc:"/videos/Bhavya_Chauhan.mp4",     accent:"#ec4899", quote:"Incredible growth. The best decision I ever made for my career." },
  { id:3,  name:"Drashti Sangani",role:"Business Community",      videoSrc:"/videos/Drashti_sangani.mp4",   accent:"#7c3aed", quote:"Joining KP Global Business Community opened doors I never knew existed. I found my network, my mentors, and my purpose here." },
  { id:4,  name:"Gadhvi Dhara",   role:"Skill Academy, KP Global",videoSrc:"/videos/Gadhvi_dhara.mp4",      accent:"#ec4899", quote:"The curriculum is designed by industry leaders. I graduated ready to lead, not just follow. Truly life-changing." },
  { id:5,  name:"Krupa",          role:"Media Network Partner",   videoSrc:"/videos/Krupa-final-video.mp4", accent:"#7c3aed", quote:"KP Global Media Network helped me reach an audience I only dreamed of." },
  { id:6,  name:"Moksh Shah",     role:"IT Solutions Graduate",   videoSrc:"/videos/Moksh_Shah.mp4",        accent:"#ec4899", quote:"From zero experience to full-stack developer in months. KP Global's IT track is the fastest path forward." },
  { id:7,  name:"Pranjal Chavda", role:"Business Community Lead", videoSrc:"/videos/Pranjal_chavda.mp4",   accent:"#7c3aed", quote:"The collaborative culture at KP Global is infectious. Every interaction teaches me something new about leadership and growth." },
  { id:8,  name:"Suhani Kanani",  role:"Skill Academy Graduate",  videoSrc:"/videos/Suhani_kanani.mp4",     accent:"#ec4899", quote:"KP Global's practical approach ensured I was industry-ready from day one." },
  { id:9,  name:"Tapti Bar",      role:"KP Careers Alumnus",      videoSrc:"/videos/Tapti-Bar.mp4",         accent:"#7c3aed", quote:"Incredible growth. The best partnership we've ever had. KP Global delivered beyond every expectation." },
  { id:10, name:"Vishva Chorela", role:"Business Community",      videoSrc:"/videos/Vishva-Chorela.mp4",   accent:"#ec4899", quote:"The global network and mindset shifts I experienced at KP Global are priceless." },
  { id:11, name:"Sujal",          role:"IT Solutions Graduate",   videoSrc:"/videos/sujal.mp4",             accent:"#7c3aed", quote:"Real projects, real mentors, real results. KP Global prepared me for challenges no textbook ever could." },
];

/* ─── Format time ───────────────────────────────────────────────────────── */
const fmtT = s => {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/* ─── Video Modal ───────────────────────────────────────────────────────── */
function VideoModal({ reel, onClose }) {
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

  useEffect(() => { resetHide(); return () => clearTimeout(hideT.current); }, [resetHide]);

  const toggle = () => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  useEffect(() => {
    const h = e => { if (e.key === "Escape") onClose(); if (e.key === " ") { e.preventDefault(); toggle(); } };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const seek = e => {
    const v = vRef.current; const bar = barRef.current;
    if (!v || !bar) return;
    const r = bar.getBoundingClientRect();
    v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration;
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{ background: "rgba(15,10,5,0.93)", backdropFilter: "blur(16px)", animation: "fadeIn 0.2s ease" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={e => e.stopPropagation()}
        onMouseMove={resetHide}
        style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards" }}
      >
        {/* ── Close button — always visible, always on top ── */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: -18,
            right: -18,
            zIndex: 400,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(20,12,6,0.92)",
            border: "2px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.2s, background 0.2s",
            boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.background = "rgba(220,60,60,0.9)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(20,12,6,0.92)"; }}
          aria-label="Close video"
        >
          <X style={{ width: 18, height: 18, color: "#fff" }} />
        </button>

        <div className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 60px 160px rgba(0,0,0,0.8)" }}>
          <video
            ref={vRef} src={reel.videoSrc} autoPlay
            className="w-full block bg-black"
            style={{ maxHeight: "76vh", objectFit: "contain" }}
            onTimeUpdate={() => { const v = vRef.current; if (v?.duration) setProg(v.currentTime / v.duration * 100); }}
            onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
            onClick={toggle}
          />
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none"
            style={{ opacity: showUI ? 1 : 0, transition: "opacity 0.35s" }}>
            {/* Top info bar (no close button here) */}
            <div className="flex items-start p-5 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)" }}>
              <div>
                <p style={{ color: "#ec4899", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>{reel.role}</p>
                <p className="text-white font-black text-base uppercase tracking-wide mt-0.5">{reel.name}</p>
              </div>
            </div>
            {/* Ghost play */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto" onClick={toggle}>
              <div style={{ width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifycontent: "center", opacity: playing ? 0 : 1, transform: playing ? "scale(0.6)" : "scale(1)", transition: "all 0.3s" }}>
                <Play style={{ width: 28, height: 28, color: "#fff", marginLeft: 3 }} fill="#fff" />
              </div>
            </div>
            {/* Bottom controls */}
            <div className="p-5 pointer-events-auto" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
              <div ref={barRef} onClick={seek} className="w-full mb-3 cursor-pointer group" style={{ height: 20, display: "flex", alignItems: "center" }}>
                <div className="absolute w-full rounded-full group-hover:h-[5px] transition-all" style={{ height: 3, background: "rgba(255,255,255,0.18)", position: "relative" }}>
                  <div style={{ height: "100%", width: `${prog}%`, background: "linear-gradient(90deg, #7c3aed, #ec4899)", borderRadius: 99, boxShadow: "0 0 10px rgba(236,72,153,0.6)", transition: "width 0.1s" }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={toggle} className="w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform">
                  {playing ? <Pause className="w-5 h-5 text-white" fill="white" /> : <Play className="w-5 h-5 text-white ml-0.5" fill="white" />}
                </button>
                <button onClick={() => { const v = vRef.current; if (v) { v.muted = !v.muted; setMuted(v.muted); } }} className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                  {muted ? <VolumeX className="w-4 h-4 text-white/60" /> : <Volume2 className="w-4 h-4 text-white/60" />}
                </button>
                <div className="ml-auto">
                  <button onClick={() => { const v = vRef.current; if (v?.requestFullscreen) v.requestFullscreen(); }} className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4 text-white/60" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Dark Portrait (teal bg, video preview on hover) ─────────────── */
function PortraitCard({ reel, onPlay, className = "" }) {
  const [hov, setHov] = useState(false);
  const vRef = useRef(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    if (hov) { v.muted = true; v.currentTime = 0; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hov]);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      style={{ borderRadius: 22, background: "#0d061c", border: "1px solid rgba(236,72,153,0.12)" }}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <video ref={vRef} src={reel.videoSrc} muted loop playsInline preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{ opacity: hov ? 0.8 : 0.45, transform: hov ? "scale(1.04)" : "scale(1)" }}
      />
      {/* Gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,6,28,0.95) 0%, rgba(13,6,28,0.4) 55%, transparent 100%)" }} />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center rounded-full transition-all duration-300"
          style={{ width: 52, height: 52, background: hov ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.82)", transform: hov ? "scale(1.12)" : "scale(1)", boxShadow: hov ? "0 0 20px rgba(236,72,153,0.5), 0 8px 24px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.2)" }}>
          <Play style={{ width: 20, height: 20, color: "#ec4899", marginLeft: 3 }} fill="#ec4899" />
        </div>
      </div>

      {/* Name / role */}
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: "16px 20px" }}>
        <h3 className="font-black text-white" style={{ fontSize: 15, letterSpacing: "0.01em", margin: 0, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{reel.name}</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "3px 0 0", fontWeight: 500 }}>{reel.role}</p>
      </div>
    </div>
  );
}

/* ─── Card: Large Quote (cream bg, big italic serif) ────────────────────── */
function LargeQuoteCard({ reel, className = "" }) {
  return (
    <div className={`relative overflow-hidden flex flex-col justify-between ${className}`}
      style={{ borderRadius: 22, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(236,72,153,0.18)", backdropFilter: "blur(12px)", padding: "36px 40px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
      {/* Decorative quote mark */}
      <div style={{ position: "absolute", top: 20, right: 28, fontSize: 120, fontFamily: "Georgia, serif", color: "rgba(236,72,153,0.08)", lineHeight: 1, userSelect: "none" }}>"</div>

      <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(20px, 2vw, 28px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.45, color: "#ffffff", margin: 0, position: "relative", zIndex: 1 }}>
        "{reel.quote.length > 80 ? reel.quote.slice(0, 80) + "..." : reel.quote}"
      </p>

      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "6px 16px", borderRadius: 99, background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{reel.name},</span>
          <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 400, fontSize: 12 }}>{reel.role}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Video Thumb (warm bg, plays on hover) ───────────────────────── */
function VideoCard({ reel, onPlay, bgColor = "#120921", className = "" }) {
  const [hov, setHov] = useState(false);
  const vRef = useRef(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    if (hov) { v.muted = true; v.currentTime = 1; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hov]);

  return (
    <div className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{ borderRadius: 22, background: bgColor, border: "1px solid rgba(139,92,246,0.12)" }}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <video ref={vRef} src={reel.videoSrc} muted loop playsInline preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-600"
        style={{ opacity: hov ? 0.88 : 0.55, transform: hov ? "scale(1.04)" : "scale(1)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,9,33,0.92) 0%, rgba(18,9,33,0.2) 50%, transparent 100%)" }} />

      {/* Play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center rounded-full transition-all duration-300"
          style={{ width: 48, height: 48, background: "rgba(255,255,255,0.9)", transform: hov ? "scale(1.12)" : "scale(1)", boxShadow: hov ? "0 0 20px rgba(236,72,153,0.5), 0 4px 16px rgba(0,0,0,0.25)" : "0 4px 16px rgba(0,0,0,0.25)" }}>
          <Play style={{ width: 18, height: 18, color: "#ec4899", marginLeft: 3 }} fill="#ec4899" />
        </div>
      </div>

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: "12px 16px" }}>
        <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 14, margin: 0 }}>{reel.name}</h3>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 11, margin: "2px 0 0" }}>{reel.role}</p>
      </div>
    </div>
  );
}

/* ─── Card: Small Text Quote (light cream, compact) ─────────────────────── */
function SmallQuoteCard({ reel, className = "" }) {
  return (
    <div className={`flex flex-col justify-between overflow-hidden ${className}`}
      style={{ borderRadius: 22, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.18)", backdropFilter: "blur(12px)", padding: "22px 24px" }}>
      <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 14, lineHeight: 1.65, color: "#f3e8ff", margin: 0 }}>
        "{reel.quote.length > 110 ? reel.quote.slice(0, 110) + "..." : reel.quote}"
      </p>
      <div style={{ marginTop: 16 }}>
        <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 12px", borderRadius: 99, background: "linear-gradient(135deg, #ec4899, #7c3aed)" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 11 }}>{reel.name}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Mini Mixed (small thumb + quote text side by side) ──────────── */
function MiniCard({ reel, onPlay, className = "" }) {
  const [hov, setHov] = useState(false);

  return (
    <div className={`flex gap-3 items-start overflow-hidden cursor-pointer ${className}`}
      style={{ borderRadius: 22, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", padding: "18px" }}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Thumb */}
      <div style={{ width: 70, height: 70, borderRadius: 14, overflow: "hidden", flexShrink: 0, background: "#7c3aed", position: "relative" }}>
        <video src={reel.videoSrc} muted playsInline preload="metadata"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifycontent: "center" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: "flex", alignItems: "center", justifycontent: "center", transform: hov ? "scale(1.1)" : "scale(1)", transition: "transform 0.25s" }}>
            <Play style={{ width: 10, height: 10, color: "#7c3aed", marginLeft: 2 }} fill="#7c3aed" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontWeight: 800, fontSize: 13, color: "#ffffff", margin: "0 0 2px" }}>{reel.name}</h4>
        <p style={{ color: "#a78bfa", fontSize: 11, margin: "0 0 8px", fontWeight: 500 }}>{reel.role}</p>
        <p style={{ color: "#e2e8f0", fontSize: 11, margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
          "{reel.quote.slice(0, 65)}..."
        </p>
      </div>
    </div>
  );
}

/* ─── Animated counter ──────────────────────────────────────────────────── */
function StatPill({ num, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      <span style={{ fontSize: 32, fontWeight: 900, background: "linear-gradient(135deg, #ec4899, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{num}</span>
      <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function TestimonialsPage() {
  const [activeReel, setActiveReel] = useState(null);

  return (
    <main style={{ background: "#030008", minHeight: "100vh", fontFamily: "var(--font-poppins, sans-serif)", overflow: "hidden" }}>

      <style>{`
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes modalIn { from{opacity:0;transform:scale(0.93) translateY(16px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .bento-card { transition: transform 0.35s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.35s ease; }
        .bento-card:hover { transform: translateY(-4px) scale(1.012); box-shadow: 0 20px 45px rgba(139,92,246,0.18), 0 0 20px rgba(236,72,153,0.1) !important; }

        /* ── Bento grid layout ── */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1.7fr 1.2fr 1fr 1fr;
          grid-template-rows: 260px 200px 260px;
          grid-template-areas:
            "avani   bhavya  bhavya  drashti gadhvi"
            "avani   krupa   moksh   pranjal gadhvi"
            "suhani  tapti   moksh   vishva  sujal";
          gap: 14px;
        }
        .g-avani   { grid-area: avani; }
        .g-bhavya  { grid-area: bhavya; }
        .g-drashti { grid-area: drashti; }
        .g-gadhvi  { grid-area: gadhvi; }
        .g-krupa   { grid-area: krupa; }
        .g-moksh   { grid-area: moksh; }
        .g-pranjal { grid-area: pranjal; }
        .g-suhani  { grid-area: suhani; }
        .g-tapti   { grid-area: tapti; }
        .g-vishva  { grid-area: vishva; }
        .g-sujal   { grid-area: sujal; }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              "avani   gadhvi"
              "bhavya  bhavya"
              "drashti krupa"
              "moksh   pranjal"
              "suhani  tapti"
              "vishva  sujal";
            gap: 10px;
          }
          .g-avani,.g-gadhvi,.g-moksh { min-height: 260px; }
          .g-bhavya { min-height: 180px; }
          .g-drashti,.g-krupa,.g-pranjal,.g-suhani,.g-tapti,.g-vishva,.g-sujal { min-height: 200px; }
        }
        @media (max-width: 560px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "avani" "bhavya" "drashti" "gadhvi" "krupa"
              "moksh" "pranjal" "suhani" "tapti" "vishva" "sujal";
          }
          .bento-grid > * { min-height: 220px !important; }
        }
      `}</style>

      {/* ── Decorative blobs ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)", top: "-100px", right: "-80px" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", bottom: "10%", left: "-60px" }} />
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 65%)", top: "40%", right: "15%" }} />
      </div>

      <PageHero 
        title="Testimonials" 
        description="Real stories from real people whose lives and careers were transformed through KP Global's ecosystem." 
      />

      {/* Stats row */}
      <div className="relative z-10 py-12" style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
        <StatPill num="11+" label="Stories" />
        <div style={{ width: 1, background: "rgba(255,255,255,0.08)", alignSelf: "stretch" }} />
        <StatPill num="500+" label="Graduates" />
        <div style={{ width: 1, background: "rgba(255,255,255,0.08)", alignSelf: "stretch" }} />
        <StatPill num="5.0★" label="Avg Rating" />
        <div style={{ width: 1, background: "rgba(255,255,255,0.08)", alignSelf: "stretch" }} />
        <StatPill num="4" label="Programs" />
      </div>

      {/* ── Bento Grid ── */}
      <div className="relative" style={{ zIndex: 1, padding: "0 clamp(16px, 3vw, 48px) 72px", maxWidth: 1480, margin: "0 auto" }}>
        <div className="bento-grid">

          {/* AVANI — tall dark portrait */}
          <PortraitCard reel={REELS[0]} onPlay={setActiveReel} className="g-avani bento-card" />

          {/* BHAVYA — wide cream quote */}
          <LargeQuoteCard reel={REELS[1]} className="g-bhavya bento-card" />

          {/* DRASHTI — video thumb */}
          <VideoCard reel={REELS[2]} onPlay={setActiveReel} bgColor="#1b0e2d" className="g-drashti bento-card" />

          {/* GADHVI — tall dark portrait */}
          <PortraitCard reel={REELS[3]} onPlay={setActiveReel} className="g-gadhvi bento-card" />

          {/* KRUPA — mini mixed */}
          <MiniCard reel={REELS[4]} onPlay={setActiveReel} className="g-krupa bento-card" />

          {/* MOKSH — tall center video */}
          <VideoCard reel={REELS[5]} onPlay={setActiveReel} bgColor="#220e36" className="g-moksh bento-card" />

          {/* PRANJAL — small quote text */}
          <SmallQuoteCard reel={REELS[6]} className="g-pranjal bento-card" />

          {/* SUHANI — video card */}
          <VideoCard reel={REELS[7]} onPlay={setActiveReel} bgColor="#2b0c2a" className="g-suhani bento-card" />

          {/* TAPTI — cream quote */}
          <div className="g-tapti bento-card relative overflow-hidden flex flex-col justify-between"
            style={{ borderRadius: 22, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(236,72,153,0.18)", backdropFilter: "blur(12px)", padding: "28px 30px" }}>
            <div style={{ position: "absolute", top: 14, right: 20, opacity: 0.15 }}>
              <Quote style={{ width: 64, height: 64, color: "#ec4899" }} />
            </div>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, lineHeight: 1.65, color: "#f3e8ff", margin: 0, position: "relative" }}>
              "{REELS[8].quote.length > 100 ? REELS[8].quote.slice(0, 100) + "..." : REELS[8].quote}"
            </p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden", background: "#7c3aed", position: "relative", flexShrink: 0 }}>
                <video src={REELS[8].videoSrc} muted playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: 12, color: "#ffffff", margin: 0 }}>{REELS[8].name}</p>
                <p style={{ color: "#a78bfa", fontSize: 10, margin: 0, fontWeight: 500 }}>{REELS[8].role}</p>
              </div>
            </div>
          </div>

          {/* VISHVA — video thumb */}
          <VideoCard reel={REELS[9]} onPlay={setActiveReel} bgColor="#1b0d2f" className="g-vishva bento-card" />

          {/* SUJAL — dark portrait */}
          <PortraitCard reel={REELS[10]} onPlay={setActiveReel} className="g-sujal bento-card" />
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="relative" style={{ zIndex: 1, margin: "0 clamp(16px,3vw,48px) 80px", maxWidth: 1480, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ borderRadius: 28, background: "linear-gradient(135deg, #160a2c 0%, #0d061c 100%)", border: "1px solid rgba(236,72,153,0.25)", boxShadow: "0 20px 50px rgba(0,0,0,0.4)", padding: "48px 56px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontStyle: "italic", fontWeight: 400, color: "#fff", margin: "0 0 8px" }}>
              Ready to write your success story?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>
              Join hundreds of professionals who chose KP Global.
            </p>
          </div>
          <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 99, background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "#fff", fontWeight: 800, fontSize: 13, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.12em", boxShadow: "0 8px 24px rgba(236,72,153,0.4)", flexShrink: 0, transition: "transform 0.25s, box-shadow 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(236,72,153,0.6)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(236,72,153,0.4)"; }}>
            <Play style={{ width: 14, height: 14 }} fill="#fff" />
            Join the Success
          </a>
        </div>
      </div>

      {/* ── Modal ── */}
      {activeReel && <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </main>
  );
}

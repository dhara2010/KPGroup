"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, Star, Quote, Sparkles, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const REELS = [
  { id:1,  name:"Avani Parmar",   role:"Skill Academy Graduate",  videoSrc:"/videos/sujal.mp4", accent:"#8b5cf6", quote:"KP Global completely transformed my perspective on what's possible. The mentorship and community here are unparalleled — I've never felt more supported." },
  { id:2,  name:"Bhavya Chauhan", role:"IT Solutions, KP Global", videoSrc:"/videos/Bhavya_Chauhan.mp4", accent:"#6c3bff", quote:"Incredible growth. The best decision I ever made for my career." },
  { id:3,  name:"Drashti Sangani",role:"Business Community",      videoSrc:"/videos/sujal.mp4", accent:"#8b5cf6", quote:"Joining KP Global Business Community opened doors I never knew existed. I found my network, my mentors, and my purpose here." },
  { id:4,  name:"Gadhvi Dhara",   role:"Skill Academy, KP Global",videoSrc:"/videos/Gadhvi_dhara.mp4", accent:"#6c3bff", quote:"The curriculum is designed by industry leaders. I graduated ready to lead, not just follow. Truly life-changing." },
  { id:5,  name:"Krupa",          role:"Media Network Partner",   videoSrc:"/videos/sujal.mp4", accent:"#8b5cf6", quote:"KP Global Media Network helped me reach an audience I only dreamed of." },
  { id:6,  name:"Moksh Shah",     role:"IT Solutions Graduate",   videoSrc:"/videos/sujal.mp4", accent:"#6c3bff", quote:"From zero experience to full-stack developer in months. KP Global's IT track is the fastest path forward." },
  { id:7,  name:"Pranjal Chavda", role:"Business Community Lead", videoSrc:"/videos/Pranjal_chavda.mp4", accent:"#8b5cf6", quote:"The collaborative culture at KP Global is infectious. Every interaction teaches me something new about leadership and growth." },
  { id:8,  name:"Suhani Kanani",  role:"Skill Academy Graduate",  videoSrc:"/videos/Suhani_kanani.mp4", accent:"#6c3bff", quote:"KP Global's practical approach ensured I was industry-ready from day one." },
  { id:9,  name:"Tapti Bar",      role:"KP Careers Alumnus",      videoSrc:"/videos/Tapti-Bar.mp4", accent:"#8b5cf6", quote:"Incredible growth. The best partnership we've ever had. KP Global delivered beyond every expectation." },
  { id:10, name:"Vishva Chorela", role:"Business Community",      videoSrc:"/videos/Vishva-Chorela.mp4", accent:"#6c3bff", quote:"The global network and mindset shifts I experienced at KP Global are priceless." },
  { id:11, name:"Sujal",          role:"IT Solutions Graduate",   videoSrc:"/videos/sujal.mp4", accent:"#8b5cf6", quote:"Real projects, real mentors, real results. KP Global prepared me for challenges no textbook ever could." },
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
    const h = e => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); toggle(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, toggle]);

  const seek = e => {
    const v = vRef.current;
    const bar = barRef.current;
    if (!v || !bar || !v.duration || isNaN(v.duration) || !isFinite(v.duration)) return;
    const r = bar.getBoundingClientRect();
    if (r.width === 0) return;
    v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration;
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-auto"
        onClick={e => e.stopPropagation()}
        onMouseMove={resetHide}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-5 -right-5 z-[400] w-12 h-12 rounded-full bg-slate-900 border border-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 shadow-2xl hover:scale-110 hover:bg-primary text-white"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
          <video
            ref={vRef}
            src={reel.videoSrc}
            autoPlay
            className="w-full block bg-black"
            style={{ maxHeight: "76vh", objectFit: "contain" }}
            onTimeUpdate={() => {
              const v = vRef.current;
              if (v?.duration && !isNaN(v.duration) && isFinite(v.duration)) {
                setProg((v.currentTime / v.duration) * 100);
              }
            }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <div
            className={`absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
              showUI ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              ref={barRef}
              onClick={seek}
              className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer relative overflow-hidden"
            >
              <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${prog}%` }} />
            </div>

            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="font-black text-lg text-white uppercase">{reel.name}</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-wider">{reel.role}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggle}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                >
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button
                  onClick={() => {
                    const v = vRef.current;
                    if (v) {
                      v.muted = !v.muted;
                      setMuted(v.muted);
                    }
                  }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                >
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Dark Portrait ─────────────── */
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
      className={`relative overflow-hidden cursor-pointer group ${className} border border-slate-200/80 rounded-3xl bg-slate-900 shadow-md hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500`}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <video
        ref={vRef}
        src={reel.videoSrc}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_25px_rgba(108,59,255,0.4)] group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 ml-0.5 fill-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="font-black text-white uppercase text-base tracking-tight drop-shadow-md">{reel.name}</h3>
        <p className="text-purple-300 font-extrabold text-xs uppercase tracking-wider mt-1">{reel.role}</p>
      </div>
    </div>
  );
}

/* ─── Card: Large Quote ────────────────────── */
function LargeQuoteCard({ reel, className = "" }) {
  return (
    <div className={`relative overflow-hidden flex flex-col justify-between ${className} border border-slate-200/80 rounded-3xl bg-white p-8 shadow-xl shadow-purple-500/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-300`}>
      <div className="absolute top-4 right-6 text-slate-100 text-8xl font-serif select-none">"</div>
      <p className="font-serif italic text-xl md:text-2xl text-slate-800 leading-relaxed z-10 relative">
        "{reel.quote.length > 90 ? reel.quote.slice(0, 90) + "..." : reel.quote}"
      </p>
      <div className="mt-6 flex items-center gap-3 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
          <span className="text-primary font-black">{reel.name}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-600">{reel.role}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Video Thumb ───────────────────────── */
function VideoCard({ reel, onPlay, className = "" }) {
  const [hov, setHov] = useState(false);
  const vRef = useRef(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    if (hov) { v.muted = true; v.currentTime = 1; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hov]);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className} border border-slate-200/80 rounded-3xl bg-slate-900 shadow-md hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500`}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <video
        ref={vRef}
        src={reel.videoSrc}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_25px_rgba(108,59,255,0.4)] group-hover:scale-110 transition-transform duration-300">
          <Play className="w-5 h-5 ml-0.5 fill-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="font-black text-white uppercase text-sm tracking-tight drop-shadow-md">{reel.name}</h3>
        <p className="text-purple-300 font-extrabold text-[10px] uppercase tracking-wider mt-0.5">{reel.role}</p>
      </div>
    </div>
  );
}

/* ─── Card: Small Text Quote ─────────────────────── */
function SmallQuoteCard({ reel, className = "" }) {
  return (
    <div className={`flex flex-col justify-between overflow-hidden ${className} border border-slate-200/80 rounded-3xl bg-white p-6 shadow-xl shadow-purple-500/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-300`}>
      <p className="font-serif italic text-sm md:text-base text-slate-700 leading-relaxed">
        "{reel.quote.length > 110 ? reel.quote.slice(0, 110) + "..." : reel.quote}"
      </p>
      <div className="mt-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
          {reel.name}
        </div>
      </div>
    </div>
  );
}

/* ─── Card: Mini Mixed ──────────── */
function MiniCard({ reel, onPlay, className = "" }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`flex gap-4 items-center overflow-hidden cursor-pointer ${className} border border-slate-200/80 rounded-3xl bg-white p-5 shadow-xl shadow-purple-500/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-300`}
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-900 relative border border-slate-200">
        <video
          src={reel.videoSrc}
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
            <Play className="w-3.5 h-3.5 text-white ml-0.5 fill-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight mb-0.5">{reel.name}</h4>
        <p className="text-primary font-bold text-[10px] uppercase tracking-wider mb-2">{reel.role}</p>
        <p className="text-slate-600 text-xs italic line-clamp-2 leading-relaxed">
          "{reel.quote}"
        </p>
      </div>
    </div>
  );
}

/* ─── Animated Counter ──────────────────────────────────────────────────── */
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState("");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numberMatch = String(target).match(/^([\d.]+)(.*)$/);
        if (numberMatch) {
          const numValue = parseFloat(numberMatch[1]);
          const suffix = numberMatch[2];
          const isFloat = String(numberMatch[1]).includes(".");
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = progress * numValue;
            setCount((isFloat ? currentValue.toFixed(1) : Math.floor(currentValue)) + suffix);
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        } else setCount(target);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={elementRef}>{count || target}</span>;
}

function StatPill({ num, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary drop-shadow-sm">
        <AnimatedCounter target={num} />
      </span>
      <span className="text-xs md:text-sm font-extrabold text-slate-700 uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function TestimonialsPage() {
  const [activeReel, setActiveReel] = useState(null);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
        <div className="absolute top-1/3 right-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-10 left-[-10%] w-[45vw] h-[45vw] bg-accent/10 rounded-full blur-[140px]" />
      </div>

      <PageHero 
        title="Testimonials" 
        description="Real stories from real people whose lives and careers were transformed through KP Global's ecosystem." 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 my-12 md:my-16">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-purple-500/5 flex items-center justify-around flex-wrap gap-6">
          <StatPill num="11+" label="Stories" />
          <div className="hidden sm:block w-[1px] h-12 bg-slate-200" />
          <StatPill num="500+" label="Graduates" />
          <div className="hidden sm:block w-[1px] h-12 bg-slate-200" />
          <StatPill num="5.0★" label="Avg Rating" />
          <div className="hidden sm:block w-[1px] h-12 bg-slate-200" />
          <StatPill num="4" label="Programs" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <style>{`
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr 1.7fr 1.2fr 1fr 1fr;
            grid-template-rows: 270px 210px 270px;
            grid-template-areas:
              "avani   bhavya  bhavya  drashti gadhvi"
              "avani   krupa   moksh   pranjal gadhvi"
              "suhani  tapti   moksh   vishva  sujal";
            gap: 18px;
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

          @media (max-width: 990px) {
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
              gap: 14px;
            }
            .g-avani,.g-gadhvi,.g-moksh { min-height: 280px; }
            .g-bhavya { min-height: 200px; }
            .g-drashti,.g-krupa,.g-pranjal,.g-suhani,.g-tapti,.g-vishva,.g-sujal { min-height: 220px; }
          }
          @media (max-width: 600px) {
            .bento-grid {
              grid-template-columns: 1fr;
              grid-template-areas:
                "avani" "bhavya" "drashti" "gadhvi" "krupa"
                "moksh" "pranjal" "suhani" "tapti" "vishva" "sujal";
            }
            .bento-grid > * { min-height: 250px !important; }
          }
        `}</style>

        <div className="bento-grid">
          <PortraitCard reel={REELS[0]} onPlay={setActiveReel} className="g-avani" />
          <LargeQuoteCard reel={REELS[1]} className="g-bhavya" />
          <VideoCard reel={REELS[2]} onPlay={setActiveReel} className="g-drashti" />
          <PortraitCard reel={REELS[3]} onPlay={setActiveReel} className="g-gadhvi" />
          <MiniCard reel={REELS[4]} onPlay={setActiveReel} className="g-krupa" />
          <VideoCard reel={REELS[5]} onPlay={setActiveReel} className="g-moksh" />
          <SmallQuoteCard reel={REELS[6]} className="g-pranjal" />
          <VideoCard reel={REELS[7]} onPlay={setActiveReel} className="g-suhani" />
          <div className="g-tapti relative overflow-hidden flex flex-col justify-between border border-slate-200/80 rounded-3xl bg-white p-6 shadow-xl shadow-purple-500/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-3 right-5 opacity-10">
              <Quote className="w-16 h-16 text-slate-400" />
            </div>
            <p className="font-serif italic text-sm md:text-base text-slate-800 leading-relaxed z-10">
              "{REELS[8].quote.length > 100 ? REELS[8].quote.slice(0, 100) + "..." : REELS[8].quote}"
            </p>
            <div className="mt-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-900 relative border border-slate-200 flex-shrink-0">
                <video src={REELS[8].videoSrc} muted playsInline preload="none" className="w-full h-full object-cover opacity-90" />
              </div>
              <div>
                <p className="font-black text-xs text-slate-900 uppercase">{REELS[8].name}</p>
                <p className="text-primary font-bold text-[10px] uppercase tracking-wider">{REELS[8].role}</p>
              </div>
            </div>
          </div>
          <VideoCard reel={REELS[9]} onPlay={setActiveReel} className="g-vishva" />
          <PortraitCard reel={REELS[10]} onPlay={setActiveReel} className="g-sujal" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-10 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group">
          <div className="space-y-2 text-center md:text-left z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              Ready to write your success story?
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-normal">
              Join hundreds of professionals and innovators who elevated their careers with KP Global.
            </p>
          </div>
          <a
            href="/contact"
            className="z-10 shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6C3BFF] via-[#7E46FF] to-[#A855F7] text-white font-extrabold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Join the Success Network</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── Modal ── */}
      {activeReel && <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </main>
  );
}

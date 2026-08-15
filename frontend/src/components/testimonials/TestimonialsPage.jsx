import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, Star, Quote, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import { apiFetch } from "../../api/api";

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

  const triggerUI = useCallback(() => {
    setShowUI(true);
    if (hideT.current) clearTimeout(hideT.current);
    if (playing) hideT.current = setTimeout(() => setShowUI(false), 2500);
  }, [playing]);

  useEffect(() => { triggerUI(); }, [triggerUI]);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); setPlaying(p => !p); }
      if (e.key === "m") setMuted(m => !m);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (vRef.current) playing ? vRef.current.play().catch(console.error) : vRef.current.pause();
  }, [playing]);

  const onTime = () => {
    if (vRef.current) setProg((vRef.current.currentTime / vRef.current.duration) * 100);
  };

  const onSeek = (e) => {
    if (vRef.current && barRef.current) {
      const p = (e.clientX - barRef.current.getBoundingClientRect().left) / barRef.current.offsetWidth;
      vRef.current.currentTime = p * vRef.current.duration;
      setProg(p * 100);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300" onMouseMove={triggerUI} onMouseLeave={() => setShowUI(false)}>
      
      <button onClick={onClose} className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95">
        <X className="w-5 h-5" />
      </button>

      <div className="absolute top-8 left-8 z-50 max-w-sm transition-opacity duration-500" style={{ opacity: showUI ? 1 : 0 }}>
        <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-2 drop-shadow-md">{reel.name}</h2>
        <p className="text-primary font-bold text-xs uppercase tracking-widest drop-shadow-md">{reel.role}</p>
        <p className="text-white/80 mt-4 text-sm font-medium leading-relaxed drop-shadow-md">"{reel.quote}"</p>
      </div>

      <div className="relative w-full h-full md:w-[450px] md:h-[800px] flex items-center justify-center bg-black group" onClick={() => setPlaying(!playing)}>
        <video ref={vRef} src={reel.videoSrc} className="w-full h-full object-contain md:object-cover" autoPlay loop muted={muted} playsInline onTimeUpdate={onTime} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        )}

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-24 transition-opacity duration-500" style={{ opacity: showUI ? 1 : 0 }} onClick={e => e.stopPropagation()}>
          <div className="flex items-center gap-6 mb-4 px-2">
            <button onClick={() => setPlaying(!playing)} className="text-white hover:text-primary hover:scale-110 transition-all">
              {playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
            </button>
            <button onClick={() => setMuted(!muted)} className="text-white hover:text-primary hover:scale-110 transition-all">
              {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
            <span className="text-white/60 font-mono text-xs font-medium ml-auto">
              {fmtT(vRef.current?.currentTime)} / {fmtT(vRef.current?.duration)}
            </span>
            <button onClick={() => {
              if (vRef.current) {
                if (vRef.current.requestFullscreen) vRef.current.requestFullscreen();
                else if (vRef.current.webkitRequestFullscreen) vRef.current.webkitRequestFullscreen();
              }
            }} className="text-white hover:text-primary hover:scale-110 transition-all">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          
          <div ref={barRef} className="h-2 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group/bar" onClick={onSeek}>
            <div className="absolute inset-y-0 left-0 bg-primary group-hover/bar:bg-primary-light transition-all ease-linear" style={{ width: `${prog}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Reusable Cards ─────────────────────────────────────────────────────── */
function VideoCard({ reel, onPlay, className = "" }) {
  if (!reel) return null;
  return (
    <div className={`relative rounded-3xl overflow-hidden bg-slate-900 group cursor-pointer border border-slate-200/50 shadow-xl ${className}`} onClick={() => onPlay(reel)}>
      <video src={reel.videoSrc} muted playsInline preload="none" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          <Play className="w-6 h-6 ml-1" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex text-amber-400 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
        </div>
        <p className="text-white font-medium text-sm md:text-base leading-relaxed mb-4 line-clamp-3 italic">"{reel.quote}"</p>
        <div>
          <h3 className="text-white font-black text-sm uppercase tracking-wider">{reel.name}</h3>
          <p className="text-primary font-bold text-[10px] uppercase tracking-widest">{reel.role}</p>
        </div>
      </div>
    </div>
  );
}

function PortraitCard({ reel, onPlay, className = "" }) {
  if (!reel) return null;
  return (
    <div className={`relative rounded-3xl overflow-hidden bg-slate-100 group cursor-pointer border border-slate-200 shadow-xl flex items-center justify-center ${className}`} onClick={() => onPlay(reel)}>
      <video src={reel.videoSrc} muted playsInline preload="none" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30 opacity-60 mix-blend-multiply" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 z-20">
        <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg shadow-primary/30">
          <Play className="w-6 h-6 ml-1" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
        <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-wider drop-shadow-md">{reel.name}</h3>
        <p className="text-primary-light font-bold text-xs uppercase tracking-widest drop-shadow-md">{reel.role}</p>
      </div>
    </div>
  );
}

/* ─── Main Page Component ───────────────────────────────────────────────── */
export default function TestimonialsPage() {
  const [reels, setReels] = useState([]);
  const [activeReel, setActiveReel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await apiFetch("/api/testimonials");
        setReels(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-0 overflow-x-hidden font-sans">
      
      {/* 1. Standard PageHero */}
      <PageHero 
        title="Client Voices" 
        description="Hear directly from our global partners, enterprise clients, and industry leaders who have experienced the KP Global difference."
      />

      {/* 2. Top Intro Header - Standardized to match other pages */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-blue-500/40"></span>
              <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                Video Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight leading-tight">
              HEAR FROM <br />
              <span className="text-brand-gradient">OUR CLIENTS.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
              Real stories of digital transformation, scalable infrastructure, and creative impact from across our ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Grid Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : reels.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">No testimonials available.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            <style dangerouslySetInnerHTML={{__html: `
              .g-aditya { grid-column: span 1; grid-row: span 2; }
              .g-priya { grid-column: span 2; grid-row: span 1; }
              .g-rahul { grid-column: span 1; grid-row: span 1; }
              .g-amit { grid-column: span 1; grid-row: span 1; }
              .g-karan { grid-column: span 1; grid-row: span 2; }
              .g-sneha { grid-column: span 1; grid-row: span 1; }
              .g-rohit { grid-column: span 2; grid-row: span 1; }
              .g-text { grid-column: span 2; grid-row: span 1; }
              .g-vishva { grid-column: span 1; grid-row: span 2; }
              .g-sujal { grid-column: span 1; grid-row: span 1; }
              
              @media (max-width: 1024px) {
                .g-aditya, .g-priya, .g-rahul, .g-amit, .g-karan, .g-sneha, .g-rohit, .g-text, .g-vishva, .g-sujal {
                  grid-column: span 1 !important;
                  grid-row: span 1 !important;
                }
                .g-aditya, .g-karan, .g-vishva { grid-row: span 2 !important; }
              }
            `}} />

            {reels[0] && <VideoCard reel={reels[0]} onPlay={setActiveReel} className="g-aditya" />}
            
            {/* Featured Wide Intro Box inside grid */}
            {reels[1] && (
              <div className="g-priya relative rounded-3xl overflow-hidden bg-primary p-8 flex flex-col justify-center border border-primary-light shadow-xl shadow-primary/20 group">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-white/60"></span>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Global Reach</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-2">
                    Delivering Excellence Worldwide.
                  </h3>
                  <p className="text-primary-light font-medium max-w-sm text-sm">
                    Watch our partners share their experiences of scaling and innovating with KP Global Group.
                  </p>
                </div>
              </div>
            )}
            
            {reels[1] && <PortraitCard reel={reels[1]} onPlay={setActiveReel} className="g-rahul" />}
            {reels[2] && <PortraitCard reel={reels[2]} onPlay={setActiveReel} className="g-amit" />}
            {reels[3] && <VideoCard reel={reels[3]} onPlay={setActiveReel} className="g-karan" />}
            {reels[4] && <PortraitCard reel={reels[4]} onPlay={setActiveReel} className="g-sneha" />}
            {reels[5] && <VideoCard reel={reels[5]} onPlay={setActiveReel} className="g-rohit" />}
            
            {/* Quote specific block */}
            {reels[8] && reels[8].quote && (
              <div className="g-text relative rounded-3xl bg-amber-50 border border-amber-200/60 p-8 flex flex-col justify-center overflow-hidden">
                <div className="absolute top-3 right-5 opacity-10">
                  <Quote className="w-16 h-16 text-slate-400" />
                </div>
                <p className="font-serif italic text-sm md:text-base text-slate-800 leading-relaxed z-10">
                  "{reels[8].quote?.length > 100 ? reels[8].quote.slice(0, 100) + "..." : reels[8].quote}"
                </p>
                <div className="mt-4 flex items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-900 relative border border-slate-200 flex-shrink-0">
                    <video src={reels[8].videoSrc} muted playsInline preload="none" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div>
                    <p className="font-black text-xs text-slate-900 uppercase">{reels[8].name}</p>
                    <p className="text-primary font-bold text-[10px] uppercase tracking-wider">{reels[8].role}</p>
                  </div>
                </div>
              </div>
            )}
            {reels[9] && <VideoCard reel={reels[9]} onPlay={setActiveReel} className="g-vishva" />}
            {reels[10] && <PortraitCard reel={reels[10]} onPlay={setActiveReel} className="g-sujal" />}
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-10 md:p-14 shadow-[0_20px_40px_rgb(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group">
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
            className="group z-10 shrink-0 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:bg-brand-violet"
          >
            <span>Join the Success Network</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {activeReel && <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </main>
  );
}

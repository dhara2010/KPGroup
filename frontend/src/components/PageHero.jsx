

import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PageHero({ title, description, parentPage = "Home", parentHref = "/" }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[480px] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#06060c] border-b border-primary/20 font-sans z-10">
      
      {/* Tech Grid Background & Neon Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,59,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,59,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/15 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-accent/15 rounded-full blur-[140px]"></div>
      </div>

      {/* Subtle Bottom Light Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent z-10"></div>

      {/* Banner Image with gradient mask */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <img
          src="/common_hero_banner.webp"
          alt="KP Page Banner"
          className="object-cover object-center w-full h-full filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060c] via-transparent to-[#06060c]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Glassmorphic Breadcrumb Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white/70 mb-6 shadow-lg">
          <Link
            to={parentHref}
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            {parentPage}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white font-extrabold">{title}</span>
        </div>

        {/* Strong Luxury Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] font-heading leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            {description}
          </p>
        )}

      </div>
    </section>
  );
}


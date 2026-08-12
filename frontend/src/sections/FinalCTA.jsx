import React from 'react';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/Animations';
import { SectionWave } from '@/components/Animations/SectionWave';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="mb-30 relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden border-t border-slate-900 font-sans">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <SectionWave position="left" direction="down" intensity="high" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <ScrollReveal variant="fade-up" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary-soft uppercase tracking-widest mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          Accelerate Your Growth
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight font-heading leading-tight max-w-4xl mx-auto mb-6">
            READY TO EXPLORE THE POWER OF ONE CONNECTED ECOSYSTEM?
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Connect with KP Global Group to discover strategic corporate partnerships, digital enablement, and business growth solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Connect With Us</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Send className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Explore KP Global Group</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}

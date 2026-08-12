import React from 'react';
import { ArrowRight, Sparkles, Cpu, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

export default function FeaturedHighlight() {
  return (
    <Section id="featured-highlight" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-1/2 right-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Initiative
            </div>
          </ScrollReveal>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 tracking-tight font-heading mt-3">
            FEATURED HIGHLIGHT
          </h2>
        </div>

        {/* Large Visual Feature Box */}
        <ScrollReveal variant="fade-up">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-slate-900 text-white shadow-2xl min-h-[420px] flex flex-col justify-end p-8 md:p-14 group">
            {/* Background Image with Ambient Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/about_hero_bg.webp"
                alt="KP Global IT Solutions Flagship"
                className="w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            {/* Content Lockup */}
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                Digital & IT Infrastructure
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight font-heading leading-tight">
                KP GLOBAL IT SOLUTIONS
              </h3>

              <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
                Enterprise digital enablement, custom applications, and automated operations powering high-growth MSMEs and startups across India.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://kpgbit.kpglobalbusiness.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg group/btn"
                >
                  <span>Visit IT Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </Section>
  );
}

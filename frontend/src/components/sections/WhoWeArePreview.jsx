import React from 'react';
import { ArrowRight, ShieldCheck, Building2, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

export default function WhoWeArePreview() {
  return (
    <Section id="who-we-are" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Short Intro Content */}
          <div className="space-y-8">
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Who We Are
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tight leading-[1.1]">
                ONE CORPORATE GROUP.
                <br />
                <span className="text-brand-gradient">FIVE GROWTH DIVISIONS.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-xl">
                KP Global Group is an integrated business acceleration ecosystem uniting technology, media authority, talent acquisition, skill development, and trusted networking into one scalable corporate framework.
              </p>
            </ScrollReveal>

            {/* Micro Highlights */}
            <ScrollReveal variant="fade-up" delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200/60 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Trust-Based</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Secure corporate infrastructure built for scale.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Pan-India</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">National acceleration for businesses and talent.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Gateway CTA */}
            <ScrollReveal variant="fade-up" delay={0.4} className="pt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-950 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-brand-violet"
              >
                <span>About KP Global Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Frame */}
          <ScrollReveal variant="fade-left" delay={0.2} className="relative w-full h-full min-h-[500px]">
            {/* Minimalist offset background */}
            <div className="absolute top-8 -right-8 bottom-8 left-8 bg-slate-200/50 -z-10" />
            
            <div className="relative h-full w-full bg-white shadow-xl aspect-[4/5] md:aspect-[3/4] lg:aspect-auto overflow-hidden">
              <img
                src="/about_boardroom_bg.webp"
                alt="About KP Global Group"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <Building2 className="w-8 h-8 text-white mb-4 opacity-80" />
                <h3 className="text-2xl font-bold text-white mb-2">Corporate Leadership</h3>
                <p className="text-white/80 text-sm max-w-sm">Driving innovation and growth across 5 diverse divisions under a unified vision.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Section>
  );
}

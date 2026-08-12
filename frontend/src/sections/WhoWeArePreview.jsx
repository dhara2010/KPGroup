import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, TextReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

export default function WhoWeArePreview() {
  return (
    <Section id="who-we-are" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        <div className="absolute top-1/2 left-0 w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Short Intro Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                <Building2 className="w-3.5 h-3.5" />
                Who We Are
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 tracking-tight font-heading leading-tight">
                ONE CORPORATE GROUP.
                <br />
                <span className="text-primary">FIVE GROWTH DIVISIONS.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-normal text-base md:text-lg leading-relaxed max-w-2xl">
                KP Global Group is an integrated business acceleration ecosystem uniting technology, media authority, talent acquisition, skill development, and trusted networking into one scalable corporate framework.
              </p>
            </ScrollReveal>

            {/* Micro Highlights */}
            <ScrollReveal variant="fade-up" delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Trust-Based Infrastructure
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Pan-India Acceleration
                </span>
              </div>
            </ScrollReveal>

            {/* Gateway CTA */}
            <ScrollReveal variant="fade-up" delay={0.4} className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <span>About KP Global Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Frame */}
          <ScrollReveal variant="fade-left" delay={0.2} className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-white shadow-2xl aspect-[4/3] w-full">
              <img
                src="/about_boardroom_bg.webp"
                alt="About KP Global Group"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-8">
                <span className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">
                  Corporate Leadership & Vision
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Section>
  );
}

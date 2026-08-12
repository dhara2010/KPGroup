import React from 'react';
import { ArrowRight, Quote, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

export default function LeadershipPreview() {
  return (
    <Section id="leadership-preview" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        <div className="absolute top-1/2 right-0 w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Preview */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-slate-900 shadow-2xl aspect-[4/3] w-full">
              <img
                src="/about_boardroom_bg.webp"
                alt="KP Global Group Leadership"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Executive Board & Direction
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Leadership Statement & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                <Users className="w-3.5 h-3.5" />
                Leadership Philosophy
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 tracking-tight font-heading leading-tight">
                GUIDED BY VISION & PURPOSE.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} className="relative p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4 pointer-events-none" />
              <p className="text-slate-700 font-medium italic text-base md:text-lg leading-relaxed relative z-10">
                "Our mission is to build scalable corporate infrastructure, foster verified entrepreneurship, and empower businesses with integrated growth engines."
              </p>
            </ScrollReveal>

            {/* Gateway CTA */}
            <ScrollReveal variant="fade-up" delay={0.3} className="pt-2">
              <Link
                to="/team"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>Meet Our Leadership →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </Section>
  );
}

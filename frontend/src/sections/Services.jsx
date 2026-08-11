
import React from 'react';

import { Sparkles, Users, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/Animations';

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Integrated Solutions",
    desc: "All in one custom ecosystem. Integrated technical development with specialized training, media reach, and career solutions under one roof."
  },
  {
    icon: Users,
    title: "Professional Experts",
    desc: "Experienced and dedicated professionals working together to deliver high-quality solutions tailored for your business."
  },
  {
    icon: Globe,
    title: "Global Vision",
    desc: "Connecting international opportunities with technical mastery. Broadening horizons and building powerful business corridors worldwide."
  }
];

function Services() {
  return (
    <section className="relative bg-white text-slate-900 overflow-hidden font-sans py-20 md:py-28 border-y border-slate-100">

      {/* Subtle light mesh grid & ambient purple glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,59,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,59,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-[-5%] w-[45%] h-[45%] bg-accent/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Centred section header */}
        <ScrollReveal variant="fade-up" className="text-center mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Strengths
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Why Choose Us
          </h2>
          <p className="text-slate-600 font-normal text-sm md:text-base leading-relaxed max-w-2xl">
            We bridge technical architectures, educational networks, B2B synergy and worldwide employment
            marketplaces directly to deliver unrivaled value to your company.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-accent/15 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-2xl aspect-[4/3] w-full">
              <img
                src="/about_boardroom_bg.webp"
                alt="Our Services"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: Capabilities cards */}
          <div className="lg:col-span-7 space-y-4">
            {CAPABILITIES.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-left" delay={0.15 * idx}>
                <div className="flex gap-5 p-6 border border-slate-200/80 rounded-2xl bg-white hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-tight mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
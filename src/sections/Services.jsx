"use client";

import React from 'react';
import Image from 'next/image';
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
    <section className="relative bg-[#020202] text-white overflow-hidden font-sans py-24">

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[45%] h-[45%] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Centred section header ── */}
        <ScrollReveal variant="fade-up" className="text-center mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Why Choose Us
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-2xl">
            We bridge technical architectures, educational networks, B2B synergy and worldwide employment
            marketplaces directly to deliver unrivaled value to your company.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Image ── */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl aspect-[4/3] w-full">
              <Image
                src="/about_boardroom_bg.webp"
                alt="Our Services"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* ── Right Column: Capabilities cards ── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Capability cards */}
            <div className="space-y-4">
              {CAPABILITIES.map((item, idx) => (
                <ScrollReveal key={idx} variant="fade-left" delay={0.15 * idx}>
                  <div className="flex gap-4 p-5 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
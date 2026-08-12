import React from 'react';
import { Cpu, Radio, Briefcase, GraduationCap, Network, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, TextReveal } from '@/components/Animations';
import { SectionWave } from '@/components/Animations/SectionWave';
import { Section } from '@/components/ui/Section';

const ENGINES = [
  {
    num: "01",
    tag: "TECHNOLOGY",
    title: "KP Global IT Solutions",
    desc: "Digital foundation, enterprise applications & automated operations.",
    icon: Cpu,
    href: "https://kpgbit.kpglobalbusiness.com/"
  },
  {
    num: "02",
    tag: "MEDIA",
    title: "Entrepreneur Journey",
    desc: "Founder stories, media features & personal brand authority.",
    icon: Radio,
    href: "https://entrepreneurjouryny.com/"
  },
  {
    num: "03",
    tag: "TALENT",
    title: "KP Global Jobs",
    desc: "Structured hiring platform connecting verified talent with businesses.",
    icon: Briefcase,
    href: "https://jobs.kpglobalbusiness.com/"
  },
  {
    num: "04",
    tag: "SKILLS",
    title: "KP Global Academy",
    desc: "Industry-relevant skill programs & market-aligned certifications.",
    icon: GraduationCap,
    href: "https://academy.kpglobalbusiness.com/"
  },
  {
    num: "05",
    tag: "NETWORK",
    title: "KP Global Business Community",
    desc: "Pan-India entrepreneur network, referrals, partnerships & Investor Connect.",
    icon: Network,
    href: "https://kpgbc.kpglobalbusiness.com/"
  }
];

export default function WhatWeDo() {
  return (
    <Section id="what-we-do" variant="default" className="relative overflow-hidden py-20 md:py-24 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white">
        <SectionWave position="left" direction="down" intensity="medium" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
              Business Model
            </div>
          </ScrollReveal>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tighter font-heading">
            <TextReveal text="ONE ECOSYSTEM. FIVE GROWTH ENGINES." delay={0.2} />
          </h2>
        </div>

        {/* 5 Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ENGINES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={0.08 * idx}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all duration-300 min-h-[220px] shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-primary transition-colors font-mono">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-200/60 border border-slate-300/60 flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-[10px] font-extrabold text-primary tracking-[0.2em] uppercase block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

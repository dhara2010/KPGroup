
import React from 'react';

import { Sparkles, Cpu, Users, Radio, GraduationCap, Briefcase } from 'lucide-react';
import { ScrollReveal } from '@/components/Animations';
import { SectionWave } from '@/components/Animations/SectionWave';

const CAPABILITIES = [
  {
    num: "01",
    icon: Cpu,
    title: "Build stronger digital systems",
    desc: "Custom websites, applications, digital platforms & business automation."
  },
  {
    num: "02",
    icon: Users,
    title: "Connect with trusted businesses",
    desc: "Pan-India entrepreneur network, referral collaborations & Investor Connect."
  },
  {
    num: "03",
    icon: Radio,
    title: "Build authority and visibility",
    desc: "Entrepreneur stories, founder interviews, success features & media branding."
  },
  {
    num: "04",
    icon: Briefcase,
    title: "Find and develop the right talent",
    desc: "Structured talent platform for faster, verified & efficient corporate hiring."
  },
  {
    num: "05",
    icon: GraduationCap,
    title: "Build future-ready skills",
    desc: "Industry-relevant skill programs & market-aligned practical certifications."
  }
];

function Services() {
  return (
    <section id="services" className="relative bg-transparent text-slate-900 overflow-hidden font-sans py-20 md:py-28 border-y border-slate-100/50">

      {/* Removed ambient glows to reveal global cube pattern */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Split grid section header */}
        <div className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Competitive Advantage
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                WHY KP? <br />
                <span className="text-brand-gradient">ONE ECOSYSTEM. FIVE GROWTH ENGINES.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                Discover the five core engines driving growth, innovation, and global scale for our partners and clients.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-accent/15 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-2xl aspect-[4/3] w-full">
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
              <ScrollReveal key={idx} variant="fade-left" delay={0.1 * idx}>
                <div className="flex gap-4 p-5 border border-slate-200/80 rounded-2xl bg-white/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 items-center">
                  <span className="text-xl font-black text-slate-300 group-hover:text-primary transition-colors font-mono shrink-0">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-extrabold text-slate-900 uppercase tracking-tight mb-1">
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
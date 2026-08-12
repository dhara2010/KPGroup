import React from 'react';
import { ChevronRight, Sparkles, Cpu, Users, Radio, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { ScrollReveal, TextReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

const STAGES = [
  { step: "01", action: "BUILD DIGITALLY", desc: "Custom websites, platforms & business automation", icon: Cpu },
  { step: "02", action: "CONNECT STRATEGICALLY", desc: "Trust-based business networking & investor connect", icon: Users },
  { step: "03", action: "GET RECOGNIZED", desc: "Entrepreneur features, interviews & media visibility", icon: Radio },
  { step: "04", action: "HIRE SMART", desc: "Structured job platform & verified talent solutions", icon: Briefcase },
  { step: "05", action: "UPSKILL CONTINUOUSLY", desc: "Market-aligned certifications & practical programs", icon: GraduationCap }
];

export default function GrowthJourney() {
  return (
    <Section id="growth-journey" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Scalable Roadmap
            </div>
          </ScrollReveal>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tighter font-heading">
            <TextReveal text="THE GROWTH JOURNEY." delay={0.2} />
          </h2>
        </div>

        {/* 5 Stage Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {STAGES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="fade-right" delay={0.1 * idx}>
                <div className="group relative p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                        STEP {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                      {item.action}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {idx < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-primary">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Destination Result Box */}
        <ScrollReveal variant="3d-unfold" className="text-center">
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary via-purple-600 to-accent text-white font-black text-base md:text-xl uppercase tracking-widest shadow-2xl shadow-primary/30 border border-white/20">
            <TrendingUp className="w-6 h-6 animate-bounce" />
            <span>GROW SUSTAINABLY WITH CONFIDENCE & CREDIBILITY</span>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

import React from 'react';
import { ArrowRight, XCircle, CheckCircle2, Cpu, Users, Radio, Briefcase, GraduationCap, Sparkles, Layers } from 'lucide-react';
import { ScrollReveal, TextReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

const DISCONNECTED_ISSUES = [
  "Fragmented digital tools & unscalable systems",
  "Limited access to verified, trusted networks",
  "Low brand visibility & market authority",
  "Talent acquisition & recruitment friction",
  "Lack of future-ready workforce skills"
];

const UNIFIED_SOLUTIONS = [
  {
    title: "Digital & IT Enablement",
    desc: "Custom apps, digital platforms, business automation & scalable IT infrastructure",
    icon: Cpu
  },
  {
    title: "Trust-Based Business Networking",
    desc: "Pan-India entrepreneur network, referral collaborations & Investor Connect",
    icon: Users
  },
  {
    title: "Media Visibility & Authority",
    desc: "Entrepreneur stories, founder interviews, success features & media branding",
    icon: Radio
  },
  {
    title: "Verified Talent Platform",
    desc: "Structured hiring connecting the right talent with growth businesses",
    icon: Briefcase
  },
  {
    title: "Industry Skill Academy",
    desc: "Practical industry-relevant skill programs & market-aligned certifications",
    icon: GraduationCap
  }
];

export default function ProblemSolution() {
  return (
    <Section id="problem-solution" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-white text-slate-900">
      {/* Background Subtle Mesh & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              The Paradigm Shift
            </div>
          </ScrollReveal>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tight font-heading leading-tight max-w-4xl">
            BUSINESSES DON'T NEED MORE DISCONNECTED VENDORS.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent">
              THEY NEED ONE CONNECTED ECOSYSTEM.
            </span>
          </h2>
        </div>

        {/* Unique Split Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Disconnected Vendors (The Problem) */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 flex flex-col">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-rose-50/50 border border-rose-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-[10px] font-extrabold uppercase tracking-wider mb-6 shadow-sm">
                  <XCircle className="w-3.5 h-3.5" />
                  Disconnected Vendors
                </div>

                <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight mb-2">
                  Fragmented Services
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed mb-8">
                  Multiple vendors, unaligned teams, high friction, delayed execution and skyrocketing overhead costs.
                </p>

                {/* Disconnected Items List */}
                <div className="space-y-3.5">
                  {DISCONNECTED_ISSUES.map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-rose-200/60 shadow-xs">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-600 line-through decoration-rose-400">
                        {issue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/60 flex items-center justify-between text-xs font-bold text-rose-600 uppercase tracking-wider">
                <span>Outcome</span>
                <span>Slow Growth & Friction</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Center Connection Arrow */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative">
            <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl z-20">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">ECOSYSTEM</span>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md animate-pulse">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">TRANSFORM</span>
            </div>
          </div>

          {/* Right Column: KP Global Unified Ecosystem (The Solution) */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 flex flex-col">
            <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-[10px] font-extrabold uppercase tracking-wider mb-6 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  KP Global Business
                </div>

                <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
                  One Connected Ecosystem
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-8">
                  One unified partner combining technology, trusted networking, media visibility, talent and skills for real business outcomes.
                </p>

                {/* Unified Solutions List */}
                <div className="space-y-3.5">
                  {UNIFIED_SOLUTIONS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-primary/40 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-primary mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white uppercase tracking-tight block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-white/60 font-light block">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-primary uppercase tracking-wider">
                <span>Outcome</span>
                <span>Sustainable Scale & Credibility</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Concluding Editorial Banner */}
        <ScrollReveal variant="3d-unfold" className="text-center">
          <div className="inline-flex flex-col items-center p-8 md:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 border border-primary/30 max-w-3xl mx-auto shadow-xl backdrop-blur-md">
            <span className="text-xs font-black uppercase text-primary tracking-[0.3em] mb-2">
              KP GLOBAL BUSINESS
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
              "One Business Acceleration Ecosystem."
            </h3>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Technology • Network • Media • Talent • Skills
            </span>
          </div>
        </ScrollReveal>

      </div>
    </Section>
  );
}

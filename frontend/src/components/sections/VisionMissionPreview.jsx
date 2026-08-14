import React from 'react';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { Eye, Target } from "lucide-react";

export default function VisionMissionPreview() {
  const missionPoints = [
    "Deliver scalable IT infrastructure for modern enterprises.",
    "Build authoritative founder brands through global media.",
    "Connect top-tier talent with fast-growing companies."
  ];

  return (
    <Section id="vision-mission" variant="default" className="relative overflow-hidden py-24 lg:py-40 bg-transparent">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                 The Foundation
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                DRIVING GROWTH WITH <br />
                <span className="text-brand-gradient">PURPOSE</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                We exist to create meaningful opportunities, empower businesses,
                and build a connected ecosystem that drives sustainable growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* VISION CARD - 7 Columns */}
          <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-7">
            <div className="group relative h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 lg:p-16 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-center">

              {/* Subtle Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-12 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-brand-violet/10 flex items-center justify-center">
                    <Eye className="w-3.5 h-3.5 text-brand-violet" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                    OUR VISION
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-slate-900 leading-[1.4] tracking-tight">
                  "To architect a globally integrated corporate ecosystem that empowers <span className="text-brand-gradient font-black relative whitespace-nowrap">
                    one million businesses
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-violet/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  </span> and professionals through innovative technology, trusted media, and strategic networking."
                </h3>
              </div>
            </div>
          </ScrollReveal>

          {/* MISSION CARD - 5 Columns */}
          <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-5">
            <div className="group relative h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden">

              {/* Subtle Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <Target className="w-3.5 h-3.5 text-brand-pink" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                    OUR MISSION
                  </span>
                </div>

                <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed mb-10 pr-4">
                  We are on a mission to bridge the gap between potential and success.
                </p>

                {/* Connected Vertical Journey */}
                <div className="relative ml-2">
                  {/* Continuous vertical line */}
                  <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500" />

                  <ul className="space-y-8 relative z-10">
                    {missionPoints.map((item, i) => {
                      const words = item.split(" ");
                      const title = words.slice(0, 3).join(" ");
                      const rest = words.slice(3).join(" ");

                      return (
                        <li key={i} className="flex items-start gap-6 cursor-default group/item">
                          {/* Elegant Numbered Marker */}
                          <div className="relative z-10 bg-white py-1">
                            <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center bg-white transition-all duration-300 group-hover/item:border-brand-violet group-hover/item:shadow-sm">
                              <span className="text-[9px] font-bold text-slate-400 transition-colors duration-300 group-hover/item:text-brand-violet">
                                0{i + 1}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-0.5">
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed transition-colors duration-300 group-hover/item:text-slate-900">
                              <span className="font-bold text-slate-900">{title}</span> {rest}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Section>
  );
}

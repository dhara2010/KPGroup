import React from 'react';
import { Target, Users2, Rocket, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function WhyKPGroup() {
  const reasons = [
    {
      title: "Integrated Ecosystem",
      desc: "We don't just offer services; we offer a unified framework where technology, talent, and media work together to accelerate your growth.",
      icon: Target
    },
    {
      title: "Pan-India Network",
      desc: "Access a verified community of founders, investors, and professionals across India, built on trust and mutual acceleration.",
      icon: Users2
    },
    {
      title: "Proven Execution",
      desc: "Over 50+ enterprise platforms delivered and multiple strategic divisions successfully scaled with a focus on tangible ROI.",
      icon: Rocket
    },
    {
      title: "Corporate Trust",
      desc: "A secure, transparent, and legally compliant corporate structure ensuring your business partnerships are built on a solid foundation.",
      icon: ShieldCheck
    }
  ];

  return (
    <Section id="why-kpgroup" variant="default" className="relative overflow-hidden py-32 bg-white text-slate-900 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal variant="fade-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary/40"></span>
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                The KP Advantage
              </span>
              <span className="w-8 h-px bg-primary/40"></span>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-6">
              WHY PARTNER WITH <br />
              <span className="text-primary">KP GLOBAL GROUP?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-slate-600 font-medium text-lg">
              We provide the strategic leverage businesses need to scale efficiently in today's competitive landscape.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal 
                key={idx}
                variant="fade-up"
                delay={0.1 * idx}
              >
                <div className="group relative h-full bg-slate-50 rounded-2xl p-8 border border-slate-200/60 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </Section>
  );
}

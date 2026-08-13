import React from 'react';
import { Eye, Target } from 'lucide-react';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function VisionMissionPreview() {
  return (
    <Section id="vision-mission" variant="default" className="relative overflow-hidden py-32 bg-slate-950 text-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-primary/5 rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-primary/5 rounded-full border border-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Vision */}
          <ScrollReveal variant="fade-right">
            <div className="relative p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">Our Vision</h3>
                </div>
                
                <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                  "To architect a globally integrated corporate ecosystem that empowers <span className="text-white">one million businesses and professionals</span> through innovative technology, trusted media, and strategic networking."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <div className="relative p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">Our Mission</h3>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  We are on a mission to bridge the gap between potential and success.
                </p>
                <ul className="space-y-4">
                  {[
                    "Deliver scalable IT infrastructure for modern enterprises.",
                    "Build authoritative founder brands through global media.",
                    "Connect top-tier talent with fast-growing companies."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Section>
  );
}

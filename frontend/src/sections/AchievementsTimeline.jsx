import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function AchievementsTimeline() {
  const achievements = [
    {
      year: "2024",
      title: "1M Entrepreneurs Ecosystem Launch",
      desc: "Successfully launched our flagship community initiative, connecting founders globally."
    },
    {
      year: "2023",
      title: "Top IT Services Provider Award",
      desc: "Recognized for excellence in delivering scalable enterprise digital platforms."
    },
    {
      year: "2022",
      title: "Expansion of Media Division",
      desc: "Entrepreneur Journy crossed major milestones in global readership and founder stories."
    },
    {
      year: "2021",
      title: "Inception of KP Global Group",
      desc: "The unified vision began, integrating technology and talent under one corporate roof."
    }
  ];

  return (
    <Section id="achievements" variant="default" className="relative overflow-hidden py-32 bg-slate-50 text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-300/50 mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                Milestones & Awards
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              A JOURNEY OF <span className="text-primary">EXCELLENCE.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Editorial Timeline */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

          {achievements.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0">

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white shadow-sm -translate-x-1/2 md:-translate-x-1/2 z-10 group-hover:border-primary transition-colors duration-300">
                <Star className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Content Card */}
              <ScrollReveal
                variant={idx % 2 === 0 ? "fade-right" : "fade-left"}
                delay={0.1 * idx}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0"
              >
                <div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-4xl font-black text-slate-500 mb-2 block font-mono">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>

            </div>
          ))}

        </div>

      </div>
    </Section>
  );
}

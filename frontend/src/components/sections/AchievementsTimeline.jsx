import React, { useState, useEffect } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { apiFetch } from "../../api/api";

export default function AchievementsTimeline() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await apiFetch("/api/achievements");
        setAchievements(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  return (
    <Section id="achievements" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Milestones & Awards
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                A JOURNEY OF <br />
                <span className="text-brand-gradient">EXCELLENCE.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                Celebrating the milestones, achievements, and recognition that
                reflect our commitment to excellence and lasting impact.
              </p>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Editorial Timeline */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : achievements.length === 0 ? null : (
          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">

            {achievements.map((item, idx) => (
              <div key={item._id || idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0">

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white/70 bg-white/90 backdrop-blur-md shadow-sm -translate-x-1/2 md:-translate-x-1/2 z-10 group-hover:border-primary transition-colors duration-300">
                  <Star className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content Card */}
                <ScrollReveal
                  variant={idx % 2 === 0 ? "fade-right" : "fade-left"}
                  delay={0.1 * idx}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0"
                >
                  <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
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
        )}

      </div>
    </Section>
  );
}

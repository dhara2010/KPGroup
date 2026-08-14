
import React from "react";
import Team from "@/components/team/Team";
import FAQ from "@/components/common/FAQ";
import { Trophy, Award, Star, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "@/components/common/PageHero";

const AWARDS = [
  {
    year: "2012",
    title: "CSS Design Awards",
    description: "CSS Design awards platform rewards templates design styles, templates layouts, templates code."
  },
  {
    year: "2016",
    title: "Recognizing Excellence",
    description: "Recognizing Excellence for outstanding achievements and exceptional team."
  },
  {
    year: "2018",
    title: "Motion Awards",
    description: "Recognizing Excellence honors motion design work, outstanding work, exceptional talent."
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-0 overflow-x-hidden font-sans">
      <PageHero
        title="Team"
        description="The collective force of innovators, creators, and leaders executing next-generation business strategies."
      />

      {/* ── Awards Section ── */}
      <section className="relative py-24 bg-transparent overflow-hidden border-y border-slate-200/60">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Recognitions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                Our Achieved <br />
                <span className="text-brand-gradient">Awards</span>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                Recognized globally for outstanding achievements, exceptional talent, and innovative solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="relative p-8 bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-purple-500/30 transition-all duration-500 group hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent glow on top-right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-slate-400 group-hover:text-purple-500/60 duration-500">
                      {award.year}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-500 shadow-sm">
                      <Award className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-500">
                    {award.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Component (imported from sections/Team.jsx) ── */}
      <div id="members" className="relative">
        <Team />
      </div>

      {/* ── FAQ Component (imported from sections/FAQ.jsx) ── */}
      <div id="faq" className="relative">
        <FAQ />
      </div>

      {/* Styled custom smooth page slide transitions */}
      <style dangerouslySetInnerHTML={{
        __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </main>
  );
}

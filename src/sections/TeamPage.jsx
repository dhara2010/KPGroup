"use client";

import React from "react";
import Team from "@/sections/Team";
import FAQ from "@/sections/FAQ";
import { Trophy, Award, Star, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

import PageHero from "@/components/PageHero";

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
    <main className="min-h-screen bg-[#020202] text-white pt-0 overflow-x-hidden font-sans">
      <PageHero 
        title="Team" 
        description="The collective force of innovators, creators, and leaders executing next-generation business strategies." 
      />

      {/* ── Awards Section ── */}
      <section className="relative py-24 bg-[#020202] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-950/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">
              <Trophy className="w-3.5 h-3.5" />
              Recognitions
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Our Achieved Awards
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.05] hover:border-yellow-500/30 transition-all duration-300 group hover:translate-y-[-6px] flex flex-col justify-between"
              >
                {/* Accent glow on top-right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-white/10 group-hover:text-yellow-500/20 transition-colors duration-300">
                      {award.year}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/30 transition-all duration-300">
                      <Award className="w-5 h-5 text-yellow-400/80 group-hover:text-yellow-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
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
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </main>
  );
}

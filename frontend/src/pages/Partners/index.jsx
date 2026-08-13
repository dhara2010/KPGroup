

import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

import { ScrollReveal, TextReveal } from "@/components/Animations";
import PageHero from "@/components/PageHero";

export default function PartnersPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [partners, setPartners] = useState([]);

  const filters = ["All", "Enterprise", "Vertical", "Ecosystem"];

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/partners");
        const data = await res.json();
        if (Array.isArray(data)) {
          setPartners(data);
        } else {
          console.log("Failed to fetch partners: response is not an array", data);
        }
      } catch (error) {
        console.log("Failed to fetch partners", error);
      }
    };

    fetchPartners();
  }, []);

  const filteredSupporters =
    selectedFilter === "All"
      ? (Array.isArray(partners) ? partners : [])
      : (Array.isArray(partners) ? partners.filter((item) => item.type === selectedFilter) : []);

  const supportersRow1 = Array.isArray(partners) ? partners.slice(0, Math.ceil(partners.length / 2)) : [];
  const supportersRow2 = Array.isArray(partners) ? partners.slice(Math.ceil(partners.length / 2)) : [];

  return (
    <div className="relative bg-white text-slate-900 min-h-screen overflow-hidden font-sans pt-0 pb-20">

      {/* Light Mesh Background Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">

        <PageHero
          title="Partners"
          description="Bridging technical brilliance with massive entrepreneurial networks. We work in unison with enterprises, skill development centers, B2B digital communities, and global career pathways."
        />

        {/* SECTION 2: SUPPORTERS / LOGOS AREA */}
        <div className="bg-white py-20 md:py-24 border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left md:flex justify-between items-end">
            <ScrollReveal variant="fade-right" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Global Network
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
                OUR <span className="text-primary">SUPPORTERS</span>
              </h2>
              <p className="text-slate-600 font-normal max-w-lg text-sm md:text-base leading-relaxed">
                A selective collection of industry authorities, business coalitions, and technology innovators.
              </p>
            </ScrollReveal>

            {/* Category Filter Tabs */}
            <ScrollReveal variant="fade-left" className="flex flex-wrap gap-2.5 mt-6 md:mt-0 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-primary text-white border-primary shadow-lg shadow-purple-500/25'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-primary/50 shadow-sm'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Animated Bento Grid */}
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <div
              key={selectedFilter}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredSupporters.map((supporter, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-between p-6 rounded-[2rem] bg-white border border-slate-200/80 hover:border-primary/60 transition-all duration-500 group cursor-default shadow-xl shadow-purple-500/5 relative min-h-[180px] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                  style={{
                    animation: 'partnerFloatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: `${idx * 50}ms`,
                    opacity: 0
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="h-16 w-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative h-full w-[85%]">
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500 z-10"
                      />
                    </div>
                  </div>

                  <div className="w-full text-center mt-4 pt-4 border-t border-slate-100 transition-colors duration-500">
                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-primary uppercase tracking-widest block transition-colors duration-300">
                      {supporter.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes partnerFloatIn {
              from {
                opacity: 0;
                transform: translateY(35px) scale(0.96);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}} />

        </div>

      </div>
    </div>
  );
}


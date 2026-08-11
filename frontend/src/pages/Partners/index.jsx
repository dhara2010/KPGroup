

import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <div className="relative bg-[#020202] text-[#111827] min-h-screen overflow-hidden font-sans pt-0 pb-20">

      {/* Dynamic Laser Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">

        <PageHero
          title="Partners"
          description="Bridging technical brilliance with massive entrepreneurial networks. We work in unison with enterprises, skill development centers, B2B digital communities, and global career pathways."
        />

        {/* SECTION 2: SUPPORTERS / LOGOS AREA */}
        <div className="bg-gradient-to-b from-[#030303] to-[#020202] py-24 border-y border-[#E2E8F0] relative">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left md:flex justify-between items-end">
            <ScrollReveal variant="fade-right" className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#111827]">
                OUR <span className="text-[#0F172A]">SUPPORTERS</span>
              </h2>
              <p className="text-[#475569] font-light max-w-lg text-xs md:text-sm">
                A selective collection of industry authorities, business coalitions, and technology innovators.
              </p>
            </ScrollReveal>

            {/* Category Filter Tabs */}
            <ScrollReveal variant="fade-left" className="flex flex-wrap gap-2 mt-6 md:mt-0 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${selectedFilter === filter
                      ? 'bg-white text-black border-[#E2E8F0] shadow-lg shadow-white/5'
                      : 'bg-transparent border-[#E2E8F0] text-[#475569] hover:text-[#111827] hover:border-[#E2E8F0]'
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
                  className="flex flex-col items-center justify-between p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-[#E2E8F0] hover:border-[#0E7490] transition-all duration-500 group cursor-default shadow-xl relative min-h-[170px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                  style={{
                    animation: 'partnerFloatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: `${idx * 50}ms`,
                    opacity: 0
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="h-16 w-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[#064B63]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative h-full w-[85%]">
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        fill
                        sizes="180px"
                        className="object-contain filter brightness-110 group-hover:scale-108 transition-transform duration-500 z-10"
                      />
                    </div>
                  </div>

                  <div className="w-full text-center mt-4 pt-4 border-t border-[#E2E8F0]/[0.03] group-hover:border-[#E2E8F0]/[0.08] transition-colors duration-500">
                    <span className="text-[10px] font-black text-[#475569] group-hover:text-[#064B63] uppercase tracking-widest block transition-colors duration-300">
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

          {/* Dynamic Scroll Marquees */}
          <ScrollReveal variant="blur-in" className="relative overflow-hidden w-full border-t border-[#E2E8F0] pt-12">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

            <div className="flex flex-col gap-6">
              <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex gap-6 px-3">
                  {[...supportersRow1, ...supportersRow1, ...supportersRow1].map((supporter, idx) => (
                    <div
                      key={`marquee1-${idx}`}
                      className="relative flex items-center justify-center w-[250px] h-[100px] shrink-0 p-4 rounded-[1.5rem] bg-white border border-[#E2E8F0] hover:scale-105 transition-transform duration-300 group cursor-default shadow-lg"
                    >
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        fill
                        sizes="250px"
                        className="p-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}

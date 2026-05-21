"use client";

import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

const supportersRow1 = [
  { name: "Zoho Premium Partner", logo: "/logos/Zoho-premium-partner.png", type: "Enterprise" },
  { name: "KP Global IT Solutions", logo: "/logos/KP-Global-IT-Solutions-logo.png", type: "Vertical" },
  { name: "KP Global Academy of Skills", logo: "/logos/Untitled-design-4.png", type: "Vertical" },
  { name: "Aequitas Infotech", logo: "/logos/Aequitas-Infotech.png", type: "Enterprise" },
  { name: "Weapplinse Technologies", logo: "/logos/Untitled-design-6.png", type: "Enterprise" },
  { name: "1 Million Entrepreneurs", logo: "/logos/1MEIF.png", type: "Ecosystem" },
  { name: "VyapaarJagat", logo: "/logos/vyapaarjagat.png", type: "Ecosystem" }
];

const supportersRow2 = [
  { name: "PeersGlobal", logo: "/logos/peersglobal.png", type: "Ecosystem" },
  { name: "Greenpreneur", logo: "/logos/greenpreneur.png", type: "Ecosystem" },
  { name: "Fempreneur", logo: "/logos/fempreneur.png", type: "Ecosystem" },
  { name: "Entrepreneur Journy", logo: "/logos/entrepreneurjouryny.png", type: "Ecosystem" },
  { name: "KP Global Jobs", logo: "/logos/KP_Global_Jobs-removebg-preview.png", type: "Vertical" },
  { name: "KP Global Business Community", logo: "/logos/KP-Global-Business-Community-Entrepreneurs-3.png", type: "Vertical" },
  { name: "KP Global Network", logo: "/logos/Untitled_design__5_-removebg-preview.png", type: "Vertical" }
];

const allSupporters = [...supportersRow1, ...supportersRow2];

export default function PartnersPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Enterprise', 'Vertical', 'Ecosystem'];

  const filteredSupporters = selectedFilter === 'All' 
    ? allSupporters 
    : allSupporters.filter(item => item.type === selectedFilter);

  return (
    <div className="relative bg-[#020202] text-white min-h-screen overflow-hidden font-sans pt-24 pb-20">
      
      {/* Dynamic Laser Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* SECTION 1: HERO SECTION WITH FULL IMAGE BACKGROUND */}
        <div className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden mb-16 border-b border-white/5 pt-12 pb-16">
          
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-102"
            style={{ 
              backgroundImage: "url('/partners_hero.png')",
              filter: "brightness(0.6) contrast(1.1)" 
            }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-[#020202]/95 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/95 via-[#020202]/40 to-[#020202]/95 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-blue-500/10 rounded-full blur-[150px] z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-purple-200 tracking-wider uppercase">Strategic Partners</span>
              </div>
            </ScrollReveal>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white max-w-5xl mx-auto">
              <TextReveal text="UNIFIED GLOBAL NETWORK" delay={0.2} />
            </h1>

            <ScrollReveal variant="fade-up" delay={0.4}>
              <p className="text-gray-300 max-w-3xl mx-auto font-light text-sm md:text-lg leading-relaxed">
                Bridging technical brilliance with massive entrepreneurial networks. We work in unison with 
                enterprises, skill development centers, B2B digital communities, and global career pathways.
              </p>
            </ScrollReveal>

            {/* Quick Metrics Grid */}
            <ScrollReveal variant="fade-up" delay={0.6}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 border border-white/10 bg-black/60 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-30 pointer-events-none"></div>
                {[
                  { val: "10+", label: "Strategic Alliances" },
                  { val: "5+", label: "Global Nodes" },
                  { val: "100%", label: "Symmetrical Trust" },
                  { val: "24/7", label: "Synergy Integration" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-white to-gray-400 font-mono">
                      {stat.val}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* SECTION 2: SUPPORTERS / LOGOS AREA */}
        <div className="bg-gradient-to-b from-[#030303] to-[#020202] py-24 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left md:flex justify-between items-end">
            <ScrollReveal variant="fade-right" className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SUPPORTERS</span>
              </h2>
              <p className="text-gray-400 font-light max-w-lg text-xs md:text-sm">
                A selective collection of industry authorities, business coalitions, and technology innovators.
              </p>
            </ScrollReveal>

            {/* Category Filter Tabs */}
            <ScrollReveal variant="fade-left" className="flex flex-wrap gap-2 mt-6 md:mt-0 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-white text-black border-white shadow-lg shadow-white/5'
                      : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'
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
                  className="flex flex-col items-center justify-between p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-blue-500/30 transition-all duration-500 group cursor-default shadow-xl relative min-h-[170px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                  style={{
                    animation: 'partnerFloatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: `${idx * 50}ms`,
                    opacity: 0
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="h-16 w-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={supporter.logo} 
                      alt={supporter.name} 
                      className="max-h-full max-w-[85%] object-contain filter brightness-110 group-hover:scale-108 transition-transform duration-500 z-10"
                    />
                  </div>
                  
                  <div className="w-full text-center mt-4 pt-4 border-t border-white/[0.03] group-hover:border-white/[0.08] transition-colors duration-500">
                    <span className="text-[10px] font-black text-gray-500 group-hover:text-blue-400 uppercase tracking-widest block transition-colors duration-300">
                      {supporter.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
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
          <ScrollReveal variant="blur-in" className="relative overflow-hidden w-full border-t border-white/5 pt-12">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

            <div className="flex flex-col gap-6">
              <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex gap-6 px-3">
                  {[...supportersRow1, ...supportersRow1, ...supportersRow1].map((supporter, idx) => (
                    <div 
                      key={`marquee1-${idx}`} 
                      className="flex items-center justify-center w-[250px] h-[100px] shrink-0 p-4 rounded-[1.5rem] bg-white border border-white/10 hover:scale-105 transition-transform duration-300 group cursor-default shadow-lg"
                    >
                      <img 
                        src={supporter.logo} 
                        alt={supporter.name}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}

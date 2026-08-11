

import React from 'react';
import { Star } from 'lucide-react';

import { ScrollReveal, TextReveal } from "@/components/Animations";

const supportersRow1 = [
  { name: "Zoho Premium Partner", logo: "/logos/Zoho-premium-partner.webp" },
  { name: "KP Global IT Solutions", logo: "/logos/KP-Global-IT-Solutions-logo.webp" },
  { name: "KP Global Academy of Skills", logo: "/logos/Untitled-design-4.webp" },
  { name: "Aequitas Infotech", logo: "/logos/Aequitas-Infotech.webp" },
  { name: "Weapplinse Technologies", logo: "/logos/Untitled-design-6.webp" },
  { name: "1 Million Entrepreneurs", logo: "/logos/1MEIF.webp" },
  { name: "VyapaarJagat", logo: "/logos/vyapaarjagat.webp" }
];

const supportersRow2 = [
  { name: "PeersGlobal", logo: "/logos/peersglobal.webp" },
  { name: "Greenpreneur", logo: "/logos/greenpreneur.webp" },
  { name: "Fempreneur", logo: "/logos/fempreneur.webp" },
  { name: "Entrepreneur Journy", logo: "/logos/entrepreneurjouryny.webp" },
  { name: "KP Global Jobs", logo: "/logos/KP_Global_Jobs-removebg-preview.webp" },
  { name: "KP Global Business Community", logo: "/logos/KP-Global-Business-Community-Entrepreneurs-3.webp" },
  { name: "KP Global Network", logo: "/logos/Untitled_design__5_-removebg-preview.webp" }
];

export default function Supporters() {
  return (
    <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-[#E2E8F0]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[#064B63]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#F7F9FA] border border-[#E2E8F0] mb-6">
              <Star className="w-4 h-4 text-[#064B63]" />
              <span className="text-xs font-medium text-purple-200 tracking-wider uppercase">Our Clients</span>
            </div>
          </ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black text-[#111827] mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="OUR SUPPORTERS." delay={0.2} />
          </h2>
          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-[#475569] max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
              Proudly partnered with global leaders, enterprises, and entrepreneurial communities shaping the future of business.
            </p>
          </ScrollReveal>
        </div>

      </div>

      {/* Infinite Scrolling Marquees */}
      <ScrollReveal variant="3d-zoom" delay={0.5} className="relative z-10">
        
        {/* Top/Bottom Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

        <div className="flex flex-col gap-6 overflow-hidden">
          
          {/* Row 1 - Left to Right */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 px-3">
              {[...supportersRow1, ...supportersRow1, ...supportersRow1].map((supporter, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="relative flex items-center justify-center w-[280px] h-[120px] shrink-0 p-4 rounded-[1.5rem] bg-white border border-[#E2E8F0] hover:scale-105 transition-transform duration-300 group cursor-default shadow-lg"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    fill
                    sizes="280px"
                    className="p-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 px-3">
              {[...supportersRow2, ...supportersRow2, ...supportersRow2].map((supporter, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="relative flex items-center justify-center w-[280px] h-[120px] shrink-0 p-4 rounded-[1.5rem] bg-white border border-[#E2E8F0] hover:scale-105 transition-transform duration-300 group cursor-default shadow-lg"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    fill
                    sizes="280px"
                    className="p-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}

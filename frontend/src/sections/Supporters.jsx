import React from 'react';
import { ScrollReveal } from "@/components/Animations";

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
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-px bg-slate-300"></span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Trusted Partners
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                OUR CORPORATE <br />
                <span className="text-primary">NETWORK</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fade-up" delay={0.2} className="md:text-right">
            <p className="text-slate-600 font-medium max-w-sm">
              Collaborating with global leaders and entrepreneurial communities to drive sustainable growth.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="relative z-10">
        
        {/* Side Masks for smooth fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        <div className="flex flex-col gap-6 md:gap-8 overflow-hidden py-4">
          
          {/* Row 1 - Left to Right */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 md:gap-8 px-3">
              {[...supportersRow1, ...supportersRow1, ...supportersRow1].map((supporter, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="flex items-center justify-center w-[220px] md:w-[280px] h-[100px] shrink-0 p-6 rounded-2xl bg-slate-50 border border-slate-200/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 md:gap-8 px-3">
              {[...supportersRow2, ...supportersRow2, ...supportersRow2].map((supporter, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="flex items-center justify-center w-[220px] md:w-[280px] h-[100px] shrink-0 p-6 rounded-2xl bg-slate-50 border border-slate-200/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

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

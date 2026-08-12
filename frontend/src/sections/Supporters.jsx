

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
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-bg via-primary/[0.02] to-bg overflow-hidden font-sans border-t border-border">
      
      {/* Colorful Background Ambience & Network Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen dark:mix-blend-normal">
        <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-accent tracking-wider uppercase">Our Clients</span>
            </div>
          </ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-text mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="GLOBAL PARTNER NETWORK." delay={0.2} />
          </h2>
          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-text-secondary max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
              Proudly partnered with global leaders, enterprises, and entrepreneurial communities shaping the future of business.
            </p>
          </ScrollReveal>
        </div>

      </div>

      {/* Infinite Scrolling Marquees */}
      <ScrollReveal variant="3d-zoom" delay={0.5} className="relative z-10">
        
        {/* Top/Bottom Fade Masks (Theme-aware) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-bg via-bg/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-bg via-bg/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex flex-col gap-8 md:gap-12 overflow-hidden py-8">
          
          {/* Row 1 - Left to Right */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 md:gap-8 px-4">
              {[...supportersRow1, ...supportersRow1, ...supportersRow1].map((supporter, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="relative flex items-center justify-center w-[250px] md:w-[320px] h-[100px] md:h-[130px] shrink-0 p-6 md:p-8 rounded-[2rem] bg-bg dark:bg-bg-soft border border-border hover:border-primary/40 hover:bg-primary/[0.03] hover:-translate-y-2 transition-all duration-500 group cursor-default shadow-sm hover:shadow-[0_15px_40px_rgba(108,59,255,0.15)]"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    className="w-full h-full object-contain filter transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused]">
            <div className="flex gap-6 md:gap-8 px-4">
              {[...supportersRow2, ...supportersRow2, ...supportersRow2].map((supporter, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="relative flex items-center justify-center w-[250px] md:w-[320px] h-[100px] md:h-[130px] shrink-0 p-6 md:p-8 rounded-[2rem] bg-bg dark:bg-bg-soft border border-border hover:border-accent/40 hover:bg-accent/[0.03] hover:-translate-y-2 transition-all duration-500 group cursor-default shadow-sm hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]"
                >
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    className="w-full h-full object-contain filter transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm"
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

import React from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function Ecosystem() {
  const cards = [
    {
      num: "01",
      title: "KP GLOBAL IT SOLUTIONS",
      sub: "Digital Foundation",
      desc: "Custom websites, applications & digital platforms with automated system operations.",
      icon: MonitorSmartphone,
      className: "md:col-span-2 md:row-span-2",
      image: "/eco_it_bg.webp",
      href: "https://kpgbit.kpglobalbusiness.com/"
    },
    {
      num: "02",
      title: "KP GLOBAL MEDIA",
      sub: "Authority & Visibility",
      desc: "Entrepreneur stories, interviews & personal founder branding.",
      icon: Radio,
      className: "md:col-span-1",
      image: "/eco_media_bg.webp",
      href: "https://entrepreneurjouryny.com/"
    },
    {
      num: "03",
      title: "KP GLOBAL JOBS",
      sub: "Talent Acquisition",
      desc: "Structured talent platform connecting verified talent with growth businesses.",
      icon: Briefcase,
      className: "md:col-span-1",
      image: "/eco_careers_bg.webp",
      href: "https://jobs.kpglobalbusiness.com/"
    },
    {
      num: "04",
      title: "KP GLOBAL ACADEMY",
      sub: "Future-Ready Skills",
      desc: "Practical industry skill programs & market-aligned certifications.",
      icon: GraduationCap,
      className: "md:col-span-1",
      image: "/eco_academy_bg.webp",
      href: "https://academy.kpglobalbusiness.com/"
    },
    {
      num: "05",
      title: "KP GLOBAL BUSINESS COMMUNITY",
      sub: "Trust-Based Networking",
      desc: "Pan-India entrepreneur network, referral collaborations, and Investor Connect.",
      icon: Network,
      className: "md:col-span-2",
      image: "/eco_community_bg.webp",
      href: "https://kpgbc.kpglobalbusiness.com/"
    }
  ];

  return (
    <Section id="ecosystem" variant="default" className="relative overflow-hidden py-32 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-primary/40"></span>
                <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                  Our Ecosystem
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                FIVE DIVISIONS. <br />
                <span className="text-slate-400">ONE UNIFIED VISION.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                Explore the specialized platforms powering KP Global Group's comprehensive corporate acceleration framework.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bento-style Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {cards.map((card, idx) => (
            <ScrollReveal 
              key={idx} 
              variant="fade-up"
              delay={0.1 * idx}
              className={card.className}
            >
              <Link
                to={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block h-full w-full"
              >
                <div className="relative h-full w-full bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200/50">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 bg-slate-900">
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    
                    {/* Top Row: Icon & Number */}
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-bold text-white/30 font-mono tracking-widest">
                        {card.num}
                      </span>
                    </div>

                    {/* Bottom Row: Text & CTA */}
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-2">
                        {card.sub}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                        {card.desc}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors">
                        Explore Platform
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}


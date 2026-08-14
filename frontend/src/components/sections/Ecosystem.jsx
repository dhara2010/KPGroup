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
      className: "md:col-span-1",
      image: "/eco_community_bg.webp",
      href: "https://kpgbc.kpglobalbusiness.com/"
    }
  ];

  return (
    <Section id="ecosystem" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Our Ecosystem
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                FIVE DIVISIONS. <br />
                <span className="text-brand-gradient">ONE UNIFIED VISION.</span>
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

        {/* Premium Minimalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const isLarge = card.className?.includes('col-span-2');
            
            return (
              <ScrollReveal 
                key={idx} 
                variant="fade-up"
                delay={0.1 * idx}
                className={isLarge ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Link
                  to={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex ${isLarge ? 'flex-col md:flex-row' : 'flex-col'} h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-4 md:p-6 border border-slate-100/60 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 gap-6`}
                >
                  {/* Image Container (Inset) */}
                  <div className={`relative rounded-3xl overflow-hidden bg-slate-50 ${isLarge ? 'md:w-1/2 min-h-[280px] md:min-h-full' : 'h-64 w-full'} shrink-0`}>
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Floating Number */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm font-black text-slate-900 shadow-sm">
                      {card.num}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`flex flex-col justify-between flex-1 py-4 ${isLarge ? 'pr-6' : 'px-2'}`}>
                    <div>
                      {/* Icon & Subtitle */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                          <card.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                          {card.sub}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                      
                      <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        {card.desc}
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mt-auto group-hover:text-brand-violet transition-colors">
                      Explore Platform
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


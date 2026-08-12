

import React, { useRef, useState, useEffect } from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, ArrowUpRight } from 'lucide-react';

import { Link } from "react-router-dom";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import { SectionWave } from "@/components/Animations/SectionWave";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";

export default function Ecosystem() {
  const cards = [
    {
      num: "01",
      title: "KP GLOBAL IT SOLUTIONS",
      sub: "Digital Foundation for Scalable Businesses",
      desc: "Custom websites, applications & digital platforms with automated system operations.",
      bullets: ["Custom websites & apps", "Digital platforms", "Business automation", "Scalable IT infrastructure"],
      icon: MonitorSmartphone,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-primary via-accent-soft to-transparent",
      iconColor: "text-white",
      image: "/eco_it_bg.webp",
      href: "https://kpgbit.kpglobalbusiness.com/"
    },
    {
      num: "02",
      title: "KP GLOBAL MEDIA",
      sub: "Visibility That Builds Authority",
      desc: "Entrepreneur stories, interviews, success features & personal founder branding.",
      bullets: ["Entrepreneur stories", "Founder interviews", "Success features", "Personal branding"],
      icon: Radio,
      className: "md:col-span-1",
      gradient: "from-primary/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_media_bg.webp",
      href: "https://entrepreneurjouryny.com/"
    },
    {
      num: "03",
      title: "KP GLOBAL JOBS",
      sub: "Talent That Powers Growth",
      desc: "Structured talent platform connecting verified talent with growth businesses.",
      bullets: ["Structured job platform", "Verified hiring", "Corporate recruitment"],
      icon: Briefcase,
      className: "md:col-span-1",
      gradient: "from-primary/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_careers_bg.webp",
      href: "https://jobs.kpglobalbusiness.com/"
    },
    {
      num: "04",
      title: "KP GLOBAL ACADEMY",
      sub: "Future-Ready Skills",
      desc: "Practical industry skill programs & market-aligned certifications.",
      bullets: ["Industry skill programs", "Market certifications", "Upskilling professionals"],
      icon: GraduationCap,
      className: "md:col-span-1",
      gradient: "from-accent/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_academy_bg.webp",
      href: "https://academy.kpglobalbusiness.com/"
    },
    {
      num: "05",
      title: "KP GLOBAL BUSINESS COMMUNITY",
      sub: "Trust-Based Business Networking",
      desc: "Pan-India entrepreneur network, referral collaborations, Investor Connect & AI Network.",
      bullets: ["Pan-India network", "Referral collaborations", "Investor Connect", "AI Network"],
      icon: Network,
      className: "md:col-span-2",
      gradient: "from-accent-soft to-transparent",
      iconColor: "text-white",
      image: "/eco_community_bg.webp",
      href: "https://kpgbc.kpglobalbusiness.com/"
    }
  ];

  return (
    <Section id="ecosystem" variant="default" className="relative overflow-hidden">
      <SectionWave position="right" direction="up" intensity="high" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 md:mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <Eyebrow>Group Structure</Eyebrow>
            </div>
          </ScrollReveal>

          <Heading level={2} className="mb-6 uppercase">
            <TextReveal text="OUR BUSINESSES & DIVISIONS" delay={0.2} />
          </Heading>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <Text variant="large" className="max-w-2xl mx-auto">
              Explore the five major divisions powering KP Global Group's unified corporate ecosystem. Click any area to learn more.
            </Text>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[270px]">
          {cards.map((card, idx) => (
            <ScrollReveal 
              key={idx} 
              variant="3d-unfold"
              delay={0.08 * idx}
              className={card.className}
            >
              <Link
                to={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block h-full"
              >
                <ThreeDTilt 
                  scale={1.02} 
                  tiltMax={8} 
                  glareOpacity={0.1}
                  className="h-full cursor-pointer"
                >
                  <div 
                    className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 h-full border border-border"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Card Content Wrapper */}
                    <div 
                      className="relative h-full bg-bg-dark rounded-[calc(2rem-1px)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      
                      {/* Background Image with Hover Scale */}
                      <div className="absolute inset-0 z-0 overflow-hidden rounded-[calc(2rem-1px)]">
                        <img 
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
                          priority={idx === 0}
                          className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                      </div>

                      {/* Inner Hover Glow */}
                      <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${card.gradient} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-0`}></div>

                      <div 
                        className="relative z-10 flex justify-between items-start"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-white/40 group-hover:text-primary transition-colors font-mono">
                            {card.num}
                          </span>
                          <div className={`w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center ${card.iconColor} group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary transition-all duration-500`}>
                            <card.icon className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                        </div>

                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div 
                        className="relative z-10 mt-auto pt-6"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">
                          {card.sub}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 mb-3">
                          {card.desc}
                        </p>

                        {/* Progressive Disclosure Bullet Chips */}
                        <div className="flex flex-wrap gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                          {card.bullets.map((b, bIdx) => (
                            <span key={bIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80 backdrop-blur-sm">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}


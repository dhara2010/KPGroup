

import React, { useRef, useState, useEffect } from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, ArrowUpRight } from 'lucide-react';

import { Link } from "react-router-dom";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";

export default function Ecosystem() {
  const cards = [
    {
      title: "IT Solutions",
      desc: "Next-gen software, cloud infrastructure, and AI-driven enterprise solutions.",
      icon: MonitorSmartphone,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-primary via-accent-soft to-transparent",
      iconColor: "text-white",
      image: "/eco_it_bg.webp",
      href: "https://kpgbit.kpglobalbusiness.com/"
    },
    {
      title: "Media Network",
      desc: "Global reach broadcasting and digital marketing.",
      icon: Radio,
      className: "md:col-span-1",
      gradient: "from-primary/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_media_bg.webp",
      href: "https://entrepreneurjouryny.com/"
    },
    {
      title: "Skill Academy",
      desc: "Empowering the workforce of tomorrow with advanced technical training.",
      icon: GraduationCap,
      className: "md:col-span-1",
      gradient: "from-accent/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_academy_bg.webp",
      href: "https://academy.kpglobalbusiness.com/"
    },
    {
      title: "Careers",
      desc: "Join a global team of innovators.",
      icon: Briefcase,
      className: "md:col-span-1",
      gradient: "from-primary/50 to-transparent",
      iconColor: "text-white",
      image: "/eco_careers_bg.webp",
      href: "/careers"
    },
    {
      title: "Business Community",
      desc: "A thriving ecosystem of partners, investors, and enterprise leaders shaping the future.",
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
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <Eyebrow>Our Ecosystem</Eyebrow>
            </div>
          </ScrollReveal>

          <Heading level={2} className="mb-6">
            <TextReveal text="Everything you need. All in one network." delay={0.2} />
          </Heading>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <Text variant="large" className="max-w-2xl mx-auto">
              Discover a fully integrated platform designed to scale your operations, empower your team, and connect you with the world's most innovative business community.
            </Text>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
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
                      className="relative h-full bg-bg-dark rounded-[calc(2rem-1px)] p-8 flex flex-col justify-between overflow-hidden"
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
                          className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Overlay to keep text readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      </div>

                      {/* Inner Hover Glow */}
                      <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${card.gradient} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-0`}></div>

                      <div 
                        className="relative z-10 flex justify-between items-start"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center ${card.iconColor} group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary transition-all duration-500`}>
                          <card.icon className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div 
                        className="relative z-10 mt-auto pt-8"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed font-light line-clamp-3">
                          {card.desc}
                        </p>
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


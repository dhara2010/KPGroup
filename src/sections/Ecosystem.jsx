"use client";

import React, { useRef, useState, useEffect } from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Ecosystem() {
  const cards = [
    {
      title: "IT Solutions",
      desc: "Next-gen software, cloud infrastructure, and AI-driven enterprise solutions.",
      icon: MonitorSmartphone,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-blue-500/50 via-purple-500/20 to-transparent",
      iconColor: "text-blue-400",
      image: "/eco_it_bg.png"
    },
    {
      title: "Media Network",
      desc: "Global reach broadcasting and digital marketing.",
      icon: Radio,
      className: "md:col-span-1",
      gradient: "from-purple-500/50 to-transparent",
      iconColor: "text-purple-400",
      image: "/eco_media_bg.png"
    },
    {
      title: "Skill Academy",
      desc: "Empowering the workforce of tomorrow with advanced technical training.",
      icon: GraduationCap,
      className: "md:col-span-1",
      gradient: "from-pink-500/50 to-transparent",
      iconColor: "text-pink-400",
      image: "/eco_academy_bg.png"
    },
    {
      title: "Careers",
      desc: "Join a global team of innovators.",
      icon: Briefcase,
      className: "md:col-span-1",
      gradient: "from-emerald-500/50 to-transparent",
      iconColor: "text-emerald-400",
      image: "/eco_careers_bg.png"
    },
    {
      title: "Business Community",
      desc: "A thriving ecosystem of partners, investors, and enterprise leaders shaping the future.",
      icon: Network,
      className: "md:col-span-2",
      gradient: "from-orange-500/50 to-transparent",
      iconColor: "text-orange-400",
      image: "/eco_community_bg.png"
    }
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-16 md:mb-24 flex flex-col transition-all duration-[1200ms] ease-out ${isVisible ? 'text-center items-center translate-x-0 opacity-100' : 'text-left items-start -translate-x-[90vw] opacity-0'}`}>
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-medium text-purple-200 tracking-wider uppercase">Our Ecosystem</span>
          </div>
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.3s" }}
          >
            Everything you need. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">All in one network.</span>
          </h2>
          <p 
            className={`text-lg text-gray-400 max-w-2xl font-light opacity-0 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up mx-auto' : 'ml-0'}`}
            style={{ animationDelay: "0.5s" }}
          >
            Discover a fully integrated platform designed to scale your operations, empower your team, and connect you with the world's most innovative business community.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''} ${card.className}`}
              style={{ animationDelay: `${0.7 + idx * 0.15}s` }}
            >
              {/* Gradient Border Base */}
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
              
              {/* Animated Gradient Border Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md`}></div>

              {/* Card Content Wrapper */}
              <div className="relative h-full bg-black rounded-[calc(2rem-1px)] p-8 flex flex-col justify-between overflow-hidden">
                
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[calc(2rem-1px)]">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  {/* Overlay to keep text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>
                </div>

                {/* Inner Hover Glow */}
                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${card.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`}></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${card.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <card.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

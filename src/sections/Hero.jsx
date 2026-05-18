"use client";

import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { Play, Globe, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import UniqueArrow from '@/components/UniqueArrow';

function Hero() {
  const cards = [
    { title: "Global Reach", icon: Globe, value: 150, suffix: "+", desc: "Countries Served" },
    { title: "Performance", icon: Zap, value: 99.9, suffix: "%", desc: "Uptime Guaranteed" },
    { title: "Security", icon: Shield, value: 24, suffix: "/7", desc: "Active Monitoring" },
  ];

  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Increase scale as user scrolls down
        const scale = 1 + window.scrollY * 0.0007;
        // Also add a slight vertical parallax movement
        const y = window.scrollY * 0.015;
        bgRef.current.style.transform = `translateY(${y}px) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Base Background */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Hero Background Image with Scroll Scale/Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 origin-top will-change-transform">
        <Image 
          src="/hero_bg.png" 
          alt="Hero Background" 
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid mask-radial z-0 border-t border-white/5 mix-blend-screen opacity-20"></div>   

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Header */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-200">Welcome to the future of enterprise</span>
          </div>

          <h1 
            className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-white animate-gradient tracking-tight mb-8 drop-shadow-sm opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Empowering the Future of Global Business
          </h1>
          
          <p 
            className="text-lg md:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Unleash limitless potential with our next-generation ecosystem. Build, scale, and secure your enterprise effortlessly across the globe.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center gap-2 text-lg">
                Get Started Now <UniqueArrow className="w-5 h-5 ml-1" direction="right" />
              </span>
            </button>

            <button 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 text-lg group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4 text-purple-400 ml-1" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>

        {/* 3D Hover Cards with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl perspective-1200">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.9 + idx * 0.2}s` }}
            >
              <div
                className="h-full animate-float"
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                <div
                  className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden h-full hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
                  
                  <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/5 p-8 lg:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 z-10">
                    <div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center mb-8 text-blue-400 group-hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                    >
                      <card.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-3 flex items-center justify-center">
                      <CountUp end={card.value} decimals={card.value % 1 !== 0 ? 1 : 0} duration={3} delay={1.5} className="tracking-tighter" />
                      <span className="text-purple-400 ml-1">{card.suffix}</span>
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-50 mb-2">{card.title}</h4>
                    <p className="text-base text-gray-400/80">{card.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

"use client";

import React from 'react';
import { Target, Compass, Sparkles, Compass as CompassIcon, Users, Briefcase, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, TextReveal } from "@/components/Animations";

export default function AboutPage() {
  return (
    <div className="relative bg-[#020202] text-white min-h-screen overflow-hidden font-sans pt-24 pb-20">
      
      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <div className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden mb-24">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about_hero_bg.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#020202]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative text-center">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-purple-200 tracking-widest uppercase">WELCOME</span>
              </div>
            </ScrollReveal>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-6">
              <TextReveal text="ABOUT US" delay={0.2} />
            </h1>
            
            <ScrollReveal variant="fade-up" delay={0.4}>
              <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
                Empowering global enterprise through unified software ecosystems, technical training, digital broadcasting networks, and dynamic B2B corridors.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-36">
          
          {/* Section 2: Intro & Stats Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Intro text & statistics */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-right" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                  KP Global Business
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  KP Global Business
                </h2>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  KP Global Business is dedicated to providing high-quality solutions across various industries. 
                  From IT to education, media, networking, and career growth, we are committed to helping you succeed 
                  with trusted solutions and genuine care. Let's work together to achieve your goals.
                </p>
              </ScrollReveal>

              {/* Stats Block */}
              <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono tracking-tighter">
                    100+
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono tracking-tighter">
                    100+
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono tracking-tighter">
                    20+
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">Professional Team</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono tracking-tighter">
                    5+
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">Years Experience</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Block: Image */}
            <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                <img 
                  src="/about_team_meeting.png" 
                  alt="Team Meeting" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Section 3: Our Vision & Our Mission overlapping cards */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#030303] p-8 md:p-16">
            
            {/* Visual background */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/about_vision_visual.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Our Vision */}
              <ScrollReveal variant="zoom-in" className="space-y-6 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-xl hover:border-white/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Our Vision</h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  Our Vision is to become the leading provider of high-quality solutions across various industries, 
                  empowering businesses and individuals through innovation, technology, and genuine care. We aim to 
                  establish a unified ecosystem that fosters continuous growth and collaboration, connecting international 
                  opportunities with technical mastery.
                </p>
              </ScrollReveal>

              {/* Our Mission */}
              <ScrollReveal variant="zoom-in" delay={0.2} className="space-y-6 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-xl hover:border-white/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Our Mission</h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  Our Mission is to empower businesses and individuals through high-quality solutions and specialized training. 
                  By linking our IT systems, training academy, and global job pipelines directly together, we erase the friction 
                  of modern business growth. We strive to deliver excellence, security, and sustainability in everything we 
                  architect, ensuring balanced data flow and synchronized synergy.
                </p>
              </ScrollReveal>

            </div>
          </div>

          {/* Section 4: Video Banner / Image Banner */}
          <ScrollReveal variant="blur-in" className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about_video_bg.png')" }}></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

            {/* Overlap Bottom Slogan Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-black/90 border border-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl text-center shadow-2xl">
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                One Global Platform For Technology, Skills, Media, Business, and Career Growth.
              </span>
            </div>
          </ScrollReveal>

          {/* Section 5: Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Image */}
            <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                <img 
                  src="/about_boardroom_bg.jpg" 
                  alt="Boardroom Meeting" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Right Block: Capabilities List */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-left" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest">
                  Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  Why Choose Us
                </h2>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  We bridge technical architectures, educational networks, B2B synergy and worldwide employment 
                  marketplaces directly to deliver unrivaled value to your company.
                </p>
              </ScrollReveal>

              {/* Capabilities */}
              <div className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Integrated Solutions",
                    desc: "All in one custom ecosystem. Integrated technical development with specialized training, media reach, and career solutions under one roof."
                  },
                  {
                    icon: Users,
                    title: "Professional Experts",
                    desc: "Experienced and dedicated professionals working together to deliver high-quality solutions tailored for your business."
                  },
                  {
                    icon: Globe,
                    title: "Global Vision",
                    desc: "Connecting international opportunities with technical mastery. Broadening horizons and building powerful business corridors worldwide."
                  }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} variant="fade-left" delay={0.15 * idx}>
                    <div className="flex gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.01] hover:border-white/15 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-md font-bold text-white uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

          {/* Section 6: Our Commitment Symmetrical Panel */}
          <ScrollReveal variant="fade-up" className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 p-8 md:p-16 shadow-2xl bg-gradient-to-r from-black via-black/80 to-blue-950/25">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity z-0" style={{ backgroundImage: "url('/about_commitment_bg.png')" }}></div>
            
            {/* Ambient blur node */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Typographical Slogan Lockup */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                  Our Promise
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
                  YOUR GROWTH,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">OUR RESPONSIBILITY.</span>
                </h3>
              </div>

              {/* Right Column: Sleek Frosted Glass Card */}
              <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    Our Commitment
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    At KP Global Business, we are dedicated to supporting your success with trusted solutions and genuine care. 
                    Your success is our absolute priority.
                  </p>
                  
                  <Link 
                    href="#contact" 
                    className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Let's Get In Touch</span>
                    <span className="text-white/80 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
}

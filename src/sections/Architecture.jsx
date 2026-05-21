"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, Globe, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

const divisions = [
  {
    id: 'it',
    title: "IT SOLUTIONS",
    icon: MonitorSmartphone,
    color: "from-blue-600 to-cyan-400",
    accent: "#3b82f6",
    desc: "Cloud Systems & AI",
    details: "Next-gen software, cloud infrastructure, and AI-driven enterprise solutions."
  },
  {
    id: 'media',
    title: "MEDIA NETWORK",
    icon: Radio,
    color: "from-purple-600 to-violet-500",
    accent: "#a855f7",
    desc: "Digital Broadcasting",
    details: "Global reach broadcasting and digital marketing network connecting brands to millions."
  },
  {
    id: 'academy',
    title: "SKILL ACADEMY",
    icon: GraduationCap,
    color: "from-blue-600 to-purple-600",
    accent: "#6366f1",
    desc: "Tech Mastery",
    details: "Empowering the workforce of tomorrow with advanced technical training and leadership skills."
  },
  {
    id: 'careers',
    title: "CAREERS",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    desc: "Global Talent",
    details: "Join a global team of innovators and shape the future of international business."
  },
  {
    id: 'community',
    title: "COMMUNITY",
    icon: Network,
    color: "from-violet-600 to-purple-700",
    accent: "#8b5cf6",
    desc: "Business Synergy",
    details: "A thriving ecosystem of partners, investors, and enterprise leaders shaping global markets."
  }
];

export default function Architecture() {
  const [activeNode, setActiveNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
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

  // Continuous smooth orbital rotation loop
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId;
    const animate = () => {
      setRotationAngle((prev) => (prev + 0.15) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const getPosition = (index, total, radius, offset = 0) => {
    const angle = (index * (360 / total) - 90 + offset) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] overflow-hidden select-none min-h-screen flex flex-col justify-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header - Symmetrical Reveal */}
        <div className="mb-40 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-medium text-purple-200 tracking-wider uppercase">Architecture</span>
            </div>
          </ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            <TextReveal text="THE ECOSYSTEM Architecture" delay={0.2} />
          </h2>
          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-gray-400 max-w-2xl font-light leading-relaxed mx-auto">
              A perfectly symmetrical architecture where every division is equidistant from the core network, 
              ensuring balanced data flow and synchronized synergy.
            </p>
          </ScrollReveal>
        </div>

        {/* Circular Map Container */}
        <ScrollReveal variant="3d-zoom" delay={0.5} className="relative w-full aspect-square max-w-[600px] md:max-w-[800px] mx-auto flex items-center justify-center rounded-full" style={{ transformStyle: "preserve-3d" }}>
          <ThreeDTilt 
            tiltMax={10} 
            glareOpacity={0} 
            scale={1.0} 
            perspective={1200}
            className="w-full h-full absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full" style={{ transform: "translateZ(10px)" }}></div>
              <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-spin-slow" style={{ transform: "translateZ(20px)" }}></div>
              <div className="absolute w-[40%] h-[40%] border border-white/10 rounded-full animate-reverse-spin" style={{ transform: "translateZ(30px)" }}></div>
            </div>

            {/* Central Hub: The Nucleus */}
            <div className="relative z-20" style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
              <div className={`w-32 h-32 md:w-56 md:h-56 rounded-full bg-black border-2 border-white/20 flex flex-col items-center justify-center p-6 shadow-[0_0_80px_rgba(59,130,246,0.15)] group transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] animate-pulse"></div>
                <Globe className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mb-4 animate-pulse" />
                <h3 className="text-xs md:text-2xl font-black text-white text-center leading-none tracking-[0.2em] uppercase">
                  KP<br/>CORE
                </h3>
              </div>
            </div>

            {/* SVG Connector Spokes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" style={{ transform: "translateZ(15px)" }}>
              {isMounted && divisions.map((node, i) => {
                const radius = 35; // % based
                const angle = (i * (360 / divisions.length) - 90 + rotationAngle) * (Math.PI / 180);
                const x2 = 50 + Math.cos(angle) * radius;
                const y2 = 50 + Math.sin(angle) * radius;
                
                return (
                  <g key={`spoke-${node.id}`}>
                    <line
                      x1="50" y1="50" x2={x2} y2={y2}
                      stroke={activeNode?.id === node.id ? node.accent : "rgba(255,255,255,0.05)"}
                      strokeWidth={activeNode?.id === node.id ? "0.4" : "0.1"}
                      className="transition-all duration-500"
                    />
                    {/* Flow dots */}
                    {isVisible && (
                      <circle r="0.5" fill={node.accent} className="animate-data-stream">
                        <animateMotion
                          dur={`${2 + i}s`}
                          repeatCount="indefinite"
                          path={`M 50 50 L ${x2} ${y2}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Outer Nodes: Perfect Circle Placement */}
            {isMounted && divisions.map((node, i) => {
              const radius = window.innerWidth < 768 ? 160 : 320;
              const pos = getPosition(i, divisions.length, radius, rotationAngle);
              
              return (
                <div
                  key={node.id}
                  className={`absolute z-30 transition-opacity transition-transform duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
                  style={{
                    transform: `translate3d(${pos.x}px, ${pos.y}px, 50px)`,
                    transformStyle: "preserve-3d",
                    transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), scale 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0s',
                    transitionDelay: isVisible ? '0ms' : `${i * 100}ms`
                  }}
                  onMouseEnter={() => {
                    setActiveNode(node);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setActiveNode(null);
                    setIsHovered(false);
                  }}
                >
                  <div className={`group relative flex flex-col items-center transition-all duration-500 ${activeNode?.id === node.id ? 'scale-110' : ''}`} style={{ transformStyle: "preserve-3d" }}>
                    {/* Node Circle Panel */}
                    <div className={`relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-black border transition-all duration-500 flex flex-col items-center justify-center gap-2 p-4 ${activeNode?.id === node.id ? 'border-white/50 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-110' : 'border-white/10 group-hover:border-white/30'}`} style={{ transform: "translateZ(20px)" }}>
                      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                        <node.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                      <span className="hidden md:block text-[8px] font-black text-white/40 tracking-widest uppercase">
                        {node.title.split(' ')[0]}
                      </span>
                    </div>

                    {/* Label Floating Above/Below */}
                    <div className={`absolute transition-all duration-500 ${pos.y > 0 ? 'top-full mt-4' : 'bottom-full mb-4'} ${activeNode?.id === node.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 invisible'}`} style={{ transform: "translateZ(80px)" }}>
                      <div className="bg-black/90 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl text-center shadow-2xl w-[240px]">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{node.title}</h4>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter mb-2">{node.desc}</p>
                        <p className="text-[9px] text-gray-400 font-medium leading-relaxed tracking-tight whitespace-normal">
                          {node.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ThreeDTilt>
        </ScrollReveal>
      </div>
    </section>
  );
}


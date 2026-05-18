"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Terminal, ShieldAlert, 
  Layers, Globe, Zap, 
  Sparkles, Rocket, Fingerprint,
  ArrowRight, Activity, CheckCircle2,
  BarChart3, Globe2
} from 'lucide-react';

const categories = [
  { id: "all", label: "All Services" },
  { id: "tech", label: "Neural Tech" },
  { id: "media", label: "Global Media" },
  { id: "growth", label: "Elite Growth" }
];

const services = [
  {
    id: "ai",
    cat: "tech",
    title: "Enterprise AI Hub",
    desc: "Bespoke neural networks and LLM automation designed to optimize large-scale corporate operations.",
    price: "Custom",
    icon: Cpu,
    color: "from-blue-600 to-cyan-400",
    features: ["LLM Integration", "Automated Workflows", "Neural Data Core"]
  },
  {
    id: "viral",
    cat: "media",
    title: "Virality Network",
    desc: "Leverage the KP Media Network to push your brand narrative through millions of synchronized nodes.",
    price: "From ₹3,500",
    icon: Layers,
    color: "from-purple-600 to-violet-500",
    features: ["Trend Dominance", "Node Distribution", "Global Reach"]
  },
  {
    id: "quantum",
    cat: "growth",
    title: "CEO Mentorship",
    desc: "Quantum-level leadership training for high-stakes decision makers scaling in global markets.",
    price: "Custom",
    icon: Zap,
    color: "from-violet-600 to-blue-600",
    features: ["Strategic Scaling", "Market Dominance", "Elite Coaching"]
  },
  {
    id: "sec",
    cat: "tech",
    title: "Cloud Infrastructure",
    desc: "Zero-trust edge computing and secure cloud architecture for high-performance global scaling.",
    price: "From ₹1,999",
    icon: ShieldAlert,
    color: "from-cyan-500 to-blue-500",
    features: ["Zero-Trust Core", "Edge Distribution", "Quantum Guard"]
  },
  {
    id: "holo",
    cat: "media",
    title: "Spatial Production",
    desc: "High-end holographic and immersive 3D content for spatial computing and digital displays.",
    price: "From ₹5,500",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    features: ["Spatial Rendering", "AR/VR Mastery", "Cinematic Quality"]
  },
  {
    id: "comm",
    cat: "growth",
    title: "Business Synergy",
    desc: "Exclusive access to the KP Global Community of investors, enterprise leaders, and partners.",
    price: "Membership",
    icon: Globe,
    color: "from-blue-500 to-purple-600",
    features: ["Venture Network", "Strategic Mergers", "Global Partners"]
  }
];

export default function Services() {
  const [activeCat, setActiveCat] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const filteredServices = activeCat === "all" 
    ? services 
    : services.filter(s => s.cat === activeCat);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - User Friendly & Clear */}
        <div className={`mb-20 flex flex-col transition-all duration-[1200ms] ease-out ${isVisible ? 'text-center items-center translate-x-0 opacity-100' : 'text-left items-start -translate-x-[90vw] opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-200 tracking-wider uppercase font-sans">Service Directory</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Explore our ecosystem of high-performance business infrastructure. Designed for scalability, security, and global reach.
          </p>
        </div>

        {/* Category Filters - User Friendly Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                activeCat === cat.id 
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid - Highly Scannable & User Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:scale-[1.01] hover:bg-[#0d0d0d] flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Starts From</span>
                    <span className="text-sm font-black text-white">{service.price}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight font-heading uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-10">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[10px] font-bold text-gray-600 uppercase tracking-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer - Action Area */}
              <div className="flex flex-col gap-4 mt-auto">
                 <div className="h-[1px] w-full bg-white/5 mb-2"></div>
                 <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                 </button>
              </div>

              {/* Ambient Hover Glow */}
              <div className={`absolute -inset-20 bg-gradient-to-br ${service.color} opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-10 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className={`mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border border-white/10 backdrop-blur-3xl text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
           <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
             Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Custom</span> Solution?
           </h3>
           <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed mb-10 text-sm md:text-base">
             Our team of architects can design a bespoke infrastructure tailored to your unique business requirements.
           </p>
           <button className="px-12 py-5 rounded-2xl bg-blue-600 text-white text-xs font-black tracking-[0.3em] uppercase hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]">
             Contact Architects
           </button>
        </div>
      </div>
    </section>
  );
}

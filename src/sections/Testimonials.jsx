"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Star, Quote, 
  GraduationCap, Briefcase, Activity,
  ChevronRight, PlayCircle
} from 'lucide-react';

const categories = [
  { id: "all", label: "All Stories" },
  { id: "client", label: "Client Reviews" },
  { id: "student", label: "Student Reviews" },
  { id: "video", label: "Video Testimonials" }
];

const testimonials = [
  {
    id: 1,
    cat: "client",
    name: "Sarah Jenkins",
    role: "CEO, TechNova",
    type: "Client Review",
    icon: Briefcase,
    content: "KP Global transformed our entire digital infrastructure. Their AI automation saved us countless hours and significantly boosted our bottom line.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    cat: "video",
    name: "Marcus Thorne",
    role: "Founder, Zenith Media",
    type: "Success Story",
    icon: PlayCircle,
    content: "The Virality Engine is unmatched. We reached 50M users in just two weeks. Watch my full breakdown of how KP Global made it happen.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    cat: "student",
    name: "Elena Rodriguez",
    role: "Graduate, Meta Academy",
    type: "Student Review",
    icon: GraduationCap,
    content: "The immersive VR labs at the Academy accelerated my learning by 10x. I secured a Senior Developer role within months of graduating.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 4,
    cat: "client",
    name: "David Chen",
    role: "CTO, Lumina Networks",
    type: "Client Review",
    icon: Briefcase,
    content: "Partnering with KP Global for our decentralized core was the best strategic move we made this decade. Zero downtime and infinite scale.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    color: "from-cyan-400 to-blue-600"
  },
  {
    id: 5,
    cat: "student",
    name: "Aisha Patel",
    role: "Quantum Mastery Alumnus",
    type: "Success Story",
    icon: GraduationCap,
    content: "The CEO mentorship program rewired my approach to high-stakes decision-making. We've scaled our operations globally since then.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    color: "from-rose-500 to-red-500"
  },
  {
    id: 6,
    cat: "video",
    name: "James Wilson",
    role: "Director, Apex Solutions",
    type: "Video Testimonial",
    icon: PlayCircle,
    content: "Neural Security protocols protected our assets during a massive global breach. Here's our story on how KP Global kept us safe.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
    color: "from-violet-500 to-blue-600"
  }
];

export default function Testimonials() {
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

  const filteredTestimonials = activeCat === "all" 
    ? testimonials 
    : testimonials.filter(t => t.cat === activeCat);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Consistent Animation */}
        <div className={`mb-20 flex flex-col transition-all duration-[1200ms] ease-out ${isVisible ? 'text-center items-center translate-x-0 opacity-100' : 'text-left items-start -translate-x-[90vw] opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-medium text-purple-200 tracking-wider uppercase font-sans">Global Impact</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            SUCCESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">STORIES.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Hear directly from the enterprise leaders, innovators, and students who have transformed their trajectories with KP Global.
          </p>
        </div>

        {/* Filter Controls */}
        <div className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                activeCat === cat.id 
                ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] items-start">
          {filteredTestimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`group relative rounded-[2.5rem] bg-[#080808] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:scale-[1.02] hover:bg-[#0a0a0a] animate-fade-in-up ${testimonial.isVideo ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'p-8 flex flex-col'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {testimonial.isVideo ? (
                // Video Testimonial Card
                <>
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/50 transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                     </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-8 left-8 z-20">
                     <div className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                        <testimonial.icon className="w-3 h-3 text-purple-400" />
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">{testimonial.type}</span>
                     </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-heading tracking-tight">{testimonial.name}</h3>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">{testimonial.role}</p>
                    <p className="text-gray-300 font-light max-w-2xl text-sm md:text-base hidden md:block">"{testimonial.content}"</p>
                  </div>
                </>
              ) : (
                // Standard Text Testimonial Card
                <>
                  <div className="flex justify-between items-start mb-8">
                    <Quote className="w-10 h-10 text-white/10" />
                    <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                       <testimonial.icon className="w-3 h-3 text-blue-400" />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{testimonial.type}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-300 font-light leading-relaxed mb-8 flex-1 text-sm">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-black text-white tracking-tight uppercase">{testimonial.name}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </>
              )}

              {/* Dynamic Glow */}
              <div className={`absolute -inset-20 bg-gradient-to-br ${testimonial.color} opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-10 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

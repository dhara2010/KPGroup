"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: "Parth Kanjariya",
    role: "Founder & CEO",
    image: "/team/Parth-Kanjariya-Founder-CEO.webp",
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    name: "Nisarg Bhatt",
    role: "Bussiness Advisor & Stratagic Partner",
    image: "/team/Nisarg-bhatt.webp",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    name: "Marvin Mtama",
    role: "International Clients Handle",
    image: "/team/Marvin.webp",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 4,
    name: "Punit Kanjariya",
    role: "Head of Ahmedavad",
    image: "/team/Punit-kanjariya.webp",
    color: "from-violet-600 to-indigo-500"
  }
];

export default function Team() {
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

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`mb-20 flex flex-col transition-all duration-[1200ms] ease-out ${isVisible ? 'text-center items-center translate-x-0 opacity-100' : 'text-left items-start -translate-x-[90vw] opacity-0'}`}>
          <div 
            className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.1s" }}
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-200 tracking-wider uppercase font-sans">Leadership</span>
          </div>
          <h2 
            className={`text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-heading opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.3s" }}
          >
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ARCHITECTS.</span>
          </h2>
          <p 
            className={`text-gray-400 max-w-2xl font-light leading-relaxed text-sm md:text-base opacity-0 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up mx-auto' : 'ml-0'}`}
            style={{ animationDelay: "0.5s" }}
          >
            The visionary minds engineering the next evolution of global enterprise, technology, and media infrastructure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, idx) => (
            <div 
              key={member.id}
              className={`group relative rounded-[2rem] overflow-hidden bg-[#080808] border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                />
                
               
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 transform transition-transform duration-500">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {member.role}
                </p>
                
                {/* Subtle border bottom line */}
                <div className={`w-0 h-[2px] mt-4 bg-gradient-to-r ${member.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

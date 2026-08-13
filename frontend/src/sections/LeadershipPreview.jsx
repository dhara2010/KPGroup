import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

export default function LeadershipPreview() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/teams");
        const data = await res.json();
        if (Array.isArray(data)) {
          // Take only the first 4 members for the preview grid
          setTeam(data.slice(0, 4));
        } else {
          console.error("Failed to fetch team: response is not an array", data);
        }
      } catch (error) {
        console.error("Failed to fetch team:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <Section id="leadership-preview" variant="default" className="relative overflow-hidden py-32 bg-slate-950 text-white border-t border-white/10">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-white/20"></span>
                <span className="text-sm font-bold text-white/60 uppercase tracking-[0.2em]">
                  Executive Team
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                GUIDED BY <br className="hidden md:block" />
                <span className="text-white/40">VISION & PURPOSE.</span>
              </h2>
            </ScrollReveal>
          </div>
          
          <ScrollReveal variant="fade-up" delay={0.2} className="md:text-right flex flex-col md:items-end">
            <p className="text-slate-400 font-medium text-lg max-w-sm mb-6">
              Our leadership is committed to building scalable corporate infrastructure and fostering sustainable growth.
            </p>
            <Link
              to="/team"
              className="group inline-flex items-center gap-3 text-xs font-bold text-white uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              <span>View All Leadership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((leader, idx) => (
            <ScrollReveal 
              key={leader._id || idx}
              variant="fade-up"
              delay={0.1 * idx}
            >
              <div className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900 border border-white/10">
                
                {/* Image */}
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1c1c1c]" />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">
                    {leader.role}
                  </p>
                  
                  {/* Subtle decorative line */}
                  <div className="w-0 h-px bg-primary mt-6 group-hover:w-full transition-all duration-700 ease-out" />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </Section>
  );
}

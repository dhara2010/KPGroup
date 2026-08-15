import React, { useState, useEffect } from 'react';
import { MonitorSmartphone, Radio, GraduationCap, Briefcase, Network, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { apiFetch } from "../../api/api";

// Map strings from DB to components
const iconMap = {
  MonitorSmartphone: MonitorSmartphone,
  Radio: Radio,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Network: Network
};

export default function Ecosystem() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEcosystem = async () => {
      try {
        const data = await apiFetch("/api/ecosystems");
        setCards(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEcosystem();
  }, []);

  return (
    <Section id="ecosystem" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Our Ecosystem
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                THREE PILLARS OF <br />
                <span className="text-brand-gradient">EXCELLENCE.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                A synergistic network of technology, media, and education working together to elevate global businesses.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Premium Minimalist Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : cards.length === 0 ? null : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => {
              const isLarge = card.className?.includes('col-span-2');
              const IconComp = iconMap[card.icon] || MonitorSmartphone;
              
              return (
                <ScrollReveal 
                  key={card._id || idx} 
                  variant="fade-up"
                  delay={0.1 * idx}
                  className={isLarge ? "lg:col-span-2" : "lg:col-span-1"}
                >
                  <Link
                    to={card.href || '#'}
                    target={card.href?.startsWith('http') ? '_blank' : undefined}
                    rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex ${isLarge ? 'flex-col md:flex-row' : 'flex-col'} h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-4 md:p-6 border border-slate-100/60 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 gap-6`}
                  >
                    {/* Image Container (Inset) */}
                    <div className={`relative rounded-3xl overflow-hidden bg-slate-50 ${isLarge ? 'md:w-1/2 min-h-[280px] md:min-h-full' : 'h-64 w-full'} shrink-0`}>
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Floating Number */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm font-black text-slate-900 shadow-sm">
                        {card.num}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className={`flex flex-col justify-between flex-1 py-4 ${isLarge ? 'pr-6' : 'px-2'}`}>
                      <div>
                        {/* Icon & Subtitle */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                            {card.sub}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                          {card.title}
                        </h3>
                        
                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                          {card.desc}
                        </p>
                      </div>
                      
                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mt-auto group-hover:text-brand-violet transition-colors">
                        Explore Platform
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

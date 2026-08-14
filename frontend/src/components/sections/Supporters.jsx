import React, { useState, useEffect } from 'react';
import { ScrollReveal } from "@/components/Animations";
import { Loader2 } from "lucide-react";

export default function Supporters() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/partners`);
        const data = await res.json();
        const eco = data.filter(p => p.type === "Ecosystem");
        setPartners(eco.length > 0 ? eco : data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  const half = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, half);
  const row2 = partners.slice(half);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">Trusted Partners</span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">OUR CORPORATE <br /><span className="text-brand-gradient">NETWORK</span></h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fade-up" delay={0.2} className="md:text-right">
            <p className="text-slate-600 font-medium max-w-sm">Collaborating with global leaders and entrepreneurial communities to drive sustainable growth.</p>
          </ScrollReveal>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      ) : partners.length === 0 ? null : (
        <div className="relative z-10">
          <div className="flex flex-col gap-6 md:gap-8 overflow-hidden py-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            {row1.length > 0 && (
              <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex gap-6 md:gap-8 px-3">
                  {[...row1, ...row1, ...row1, ...row1].map((supporter, idx) => (
                    <div key={`r1-${idx}`} className="flex items-center justify-center w-[220px] md:w-[280px] h-[100px] shrink-0 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                      <img src={supporter.logo} alt={supporter.name} className="w-full h-full object-contain opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {row2.length > 0 && (
              <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex gap-6 md:gap-8 px-3">
                  {[...row2, ...row2, ...row2, ...row2].map((supporter, idx) => (
                    <div key={`r2-${idx}`} className="flex items-center justify-center w-[220px] md:w-[280px] h-[100px] shrink-0 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                      <img src={supporter.logo} alt={supporter.name} className="w-full h-full object-contain opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}

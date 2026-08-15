import React, { useState, useEffect } from 'react';
import { Target, Users2, Rocket, ShieldCheck, Loader2 } from 'lucide-react';
import { ScrollReveal, TextReveal } from "@/components/Animations";
import { apiFetch } from "../../api/api";

const iconMap = {
  Target: <Target className="w-6 h-6 text-primary" />,
  Users2: <Users2 className="w-6 h-6 text-primary" />,
  Rocket: <Rocket className="w-6 h-6 text-primary" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-primary" />
};

export default function WhyKPGroup() {
  const [reasons, setReasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const data = await apiFetch("/api/reasons");
        setReasons(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReasons();
  }, []);

  return (
    <section id="why-kp" className="relative py-32 overflow-hidden bg-transparent font-sans text-slate-900 border-t border-slate-200/50">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
  <div>
    <ScrollReveal variant="fade-up">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-0.5 bg-blue-500/40"></span>
        <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
          The KP Advantage
        </span>
      </div>
    </ScrollReveal>

    <ScrollReveal variant="fade-up" delay={0.1}>
      <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
        WHY GLOBAL LEADERS <br />
        <span className="text-brand-gradient">CHOOSE KP GROUP.</span>
      </h2>
    </ScrollReveal>
  </div>

  <div className="md:text-right">
    <ScrollReveal variant="fade-up" delay={0.2}>
      <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
        We don't just execute tasks; we architect ecosystems. Our integrated
        approach across tech, media, and education ensures your enterprise is
        future-proof and hyper-scalable.
      </p>
    </ScrollReveal>
  </div>
</div>

        {/* Feature Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : reasons.length === 0 ? null : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 relative">
            {reasons.map((reason, idx) => (
              <ScrollReveal 
                key={reason._id || idx} 
                variant="fade-up" 
                delay={idx * 0.1}
              >
                <div className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-slate-300 transition-all duration-500 overflow-hidden h-full flex flex-col shadow-sm">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/10 group-hover:border-primary/20">
                      {iconMap[reason.icon] || <Target className="w-6 h-6 text-primary" />}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-600 font-medium leading-relaxed mt-auto">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

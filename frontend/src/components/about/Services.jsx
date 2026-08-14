import React, { useState, useEffect } from 'react';
import { Globe, GraduationCap, Building2, Code2, Cpu, FileJson2, Briefcase, Rocket, Loader2 } from 'lucide-react';
import { ScrollReveal } from "@/components/Animations";

// We need an icon map because the db stores string names
const iconMap = {
  Cpu: <Cpu className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  FileJson2: <FileJson2 className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  Briefcase: <Briefcase className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  Rocket: <Rocket className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  Globe: <Globe className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  Building2: <Building2 className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />,
  Code2: <Code2 className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />
};

export default function Services() {
  const [capabilities, setCapabilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        setCapabilities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Our Capabilities
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                COMPREHENSIVE <br />
                <span className="text-brand-gradient">SOLUTIONS.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                End-to-end expertise delivering measurable value across software, media, and corporate consulting.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : capabilities.length === 0 ? null : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <ScrollReveal 
                key={cap._id || idx} 
                variant="fade-up" 
                delay={idx * 0.1}
                className="h-full"
              >
                <div className="group/card bg-white border border-slate-200 rounded-[2rem] p-8 h-full flex flex-col hover:bg-primary transition-colors duration-500 hover:shadow-2xl">
                  
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover/card:bg-white/10 group-hover/card:border-white/20 transition-all duration-500">
                    {iconMap[cap.icon] || <Globe className="w-6 h-6 text-primary group-hover/card:text-white transition-colors" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 group-hover/card:text-white transition-colors duration-500">
                    {cap.title}
                  </h3>

                  <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100 group-hover/card:border-white/20 transition-colors duration-500">
                    {cap.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm font-medium text-slate-600 group-hover/card:text-slate-200 transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 group-hover/card:bg-white transition-colors duration-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
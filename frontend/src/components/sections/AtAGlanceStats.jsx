import React, { useEffect, useState, useRef } from 'react';
import { Award, Layers, Globe2, Building } from 'lucide-react';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

const iconMap = {
  Award: Award,
  Layers: Layers,
  Building: Building,
  Globe2: Globe2
};

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function AtAGlanceStats() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/metrics");
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <Section id="at-a-glance" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900 border-t border-slate-200/50">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Key Metrics
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                <span>KP GLOBAL GROUP</span> <br className="hidden md:block" />
                <span className="text-brand-gradient">BY THE NUMBERS.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-sm ml-auto">
                Measurable impact across multiple sectors, driven by our commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Counter Cards */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : metrics.length === 0 ? null : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
            {metrics.map((item, idx) => {
              const Icon = iconMap[item.icon] || Award; // default fallback
              return (
                <div key={idx} className="bg-white p-8 lg:p-10 flex flex-col justify-between group relative overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 mb-12 group-hover:text-brand-violet transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
                      <Counter target={item.target} suffix={item.suffix} />
                    </div>

                    <h3 className="text-base font-bold uppercase tracking-wide text-slate-900 mb-2">
                      {item.label}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </Section>
  );
}

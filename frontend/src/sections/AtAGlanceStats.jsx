import React, { useEffect, useState, useRef } from 'react';
import { Award, Layers, Globe2, Building } from 'lucide-react';
import { ScrollReveal } from '@/components/Animations';
import { Section } from '@/components/ui/Section';

const METRICS = [
  {
    target: 5,
    suffix: "+",
    label: "Years of Operational Excellence",
    sub: "Established corporate track record",
    icon: Award
  },
  {
    target: 50,
    suffix: "+",
    label: "Enterprise Projects Delivered",
    sub: "Custom digital & IT systems",
    icon: Layers
  },
  {
    target: 5,
    suffix: "",
    label: "Strategic Business Divisions",
    sub: "IT, Media, Jobs, Academy & Community",
    icon: Building
  },
  {
    target: 100,
    suffix: "%",
    label: "Pan-India Reach & Growth",
    sub: "Trusted network collaborations",
    icon: Globe2
  }
];

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
  return (
    <Section id="at-a-glance" variant="default" className="relative overflow-hidden py-32 bg-slate-950 text-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-white/20"></span>
                <span className="text-sm font-bold text-white/60 uppercase tracking-[0.2em]">
                  Key Metrics
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                KP GLOBAL GROUP <br className="hidden md:block" />
                <span className="text-white/40">BY THE NUMBERS.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-400 font-medium text-lg max-w-sm ml-auto">
                Measurable impact across multiple sectors, driven by our commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-950 p-8 lg:p-10 flex flex-col justify-between group relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-12 group-hover:text-primary transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                    <Counter target={item.target} suffix={item.suffix} />
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-wide text-white/90 mb-2">
                    {item.label}
                  </h3>
                  
                  <p className="text-sm text-white/50 leading-relaxed font-medium">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}

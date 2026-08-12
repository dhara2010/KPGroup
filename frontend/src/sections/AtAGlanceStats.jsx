import React, { useEffect, useState, useRef } from 'react';
import { Award, Layers, Globe2, Building } from 'lucide-react';
import { ScrollReveal } from '@/components/Animations';
import { SectionWave } from '@/components/Animations/SectionWave';
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
    label: "Enterprise Projects & Platforms Delivered",
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
    label: "Pan-India Reach & Ecosystem Growth",
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
          const duration = 1800;
          const steps = 40;
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
    <Section id="at-a-glance" variant="default" className="relative overflow-hidden py-24 md:py-32 border-t border-slate-200/80 bg-slate-900 text-white">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <SectionWave position="left" direction="down" intensity="medium" />
        <div className="absolute top-0 right-1/4 w-[45vw] h-[45vw] bg-primary/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[45vw] h-[45vw] bg-accent/20 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-bold text-primary-soft uppercase tracking-widest mb-4 shadow-sm">
              Impact & Reach
            </div>
          </ScrollReveal>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight font-heading leading-tight">
            KP GLOBAL GROUP AT A GLANCE
          </h2>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={0.1 * idx}>
                <div className="group p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-2">
                      <Counter target={item.target} suffix={item.suffix} />
                    </div>

                    <h3 className="text-sm font-extrabold uppercase tracking-wide text-white/90 mb-1">
                      {item.label}
                    </h3>
                  </div>

                  <span className="text-xs text-white/60 font-light mt-4 pt-4 border-t border-white/10 block">
                    {item.sub}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </Section>
  );
}

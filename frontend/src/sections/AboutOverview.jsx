
import React from "react";

import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

// Custom Animated Counter using requestAnimationFrame and IntersectionObserver
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = React.useState("");
  const elementRef = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Parse numbers and suffixes (e.g. "100+" -> 100 and "+")
          const numberMatch = String(target).match(/^([\d.]+)(.*)$/);
          if (numberMatch) {
            const numValue = parseFloat(numberMatch[1]);
            const suffix = numberMatch[2];
            const isFloat = String(numberMatch[1]).includes(".");

            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = progress * numValue;

              if (isFloat) {
                setCount(currentValue.toFixed(1) + suffix);
              } else {
                setCount(Math.floor(currentValue) + suffix);
              }

              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count || target}</span>;
}

export default function AboutOverview() {
  const capabilities = [
    "Designed for high-growth & referral-driven businesses",
    "Strong alignment with business communities",
    "Credibility, trust & long-term partnerships",
    "One ecosystem replacing disconnected vendors",
    "Built for real business outcomes",
  ];

  const stats = [
    { value: "100+", label: "Projects Completed", icon: Activity, color: "text-primary" },
    { value: "20+", label: "Team Members", icon: ShieldCheck, color: "text-primary" },
    { value: "100+", label: "Customer Satisfaction", icon: Sparkles, color: "text-primary" },
    { value: "5+", label: "Years Experience", icon: Zap, color: "text-primary" },
  ];

  return (
    <Section variant="default" className="relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading, description, capability list */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left">
            <ScrollReveal variant="fade-right">
              {/* Floating gradient asset logo decoration */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-border shrink-0 bg-bg-soft shadow-inner">
                  <img
                    src="/blog_3d_fluid.webp"
                    alt="Abstract Fluid logo"
                    fill
                    sizes="56px"
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-bg-soft border border-border backdrop-blur-md">
                  <Eyebrow>
                    Ecosystem Matrix
                  </Eyebrow>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={0.15}>
              <Heading level={2} className="uppercase">
                A BUSINESS ECOSYSTEM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  DESIGNED FOR GROWTH
                </span>
              </Heading>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={0.3}>
              <Text variant="large" className="max-w-xl">
                The ecosystem combines Technology, Trusted Networking, Media Visibility, Talent Solutions, and Skill Development into one integrated platform built to simplify growth for businesses and professionals.
              </Text>
            </ScrollReveal>

            {/* Interactive Capability checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl pt-2">
              {capabilities.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  variant="fade-right"
                  delay={0.4 + idx * 0.08}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-text-secondary tracking-wide">
                    {item}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal variant="fade-right" delay={0.7} className="pt-4">
              <Button
                to="/about"
                variant="primary"
                className="group"
              >
                Know About Us
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                  <ArrowRight className="w-3 h-3 text-primary" />
                </div>
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive 3D Tilt Image */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <ScrollReveal variant="fade-left" className="w-full">
              <ThreeDTilt
                tiltMax={8}
                scale={1.02}
                glareOpacity={0.05}
                className="relative group w-full"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-soft via-primary/40 to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] w-full bg-bg border border-border shadow-2xl">
                  <img
                    src="/about_team_meeting.webp"
                    alt="KP Global Team Collaboration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ThreeDTilt>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Statistics Section */}
        <div className="mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="3d-unfold"
                  delay={idx * 0.1}
                  className="group relative flex flex-col items-start text-left p-8 rounded-[2rem] bg-bg-soft border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative ambient hover glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />

                  <div className="w-12 h-12 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 z-10 relative">
                    <StatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text to-text-secondary font-heading tracking-tight mb-2 z-10 relative group-hover:from-primary group-hover:to-accent transition-all duration-500">
                    <AnimatedCounter target={stat.value} />
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-text-secondary uppercase tracking-[0.2em] z-10 relative">
                    {stat.label}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}


import React from "react";

import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

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
    "Smart Business Connections",
    "Growth Partnerships",
    "Expert Guidance & Innovation",
    "Global Recognition & Visibility",
  ];

  const stats = [
    { value: "100+", label: "Projects Completed", icon: Activity, color: "text-[#064B63]" },
    { value: "20+", label: "Team Members", icon: ShieldCheck, color: "text-[#064B63]" },
    { value: "100%", label: "Customer Satisfaction", icon: Sparkles, color: "text-[#064B63]" },
    { value: "5+", label: "Years Experience", icon: Zap, color: "text-[#0E7490]" },
  ];

  return (
    <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-[#E2E8F0]">
      {/* Laser Grid Background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      {/* Cyber ambient background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] bg-[#064B63]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#064B63]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, description, capability list */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left">
            <ScrollReveal variant="fade-right">
              {/* Floating gradient asset logo decoration */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#E2E8F0] shrink-0 bg-[#F7F9FA] shadow-inner">
                  <img
                    src="/blog_3d_fluid.webp"
                    alt="Abstract Fluid logo"
                    fill
                    sizes="56px"
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#F7F9FA] border border-[#E2E8F0] backdrop-blur-md">
                  <span className="text-[10px] font-black text-[#064B63] tracking-widest uppercase">
                    Ecosystem Matrix
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={0.15}>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-[#111827] leading-[1.1] uppercase tracking-tight font-heading">
                A BUSINESS ECOSYSTEM
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300">
                  DESIGNED FOR GROWTH
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={0.3}>
              <p className="text-[#475569] font-light text-sm md:text-base leading-relaxed max-w-xl">
                We unite technology, media strategy, and global networking to help businesses grow smarter and faster. Bridging high-end software development, digital branding, and entrepreneurial synergic networks to solve tomorrow's corporate challenges.
              </p>
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
                  <div className="w-5 h-5 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#064B63]" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#475569] tracking-wide">
                    {item}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal variant="fade-right" delay={0.7} className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F172A] hover:bg-[#064B63] rounded-full text-xs font-bold uppercase tracking-wider text-[#111827] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] group"
              >
                Know About Us
                <div className="w-5 h-5 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                  <ArrowRight className="w-3 h-3 text-[#111827]" />
                </div>
              </Link>
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
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] w-full bg-white border border-[#E2E8F0] shadow-2xl">
                  <img
                    src="/about_team_meeting.webp"
                    alt="KP Global Team Collaboration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                </div>
              </ThreeDTilt>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Statistics Section */}
        <div className="mt-28 pt-12 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="3d-unfold"
                  delay={idx * 0.1}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] border border-[#E2E8F0] hover:border-[#E2E8F0] hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-xl bg-[#F7F9FA] flex items-center justify-center mb-4 ${stat.color}`}>
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-[#111827] font-mono tracking-tight">
                    <AnimatedCounter target={stat.value} />
                  </span>
                  <span className="text-[10px] uppercase font-black text-[#475569] tracking-wider mt-2 leading-snug max-w-[120px]">
                    {stat.label}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

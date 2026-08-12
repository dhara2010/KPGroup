import React from "react";
import { Building2, Rocket, Users, Briefcase, GraduationCap, TrendingUp, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Eyebrow } from "@/components/ui/Typography";

const AUDIENCES = [
  {
    title: "MSMEs & Small Businesses",
    desc: "Scale operations sustainably, build long-term credibility, and streamline operations with scalable IT & network enablement.",
    icon: Building2
  },
  {
    title: "Startups & Founders",
    desc: "Build digital foundations, gain powerful media visibility, and connect with referral networks and strategic investors.",
    icon: Rocket
  },
  {
    title: "Entrepreneurs & Business Leaders",
    desc: "Referral-driven collaborations, credibility-based partnerships, personal branding, and AI Network access.",
    icon: Users
  },
  {
    title: "Professionals & Job Seekers",
    desc: "Access structured career platforms, verified placement opportunities, and top-tier employer connections.",
    icon: Briefcase
  },
  {
    title: "Students & Emerging Talent",
    desc: "Practical industry-relevant skill programs, hands-on training, and market-aligned certifications for future readiness.",
    icon: GraduationCap
  }
];

const GROWTH_PILLARS = [
  { action: "Build Digitally", desc: "Custom platforms, apps & system-driven automation" },
  { action: "Connect Strategically", desc: "Trust-based networking, referrals & investor connect" },
  { action: "Get Recognized", desc: "Entrepreneur features, interviews & media visibility" },
  { action: "Hire Smart", desc: "Structured talent pipelines & verified hiring" },
  { action: "Upskill Continuously", desc: "Market-aligned certifications & skill programs" }
];

const BENEFITS = [
  "Increase quality referrals across India",
  "Build authority within business networks",
  "Strengthen systems, workflows and teams",
  "Scale faster with clarity and confidence"
];

export default function WhoWeServe() {
  return (
    <Section id="who-we-serve" variant="default" className="relative overflow-hidden border-t border-border">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/3 right-0 w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-0 w-[45vw] h-[45vw] bg-accent/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <Eyebrow>Target Ecosystem</Eyebrow>
            </div>
          </ScrollReveal>

          <Heading level={2} className="mb-6 uppercase">
            <TextReveal text="WHO IS KP GLOBAL FOR?" delay={0.2} />
          </Heading>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <Text variant="large" className="max-w-2xl mx-auto">
              Empowering diverse business leaders, enterprises, and ambitious individuals with integrated acceleration solutions.
            </Text>
          </ScrollReveal>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="3d-unfold" delay={0.08 * idx}>
                <ThreeDTilt tiltMax={8} scale={1.02} glareOpacity={0.05} className="h-full">
                  <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-200/80 hover:border-primary/50 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-700 pointer-events-none" />
                    
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>Target Focus</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ThreeDTilt>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Growth With KP Global Block */}
        <div className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-[#06060c] border border-primary/30 relative overflow-hidden shadow-[0_0_70px_rgba(108,59,255,0.12)]">
          <div className="absolute inset-0 pointer-events-none opacity-30">
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Action Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary uppercase tracking-widest">
                <TrendingUp className="w-3.5 h-3.5" />
                Growth Framework
              </div>

              <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                Growth With KP Global
              </h3>

              <div className="space-y-4 pt-2">
                {GROWTH_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white uppercase tracking-wider block">
                        {pillar.action}.
                      </span>
                      <span className="text-xs text-white/70 font-light">
                        {pillar.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-5 bg-white/[0.04] border border-white/15 rounded-3xl p-8 backdrop-blur-md space-y-6">
              <h4 className="text-lg font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-4">
                Core Ecosystem Benefits
              </h4>

              <div className="space-y-4">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white/90">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const contact = document.getElementById("contact");
                    if (contact) contact.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                >
                  Let’s Connect & Scale
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}

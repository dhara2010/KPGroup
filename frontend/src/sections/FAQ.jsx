"use client";

import React, { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import PageHero from "@/components/PageHero";

const faqs = [
  {
    question: "What services does KP Global Business provide?",
    answer: "We offer a comprehensive suite of digital and business services including custom Web Development, Mobile App Engineering, Brand Identity, Strategic Marketing, AI Integrations, Global Placement/Jobs, and Deep Skill Academy Training."
  },
  {
    question: "Who can benefit from your services?",
    answer: "Anyone from early-stage startups and independent entrepreneurs to scaling mid-sized businesses and massive global enterprises looking to modernize their technology stack, build a strong brand presence, or acquire specialized digital talent."
  },
  {
    question: "Do you provide services internationally?",
    answer: "Yes! We are proud to support international clients globally. We have specialized procedures to handle cross-border communication, localized compliance, multi-currency projects, and global delivery standards."
  },
  {
    question: "Do you offer customized solutions for businesses?",
    answer: "Absolutely. Every partnership begins with scoping your specific requirements. We tailor all aspects of our service—including timelines, technology stacks, budgets, and scaling protocols—to your business goals."
  },
  {
    question: "How can I contact your team for inquiries?",
    answer: "The fastest way to reach us is by filling out our interactive 5-Step Contact Funnel right above this section. Alternatively, you can drop us an email, and our strategy team will reach back within 24 hours."
  },
  {
    question: "Are your services suitable for startups and small businesses?",
    answer: "Yes, we are highly startup-friendly. We offer custom, localized, and scaled pricing options starting from budget-friendly levels to help young businesses get off the ground, launch their MVP, and scale without huge upfront capital."
  },
  {
    question: "What makes KP Global Business different from others?",
    answer: "KP Global is a premium business acceleration ecosystem integrating 5 strategic divisions: KP Global IT Solutions, KP Global Media – Entrepreneur Journey, KP Global Jobs, KP Global Academy of Skills, and KP Global Business Community. This allows us to support businesses and professionals holistically across technology, trusted networking, media visibility, talent solutions, and skill development."
  }
];

export default function FAQ({ isPage = false }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const content = (
    <section className="relative py-32 bg-gradient-to-b from-bg via-primary/[0.02] to-primary/[0.05] overflow-hidden font-sans border-t border-border">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen dark:mix-blend-normal">
        {/* Glow behind Knowledge Hub */}
        <div className="absolute top-1/4 left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Glow behind FAQ accordions */}
        <div className="absolute top-1/2 right-[-5%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        
        {/* Faint bottom glow */}
        <div className="absolute bottom-[-10%] left-1/3 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-accent tracking-wider uppercase">Popular Questions</span>
            </div>
          </ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black text-text mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="Frequently Asked Questions." delay={0.2} />
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Graphic/Illustration */}
          <ScrollReveal variant="3d-zoom" delay={0.3} className="lg:col-span-5 flex flex-col items-center justify-center -translate-y-4 lg:-translate-y-10" style={{ transformStyle: "preserve-3d" }}>
            <ThreeDTilt tiltMax={18} glareOpacity={0} scale={1.05} className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative w-full h-full rounded-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-primary/5 animate-[spin_60s_linear_infinite]" style={{ transform: "translateZ(0px)" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(139,92,246,0.8)]" style={{ transform: "translateZ(15px)" }} />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-[0_0_10px_rgba(108,59,255,0.6)]" style={{ transform: "translateZ(15px)" }} />
                </div>

                {/* Middle Ring */}
                <div className="absolute inset-[15%] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite_reverse]" style={{ transform: "translateZ(0px)" }}>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(108,59,255,0.9)]" style={{ transform: "translateZ(15px)" }} />
                </div>

                {/* Inner Ring */}
                <div className="absolute inset-[30%] rounded-full border border-accent/10 animate-[spin_30s_linear_infinite]" style={{ transform: "translateZ(0px)" }}>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(139,92,246,0.7)]" style={{ transform: "translateZ(15px)" }} />
                </div>

                {/* Floating Mini Cards */}
                <div className="absolute top-[8%] right-[8%] px-2.5 py-1 bg-bg/90 backdrop-blur-md border border-border rounded-lg shadow-xl" style={{ transform: "translateZ(30px) rotate(10deg)" }}>
                  <span className="text-[8px] md:text-[9px] font-black text-primary uppercase tracking-widest">WHY</span>
                </div>
                <div className="absolute bottom-[12%] left-[2%] px-2.5 py-1 bg-bg/90 backdrop-blur-md border border-border rounded-lg shadow-xl" style={{ transform: "translateZ(35px) rotate(-15deg)" }}>
                  <span className="text-[8px] md:text-[9px] font-black text-accent uppercase tracking-widest">HOW</span>
                </div>
                <div className="absolute bottom-[18%] right-[2%] px-2.5 py-1 bg-bg/90 backdrop-blur-md border border-border rounded-lg shadow-xl" style={{ transform: "translateZ(25px) rotate(5deg)" }}>
                  <span className="text-[8px] md:text-[9px] font-black text-text uppercase tracking-widest">WHAT</span>
                </div>
                <div className="absolute top-[18%] left-[5%] px-2.5 py-1 bg-bg/90 backdrop-blur-md border border-border rounded-lg shadow-xl" style={{ transform: "translateZ(28px) rotate(-8deg)" }}>
                  <span className="text-[8px] md:text-[9px] font-black text-text-secondary uppercase tracking-widest">WHO</span>
                </div>

                {/* Ambient Background Glow for Center */}
                <div className="absolute inset-[15%] bg-primary/15 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" style={{ transform: "translateZ(10px)" }}></div>

                {/* Center Orb */}
                <div 
                  className="absolute inset-[35%] bg-gradient-to-br from-bg via-bg-soft to-primary/10 rounded-full border border-primary/30 shadow-[0_0_50px_rgba(108,59,255,0.25)] flex flex-col items-center justify-center backdrop-blur-md"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div className="flex flex-col items-center justify-center" style={{ transform: "translateZ(70px)" }}>
                    <span className="text-xl md:text-3xl font-black text-text uppercase tracking-tighter leading-none mb-1">
                      ASK
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.3em] leading-none">
                      KP
                    </span>
                  </div>
                </div>

              </div>
            </ThreeDTilt>
          </ScrollReveal>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <ScrollReveal 
                  key={idx}
                  variant="3d-unfold"
                  delay={idx * 0.05}
                >
                  <div 
                    className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-primary/5 border-primary/40 shadow-[0_0_30px_rgba(108,59,255,0.15)]' 
                        : 'bg-bg dark:bg-bg-soft border-primary/10 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(108,59,255,0.08)] hover:-translate-y-[2px] shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`font-semibold tracking-tight text-sm md:text-base transition-colors duration-300 ${
                          isOpen ? 'text-primary' : 'text-text group-hover:text-primary/80'
                        }`}>
                          {faq.question}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border shrink-0 ${
                        isOpen 
                          ? 'bg-primary border-primary text-white rotate-45 scale-110 shadow-[0_0_15px_rgba(108,59,255,0.4)]' 
                          : 'bg-bg-soft border-border text-primary/50 group-hover:border-primary/30 group-hover:text-primary'
                      }`}>
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>

                    <div 
                      className={`transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-text-secondary font-light leading-relaxed border-t border-border/50">
                        {faq.answer}
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );

  if (isPage) {
    return (
      <main className="min-h-screen bg-bg text-text pt-0 overflow-x-hidden font-sans">
        <PageHero 
          title="FAQ" 
          description="Find answers to common questions about KP Global Business solutions, skills academy, recruiting, and partnerships." 
        />
        <div className="relative">
          {content}
        </div>
      </main>
    );
  }

  return content;
}


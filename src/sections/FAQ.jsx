"use client";

import React, { useState } from 'react';
import { HelpCircle, Plus, Settings } from 'lucide-react';
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

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
    answer: "We are not just a development shop. KP Global is a unified ecosystem integrating IT Solutions, Media, Recruitment (KP Global Jobs), and Skills Training (KP Academy). This allows us to support your business holistically—not just with code, but with strategy, talent, and growth."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-medium text-purple-200 tracking-wider uppercase">Popular Questions</span>
            </div>
          </ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="Frequently Asked Questions." delay={0.2} />
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Graphic/Illustration */}
          <ScrollReveal variant="3d-zoom" delay={0.3} className="lg:col-span-5 flex flex-col items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            <ThreeDTilt tiltMax={18} glareOpacity={0} scale={1.05} className="w-72 h-72 md:w-96 md:h-96 flex items-center justify-center cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite] flex items-center justify-center" style={{ transform: "translateZ(10px)" }}>
                <div className="w-[85%] h-[85%] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite_reverse]"></div>
              </div>

              <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ transform: "translateZ(20px)" }}></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center" style={{ transform: "translateZ(45px)" }}>
                <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter leading-none select-none filter drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  ?
                </span>
                
                <div className="flex gap-1.5 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
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
                        ? 'bg-white/5 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <Settings className={`w-5 h-5 transition-all duration-500 shrink-0 ${
                          isOpen ? 'text-purple-400 rotate-90 scale-110' : 'text-gray-600 group-hover:text-gray-400'
                        }`} />
                        
                        <span className={`font-semibold tracking-tight text-sm md:text-base transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {faq.question}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isOpen 
                          ? 'bg-purple-500 border-purple-400 text-white rotate-45 scale-110' 
                          : 'bg-white/5 border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-white'
                      }`}>
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>

                    <div 
                      className={`transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 pl-14 text-sm md:text-base text-gray-400 font-light leading-relaxed border-t border-white/5">
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
}


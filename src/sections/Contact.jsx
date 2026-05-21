"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ArrowLeft, Send, CheckCircle2,
  Cpu, Layers, Zap, Globe, Sparkles, Activity,
  User, Mail, Building
} from 'lucide-react';
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ThreeDTilt from "@/components/ThreeDTilt";

const services = [
  { id: "ai", label: "Enterprise AI & Tech", icon: Cpu },
  { id: "media", label: "Global Media & Viral", icon: Layers },
  { id: "growth", label: "Quantum Leadership", icon: Zap },
  { id: "infra", label: "Web3 & Decentralization", icon: Globe },
  { id: "branding", label: "Holographic Branding", icon: Sparkles }
];

const budgets = [
  { id: "b1", label: "₹10k - ₹50k", desc: "For localized infrastructure and rapid scaling." },
  { id: "b2", label: "₹50k - ₹150k", desc: "Comprehensive ecosystem overhaul." },
  { id: "b3", label: "₹150k+", desc: "Global multi-node expansion and custom tech." }
];

const timelines = [
  { id: "t1", label: "ASAP (Under 1 month)" },
  { id: "t2", label: "1 - 3 Months" },
  { id: "t3", label: "3 - 6 Months" },
  { id: "t4", label: "Exploring Options" }
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedServices: [],
    budget: '',
    timeline: '',
    requirements: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 6));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(6); // Success state
  };

  const toggleService = (id) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(id)
        ? prev.selectedServices.filter(s => s !== id)
        : [...prev.selectedServices, id]
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.selectedServices.length > 0;
      case 3:
        return formData.budget !== '';
      case 4:
        return formData.timeline !== '';
      case 5:
        return true;
      default:
        return true;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] overflow-hidden font-sans min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-16 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-200 tracking-wider uppercase">Initialize Protocol</span>
            </div>
          </ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="BEGIN YOUR EXPANSION." delay={0.2} />
          </h2>
          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto">
              Configure your project parameters through our secure intake funnel. Our architects will prepare a custom deployment strategy.
            </p>
          </ScrollReveal>
        </div>

        {/* Funnel Container */}
        <ScrollReveal variant="3d-zoom" delay={0.5}>
          <ThreeDTilt
            tiltMax={8}
            scale={1.0}
            glareOpacity={0.06}
            className="w-full cursor-pointer rounded-[2.5rem]"
          >
            <div 
              className="relative bg-[#080808]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* Progress Bar */}
              {step < 6 && (
                <div className="mb-12" style={{ transform: "translateZ(20px)" }}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">Step 05 / 0{step}</span>
                    <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">
                      {step === 1 ? 'Lead Capture' : step === 2 ? 'Service Select' : step === 3 ? 'Budget Scope' : step === 4 ? 'Timeline' : 'Requirements'}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                      style={{ width: `${(step / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Form Steps */}
              <div className="min-h-[300px] flex flex-col justify-center" style={{ transform: "translateZ(30px)" }}>
                
                {/* Step 1: Lead Capture */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Identity Verification</h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input 
                          type="email" 
                          placeholder="Corporate Email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input 
                          type="text" 
                          placeholder="Company / Enterprise (Optional)" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Select */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Select Vector</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const isSelected = formData.selectedServices.includes(service.id);
                        return (
                          <div 
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                              isSelected 
                                ? 'bg-blue-600/10 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            <Icon className={`w-6 h-6 ${isSelected ? 'text-blue-400' : 'text-gray-500'}`} />
                            <span className="text-sm font-bold uppercase tracking-wider">{service.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget Scope */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Budget Parameters</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {budgets.map((budget) => {
                        const isSelected = formData.budget === budget.id;
                        return (
                          <div 
                            key={budget.id}
                            onClick={() => setFormData({...formData, budget: budget.id})}
                            className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 text-left ${
                              isSelected 
                                ? 'bg-blue-600/10 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            <h4 className="text-md font-bold uppercase tracking-wider mb-2">{budget.label}</h4>
                            <p className="text-xs text-gray-500">{budget.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Timeline Parameter</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timelines.map((timeline) => {
                        const isSelected = formData.timeline === timeline.id;
                        return (
                          <div 
                            key={timeline.id}
                            onClick={() => setFormData({...formData, timeline: timeline.id})}
                            className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 text-center ${
                              isSelected 
                                ? 'bg-blue-600/10 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            <span className="text-sm font-bold uppercase tracking-wider">{timeline.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 5: Requirements */}
                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Specialized Requirements</h3>
                    <textarea 
                      placeholder="Provide details about your project, parameters, and goals..." 
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      rows="6"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                )}

                {/* Step 6: Success */}
                {step === 6 && (
                  <div className="text-center space-y-6 py-12" style={{ transform: "translateZ(40px)" }}>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-white font-heading uppercase tracking-wide">Transmission Complete</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Your parameters have been logged. The core algorithms have initialized routing to our architecture team. We will establish contact within 24 hours.
                    </p>
                    <button 
                      onClick={() => { setStep(1); setFormData({ name:'', email:'', company:'', selectedServices:[], budget:'', timeline:'', requirements:'' }); }}
                      className="px-8 py-3 rounded-xl bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                      Reset Protocol
                    </button>
                  </div>
                )}

              </div>

              {/* Navigation Controls */}
              {step < 6 && (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5" style={{ transform: "translateZ(10px)" }}>
                  <button
                    onClick={handlePrev}
                    disabled={step === 1}
                    className={`flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                      step === 1 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  
                  {step < 5 ? (
                    <button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-3 transition-all ${
                        isStepValid() 
                        ? 'bg-white text-black hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                        : 'bg-white/10 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!isStepValid()}
                      className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-3 transition-all ${
                        isStepValid() 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)]' 
                        : 'bg-white/10 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Transmit <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
              
            </div>
          </ThreeDTilt>
        </ScrollReveal>
      </div>
    </section>
  );
}


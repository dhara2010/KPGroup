"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ArrowLeft, Send, CheckCircle2,
  Cpu, Layers, Zap, Globe, Sparkles, Activity,
  User, Mail, Building
} from 'lucide-react';

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
        return formData.requirements.trim() !== '';
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
        <div className={`mb-16 flex flex-col transition-all duration-[1200ms] ease-out ${isVisible ? 'text-center items-center translate-x-0 opacity-100' : 'text-left items-start -translate-x-[90vw] opacity-0'}`}>
          <div 
            className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.1s" }}
          >
            <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-200 tracking-wider uppercase font-sans">Initialize Protocol</span>
          </div>
          <h2 
            className={`text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter font-heading opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: "0.3s" }}
          >
            BEGIN YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">EXPANSION.</span>
          </h2>
          <p 
            className={`text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-xl opacity-0 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up mx-auto' : 'ml-0'}`}
            style={{ animationDelay: "0.5s" }}
          >
            Configure your project parameters through our secure intake funnel. Our architects will prepare a custom deployment strategy.
          </p>
        </div>

        {/* Funnel Container */}
        <div className={`relative bg-[#080808]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all duration-1000 delay-300 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Progress Bar */}
          {step < 6 && (
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">Step 0{step} of 05</span>
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
          <div className="min-h-[300px] flex flex-col justify-center">
            
            {/* Step 1: Lead Capture */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in-up">
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
                      placeholder="Organization Name" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Module Selection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left ${
                        formData.selectedServices.includes(service.id)
                          ? 'bg-blue-500/10 border-blue-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${formData.selectedServices.includes(service.id) ? 'bg-blue-500 text-white' : 'bg-white/10'}`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold tracking-wide">{service.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget Scope */}
            {step === 3 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Capital Allocation</h3>
                <div className="space-y-4">
                  {budgets.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setFormData({...formData, budget: b.id})}
                      className={`w-full flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left ${
                        formData.budget === b.id
                          ? 'bg-purple-500/10 border-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span className="text-xl font-black tracking-tight mb-2 md:mb-0">{b.label}</span>
                      <span className="text-xs md:text-sm font-light text-gray-500">{b.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Timeline */}
            {step === 4 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Deployment Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {timelines.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setFormData({...formData, timeline: t.id})}
                      className={`flex items-center p-6 rounded-2xl border transition-all duration-300 text-center justify-center ${
                        formData.timeline === t.id
                          ? 'bg-cyan-500/10 border-cyan-500 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span className="text-sm font-black tracking-widest uppercase">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Requirements */}
            {step === 5 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tight mb-8">Project Requirements</h3>
                <div className="space-y-4">
                  <textarea 
                    placeholder="Describe your specific requirements, current challenges, or end goals..." 
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 6: Success State */}
            {step === 6 && (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white font-heading uppercase tracking-tight mb-4">Protocol Initialized</h3>
                <p className="text-gray-400 font-light leading-relaxed max-w-md mx-auto">
                  Your deployment request has been securely transmitted. A KP Global architect will contact <span className="text-white font-bold">{formData.email || 'you'}</span> within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setFormData({ name: '', email: '', company: '', selectedServices: [], budget: '', timeline: '', requirements: '' });
                  }}
                  className="mt-12 text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase hover:text-white transition-colors"
                >
                  Start New Request
                </button>
              </div>
            )}

          </div>

          {/* Navigation Controls */}
          {step < 6 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
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
      </div>
    </section>
  );
}

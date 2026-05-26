"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, Check, ChevronDown, 
  Sparkles, Send, Globe, Shield, MessageSquare, Building, User
} from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "KP Global IT Solution",
    company: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsSubmitting(true);
    // Simulate API transmission
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const servicesList = [
    "KP Global IT Solution",
    "KP Global Academy of Skills",
    "KP Global Media Network",
    "KP Global Business Community",
    "KP Global Jobs",
  ];

  return (
    <div className="relative bg-[#020202] text-white min-h-screen overflow-hidden font-sans pt-0 pb-20">
      
      {/* CSS Animation Injector */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% { left: -150%; }
          100% { left: 150%; }
        }
        .animate-scanline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 8rem;
          background: linear-gradient(to right, transparent, rgba(34, 211, 238, 0.15), transparent);
          transform: skewX(-12deg);
          animation: scanline 3s infinite linear;
          pointer-events: none;
          z-index: 0;
        }
      `}} />

      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <PageHero 
          title="Contact Us" 
          description="Have questions or want to collaborate? Get in touch with our team of specialists." 
        />

        {/* Section 2: Contact Info Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Email */}
            <div className="h-full bg-[#080808]/60 border border-white/5 rounded-3xl p-8 backdrop-blur-md flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden group hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-bold text-gray-400 tracking-[0.2em] mb-3">Email Address</h3>
              <p className="text-sm text-cyan-200/90 font-light hover:text-cyan-300 transition-colors select-all">info.kpglobalbusiness@gmail.com</p>
              <p className="text-sm text-cyan-200/90 font-light hover:text-cyan-300 transition-colors mt-1 select-all">info@kpglobalbusiness.com</p>
            </div>

            {/* Card 2: Phone */}
            <div className="h-full bg-[#080808]/60 border border-white/5 rounded-3xl p-8 backdrop-blur-md flex flex-col items-center text-center hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden group hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-bold text-gray-400 tracking-[0.2em] mb-3">Phone Number</h3>
              <p className="text-sm text-indigo-200/90 font-light hover:text-indigo-300 transition-colors select-all">+91 97128 97111</p>
              <span className="text-[10px] text-gray-600 font-mono tracking-widest mt-3">MON - SAT | 10AM - 7PM</span>
            </div>

            {/* Card 3: Location */}
            <div className="h-full bg-[#080808]/60 border border-white/5 rounded-3xl p-8 backdrop-blur-md flex flex-col items-center text-center hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-bold text-gray-400 tracking-[0.2em] mb-3">Location</h3>
              <p className="text-sm text-purple-200/90 font-light leading-relaxed select-all">
                Kiran Pearl, Kosad,<br />Surat, Gujarat.
              </p>
            </div>

          </div>
        </div>

        {/* Section 3: Split Form & Corporate Portrait */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="bg-[#060606]/65 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">Let's Start Creating Together</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                    Contact us
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">First Name <span className="text-cyan-400">*</span></label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input 
                          type="text" 
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="John"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input 
                          type="text" 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Doe"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Email Address <span className="text-cyan-400">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Phone Number <span className="text-cyan-400">*</span></label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Service Interested In</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-[#080808] border border-white/10 rounded-2xl py-3.5 pl-11 pr-10 text-sm text-white focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {servicesList.map((service, index) => (
                          <option key={index} value={service} className="bg-[#020202] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company Ltd"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-600" />
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project scope or objectives..."
                        rows="4"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-11 pr-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/85 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 resize-none font-sans"
                      />
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 mt-4">
                    <div className="relative flex items-center pt-0.5">
                      <input 
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                        className="peer h-4 w-4 shrink-0 rounded border border-white/20 bg-white/[0.03] text-cyan-500 checked:bg-cyan-500 checked:border-cyan-500 focus:outline-none transition-colors cursor-pointer appearance-none"
                      />
                      <Check className="absolute left-0.5 top-1 w-3 h-3 text-black pointer-events-none scale-0 peer-checked:scale-100 transition-transform duration-200" />
                    </div>
                    <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed select-none cursor-pointer hover:text-gray-400 transition-colors">
                      I consent to KP Global Business collecting my information to respond to my request
                    </label>
                  </div>

                  {/* Simple Glowing Cyber Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted || !formData.consent}
                    className="group relative w-full py-[18px] rounded-full font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 active:scale-[0.985] hover:scale-[1.015]"
                  >
                    {/* Glowing outer boundary */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] rounded-full pointer-events-none z-0">
                      {/* Inner background cut-out for double glow border aesthetic */}
                      <div className="w-full h-full bg-[#030303] rounded-full transition-colors duration-500 group-hover:bg-transparent group-disabled:bg-[#030303]" />
                    </div>

                    {/* Gradient solid backdrop overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-500 z-0" />

                    {/* Background Neon Aura Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-lg opacity-10 group-hover:opacity-50 group-disabled:opacity-0 transition-all duration-500 z-0 pointer-events-none" />

                    {/* Laser Scanline Sweep Effect */}
                    <div className="animate-scanline" />

                    {/* Button content */}
                    {isSubmitting ? (
                      <span className="relative z-10 flex items-center justify-center gap-3 tracking-[0.3em] font-mono text-cyan-300">
                        <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING PROTOCOL
                      </span>
                    ) : isSubmitted ? (
                      <span className="relative z-10 flex items-center justify-center gap-2 text-emerald-400 font-mono tracking-[0.3em]">
                        <Check className="w-4 h-4 animate-bounce" />
                        TRANSMISSION COMPLETE
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                        Transmit Parameters
                        <div className="relative w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 group-hover:border-cyan-400/50 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <Send className="w-3 h-3 text-white" />
                        </div>
                      </span>
                    )}
                  </button>

                </form>

                {/* Success Notification overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-[0.15em] mb-4">Transmission Completed</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-8">
                      Your parameters have been logged and routed to our enterprise architects. We will initiate direct secure comms within 24 hours.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          service: "KP Global IT Solution",
                          company: "",
                          message: "",
                          consent: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                    >
                      Reset Intake Funnel
                    </button>
                  </div>
                )}

              </div>
            </div>
            
            {/* Right Column: Corporate Portrait */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] lg:min-h-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2.5rem] blur-xl opacity-75 pointer-events-none" />
              
              <div className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808]/60 p-3 flex flex-col justify-between group shadow-2xl">
                
                {/* Corner Cyber Accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none z-10" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-400/60 pointer-events-none z-10" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-400/60 pointer-events-none z-10" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-purple-400/60 pointer-events-none z-10" />
                
                {/* Image Box */}
                <div className="relative flex-1 w-full h-full min-h-[420px] lg:min-h-0 rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/contact_executive.png"
                    alt="KP Global Executive Liaison"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Tech Radar Overlay */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-mono text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    LIAISON CONNECTED // SECURE_LINE
                  </div>
                </div>

                {/* Bottom text inside the panel */}
                <div className="mt-4 px-4 py-2 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Liaison Officer</h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">Corporate Communications</p>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400/70 text-[9px] font-mono">
                    <Shield className="w-3.5 h-3.5" /> SECURE CORRIDOR
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

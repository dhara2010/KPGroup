

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, Phone, MapPin, Check, ChevronDown, 
  Sparkles, Send, Globe, Shield, MessageSquare, Building, User
} from "lucide-react";
import PageHero from "@/components/common/PageHero";

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

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:5000/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.message || "Submission error");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesList = [
    "KP Global IT Solution",
    "KP Global Academy of Skills",
    "KP Global Media Network",
    "KP Global Business Community",
    "KP Global Jobs",
  ];

  return (
    <div className="relative bg-transparent text-slate-900 min-h-screen overflow-hidden font-sans pt-0 pb-20">
      

      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <PageHero 
          title="Contact Us" 
          description="Have questions or want to collaborate? Get in touch with our team of specialists." 
        />

        {/* Section 2: Contact Info Grid */}
        <div className="mt-10 max-w-7xl mx-auto px-6 mb-16 md:mb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Email */}
            <div className="h-full bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-md shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-[0.2em] mb-2">Email Address</h3>
              <p className="text-sm font-extrabold text-slate-900 hover:text-primary transition-colors select-all">info.kpglobalbusiness@gmail.com</p>
              <p className="text-sm font-bold text-slate-600 hover:text-primary transition-colors mt-1 select-all">info@kpglobalbusiness.com</p>
            </div>

            {/* Card 2: Phone */}
            <div className="h-full bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-md shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-[0.2em] mb-2">Phone Number</h3>
              <p className="text-base font-black text-slate-900 hover:text-primary transition-colors select-all">+91 97128 97111</p>
              <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest mt-2">MON - SAT | 10AM - 7PM</span>
            </div>

            {/* Card 3: Location */}
            <div className="h-full bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-md shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-[0.2em] mb-2">Location</h3>
              <p className="text-sm font-extrabold text-slate-900 leading-relaxed select-all">
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
              <div className="bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                
                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Let's Start Creating Together
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
                    Contact Us
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">First Name <span className="text-primary">*</span></label>
                      <div className="relative group/field">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                        <input 
                          type="text" 
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="John"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Last Name</label>
                      <div className="relative group/field">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                        <input 
                          type="text" 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Email Address <span className="text-primary">*</span></label>
                      <div className="relative group/field">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Phone Number <span className="text-primary">*</span></label>
                      <div className="relative group/field">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Service Interested In</label>
                    <div className="relative group/field">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary pointer-events-none transition-colors" />
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-10 text-sm text-slate-900 font-semibold focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {servicesList.map((service, index) => (
                          <option key={index} value={service} className="bg-white text-slate-900">
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Company Name</label>
                    <div className="relative group/field">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company Ltd"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">Message</label>
                    <div className="relative group/field">
                      <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-400 group-focus-within/field:text-primary transition-colors" />
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project scope or objectives..."
                        rows="4"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-11 pr-4 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300 resize-none font-sans"
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
                        className="peer h-4 w-4 shrink-0 rounded border border-slate-300 bg-slate-50 text-primary checked:bg-primary checked:border-primary focus:outline-none transition-colors cursor-pointer appearance-none"
                      />
                      <Check className="absolute left-0.5 top-1 w-3 h-3 text-white pointer-events-none scale-0 peer-checked:scale-100 transition-transform duration-200" />
                    </div>
                    <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed select-none cursor-pointer hover:text-slate-900 transition-colors font-semibold">
                      I consent to KP Global Business collecting my information to respond to my request
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted || !formData.consent}
                    className="group w-full py-4 rounded-full font-black text-white bg-slate-950 hover:bg-brand-violet shadow-md hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 active:translate-y-0 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3 font-mono">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center gap-2 font-mono">
                        <Check className="w-4 h-4 animate-bounce" />
                        TRANSMISSION COMPLETE
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Submit Message
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <Send className="w-3 h-3 text-white" />
                        </div>
                      </span>
                    )}
                  </button>

                </form>

                {/* Success Notification overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 shadow-lg shadow-purple-500/10">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-[0.15em] mb-4">Transmission Completed</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-sm mb-8">
                      Your parameters have been logged and routed to our enterprise architects. We will initiate direct comms within 24 hours.
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
                      className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Reset Form
                    </button>
                  </div>
                )}

              </div>
            </div>
            
            {/* Right Column: Corporate Portrait */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] lg:min-h-0">
              <div className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden border border-slate-200/60 bg-white/90 backdrop-blur-md p-3 flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                
                {/* Image Box */}
                <div className="relative flex-1 w-full h-full min-h-[420px] lg:min-h-0 rounded-[1.8rem] overflow-hidden">
                  <img
                    src="/contact_executive.webp"
                    alt="KP Global Executive Liaison"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Tech Overlay */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    LIAISON CONNECTED // SECURE_LINE
                  </div>
                </div>

                {/* Bottom text inside the panel */}
                <div className="mt-4 px-4 py-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Liaison Officer</h4>
                    <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest mt-0.5">Corporate Communications</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary text-[10px] font-mono font-bold">
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


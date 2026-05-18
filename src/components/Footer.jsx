"use client";

import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans z-20">
      
      {/* Tech Grid Background & Neon Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Upper Dashboard Contact Panel - Extremely Unique Styling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/5 rounded-[2rem] bg-white/[0.01] backdrop-blur-xl p-8 md:p-12 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Left Block: Address & Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-gray-400 text-sm font-light leading-relaxed block mt-1">
                  Kiran Pearl, Kosad,<br />Surat, Gujarat
                </span>
              </div>
            </div>
            
            <div className="space-y-2.5 pt-2 border-t border-white/5">
              <a href="mailto:Info.kpglobalbusiness@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors font-light">
                <Mail className="w-4 h-4 text-gray-600 group-hover:text-blue-400" />
                Info.kpglobalbusiness@gmail.com
              </a>
              <a href="tel:+919712897111" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors font-light">
                <Phone className="w-4 h-4 text-gray-600 group-hover:text-blue-400" />
                +91 97128 97111
              </a>
            </div>
          </div>

          {/* Center Block: Massive Corporate Branding with holographic visual cue */}
          <div className="md:col-span-5 flex justify-start md:justify-center relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative flex items-center gap-4 border-l-0 md:border-l md:border-white/5 md:pl-12">
              <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-black text-white text-2xl tracking-tighter shadow-lg shadow-blue-500/20">
                KP
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase font-heading leading-none">
                  KP GLOBAL
                </span>
                <span className="text-sm font-bold text-blue-400 tracking-widest uppercase mt-1">
                  BUSINESS
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Social Links in a clean floating deck */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <div className="flex flex-row md:flex-col gap-6 md:gap-4 text-sm font-sans">
              {[
                { name: "Facebook", url: "#" },
                { name: "Twitter", url: "#" },
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-1 group font-medium relative py-1"
                >
                  <span className="relative z-10">{social.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 hidden md:inline" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Main Sitemap Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* About Column with custom Gradient Pill Button */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative pl-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              About
            </h4>
            <p className="text-gray-400 font-light leading-relaxed text-sm mb-8 max-w-sm">
              Empowering businesses through technology, education, media, networking, and career solutions worldwide.
            </p>
            
            {/* Explore Services Button */}
            <a 
              href="#services" 
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-105 group"
            >
              Explore Services
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* Partnership Column */}
          <div className="md:col-span-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative pl-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Partnership
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Global Alliance Partners",
                "Strategic Business Partners",
                "International Associates",
                "Corporate Collaboration",
                "Worldwide Network Partners"
              ].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-1 group font-light">
                    {link} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies Column */}
          <div className="md:col-span-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative pl-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              Our Companies
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "KP Global IT Solution",
                "KP Global Skill Academy",
                "KP Global Media Network",
                "KP Global Business Community",
                "KP Global Jobs"
              ].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-1 group font-light">
                    {link} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-500 font-light tracking-wide text-center md:text-left">
            © 2026 KP Global Business | All Rights Reserved. | Design & Developed By KP Global IT Solution
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
            
            {/* Scroll back to top */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform duration-300"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06060c] text-white pt-20 pb-10 overflow-hidden border-t border-white/10 font-sans z-20">
      
      {/* Tech Grid Background & Ambient Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-0 right-1/4 w-[45vw] h-[45vw] bg-primary/15 rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/4 w-[45vw] h-[45vw] bg-accent/15 rounded-full blur-[140px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Upper Corporate Contact Glass Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-primary/20 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-2xl p-8 md:p-12 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Subtle top border glow beam */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          {/* Left Block: Address & Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(108,59,255,0.2)]">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-primary tracking-wider block mb-1">Headquarters</span>
                <span className="text-white/80 text-sm font-normal leading-relaxed block">
                  Kiran Pearl, Kosad,<br />Surat, Gujarat, India
                </span>
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a href="mailto:Info.kpglobalbusiness@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Info.kpglobalbusiness@gmail.com
              </a>
              <a href="tel:+919712897111" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +91 97128 97111
              </a>
            </div>
          </div>

          {/* Center Block: Corporate Branding */}
          <div className="md:col-span-5 flex justify-start md:justify-center relative">
            <div className="relative flex items-center gap-5 border-l-0 md:border-l md:border-white/10 md:pl-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-black text-white text-2xl tracking-tighter shadow-[0_0_30px_rgba(108,59,255,0.4)] shrink-0">
                KP
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase font-heading leading-none">
                  KP GLOBAL
                </span>
                <span className="text-xs font-extrabold text-primary tracking-[0.25em] uppercase mt-1.5 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" /> BUSINESS ECOSYSTEM
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Social Deck */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <div className="flex flex-wrap md:flex-col gap-3 text-sm">
              {[
                { name: "Facebook", url: "#" },
                { name: "Twitter", url: "#" },
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-white/80 hover:text-white transition-all duration-300 flex items-center justify-between gap-3 group text-xs font-semibold tracking-wide"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Main Sitemap Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* About Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                About KP Global
              </h4>
            </div>
            <p className="text-white/70 font-normal leading-relaxed text-sm mb-8 max-w-sm">
              Empowering global enterprises and entrepreneurs through cutting-edge technology, education, media, strategic networking, and career acceleration.
            </p>
            
            {/* Explore Services Button */}
            <a 
              href="#services" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-extrabold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(108,59,255,0.3)] group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(108,59,255,0.5)]"
            >
              Explore Services
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Partners", href: "/partners" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group font-normal text-xs md:text-sm">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {link.name} 
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "Testimonials", href: "/testimonials" },
                { name: "Careers", href: "/careers" },
                { name: "Team", href: "/team" },
                { name: "FAQ", href: "/faq" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group font-normal text-xs md:text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors"></span>
                    {link.name} 
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies Column */}
          <div className="md:col-span-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Ecosystem Entities
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "KP Global IT Solutions", href: "https://kpgbit.kpglobalbusiness.com/" },
                { name: "KP Global Media – Entrepreneur Journey", href: "https://entrepreneurjouryny.com/" },
                { name: "KP Global Jobs", href: "https://jobs.kpglobalbusiness.com/" },
                { name: "KP Global Academy of Skills", href: "https://academy.kpglobalbusiness.com/" },
                { name: "KP Global Business Community", href: "https://kpgbc.kpglobalbusiness.com/" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group font-normal text-xs md:text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {link.name} 
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-white/60 font-normal tracking-wide text-center md:text-left">
            © 2026 KP Global Business. All Rights Reserved. | Designed & Developed by KP Global IT Solution
          </div>
          
          <div className="flex items-center gap-6 text-xs text-white/60 font-normal">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
            
            {/* Scroll back to top */}
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300 group shrink-0 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform duration-300"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


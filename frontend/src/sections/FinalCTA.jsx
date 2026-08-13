import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function FinalCTA() {
  return (
    <Section id="final-cta" variant="default" className="relative overflow-hidden py-32 bg-slate-950 text-white">
      
      {/* Abstract Corporate Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-white/80 uppercase tracking-[0.2em]">
              Start Your Transformation
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight mb-8 text-white">
            READY TO SCALE <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">YOUR BUSINESS?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-12">
            Join the global network of enterprises leveraging KP Global Group's integrated technology, talent, and media ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,59,255,0.4)] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <div className="flex items-center gap-6 justify-center">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">Call Us</span>
            </a>
            
            <a href="mailto:contact@kpglobalbusiness.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">Email Us</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </Section>
  );
}

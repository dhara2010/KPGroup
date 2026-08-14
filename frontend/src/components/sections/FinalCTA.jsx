import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function FinalCTA() {
  return (
    <Section id="final-cta" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900 border-t border-slate-200/50">
      
      {/* Removed Abstract Corporate Background Elements to reveal global cube background */}

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">
              Start Your Transformation
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight mb-8 text-slate-900">
            READY TO SCALE <br className="hidden md:block" />
            <span className="text-brand-gradient">YOUR BUSINESS?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-12">
            Join the global network of enterprises leveraging KP Global Group's integrated technology, talent, and media ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-950 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-brand-violet hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <div className="flex items-center gap-6 justify-center">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">Call Us</span>
            </a>
            
            <a href="mailto:contact@kpglobalbusiness.com" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
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

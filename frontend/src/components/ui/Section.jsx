import React from "react";
import { ScrollReveal } from "@/components/Animations";

export function Section({ 
  children, 
  variant = "default", 
  className = "", 
  id,
  ...props 
}) {
  const variants = {
    default: "bg-bg",
    soft: "bg-bg-soft",
    muted: "bg-bg-muted",
    dark: "bg-bg-dark text-white",
    accent: "bg-accent-soft"
  };

  const classes = `relative py-24 md:py-32 overflow-hidden ${variants[variant] || variants.default} ${className}`;

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
}

export function SectionContainer({ children, className = "", ...props }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 relative z-10 w-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  eyebrow, 
  align = "center",
  className = "" 
}) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col mb-16 ${alignments[align]} ${className}`}>
      {eyebrow && (
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-border mb-6">
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>
        </ScrollReveal>
      )}
      
      {title && (
        <ScrollReveal variant="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight uppercase leading-[1.1] font-heading">
            {title}
          </h2>
        </ScrollReveal>
      )}
      
      {subtitle && (
        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className="text-text-secondary mt-6 max-w-2xl text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}

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
    default: "bg-transparent",
    soft: "bg-transparent",
    muted: "bg-transparent",
    dark: "bg-transparent text-white",
    accent: "bg-transparent"
  };

  const classes = `relative py-24 md:py-32 overflow-hidden ${variants[variant] || variants.default} ${className}`;

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
}


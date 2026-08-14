import React from "react";
import { Link } from "react-router-dom";

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  as = "button",
  href,
  to,
  ...props 
}) {
  const baseStyles = "group inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-slate-950 text-white hover:text-white hover:bg-brand-violet shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-bg-soft text-text hover:text-primary hover:bg-border border border-border",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-text-secondary hover:text-primary hover:bg-accent-soft",
    dark: "bg-bg-dark text-white hover:text-white hover:bg-primary",
    light: "bg-bg text-text hover:text-text hover:bg-bg-soft shadow-sm hover:shadow",
    accent: "bg-accent text-white hover:text-white hover:bg-primary shadow-md hover:shadow-lg"
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (as === "a" || href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }
  
  if (as === "Link" || to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

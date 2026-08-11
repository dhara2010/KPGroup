import React from "react";

export function Card({ 
  children, 
  className = "", 
  variant = "default",
  hover = true,
  ...props 
}) {
  const baseStyles = "rounded-[2rem] overflow-hidden transition-all duration-300";
  
  const variants = {
    default: "bg-bg border border-border shadow-sm",
    soft: "bg-bg-soft border border-border",
    dark: "bg-bg-dark border border-border-dark text-white",
    ghost: "bg-transparent border border-border"
  };
  
  const hoverStyles = hover 
    ? "hover:-translate-y-1 hover:shadow-lg hover:border-primary/30" 
    : "";

  const classes = `${baseStyles} ${variants[variant] || variants.default} ${hoverStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

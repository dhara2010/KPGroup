import React from "react";

export function Heading({ 
  children, 
  level = 2, 
  className = "", 
  color = "text",
  ...props 
}) {
  const Tag = `h${level}`;
  
  const sizes = {
    1: "text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] uppercase",
    2: "text-4xl md:text-5xl font-black tracking-tight uppercase",
    3: "text-2xl md:text-3xl font-bold tracking-tight",
    4: "text-xl font-bold tracking-tight",
    5: "text-lg font-semibold",
    6: "text-base font-semibold"
  };

  const colors = {
    text: "text-text",
    primary: "text-primary",
    white: "text-white",
    muted: "text-text-muted"
  };

  const classes = `font-heading ${sizes[level]} ${colors[color] || colors.text} ${className}`;

  return <Tag className={classes} {...props}>{children}</Tag>;
}

export function Text({ 
  children, 
  variant = "body", 
  color = "secondary",
  className = "", 
  ...props 
}) {
  const variants = {
    body: "text-base leading-relaxed",
    large: "text-lg leading-relaxed",
    small: "text-sm leading-relaxed",
    caption: "text-xs uppercase tracking-wider font-semibold"
  };

  const colors = {
    primary: "text-text",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    white: "text-white",
    whiteMuted: "text-white/70",
    accent: "text-primary"
  };

  const classes = `${variants[variant] || variants.body} ${colors[color] || colors.secondary} ${className}`;

  return <p className={classes} {...props}>{children}</p>;
}

export function Eyebrow({ children, className = "", ...props }) {
  return (
    <span className={`text-xs font-black uppercase text-primary tracking-widest ${className}`} {...props}>
      {children}
    </span>
  );
}

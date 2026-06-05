"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PageHero({ title, description, parentPage = "Home", parentHref = "/" }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[440px] pt-20 flex items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background Image with theme-aware overlays */}
      <div className="absolute inset-0 z-0">
        {/* Colour-tint overlay — softened for light mode */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-500 ${
            theme === "light"
              ? "bg-gradient-to-b from-white/55 via-white/35 to-white/80"
              : "bg-gradient-to-b from-black/85 via-black/55 to-[#020202]"
          }`}
        />
        {/* Hue overlay */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-500 ${
            theme === "light"
              ? "bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-cyan-200/20"
              : "bg-gradient-to-r from-blue-900/60 via-purple-900/70 to-cyan-900/60"
          }`}
        />
        {/* The actual banner image — always visible */}
        <Image
          src="/common_hero_banner.webp"
          alt="KP Page Banner"
          fill
          priority
          className={`object-cover object-center scale-105 transition-all duration-500 ${
            theme === "light"
              ? "opacity-60 blur-[1px] brightness-110 saturate-75"
              : "opacity-40 blur-[2px]"
          }`}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className={`flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 transition-colors duration-300 ${
          theme === "light" ? "text-gray-600" : "text-gray-500"
        }`}>
          <Link
            href={parentHref}
            className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-blue-400"}`}
          >
            {parentPage}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className={theme === "light" ? "text-gray-800" : "text-gray-300"}>{title}</span>
        </div>

        <h1
          className={`text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent uppercase transition-all duration-300 ${
            theme === "light"
              ? "bg-gradient-to-b from-gray-900 to-gray-600"
              : "bg-gradient-to-b from-white to-gray-400"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className={`text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300 ${
            theme === "light" ? "text-gray-700" : "text-gray-400"
          }`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

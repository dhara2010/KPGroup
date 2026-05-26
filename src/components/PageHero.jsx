import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PageHero({ title, description, parentPage = "Home", parentHref = "/" }) {
  return (
    <section className="relative h-[440px] pt-20 flex items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background Image Overlay with Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#020202] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-purple-900/70 to-cyan-900/60 z-10" />
        <img
          src="/common_hero_banner.png"
          alt="KP Page Banner"
          className="w-full h-full object-cover object-center opacity-40 filter blur-[2px] scale-105"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
          <Link href={parentHref} className="hover:text-blue-400 transition-colors">{parentPage}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-300">{title}</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 uppercase">
          {title}
        </h1>
        {description && (
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

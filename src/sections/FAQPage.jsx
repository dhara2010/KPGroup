"use client";

import React from "react";
import FAQ from "@/sections/FAQ";
import PageHero from "@/components/PageHero";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white pt-0 overflow-x-hidden font-sans">
      <PageHero 
        title="FAQ" 
        description="Find answers to common questions about KP Global Business solutions, skills academy, recruiting, and partnerships." 
      />

      <div className="relative">
        <FAQ />
      </div>
    </main>
  );
}


import React from "react";

import { Compass, Target, Cpu, Zap, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

export default function VisionMissionPage() {
    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-[#E2E8F0]">
            {/* Immersive radial glows */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 left-0 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[160px]" />
            </div>

            {/* Cyber Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="mb-28 flex flex-col text-center items-center">
                    <ScrollReveal variant="3d-unfold">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#F7F9FA] border border-[#E2E8F0] mb-6">
                            <Sparkles className="w-4 h-4 text-[#064B63] animate-pulse" />
                            <span className="text-xs font-semibold text-[#064B63] tracking-wider uppercase">
                                Purpose & Strategy
                            </span>
                        </div>
                    </ScrollReveal>

                    <h2 className="text-4xl md:text-7xl font-black text-[#111827] mb-6 uppercase tracking-tighter font-heading">
                        <TextReveal text="VISION & MISSION." delay={0.2} />
                    </h2>

                    <ScrollReveal variant="3d-unfold" delay={0.4}>
                        <p className="text-[#475569] max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
                            Connecting dynamic technology, branding excellence, and entrepreneurial networks to shape the next era of digital ecosystem development.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Content Rows */}
                <div className="space-y-36">

                    {/* VISION ROW - Image Left, Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Left Image Column */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <ScrollReveal variant="fade-right">
                                <ThreeDTilt tiltMax={8} scale={1.02} glareOpacity={0.05} className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-700" />
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-white border border-[#E2E8F0] shadow-2xl">
                                        <img
                                            src="/vision_aesthetic.webp"
                                            alt="KP Global Vision Illustration"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                                    </div>
                                </ThreeDTilt>
                            </ScrollReveal>
                        </div>

                        {/* Right Text Column */}
                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                            <ScrollReveal variant="fade-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center">
                                        <Compass className="w-5 h-5 text-[#064B63]" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-[#064B63] tracking-widest">
                                        The Horizon
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left" delay={0.2}>
                                <h3 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
                                    OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-200">VISION</span>
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left" delay={0.3}>
                                <p className="text-[#475569] font-light text-base md:text-lg leading-relaxed">
                                    Our vision is to build the world's most trusted global business ecosystem, bridging technical excellence with massive creative networks. We aim to empower startups, legacy corporations, and emerging professionals to scale their operations securely through cutting-edge technology, automation, and reliable digital solutions.
                                </p>
                            </ScrollReveal>

                            {/* Bullet Highlights */}
                            <ScrollReveal variant="fade-left" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-[#E2E8F0]">
                                    <Cpu className="w-5 h-5 text-[#064B63] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wide">Next-gen Tech</h4>
                                        <p className="text-xs text-[#475569] mt-1 font-light">Immersive digital systems and enterprise tools.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-[#E2E8F0]">
                                    <ShieldCheck className="w-5 h-5 text-[#064B63] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wide">Trusted Operations</h4>
                                        <p className="text-xs text-[#475569] mt-1 font-light">High reliability, security, and verified structures.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* MISSION ROW - Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Left Text Column */}
                        <div className="lg:col-span-7 space-y-8">
                            <ScrollReveal variant="fade-right">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-[#064B63]" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-[#064B63] tracking-widest">
                                        The Drive
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-right" delay={0.2}>
                                <h3 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
                                    OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-200">MISSION</span>
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-right" delay={0.3}>
                                <p className="text-[#475569] font-light text-base md:text-lg leading-relaxed">
                                    Our mission is to deliver high-quality, result-driven services that accelerate growth, trigger digital transformations, and secure competitive advantages for our clients. We remain dedicated to constant technical innovation, operational transparency, and client satisfaction above all else.
                                </p>
                            </ScrollReveal>

                            {/* Bullet Highlights */}
                            <ScrollReveal variant="fade-right" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-[#E2E8F0]">
                                    <Zap className="w-5 h-5 text-[#064B63] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wide">Accelerated Growth</h4>
                                        <p className="text-xs text-[#475569] mt-1 font-light">Rapid scaling with efficient, modern methodologies.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-[#E2E8F0]">
                                    <CheckCircle2 className="w-5 h-5 text-[#0E7490] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wide">Client Success</h4>
                                        <p className="text-xs text-[#475569] mt-1 font-light">Tailored support, dedicated consultants, and real metrics.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Image Column */}
                        <div className="lg:col-span-5">
                            <ScrollReveal variant="fade-left">
                                <ThreeDTilt tiltMax={8} scale={1.02} glareOpacity={0.05} className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-700" />
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-white border border-[#E2E8F0] shadow-2xl">
                                        <img
                                            src="/mission_aesthetic.webp"
                                            alt="KP Global Mission Illustration"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                                    </div>
                                </ThreeDTilt>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Dynamic CTA at the bottom */}
                <ScrollReveal variant="3d-unfold" className="mt-40 text-center">
                    <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-[#E2E8F0] backdrop-blur-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                        <h3 className="text-2xl md:text-4xl font-extrabold text-[#111827] mb-6 uppercase tracking-tight leading-tight">
                            Let's build the future, together.
                        </h3>
                        <p className="text-[#475569] text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
                            Accelerate your digital transformation and grow your brand with KP Global's strategic technology ecosystem.
                        </p>
                        <button
                            onClick={() => {
                                const contact = document.getElementById("contact");
                                if (contact) {
                                    contact.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = "/contact";
                                }
                            }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F172A] hover:bg-[#064B63] rounded-full text-xs font-bold uppercase tracking-wider text-[#111827] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
                        >
                            Contact Strategic Leads
                            <div className="w-5 h-5 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                                <ArrowRight className="w-3 h-3 text-[#111827]" />
                            </div>
                        </button>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
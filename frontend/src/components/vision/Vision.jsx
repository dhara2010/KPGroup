
import React from "react";

import { Compass, Target, Cpu, Zap, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

export default function VisionMissionPage() {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden font-sans border-t border-border">
            {/* Removed Immersive radial glows and Cyber Grid Lines to reveal global cube background */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="mb-28 flex flex-col text-center items-center">
                    <ScrollReveal variant="3d-unfold">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                                Purpose & Strategy
                            </span>
                        </div>
                    </ScrollReveal>

                    <h2 className="text-4xl md:text-7xl font-black text-text mb-6 uppercase tracking-tighter font-heading">
                        <TextReveal text="VISION & MISSION." delay={0.2} />
                    </h2>

                    <ScrollReveal variant="3d-unfold" delay={0.4}>
                        <p className="text-text-secondary max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
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
                                    <div className="absolute -inset-1 bg-gradient-to-r from-kp-tint to-kp-green rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-700" />
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-bg border border-border shadow-2xl">
                                        <img
                                            src="/vision_aesthetic.webp"
                                            alt="KP Global Vision Illustration"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </ThreeDTilt>
                            </ScrollReveal>
                        </div>

                        {/* Right Text Column */}
                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                            <ScrollReveal variant="fade-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center">
                                        <Compass className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">
                                        The Horizon
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left" delay={0.2}>
                                <h3 className="text-3xl md:text-5xl font-black text-text uppercase tracking-tight">
                                    OUR <span className="text-primary">VISION</span>
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left" delay={0.3}>
                                <p className="text-text-secondary font-light text-base md:text-lg leading-relaxed">
                                    "To become India's most trusted business and career growth ecosystem."
                                </p>
                            </ScrollReveal>

                            {/* Bullet Highlights */}
                            <ScrollReveal variant="fade-left" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg shadow-sm hover:border-primary transition-colors duration-300 border border-border">
                                    <Cpu className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-text uppercase tracking-wide">Next-gen Tech</h4>
                                        <p className="text-xs text-text-secondary mt-1 font-light">Immersive digital systems and enterprise tools.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg shadow-sm hover:border-primary transition-colors duration-300 border border-border">
                                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-text uppercase tracking-wide">Trusted Operations</h4>
                                        <p className="text-xs text-text-secondary mt-1 font-light">High reliability, security, and verified structures.</p>
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
                                    <div className="w-10 h-10 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">
                                        The Drive
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-right" delay={0.2}>
                                <h3 className="text-3xl md:text-5xl font-black text-text uppercase tracking-tight">
                                    OUR <span className="text-primary">MISSION</span>
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-right" delay={0.3}>
                                <p className="text-text-secondary font-light text-base md:text-lg leading-relaxed">
                                    "To simplify growth through integrated, practical and impact-driven solutions."
                                </p>
                            </ScrollReveal>

                            {/* Bullet Highlights */}
                            <ScrollReveal variant="fade-right" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg shadow-sm hover:border-primary transition-colors duration-300 border border-border">
                                    <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-text uppercase tracking-wide">Accelerated Growth</h4>
                                        <p className="text-xs text-text-secondary mt-1 font-light">Rapid scaling with efficient, modern methodologies.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-bg shadow-sm hover:border-primary transition-colors duration-300 border border-border">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-text uppercase tracking-wide">Client Success</h4>
                                        <p className="text-xs text-text-secondary mt-1 font-light">Tailored support, dedicated consultants, and real metrics.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Image Column */}
                        <div className="lg:col-span-5">
                            <ScrollReveal variant="fade-left">
                                <ThreeDTilt tiltMax={8} scale={1.02} glareOpacity={0.05} className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-kp-tint to-kp-accent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-700" />
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-bg border border-border shadow-2xl">
                                        <img
                                            src="/mission_aesthetic.webp"
                                            alt="KP Global Mission Illustration"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </ThreeDTilt>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Dynamic CTA at the bottom */}
                <ScrollReveal variant="3d-unfold" className="mt-40 text-center">
                    <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[2.5rem] bg-[#080808] border border-white/10 shadow-[0_0_50px_rgba(108,59,255,0.15)] relative overflow-hidden group">
                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                        
                        <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight relative z-10">
                            Let’s connect. Let’s collaborate. Let’s scale.
                        </h3>
                        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed relative z-10">
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
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group/btn hover:shadow-[0_0_40px_rgba(108,59,255,0.4)] relative z-10"
                        >
                            Contact Strategic Leads
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-45">
                                <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                        </button>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}


import React from 'react';
import { Target, Compass, Sparkles, Compass as CompassIcon, Users, Briefcase, Award, Globe, ArrowRight, Play } from 'lucide-react';
import { Link } from "react-router-dom";

import { ScrollReveal, TextReveal } from "@/components/Animations";
import PageHero from "@/components/PageHero";
import Services from "@/sections/Services";

// Custom Animated Counter using requestAnimationFrame and IntersectionObserver
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = React.useState("");
  const elementRef = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numberMatch = String(target).match(/^([\d.]+)(.*)$/);
          if (numberMatch) {
            const numValue = parseFloat(numberMatch[1]);
            const suffix = numberMatch[2];
            const isFloat = String(numberMatch[1]).includes(".");

            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentValue = progress * numValue;

              if (isFloat) {
                setCount(currentValue.toFixed(1) + suffix);
              } else {
                setCount(Math.floor(currentValue) + suffix);
              }

              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count || target}</span>;
}

export default function AboutPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-hidden font-sans pt-0 pb-20">
      
      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-accent-soft rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-accent-soft rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <PageHero 
          title="About Us" 
          description="Empowering global enterprise through unified software ecosystems, technical training, digital broadcasting networks, and dynamic B2B corridors." 
        />

        <div className="max-w-7xl mx-auto px-6 space-y-36">
          
          {/* Section 2: Intro & Stats Block */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Intro text & statistics */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-right" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
                  KP Global Business
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-text leading-none">
                  KP Global Business
                </h2>
                <p className="text-text-secondary font-light text-sm md:text-base leading-relaxed">
                  KP Global Business is dedicated to providing high-quality solutions across various industries. 
                  From IT to education, media, networking, and career growth, we are committed to helping you succeed 
                  with trusted solutions and genuine care. Let's work together to achieve your goals.
                </p>
              </ScrollReveal>

              {/* Stats Block */}
              <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-2 gap-8 border-t border-border pt-8 font-sans">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-text font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-text-secondary tracking-wider mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-text font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-text-secondary tracking-wider mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-text font-mono tracking-tighter">
                    <AnimatedCounter target="20+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-text-secondary tracking-wider mt-1">Professional Team</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-text font-mono tracking-tighter">
                    <AnimatedCounter target="5+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-text-secondary tracking-wider mt-1">Years Experience</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Block: Image */}
            <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-border bg-bg shadow-2xl aspect-[4/3] w-full">
                <img 
                  src="/about_team_meeting.webp" 
                  alt="Team Meeting" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Section 3: Our Vision & Our Mission overlapping cards */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/30 bg-[#06060c] p-8 md:p-14 lg:p-16 shadow-[0_0_90px_rgba(108,59,255,0.15)]">
            
            {/* Tech grid mesh background & purple ambient glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(108,59,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(108,59,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[140px] animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[120px]"></div>
            </div>

            {/* Visual background image with dark gradient mask */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
              <img 
                src="/about_vision_visual.webp"
                alt="Vision Visual"
                className="w-full h-full object-cover filter blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#06060c] via-transparent to-[#06060c]"></div>
            </div>

            <div className="relative z-10 space-y-10">
              
              {/* Header eyebrow tag */}
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-3 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Guiding Principles & Future Path
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
                  Architecting Global Success
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Our Vision Card */}
                <ScrollReveal variant="zoom-in" className="group relative space-y-6 bg-[#0a0a14]/80 border border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,59,255,0.3)] overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Compass className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-primary/80 uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        01 // Future Vision
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">Our Vision</h3>
                    <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed mb-6">
                      Our Vision is to become the leading provider of high-quality solutions across various industries, 
                      empowering businesses and individuals through innovation, technology, and genuine care. We aim to 
                      establish a unified ecosystem that fosters continuous growth and collaboration, connecting international 
                      opportunities with technical mastery.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">Global Ecosystem</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">Technical Mastery</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">International Growth</span>
                  </div>
                </ScrollReveal>

                {/* Our Mission Card */}
                <ScrollReveal variant="zoom-in" delay={0.2} className="group relative space-y-6 bg-[#0a0a14]/80 border border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,59,255,0.3)] overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-accent" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-accent/80 uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        02 // Strategic Mission
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">Our Mission</h3>
                    <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed mb-6">
                      Our Mission is to empower businesses and individuals through high-quality solutions and specialized training. 
                      By linking our IT systems, training academy, and global job pipelines directly together, we erase the friction 
                      of modern business growth. We strive to deliver excellence, security, and sustainability in everything we 
                      architect, ensuring balanced data flow and synchronized synergy.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">IT System Sync</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">Zero Friction</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">Talent Pipelines</span>
                  </div>
                </ScrollReveal>

              </div>

            </div>
          </div>
          {/* Section 5: Why Choose Us (Reused Services component) */}
          <Services />

          {/* Section 6: Our Promise / Commitment Banner */}
          <ScrollReveal variant="fade-up" className="relative w-full rounded-[2.5rem] overflow-hidden border border-primary/30 bg-[#06060c] p-8 md:p-14 lg:p-16 shadow-[0_0_90px_rgba(108,59,255,0.2)] group">
            
            {/* Tech Grid Mesh & Ambient Purple Radial Blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(108,59,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(108,59,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/25 rounded-full blur-[140px] animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/25 rounded-full blur-[120px]"></div>
            </div>

            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
              <img 
                src="/about_commitment_bg.webp" 
                alt="Commitment Background" 
                className="w-full h-full object-cover filter brightness-[0.5] contrast-125 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06060c] via-[#06060c]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Typographical Slogan Lockup */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md text-xs font-bold text-primary uppercase tracking-widest shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Promise
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                  YOUR GROWTH,<br />
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                    OUR RESPONSIBILITY.
                  </span>
                </h3>
              </div>

              {/* Right Column: Sleek Frosted Glass Card */}
              <div className="lg:col-span-5 group/card relative bg-[#0a0a14]/90 border border-white/20 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_50px_rgba(108,59,255,0.3)] hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-extrabold text-white/90 uppercase tracking-widest">
                    Our Commitment
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal">
                    At KP Global Business, we are dedicated to supporting your success with trusted solutions and genuine care. 
                    Your success is our absolute priority.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="group/btn inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#6C3BFF] via-[#7E46FF] to-[#A855F7] text-white font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-full shadow-[0_10px_30px_rgba(108,59,255,0.4)] hover:shadow-[0_15px_40px_rgba(108,59,255,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>Let's Get In Touch</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white group-hover/btn:translate-x-1 group-hover/btn:rotate-45 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
}

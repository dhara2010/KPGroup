

import React from 'react';
import { Target, Compass, Sparkles, Compass as CompassIcon, Users, Briefcase, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

import { ScrollReveal, TextReveal } from "@/components/Animations";
import PageHero from "@/components/PageHero";

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
    <div className="relative bg-[#020202] text-[#111827] min-h-screen overflow-hidden font-sans pt-0 pb-20">
      
      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <PageHero 
          title="About Us" 
          description="Empowering global enterprise through unified software ecosystems, technical training, digital broadcasting networks, and dynamic B2B corridors." 
        />

        <div className="max-w-7xl mx-auto px-6 space-y-36">
          
          {/* Section 2: Intro & Stats Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Intro text & statistics */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-right" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-xs font-semibold text-[#064B63] uppercase tracking-widest">
                  KP Global Business
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111827] leading-none">
                  KP Global Business
                </h2>
                <p className="text-[#475569] font-light text-sm md:text-base leading-relaxed">
                  KP Global Business is dedicated to providing high-quality solutions across various industries. 
                  From IT to education, media, networking, and career growth, we are committed to helping you succeed 
                  with trusted solutions and genuine care. Let's work together to achieve your goals.
                </p>
              </ScrollReveal>

              {/* Stats Block */}
              <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-2 gap-8 border-t border-[#E2E8F0] pt-8 font-sans">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-[#0F172A] font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-[#475569] tracking-wider mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-[#0F172A] font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-[#475569] tracking-wider mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-[#0F172A] font-mono tracking-tighter">
                    <AnimatedCounter target="20+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-[#475569] tracking-wider mt-1">Professional Team</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-[#0F172A] font-mono tracking-tighter">
                    <AnimatedCounter target="5+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-[#475569] tracking-wider mt-1">Years Experience</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Block: Image */}
            <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-[#E2E8F0] bg-[#0a0a0a] shadow-2xl aspect-[4/3] w-full">
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
          <div className="relative rounded-[2.5rem] overflow-hidden border border-[#E2E8F0] bg-[#030303] p-8 md:p-16">
            
            {/* Visual background */}
            <img 
              src="/about_vision_visual.webp"
              alt="Vision Visual"
              fill
              className="object-cover opacity-10 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-white/50 to-transparent z-10 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Our Vision */}
              <ScrollReveal variant="zoom-in" className="space-y-6 bg-[#080808]/75 border border-[#E2E8F0] rounded-3xl p-8 backdrop-blur-md hover:border-[#E2E8F0] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center text-[#064B63]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111827]">Our Vision</h3>
                <p className="text-[#475569] font-light text-sm md:text-base leading-relaxed">
                  Our Vision is to become the leading provider of high-quality solutions across various industries, 
                  empowering businesses and individuals through innovation, technology, and genuine care. We aim to 
                  establish a unified ecosystem that fosters continuous growth and collaboration, connecting international 
                  opportunities with technical mastery.
                </p>
              </ScrollReveal>

              {/* Our Mission */}
              <ScrollReveal variant="zoom-in" delay={0.2} className="space-y-6 bg-[#080808]/75 border border-[#E2E8F0] rounded-3xl p-8 backdrop-blur-md hover:border-[#E2E8F0] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center text-[#064B63]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111827]">Our Mission</h3>
                <p className="text-[#475569] font-light text-sm md:text-base leading-relaxed">
                  Our Mission is to empower businesses and individuals through high-quality solutions and specialized training. 
                  By linking our IT systems, training academy, and global job pipelines directly together, we erase the friction 
                  of modern business growth. We strive to deliver excellence, security, and sustainability in everything we 
                  architect, ensuring balanced data flow and synchronized synergy.
                </p>
              </ScrollReveal>

            </div>
          </div>

          {/* Section 4: Video Banner / Image Banner */}
          <ScrollReveal variant="blur-in" className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-[#E2E8F0] group">
            <img 
              src="/about_video_bg.webp" 
              alt="Video Banner" 
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/30 transition-colors duration-500 z-10"></div>

            {/* Overlap Bottom Slogan Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white/95 border border-[#E2E8F0] px-6 py-4 rounded-2xl text-center shadow-2xl z-20">
              <span className="text-xs md:text-sm font-bold text-[#111827] uppercase tracking-wider">
                One Global Platform For Technology, Skills, Media, Business, and Career Growth.
              </span>
            </div>
          </ScrollReveal>

          {/* Section 5: Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Image */}
            <ScrollReveal variant="fade-right" className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-[#E2E8F0] bg-[#0a0a0a] shadow-2xl aspect-[4/3] w-full">
                <img 
                  src="/about_boardroom_bg.webp" 
                  alt="Boardroom Meeting" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Right Block: Capabilities List */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-left" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-xs font-semibold text-[#064B63] uppercase tracking-widest">
                  Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111827] leading-none">
                  Why Choose Us
                </h2>
                <p className="text-[#475569] font-light text-sm md:text-base leading-relaxed">
                  We bridge technical architectures, educational networks, B2B synergy and worldwide employment 
                  marketplaces directly to deliver unrivaled value to your company.
                </p>
              </ScrollReveal>

              {/* Capabilities */}
              <div className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Integrated Solutions",
                    desc: "All in one custom ecosystem. Integrated technical development with specialized training, media reach, and career solutions under one roof."
                  },
                  {
                    icon: Users,
                    title: "Professional Experts",
                    desc: "Experienced and dedicated professionals working together to deliver high-quality solutions tailored for your business."
                  },
                  {
                    icon: Globe,
                    title: "Global Vision",
                    desc: "Connecting international opportunities with technical mastery. Broadening horizons and building powerful business corridors worldwide."
                  }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} variant="fade-left" delay={0.15 * idx}>
                    <div className="flex gap-4 p-4 border border-[#E2E8F0] rounded-2xl bg-white/[0.01] hover:border-[#E2E8F0] transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#064B63]/10 border border-[#064B63]/20 flex items-center justify-center text-[#064B63] shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-md font-bold text-[#111827] uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-xs text-[#475569] leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

          <ScrollReveal variant="fade-up" className="relative w-full rounded-[2.5rem] overflow-hidden border border-[#E2E8F0] p-8 md:p-16 shadow-2xl bg-gradient-to-r from-black via-white/50 to-blue-950/25">
            <div className="absolute inset-0 opacity-30 mix-blend-luminosity z-0 pointer-events-none">
              <img 
                src="/about_commitment_bg.webp" 
                alt="Commitment Background" 
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            
            {/* Ambient blur node */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#064B63]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Typographical Slogan Lockup */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-xs font-semibold text-[#064B63] uppercase tracking-widest">
                  Our Promise
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#111827]">
                  YOUR GROWTH,<br />
                  <span className="text-[#0F172A]">OUR RESPONSIBILITY.</span>
                </h3>
              </div>

              {/* Right Column: Sleek Frosted Glass Card */}
              <div className="lg:col-span-5 bg-white/[0.03] border border-[#E2E8F0] rounded-[2rem] p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-[#E2E8F0] transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#064B63]/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F9FA] border border-[#E2E8F0] text-[10px] font-bold text-[#475569] uppercase tracking-wider">
                    Our Commitment
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed font-light">
                    At KP Global Business, we are dedicated to supporting your success with trusted solutions and genuine care. 
                    Your success is our absolute priority.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#0F172A] hover:bg-[#064B63] text-[#111827] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] group"
                  >
                    Let's Get In Touch
                    <div className="w-5 h-5 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                      <ArrowRight className="w-3 h-3 text-[#111827]" />
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

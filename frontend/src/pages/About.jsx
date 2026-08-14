

import React from 'react';
import { Target, Compass, Sparkles, Compass as CompassIcon, Users, Briefcase, Award, Globe, ArrowRight, Play } from 'lucide-react';
import { Link } from "react-router-dom";

import { ScrollReveal, TextReveal } from "@/components/Animations";
import PageHero from "@/components/common/PageHero";
import Services from "@/components/about/Services";

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
    <div className="relative bg-transparent text-slate-900 min-h-screen overflow-hidden font-sans pt-0 pb-20">

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
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-500/40"></span>
                  <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                    KP Global Business
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                  KP Global Business
                </h2>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">
                  KP Global Business is dedicated to providing high-quality solutions across various industries. 
                  From IT to education, media, networking, and career growth, we are committed to helping you succeed 
                  with trusted solutions and genuine care. Let's work together to achieve your goals.
                </p>
              </ScrollReveal>

              {/* Stats Block */}
              <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-2 gap-8 border-t border-slate-200/60 pt-8 font-sans">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 font-mono tracking-tighter">
                    <AnimatedCounter target="100+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 font-mono tracking-tighter">
                    <AnimatedCounter target="20+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1">Professional Team</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 font-mono tracking-tighter">
                    <AnimatedCounter target="5+" />
                  </div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1">Years Experience</div>
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
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Section 3: Our Vision & Our Mission overlapping cards */}
          {/* Section 3: Our Vision & Our Mission overlapping cards */}
          <div className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <ScrollReveal variant="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-500/40"></span>
                  <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                    Guiding Principles & Future Path
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                  Architecting Global <br />
                  <span className="text-brand-gradient">Success</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="md:text-right">
              <ScrollReveal variant="fade-up" delay={0.2}>
                <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                  Driving sustainable growth and continuous innovation.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Our Vision Card */}
            <ScrollReveal variant="zoom-in" className="group relative bg-white/90 border border-slate-200/60 rounded-[2.5rem] p-10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                    01 // Future Vision
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                  To become India’s most trusted business and career growth ecosystem, empowering millions to scale with confidence and credibility.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">Global Ecosystem</span>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">Technical Mastery</span>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">International Growth</span>
              </div>
            </ScrollReveal>

            {/* Our Mission Card */}
            <ScrollReveal variant="zoom-in" delay={0.2} className="group relative bg-white/90 border border-slate-200/60 rounded-[2.5rem] p-10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-accent uppercase px-3 py-1 rounded-full bg-accent/5 border border-accent/10">
                    02 // Strategic Mission
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                  To simplify growth by delivering integrated, practical, and impact-driven solutions that help businesses and professionals succeed in a digital-first world.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">IT System Sync</span>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">Zero Friction</span>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600">Talent Pipelines</span>
              </div>
            </ScrollReveal>

          </div>
          {/* Section 5: Why Choose Us (Reused Services component) */}
          <Services />

          {/* Section 6: Our Promise / Commitment Banner */}
          <ScrollReveal variant="fade-up" className="relative w-full rounded-[2.5rem] overflow-hidden border border-slate-200/60 bg-white/90 p-8 md:p-14 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md group">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Typographical Slogan Lockup */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-primary uppercase tracking-[0.2em] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Our Promise
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-slate-900 drop-shadow-sm">
                  YOUR GROWTH,<br />
                  <span className="text-brand-gradient">
                    OUR RESPONSIBILITY.
                  </span>
                </h3>
              </div>

              {/* Right Column: Sleek Frosted Glass Card */}
              <div className="lg:col-span-5 group/card relative bg-slate-50 border border-slate-200/80 rounded-[2rem] p-8 md:p-10 shadow-lg overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-extrabold text-slate-600 uppercase tracking-widest shadow-sm">
                    Our Commitment
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    At KP Global Business, we are dedicated to supporting your success with trusted solutions and genuine care. 
                    Your success is our absolute priority.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="group/btn inline-flex items-center gap-4 px-8 py-4 bg-slate-950 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:bg-brand-violet"
                  >
                    <span>Let's Get In Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

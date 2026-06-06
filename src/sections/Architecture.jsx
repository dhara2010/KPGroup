"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MonitorSmartphone,
  Radio,
  GraduationCap,
  Briefcase,
  Network,
} from "lucide-react";

const divisions = [
  {
    id: "it",
    title: "IT SOLUTIONS",
    icon: MonitorSmartphone,
    color: "from-blue-600 to-cyan-400",
    desc: "Cloud Systems & AI",
    details:
      "Next-gen software, cloud infrastructure, and AI-driven enterprise solutions.",
    subservices: [
      "Custom Software Development",
      "Cloud Infrastructure & DevOps",
      "AI & Machine Learning",
      "Enterprise Cyber Security",
    ],
  },
  {
    id: "media",
    title: "MEDIA NETWORK",
    icon: Radio,
    color: "from-purple-600 to-violet-500",
    desc: "Digital Broadcasting",
    details:
      "Global reach broadcasting and digital marketing network connecting brands to millions.",
    subservices: [
      "Digital Broadcasting & PR",
      "Strategic Viral Marketing",
      "Content & Video Production",
      "Corporate Branding",
    ],
  },
  {
    id: "academy",
    title: "SKILL ACADEMY",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-400",
    desc: "Tech Mastery Training",
    details:
      "Empowering the workforce of tomorrow with advanced technical training and leadership skills.",
    subservices: [
      "Advanced Tech Training",
      "Corporate Bootcamps",
      "Executive Leadership",
      "Industry Certifications",
    ],
  },
  {
    id: "careers",
    title: "CAREERS",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-400",
    desc: "Global Talent Recruitment",
    details:
      "Join a global team of innovators and shape the future of international business.",
    subservices: [
      "Global Talent Placement",
      "Executive Search & Hiring",
      "Internship & Training Paths",
      "Career Consulting",
    ],
  },
  {
    id: "community",
    title: "COMMUNITY",
    icon: Network,
    color: "from-orange-500 to-amber-400",
    desc: "Business Synergy Ecosystem",
    details:
      "A thriving ecosystem of partners, investors, and enterprise leaders shaping global markets.",
    subservices: [
      "B2B Partnership Corridors",
      "Investor Network Relations",
      "Startup Incubators & Capital",
      "Global Enterprise Forums",
    ],
  },
];

export default function Architecture() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Core locking state
  const [isLocked, setIsLocked] = useState(false);
  const isLockedRef = useRef(false);
  const ignoreLockRef = useRef(false);

  // Internal visual state
  const [stage, setStage] = useState("zoom"); // "zoom" | "services"
  const stageRef = useRef("zoom");

  // Smooth lerp system for zoom
  const [zoomProgress, setZoomProgress] = useState(0); // Driven by the lerp loop
  const targetZoomRef = useRef(0);
  const currentZoomRef = useRef(0);

  const [innerActiveIndex, setInnerActiveIndex] = useState(0);
  const indexRef = useRef(0);

  const lastTransitionTime = useRef(0);
  const touchStartY = useRef(0);
  const prevTop = useRef(null);

  // Resize listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth Lerp Engine for buttery animation on all mice
  useEffect(() => {
    let animationFrameId;

    const renderLoop = () => {
      const target = targetZoomRef.current;
      const current = currentZoomRef.current;

      // Lerp logic (0.22 creates a fast, aggressive easing curve equivalent to cubic-bezier(0.22, 1, 0.36, 1))
      if (Math.abs(target - current) > 0.0005) {
        currentZoomRef.current += (target - current) * 0.22;
        setZoomProgress(currentZoomRef.current);
      } else if (current !== target) {
        currentZoomRef.current = target;
        setZoomProgress(target);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Native Scroll Interceptor
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (isLockedRef.current || ignoreLockRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;

      if (prevTop.current === null) {
        prevTop.current = top;
        return;
      }

      const crossedZeroDown = prevTop.current > 0 && top <= 0;
      const crossedZeroUp = prevTop.current < 0 && top >= 0;
      const isClose = Math.abs(top) < 20;

      if (crossedZeroDown || crossedZeroUp || isClose) {
        isLockedRef.current = true;
        setIsLocked(true);

        const isScrollingDown = prevTop.current > top;

        if (isScrollingDown || crossedZeroDown) {
          stageRef.current = "zoom";
          targetZoomRef.current = 0;
          currentZoomRef.current = 0;
          indexRef.current = 0;
          
          setStage("zoom");
          setZoomProgress(0);
          setInnerActiveIndex(0);
        } else {
          stageRef.current = "services";
          targetZoomRef.current = 1;
          currentZoomRef.current = 1;
          indexRef.current = divisions.length - 1;
          
          setStage("services");
          setZoomProgress(1);
          setInnerActiveIndex(divisions.length - 1);
        }

        const targetY = window.scrollY + top;
        window.scrollTo(0, targetY);

        if (window.lenis) {
          window.lenis.stop();
          window.lenis.scrollTo(targetY, { immediate: true });
        }
      }

      prevTop.current = top;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Unlock sequence
  const unlock = (direction) => {
    isLockedRef.current = false;
    setIsLocked(false);
    ignoreLockRef.current = true;

    if (window.lenis) {
      window.lenis.start();
    }

    const checkExit = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      if (Math.abs(r.top) > 50) {
        ignoreLockRef.current = false;
        window.removeEventListener("scroll", checkExit);
      }
    };
    window.addEventListener("scroll", checkExit);
  };

  // Internal Wheel Logic
  const handleInternalWheel = (deltaY) => {
    const isDown = deltaY > 0;
    const now = Date.now();

    if (stageRef.current === "zoom") {
      // Significantly increased zoom speed for immediate cinematic pull
      const zoomSpeed = isMobile ? 0.008 : 0.0045;
      let nextTarget = targetZoomRef.current + deltaY * zoomSpeed;

      if (nextTarget >= 1) {
        nextTarget = 1;
        targetZoomRef.current = 1;

        if (isDown) {
          // Reduced delay to snap into services faster without dead scroll time
          if (currentZoomRef.current > 0.9 && now - lastTransitionTime.current > 150) {
            stageRef.current = "services";
            setStage("services");
            lastTransitionTime.current = now;
          }
        }
      } else if (nextTarget <= 0) {
        nextTarget = 0;
        targetZoomRef.current = 0;

        if (!isDown) {
          if (currentZoomRef.current < 0.05 && now - lastTransitionTime.current > 150) {
            unlock("up");
          }
        }
      } else {
        targetZoomRef.current = nextTarget;
        lastTransitionTime.current = now;
      }
    } else if (stageRef.current === "services") {
      const COOLDOWN = 600; // slightly faster service switching
      if (now - lastTransitionTime.current < COOLDOWN) return;

      if (isDown) {
        if (indexRef.current < divisions.length - 1) {
          indexRef.current += 1;
          setInnerActiveIndex(indexRef.current);
          lastTransitionTime.current = now;
        } else {
          unlock("down");
        }
      } else {
        if (indexRef.current > 0) {
          indexRef.current -= 1;
          setInnerActiveIndex(indexRef.current);
          lastTransitionTime.current = now;
        } else {
          stageRef.current = "zoom";
          setStage("zoom");
          // Re-sync target to exactly 1 so user can smoothly zoom backward
          targetZoomRef.current = 1;
          lastTransitionTime.current = now;
        }
      }
    }
  };

  // Intercept events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      handleInternalWheel(e.deltaY);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (stageRef.current === "zoom") {
        handleInternalWheel(deltaY);
        touchStartY.current = currentY; // constant update for fluid drag
      } else {
        if (Math.abs(deltaY) > 40) {
          handleInternalWheel(deltaY);
          touchStartY.current = currentY;
        }
      }
    };

    const handleKeyDown = (e) => {
      const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "];
      if (keys.includes(e.key)) {
        e.preventDefault();
        const isDown = ["ArrowDown", "PageDown", " "].includes(e.key);
        handleInternalWheel(isDown ? 100 : -100);
      }
    };

    if (isLocked) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("keydown", handleKeyDown, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const p1 = zoomProgress;
  const showServices = stage === "services";

  const tunnelStyle = {
    position: "absolute",
    left: isMobile ? `0%` : `${4 * (1 - p1)}%`,
    top: isMobile ? `0%` : `${8 * (1 - p1)}%`,
    width: isMobile ? `100%` : `${44 + p1 * 56}%`,
    height: isMobile ? `100%` : `${84 + p1 * 16}%`,
    borderRadius: isMobile ? `0px` : `${40 * (1 - p1)}px`,
    zIndex: 0,
    boxShadow: `0 30px 100px -20px rgba(6, 182, 212, ${0.25 * (1 - p1)})`,
    border: showServices ? "none" : `${1 * (1 - p1)}px solid rgba(255, 255, 255, ${0.12 * (1 - p1)})`,
  };

  // Sharp, hardware-accelerated scaling to prevent blur
  const tunnelScale = 1 + p1 * 0.45;
  const tunnelTranslateY = p1 * -15;

  const overlayColors = [
    "rgba(6, 182, 212, 0.2)",
    "rgba(59, 130, 246, 0.3)",
    "rgba(168, 85, 247, 0.3)",
    "rgba(236, 72, 153, 0.3)",
    "rgba(16, 185, 129, 0.3)",
    "rgba(249, 115, 22, 0.3)",
  ];

  const colorIndex = showServices ? innerActiveIndex + 1 : 0;
  const activeOverlay = overlayColors[colorIndex];

  const activeService = divisions[innerActiveIndex];
  const Icon = activeService.icon;

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden bg-black">
        
        {/* Global background animated glow orbs */}
        <div className="absolute top-[10%] left-[10%] h-[600px] w-[600px] rounded-full bg-cyan-900/30 blur-[150px] pointer-events-none z-0 animate-glow" />
        <div className="absolute bottom-[10%] right-[10%] h-[700px] w-[700px] rounded-full bg-purple-900/20 blur-[150px] pointer-events-none z-0 animate-glow-delayed" />

        {/* Tunnel Container */}
        {/* REMOVED transition-all duration-300 here to allow pure JS lerp for absolute smoothness */}
        <div
          className="absolute overflow-hidden bg-black"
          style={tunnelStyle}
        >
          {/* Parallax Video layer with pure zoom logic */}
          {/* REMOVED transition-transform duration-300 here as well */}
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `scale(${tunnelScale}) translate3d(0, ${tunnelTranslateY}px, 0)`,
              transformOrigin: "center center",
              perspective: "1000px",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute inset-0 z-0 bg-black" />

            {videoError ? (
              <div className="tunnel z-10">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span key={i} style={{ "--i": i }} />
                ))}
              </div>
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 z-10 h-full w-full object-cover"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden"
                }}
                src="/videos/tunnel.mp4"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              />
            )}

            {/* Cinematic dark gradients for video layer */}
            <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_85%)] opacity-80 pointer-events-none" />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

            {/* Animated color overlay */}
            <div
              className="absolute inset-0 z-30 pointer-events-none transition-colors duration-1000"
              style={{
                backgroundColor: activeOverlay,
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        {/* Intro Wrapper - Positioned perfectly on right side */}
        <div
          className="absolute inset-0 z-20 pointer-events-none flex items-center"
          style={{ paddingTop: "110px" }}
        >
          {/* Removed transition-all duration-500 from the opacity wrapper to ensure JS lerp smoothness */}
          <div
            className="flex h-full w-full items-center justify-center px-6 font-sans"
            style={{
              opacity: stage === "zoom" ? 1 - p1 : 0,
              transform: `scale(${1 + p1 * 1.1}) translateY(-10px)`,
              pointerEvents: stage === "zoom" && p1 < 0.5 ? "auto" : "none",
            }}
          >
            <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="hidden lg:block lg:col-span-6" />

              <div className="lg:col-span-6 relative flex flex-col justify-center">
                {/* Subtle soft glow behind text for legibility */}
                <div className="absolute inset-0 -z-10 bg-black/30 blur-3xl rounded-full" />
                
                <div className="inline-flex items-center gap-3 mb-6">
                   <span className="block h-[1px] w-8 bg-cyan-400"></span>
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 font-mono">
                     Core Infrastructure
                   </p>
                </div>

                <h2 className="text-4xl font-light uppercase leading-[1.15] tracking-[0.12em] text-white md:text-[3.25rem]">
                  Step into a <br className="hidden md:block" />
                  <span className="font-medium text-gray-200">new world</span>
                  <span className="mt-4 block bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-300 bg-clip-text font-black text-transparent">
                    and let your ecosystem run wild
                  </span>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-relaxed text-gray-400 font-light tracking-wide border-l border-white/10 pl-5">
                  KP Global integrates all business verticals into one premium,
                  high-speed ecosystem. Access the global network architecture below.
                </p>

                {/* Animated Scroll Hint */}
                <div className="mt-14 flex items-center gap-4 opacity-70">
                   <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
                      <div className="h-2 w-1.5 animate-bounce rounded-full bg-white shadow-[0_0_8px_white]" />
                   </div>
                   <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                      Initialize Routing
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Wrapper - Single Active Overlay */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{ paddingTop: "110px" }}
        >
          {showServices && (
            <div
              key={activeService.id}
              className="flex h-full w-full items-center justify-center px-6 animate-slide-up pointer-events-auto"
            >
              <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 pt-10">
                <div className="space-y-5 lg:col-span-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${activeService.color} shadow-lg shadow-black/60 lg:h-20 lg:w-20`}
                  >
                    <Icon className="h-8 w-8 text-white lg:h-10 lg:w-10" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 font-mono lg:text-xs">
                      ROUTING CORE // {activeService.id.toUpperCase()}_SVC
                    </p>

                    <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-7xl">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-200 lg:text-lg">
                    {activeService.desc}
                  </p>

                  <p className="max-w-lg text-sm leading-relaxed text-gray-300 font-light">
                    {activeService.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                  {activeService.subservices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-black/80 lg:p-6"
                    >
                      <span
                        className={`mb-4 block h-2 w-2 rounded-full bg-gradient-to-r ${activeService.color} shadow-[0_0_10px_currentColor]`}
                      />
                      <h4 className="text-xs font-black uppercase tracking-wider text-white lg:text-sm">
                        {sub}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tunnel {
          position: absolute;
          inset: 0;
          overflow: hidden;
          perspective: 900px;
          background: radial-gradient(circle at center, #07172a 0%, #000 65%);
        }

        .tunnel span {
          position: absolute;
          left: 50%;
          top: 0%;
          width: 78vw;
          height: 44vw;
          border: 1px solid rgba(0, 255, 255, 0.35);
          box-shadow: 0 0 22px rgba(0, 255, 255, 0.45);
          transform: translate(-50%, -50%)
            translateZ(calc(var(--i) * -120px));
          animation: tunnelMove 4.2s linear infinite;
          animation-delay: calc(var(--i) * -0.14s);
        }

        .tunnel span:nth-child(2n) {
          border-color: rgba(168, 85, 247, 0.32);
          box-shadow: 0 0 22px rgba(168, 85, 247, 0.4);
        }

        @keyframes tunnelMove {
          0% {
            transform: translate(-50%, -50%) translateZ(-2600px)
              scale(0.2);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            transform: translate(-50%, -50%) translateZ(450px) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes floatGlow {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1) translateY(-30px);
            opacity: 0.9;
          }
        }

        .animate-slide-up {
          animation: slideUpFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-glow {
          animation: floatGlow 10s ease-in-out infinite;
        }

        .animate-glow-delayed {
          animation: floatGlow 10s ease-in-out infinite;
          animation-delay: -5s;
        }
      `}</style>
    </section>
  );
}
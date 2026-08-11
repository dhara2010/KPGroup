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
    color: "from-primary to-accent-soft",
    desc: "Cloud Systems & AI",
    details: "Next-gen software, cloud infrastructure, and AI-driven enterprise solutions.",
    image: "/eco_it_bg.webp",
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
    color: "from-primary via-accent-soft to-transparent",
    desc: "Digital Broadcasting",
    details: "Global reach broadcasting and digital marketing network connecting brands to millions.",
    image: "/eco_media_bg.webp",
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
    color: "from-accent-soft to-primary",
    desc: "Tech Mastery Training",
    details: "Empowering the workforce of tomorrow with advanced technical training and leadership skills.",
    image: "/eco_academy_bg.webp",
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
    color: "from-primary to-accent",
    desc: "Global Talent Recruitment",
    details: "Join a global team of innovators and shape the future of international business.",
    image: "/eco_careers_bg.webp",
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
    color: "from-primary to-accent-soft",
    desc: "Business Synergy Ecosystem",
    details: "A thriving ecosystem of partners, investors, and enterprise leaders shaping global markets.",
    image: "/eco_community_bg.webp",
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

  const [isLocked, setIsLocked] = useState(false);
  const lockStateRef = useRef("before");
  const lenisLockedRef = useRef(false);

  const lockLenis = () => {
    if (lenisLockedRef.current) return;
    lenisLockedRef.current = true;
    if (window.lenis) window.lenis.stop();
  };

  const unlockLenis = () => {
    if (!lenisLockedRef.current) return;
    lenisLockedRef.current = false;
    if (window.lenis) window.lenis.start();
  };

  const [stage, setStage] = useState("zoom");
  const stageRef = useRef("zoom");

  const [zoomProgress, setZoomProgress] = useState(0);
  const targetZoomRef = useRef(0);
  const currentZoomRef = useRef(0);

  const [innerActiveIndex, setInnerActiveIndex] = useState(0);
  const indexRef = useRef(0);

  const [contentPhase, setContentPhase] = useState("in");
  const contentTimerRef = useRef(null);

  const lastTransitionTime = useRef(0);
  const touchStartY = useRef(0);
  const prevTop = useRef(null);

  const switchService = (newIndex) => {
    if (newIndex === indexRef.current) return;

    if (contentTimerRef.current) clearTimeout(contentTimerRef.current);

    setContentPhase("out");

    contentTimerRef.current = setTimeout(() => {
      indexRef.current = newIndex;
      setInnerActiveIndex(newIndex);
      setContentPhase("in");
    }, 260);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const renderLoop = () => {
      const target = targetZoomRef.current;
      const current = currentZoomRef.current;

      if (Math.abs(target - current) > 0.0005) {
        currentZoomRef.current += (target - current) * 0.12;
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (isLocked) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;

      if (prevTop.current === null) {
        prevTop.current = top;
        if (top > 0) lockStateRef.current = "before";
        else if (top < 0) lockStateRef.current = "after";
        return;
      }

      const crossedZeroDown = prevTop.current > 0 && top <= 0;
      const crossedZeroUp = prevTop.current < 0 && top >= 0;

      if (lockStateRef.current === "before" && crossedZeroDown) {
        lockStateRef.current = "locked";
        setIsLocked(true);
        lockLenis();

        stageRef.current = "zoom";
        targetZoomRef.current = 0;
        currentZoomRef.current = 0;
        indexRef.current = 0;

        setStage("zoom");
        setZoomProgress(0);
        setInnerActiveIndex(0);
        setContentPhase("in");

        const targetY = window.scrollY + top;
        window.scrollTo(0, targetY);
        if (window.lenis) {
          window.lenis.scrollTo(targetY, { immediate: true });
        }
      }
      else if (lockStateRef.current === "after" && crossedZeroUp) {
        lockStateRef.current = "locked";
        setIsLocked(true);
        lockLenis();

        stageRef.current = "services";
        targetZoomRef.current = 1;
        currentZoomRef.current = 1;
        indexRef.current = divisions.length - 1;

        setStage("services");
        setZoomProgress(1);
        setInnerActiveIndex(divisions.length - 1);
        setContentPhase("in");

        const targetY = window.scrollY + top;
        window.scrollTo(0, targetY);
        if (window.lenis) {
          window.lenis.scrollTo(targetY, { immediate: true });
        }
      }

      if (top > 50) lockStateRef.current = "before";
      else if (top < -50) lockStateRef.current = "after";

      prevTop.current = top;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLocked]);

  const unlock = (direction) => {
    setIsLocked(false);
    lockStateRef.current = direction === "down" ? "after" : "before";
    unlockLenis();
  };

  const handleInternalWheel = (deltaY) => {
    const isDown = deltaY > 0;
    const now = Date.now();

    if (stageRef.current === "zoom") {
      const zoomSpeed = isMobile ? 0.006 : 0.0032;
      let nextTarget = targetZoomRef.current + deltaY * zoomSpeed;

      if (nextTarget >= 1) {
        nextTarget = 1;
        targetZoomRef.current = 1;

        if (isDown && currentZoomRef.current > 0.9 && now - lastTransitionTime.current > 150) {
          stageRef.current = "services";
          setStage("services");
          setContentPhase("in");
          lastTransitionTime.current = now;
        }
      } else if (nextTarget <= 0) {
        nextTarget = 0;
        targetZoomRef.current = 0;

        if (!isDown && currentZoomRef.current < 0.05 && now - lastTransitionTime.current > 150) {
          unlock("up");
        }
      } else {
        targetZoomRef.current = nextTarget;
        lastTransitionTime.current = now;
      }
    } else if (stageRef.current === "services") {
      const COOLDOWN = 650;
      if (now - lastTransitionTime.current < COOLDOWN) return;

      if (isDown) {
        if (indexRef.current < divisions.length - 1) {
          switchService(indexRef.current + 1);
          lastTransitionTime.current = now;
        } else {
          unlock("down");
        }
      } else {
        if (indexRef.current > 0) {
          switchService(indexRef.current - 1);
          lastTransitionTime.current = now;
        } else {
          stageRef.current = "zoom";
          setStage("zoom");
          targetZoomRef.current = 1;
          lastTransitionTime.current = now;
        }
      }
    }
  };

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
        touchStartY.current = currentY;
      } else if (Math.abs(deltaY) > 40) {
        handleInternalWheel(deltaY);
        touchStartY.current = currentY;
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
    if (videoRef.current) videoRef.current.play().catch(() => { });
    return () => {
      if (contentTimerRef.current) clearTimeout(contentTimerRef.current);
    };
  }, []);

  const p1 = zoomProgress;
  const showServices = stage === "services";

  const activeService = divisions[innerActiveIndex];
  const Icon = activeService.icon;

  const tunnelStyle = {
    position: "absolute",
    left: isMobile ? `0%` : `${4 * (1 - p1)}%`,
    top: isMobile ? `0%` : `${8 * (1 - p1)}%`,
    width: isMobile ? `100%` : `${44 + p1 * 56}%`,
    height: isMobile ? `100%` : `${84 + p1 * 16}%`,
    borderRadius: isMobile ? `0px` : `${40 * (1 - p1)}px`,
    zIndex: 0,
    boxShadow: `0 30px 100px -20px rgba(6, 182, 212, ${0.25 * (1 - p1)})`,
    border: showServices ? "none" : `${1 * (1 - p1)}px solid rgba(255,255,255,${0.12 * (1 - p1)})`,
    transition: "border-radius 0.25s ease-out, box-shadow 0.25s ease-out",
    willChange: "left, top, width, height, border-radius",
    transform: "translateZ(0)",
  };

  const tunnelScale = 1 + p1 * 0.22;
  const tunnelTranslateY = p1 * -15;

  const overlayColors = [
    "rgba(6, 182, 212, 0.2)",
    "rgba(59, 130, 246, 0.3)",
    "rgba(168, 85, 247, 0.3)",
    "rgba(236, 72, 153, 0.3)",
    "rgba(16, 185, 129, 0.3)",
    "rgba(249, 115, 22, 0.3)",
  ];

  const activeOverlay = overlayColors[showServices ? innerActiveIndex + 1 : 0];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#020617] text-text">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg">
        <div className="absolute top-[10%] left-[10%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[150px] pointer-events-none z-0 animate-glow" />
        <div className="absolute bottom-[10%] right-[10%] h-[700px] w-[700px] rounded-full bg-accent/20 blur-[150px] pointer-events-none z-0 animate-glow-delayed" />

        <div className="absolute overflow-hidden bg-bg" style={tunnelStyle}>
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
            <div className="absolute inset-0 z-0 bg-bg" />

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
                  backfaceVisibility: "hidden",
                }}
                src="/videos/tunnel.mp4"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              />
            )}

            <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_85%)] opacity-80 pointer-events-none" />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

            <div
              className="absolute inset-0 z-30 pointer-events-none transition-colors duration-1000"
              style={{
                backgroundColor: activeOverlay,
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none flex items-center" style={{ paddingTop: "110px" }}>
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
                <div className="absolute inset-0 -z-10 bg-bg/30 blur-3xl rounded-full" />

                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="block h-[1px] w-8 bg-primary"></span>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary font-mono">
                    Core Infrastructure
                  </p>
                </div>

                <h2 className="text-4xl font-light uppercase leading-[1.15] tracking-[0.12em] text-text md:text-[3.25rem]">
                  Step into a <br className="hidden md:block" />
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-text to-text-secondary">new world</span>
                  <span className="mt-4 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-black text-transparent">
                    and let your ecosystem run wild
                  </span>
                </h2>

                <p className="mt-8 max-w-md text-[15px] leading-relaxed text-text-secondary font-light tracking-wide border-l-2 border-primary/30 pl-6 py-2 bg-gradient-to-r from-bg-soft to-transparent rounded-r-xl">
                  KP Global integrates all business verticals into one premium,
                  high-speed ecosystem. Access the global network architecture below.
                </p>

                <div className="mt-12 flex items-center gap-4 opacity-70">
                  <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1 bg-bg-soft">
                    <div className="h-2 w-1.5 animate-bounce rounded-full bg-primary shadow-[0_0_8px_rgba(108,59,255,0.5)]" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text">
                    Initialize Routing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          {showServices && (
            <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${contentPhase === "out" ? "opacity-0" : "opacity-100"}`}>
              <img
                src={activeService.image}
                alt={activeService.title}
                className="h-full w-full object-cover opacity-60 transition-all duration-1000"
                style={{ transform: contentPhase === "in" ? "scale(1)" : "scale(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />
            </div>
          )}
        </div>

        <div className="absolute inset-0 z-30 pointer-events-none" style={{ paddingTop: "110px" }}>
          {showServices && (
            <div
              className={`flex h-full w-full items-center justify-center px-6 pointer-events-auto ${contentPhase === "out" ? "service-content-out" : "service-content-in"
                }`}
            >
              <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 pt-10 relative z-10">
                <div className="space-y-5 lg:col-span-5">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${activeService.color} shadow-[0_0_30px_rgba(108,59,255,0.4)] lg:h-20 lg:w-20`}>
                    <Icon className="h-8 w-8 text-white lg:h-10 lg:w-10" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/50 font-mono lg:text-xs">
                      ROUTING CORE // {activeService.id.toUpperCase()}_SVC
                    </p>

                    <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 drop-shadow-md md:text-5xl lg:text-7xl">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_10px_rgba(108,59,255,0.5)] lg:text-lg">
                    {activeService.desc}
                  </p>

                  <p className="max-w-lg text-[15px] leading-relaxed text-white/80 font-light">
                    {activeService.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                  {activeService.subservices.map((sub, sIdx) => (
                    <div
                      key={`${activeService.id}-${sIdx}`}
                      className="service-card group rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-primary/50 hover:bg-black/50 hover:shadow-[0_0_30px_rgba(108,59,255,0.15)] lg:p-6"
                      style={{ animationDelay: `${sIdx * 90}ms` }}
                    >
                      <div className="flex space-x-3 text-center">
                        <span className={`mb-4 block h-2 w-2 rounded-full bg-gradient-to-r ${activeService.color} shadow-[0_0_12px_currentColor] group-hover:scale-150 transition-transform duration-500`} />
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors lg:text-xs">
                          {sub}
                        </h4>
                      </div>
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
          transform: translate(-50%, -50%) translateZ(calc(var(--i) * -120px));
          animation: tunnelMove 4.2s linear infinite;
          animation-delay: calc(var(--i) * -0.14s);
        }

        .tunnel span:nth-child(2n) {
          border-color: rgba(168, 85, 247, 0.32);
          box-shadow: 0 0 22px rgba(168, 85, 247, 0.4);
        }

        @keyframes tunnelMove {
          0% {
            transform: translate(-50%, -50%) translateZ(-2600px) scale(0.2);
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

        @keyframes serviceFadeIn {
          from {
            opacity: 0;
            transform: translateY(34px) scale(0.96);
            filter: blur(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes serviceFadeOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-26px) scale(0.97);
            filter: blur(12px);
          }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.96);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
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

        .service-content-in {
          animation: serviceFadeIn 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .service-content-out {
          animation: serviceFadeOut 0.26s cubic-bezier(0.7, 0, 0.84, 0) both;
        }

        .service-content-in .service-card {
          opacity: 0;
          animation: cardFadeIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
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
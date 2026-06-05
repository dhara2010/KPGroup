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

  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const [isLocked, setIsLocked] = useState(false);
  const isLockedRef = useRef(false);

  const [innerActiveIndex, setInnerActiveIndex] = useState(0);
  const innerIndexRef = useRef(0);

  const lastProgressRef = useRef(0);
  const touchStartY = useRef(0);
  const lastTransitionTime = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const current = -rect.top;
      const progressVal = Math.max(0, Math.min(1, current / total));

      setProgress(progressVal);

      const last = lastProgressRef.current;
      const revealStart = 0.38;

      if (!isLockedRef.current) {
        if (last < revealStart && progressVal >= revealStart) {
          isLockedRef.current = true;
          setIsLocked(true);
          innerIndexRef.current = 0;
          setInnerActiveIndex(0);

          setTimeout(() => {
            const targetScrollY =
              window.scrollY + rect.top + total * revealStart;

            window.scrollTo(0, targetScrollY);

            if (window.lenis) {
              window.lenis.scrollTo(targetScrollY, { immediate: true });
            }
          }, 0);
        } else if (last > revealStart && progressVal <= revealStart) {
          isLockedRef.current = true;
          setIsLocked(true);
          innerIndexRef.current = divisions.length - 1;
          setInnerActiveIndex(divisions.length - 1);

          setTimeout(() => {
            const targetScrollY =
              window.scrollY + rect.top + total * revealStart;

            window.scrollTo(0, targetScrollY);

            if (window.lenis) {
              window.lenis.scrollTo(targetScrollY, { immediate: true });
            }
          }, 0);
        }
      }

      lastProgressRef.current = progressVal;
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleInnerScroll = (isDown) => {
    const now = Date.now();
    const COOLDOWN = 800;

    if (now - lastTransitionTime.current < COOLDOWN) return;

    if (isDown) {
      if (innerIndexRef.current < divisions.length - 1) {
        innerIndexRef.current += 1;
        setInnerActiveIndex(innerIndexRef.current);
        lastTransitionTime.current = now;
      } else {
        isLockedRef.current = false;
        setIsLocked(false);
      }
    } else {
      if (innerIndexRef.current > 0) {
        innerIndexRef.current -= 1;
        setInnerActiveIndex(innerIndexRef.current);
        lastTransitionTime.current = now;
      } else {
        isLockedRef.current = false;
        setIsLocked(false);
      }
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      handleInnerScroll(e.deltaY > 0);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (Math.abs(deltaY) > 40) {
        handleInnerScroll(deltaY > 0);
        touchStartY.current = currentY;
      }
    };

    const handleKeyDown = (e) => {
      const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "];

      if (keys.includes(e.key)) {
        e.preventDefault();

        const isDown = ["ArrowDown", "PageDown", " "].includes(e.key);
        handleInnerScroll(isDown);
      }
    };

    if (isLocked) {
      if (window.lenis) window.lenis.stop();

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      window.addEventListener("keydown", handleKeyDown, { passive: false });
    } else {
      if (window.lenis) window.lenis.start();
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
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const introEnd = 0.22;
  const revealStart = 0.38;

  const p1 = Math.min(progress / introEnd, 1);
  const p2 =
    progress > introEnd && progress < revealStart
      ? (progress - introEnd) / (revealStart - introEnd)
      : 0;

  let p3 = 0;
  let activeIndex = 0;

  if (isLocked) {
    p3 = innerActiveIndex / (divisions.length - 1);
    activeIndex = innerActiveIndex;
  } else {
    if (progress >= revealStart) {
      p3 = 1;
      activeIndex = divisions.length - 1;
    }
  }

  const showIntro = progress < introEnd;
  const showServices = progress >= revealStart || isLocked;

  const tunnelStyle = showServices
    ? {
      position: "absolute",
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      zIndex: 0,
    }
    : {
      position: "absolute",
      left: isMobile ? `${5 * (1 - p1)}%` : `${10 * (1 - p1)}%`,
      top: isMobile ? `${20 * (1 - p1)}%` : `${20 * (1 - p1)}%`,
      width: isMobile ? `${90 + p1 * 10}%` : `${40 + p1 * 60}%`,
      height: isMobile ? `${50 + p1 * 50}%` : `${60 + p1 * 40}%`,
      borderRadius: `${42 * (1 - p1)}px`,
      zIndex: 0,
      boxShadow: `0 30px 100px rgba(0, 255, 255, ${0.25 * (1 - p1)
        })`,
    };

  const tunnelScale = 1 + p1 * 0.8;
  const tunnelTranslateY = progress * -60;

  const overlayColors = [
    "rgba(6, 182, 212, 0.15)",
    "rgba(59, 130, 246, 0.25)",
    "rgba(168, 85, 247, 0.25)",
    "rgba(236, 72, 153, 0.25)",
    "rgba(16, 185, 129, 0.25)",
    "rgba(249, 115, 22, 0.25)",
  ];

  const colorIndex = showServices ? activeIndex + 1 : 0;
  const activeOverlay = overlayColors[colorIndex];

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        {/* Tunnel Container */}
        <div
          className="overflow-hidden bg-black transition-all duration-300 border-black"
          style={{
            ...tunnelStyle,
            borderWidth: showServices ? "0px" : `${14 * (1 - p1)}px`,
          }}
        >
          <div
            className="absolute z-0 transition-transform duration-300"
            style={{
              left: showServices ? "0vw" : (isMobile ? `${-5 * (1 - p1)}vw` : `${-10 * (1 - p1)}vw`),
              top: showServices ? "0vh" : `${-20 * (1 - p1)}vh`,
              width: "100vw",
              height: "100vh",
              transform: `scale(${tunnelScale}) translateY(${tunnelTranslateY}px)`,
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
                src="/videos/tunnel.mp4"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              />
            )}

            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_20%,black_85%)]" />
            <div className="absolute inset-0 z-20 bg-black/45" />

            <div
              className="absolute inset-0 z-30 pointer-events-none transition-colors duration-1000"
              style={{
                backgroundColor: activeOverlay,
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        {/* Intro */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-6 transition-all duration-500 font-sans"
          style={{
            opacity: showIntro ? 1 - p1 : 0,
            transform: `scale(${1 + p1 * 1.5}) translateY(-20px)`,
            pointerEvents: showIntro ? "auto" : "none",
          }}
        >
          <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-6" />

            <div className="lg:col-span-6">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-cyan-300">
                Infrastructure
              </p>

              <h2 className="text-4xl font-light uppercase leading-tight tracking-[0.14em] text-white md:text-6xl">
                Step into a new world
                <span className="mt-3 block bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-300 bg-clip-text font-black text-transparent">
                  and let your ecosystem run wild
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-400 font-light">
                KP Global integrates all business verticals into one premium,
                high-speed ecosystem. Scroll down to route core networks.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div
          className="absolute inset-0 z-30 flex h-full w-full items-center justify-center overflow-hidden font-sans"
          style={{
            opacity: showServices ? 1 : 0,
            pointerEvents: showServices ? "auto" : "none",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div
            className="flex h-full w-full flex-col"
            style={{
              transform: `translateY(${-p3 * 100 * (divisions.length - 1)}vh)`,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {divisions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="relative flex h-screen w-full shrink-0 items-center justify-center px-6"
                >
                  <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                    <div className="space-y-5 lg:col-span-5">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} shadow-lg shadow-black/40 lg:h-20 lg:w-20`}
                      >
                        <Icon className="h-8 w-8 text-white lg:h-10 lg:w-10" />
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 font-mono lg:text-xs">
                          ROUTING CORE // {item.id.toUpperCase()}_SVC
                        </p>

                        <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-7xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:text-lg">
                        {item.desc}
                      </p>

                      <p className="max-w-lg text-sm leading-relaxed text-gray-300 font-light">
                        {item.details}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                      {item.subservices.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-black/75 lg:p-6"
                        >
                          <span
                            className={`mb-4 block h-2 w-2 rounded-full bg-gradient-to-r ${item.color}`}
                          />
                          <h4 className="text-xs font-black uppercase tracking-wider text-white lg:text-sm">
                            {sub}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
        `}</style>
      </div>
    </section>
  );
}
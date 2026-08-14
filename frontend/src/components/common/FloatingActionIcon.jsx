import React from "react";
import { Layers } from "lucide-react";

export function FloatingActionIcon() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes floatMorphBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            border-radius: 10px 14px 10px 14px;
          }
          25% {
            transform: translateY(-5px) rotate(-3deg) scale(0.97);
            border-radius: 14px 10px 14px 10px;
          }
          50% {
            transform: translateY(-2px) rotate(2deg) scale(1.03);
            border-radius: 12px 12px 12px 12px;
          }
          75% {
            transform: translateY(-6px) rotate(-1.5deg) scale(0.98);
            border-radius: 10px 14px 12px 10px;
          }
        }

        @keyframes pulseGlowRing {
          0%, 100% {
            box-shadow: 0 0 14px rgba(108, 59, 255, 0.55), 0 0 28px rgba(168, 85, 247, 0.35);
          }
          50% {
            box-shadow: 0 0 22px rgba(108, 59, 255, 0.85), 0 0 40px rgba(168, 85, 247, 0.55);
          }
        }

        .floating-action-icon-btn {
          animation: floatMorphBob 3.6s ease-in-out infinite, pulseGlowRing 3.6s ease-in-out infinite;
          will-change: transform, border-radius, box-shadow;
        }

        .floating-action-icon-btn:hover {
          animation-play-state: paused;
          transform: translateY(-3px) scale(1.12) rotate(4deg) !important;
          border-radius: 12px !important;
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.95), 0 0 50px rgba(108, 59, 255, 0.75) !important;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
        <button
          onClick={handleClick}
          aria-label="Floating Navigation Action"
          title="Scroll to Top"
          className="floating-action-icon-btn relative w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-gradient-to-tr from-[#5B21B6] via-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white border border-white/25 transition-all duration-300 cursor-pointer shadow-lg active:scale-95 group"
        >
          {/* Subtle Inner Glare Overlay */}
          <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-white/35 to-transparent pointer-events-none group-hover:opacity-100 transition-opacity" />

          {/* Core Icon */}
          <Layers className="relative z-10 w-4 h-4 sm:w-4.5 sm:h-4.5 text-white filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </>
  );
}


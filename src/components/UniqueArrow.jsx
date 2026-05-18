import React from 'react';

export default function UniqueArrow({ className = "w-5 h-5", direction = "right" }) {
  // Determine translation values based on direction
  const isDiagonal = direction === "up-right";
  
  const primaryExit = isDiagonal 
    ? "group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" 
    : "group-hover:translate-x-[150%]";
    
  const secondaryEntry = isDiagonal 
    ? "-translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" 
    : "-translate-x-[150%] group-hover:translate-x-0";

  return (
    <div className={`relative overflow-hidden inline-flex items-center justify-center ${className}`}>
      {/* Primary Arrow (Leaves on hover) */}
      <svg 
        className={`absolute transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] transform ${primaryExit} w-full h-full`} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {isDiagonal ? (
          <>
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </>
        ) : (
          <>
            <path d="M4 12h16" />
            <path d="m13 5 7 7-7 7" />
          </>
        )}
      </svg>
      
      {/* Secondary Arrow (Enters on hover) */}
      <svg 
        className={`absolute transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] transform ${secondaryEntry} w-full h-full`} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {isDiagonal ? (
          <>
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </>
        ) : (
          <>
            <path d="M4 12h16" />
            <path d="m13 5 7 7-7 7" />
          </>
        )}
      </svg>
    </div>
  );
}

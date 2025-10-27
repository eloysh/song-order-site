"use client";
import { useRef } from "react";

export default function BrandLogo({
  size = 140,
  withWordmark = true,
  className = "",
}) {
  const glowRef = useRef(null);
  
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Neon glow effect */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-full opacity-75 blur-xl bg-gradient-to-br from-sky-400 to-sky-600"
        />
        
        {/* Icon */}
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#logo-gradient)"
              className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            />
            <defs>
              <linearGradient
                id="logo-gradient"
                x1="2"
                y1="3"
                x2="22"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      {withWordmark && (
        <div className="mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">
          <span className="opacity-90">AI</span>{" "}
          <span className="opacity-80">Memories</span>
        </div>
      )}
    </div>
  );
}

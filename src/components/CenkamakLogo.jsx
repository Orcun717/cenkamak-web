import React from 'react';

export default function CenkamakLogo({ size = "md", showSubtitle = true, lightMode = false }) {
  const dimensions = {
    sm: { icon: 36, title: "text-xl", sub: "text-[9px]" },
    md: { icon: 44, title: "text-2xl", sub: "text-[10px]" },
    lg: { icon: 56, title: "text-3xl", sub: "text-xs" }
  }[size] || { icon: 44, title: "text-2xl", sub: "text-[10px]" };

  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {/* Authentic CENKAMAK Globe & Arc Emblem */}
      <div className="relative flex items-center justify-center">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 100 100"
          aria-label="CENKAMAK Logo"
        >
          <defs>
            <linearGradient id="cenkRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" />
              <stop offset="100%" stopColor="#D84315" />
            </linearGradient>
            <linearGradient id="cenkYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD54F" />
              <stop offset="100%" stopColor="#FFB300" />
            </linearGradient>
          </defs>

          {/* Outer Red Crescent Left */}
          <path
            d="M 55 6 A 44 44 0 1 0 55 94 L 55 78 A 28 28 0 1 1 55 22 Z"
            fill="url(#cenkRedGrad)"
          />

          {/* Right Yellow Band for CENKAMAK Arc Text */}
          <path
            d="M 55 16 A 34 34 0 0 1 55 84 L 55 75 A 25 25 0 0 0 55 25 Z"
            fill="url(#cenkYellowGrad)"
          />

          {/* Inner Globe Circle */}
          <circle cx="52" cy="50" r="23" fill="#FFFFFF" stroke="#121418" strokeWidth="2" />

          {/* Globe Latitude & Longitude Grid Lines */}
          <ellipse cx="52" cy="50" rx="23" ry="8" fill="none" stroke="#121418" strokeWidth="1.8" />
          <ellipse cx="52" cy="50" rx="23" ry="16" fill="none" stroke="#121418" strokeWidth="1.5" />
          <ellipse cx="52" cy="50" rx="8" ry="23" fill="none" stroke="#121418" strokeWidth="1.8" />
          <ellipse cx="52" cy="50" rx="16" ry="23" fill="none" stroke="#121418" strokeWidth="1.5" />
          <line x1="29" y1="50" x2="75" y2="50" stroke="#121418" strokeWidth="2" />
          <line x1="52" y1="27" x2="52" y2="73" stroke="#121418" strokeWidth="2" />

          {/* Arc Text Indicator Dots along Yellow Ring */}
          <path
            id="cenkArcPath"
            d="M 56 22 A 28 28 0 0 1 56 78"
            fill="none"
          />
          <text
            fill="#121418"
            fontSize="6.5"
            fontWeight="800"
            letterSpacing="1.2"
            fontFamily="Space Grotesk, sans-serif"
          >
            <textPath href="#cenkArcPath" startOffset="8%">
              CENKAMAK
            </textPath>
          </text>
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-display font-extrabold tracking-tight ${dimensions.title} ${
              lightMode ? "text-[#121418]" : "text-white"
            }`}
          >
            CENK<span className="text-[#FF5722]">AMAK</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] inline-block mb-3" />
        </div>
        {showSubtitle && (
          <span
            className={`font-tech uppercase tracking-[0.2em] font-semibold mt-0.5 ${dimensions.sub} ${
              lightMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            San. Tic. Ltd. Şti.
          </span>
        )}
      </div>
    </div>
  );
}

import React from "react";

export default function GeometricBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#F8FAFC] min-h-screen overflow-hidden">
      {/* OPTION 6 - MINIMAL GEOMETRIC BACKGROUND SVG LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <svg
          className="w-full h-full min-h-[1200px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 1200"
        >
          <defs>
            {/* SUBTLE DIAGONAL PATTERN */}
            <pattern
              id="diagonalGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60L60 0M0 0L60 60"
                fill="none"
                stroke="#0F172A"
                strokeWidth="0.5"
                strokeOpacity="0.035"
              />
            </pattern>
            <linearGradient id="blueAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052CC" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="navyBlockGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0052CC" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* BACKGROUND DIAGONAL GRID LAYER */}
          <rect width="100%" height="100%" fill="url(#diagonalGrid)" />

          {/* LARGE ANGULAR TRIANGULAR / GEOMETRIC PLANES - TOP LEFT */}
          <path
            d="M-100 -50 L650 -50 L250 500 Z"
            fill="url(#navyBlockGrad)"
            stroke="#0F172A"
            strokeWidth="1"
            strokeOpacity="0.06"
          />
          <path
            d="M-50 -50 L450 -50 L-50 450 Z"
            fill="url(#blueAccentGrad)"
          />
          <line
            x1="0"
            y1="0"
            x2="700"
            y2="550"
            stroke="#0052CC"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            strokeDasharray="6 6"
          />

          {/* LARGE GEOMETRIC PLANES - TOP RIGHT */}
          <path
            d="M1540 -50 L850 -50 L1250 600 Z"
            fill="rgba(15, 23, 42, 0.03)"
            stroke="#0F172A"
            strokeWidth="1"
            strokeOpacity="0.08"
          />
          <polygon
            points="1440,0 1100,0 1440,350"
            fill="rgba(0, 82, 204, 0.04)"
            stroke="#0052CC"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
          <line
            x1="1500"
            y1="-20"
            x2="750"
            y2="700"
            stroke="#0F172A"
            strokeWidth="1"
            strokeOpacity="0.08"
          />

          {/* CENTER MIDGROUND ACCENT GEOMETRIC LINES */}
          <polyline
            points="100,600 350,850 700,500 1100,900"
            fill="none"
            stroke="#0052CC"
            strokeWidth="1.5"
            strokeOpacity="0.15"
          />
          <polygon
            points="200,750 450,1000 100,1100"
            fill="rgba(15, 23, 42, 0.025)"
            stroke="#0F172A"
            strokeWidth="1"
            strokeOpacity="0.05"
          />

          {/* BOTTOM RIGHT GEOMETRIC PLANES */}
          <path
            d="M1540 1250 L750 1250 L1200 650 Z"
            fill="url(#navyBlockGrad)"
            stroke="#0F172A"
            strokeWidth="1"
            strokeOpacity="0.06"
          />
          <line
            x1="600"
            y1="1200"
            x2="1440"
            y2="500"
            stroke="#0052CC"
            strokeWidth="1.5"
            strokeOpacity="0.18"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

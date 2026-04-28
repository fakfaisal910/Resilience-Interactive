import { Mountain, Waves } from 'lucide-react';

interface LogoProps {
  size?: number;
}

export function Logo({ size = 60 }: LogoProps) {
  const iconSize = size * 0.32;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Green Shield with enhanced details */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="absolute inset-0 drop-shadow-lg"
      >
        <defs>
          {/* Shield fill gradient */}
          <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
          </linearGradient>

          {/* Shield glow */}
          <radialGradient id="shieldGlow" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow effect */}
        <path
          d="M 50 5 L 85 22 L 85 50 Q 85 72 50 92 Q 15 72 15 50 L 15 22 Z"
          fill="url(#shieldGlow)"
          opacity="0.6"
        />

        {/* Main shield shape */}
        <path
          d="M 50 5 L 85 22 L 85 50 Q 85 72 50 92 Q 15 72 15 50 L 15 22 Z"
          fill="url(#shieldFill)"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner shield detail line */}
        <path
          d="M 50 12 L 78 26 L 78 50 Q 78 68 50 84 Q 22 68 22 50 L 22 26 Z"
          fill="none"
          stroke="#34D399"
          strokeWidth="1.5"
          opacity="0.4"
          strokeLinejoin="round"
        />

        {/* Highlight effect */}
        <path
          d="M 50 12 L 65 20 L 65 38 Q 65 45 50 50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.2"
          strokeLinecap="round"
        />

        {/* Three tier dots on the side */}
        <g transform="translate(88, 35)">
          <circle cx="0" cy="0" r="2.5" fill="#10B981" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <circle cx="0" cy="9" r="2.5" fill="#F59E0B" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <circle cx="0" cy="18" r="2.5" fill="#06B6D4" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
        </g>
      </svg>

      {/* Container for icons */}
      <div className="relative flex flex-col items-center justify-center gap-0.5" style={{ paddingTop: size * 0.08, paddingBottom: size * 0.12 }}>
        {/* Mountain Icon (Earthquake) - Top */}
        <div className="relative">
          {/* Glow effect behind mountain */}
          <div className="absolute inset-0 blur-sm">
            <Mountain
              size={iconSize}
              className="text-orange-400"
              strokeWidth={2}
              fill="currentColor"
              fillOpacity={0.6}
            />
          </div>
          {/* Main mountain */}
          <Mountain
            size={iconSize}
            className="text-orange-500 relative"
            strokeWidth={2.5}
            fill="currentColor"
            fillOpacity={0.5}
          />
        </div>

        {/* Divider line */}
        <div
          style={{
            width: size * 0.3,
            height: 2,
            background: 'linear-gradient(to right, transparent, #10B981, transparent)',
            opacity: 0.3
          }}
        />

        {/* Waves Icon (Tsunami) - Bottom */}
        <div className="relative">
          {/* Glow effect behind waves */}
          <div className="absolute inset-0 blur-sm">
            <Waves
              size={iconSize}
              className="text-cyan-400"
              strokeWidth={2}
              fill="currentColor"
              fillOpacity={0.6}
            />
          </div>
          {/* Main waves */}
          <Waves
            size={iconSize}
            className="text-cyan-500 relative"
            strokeWidth={2.5}
            fill="currentColor"
            fillOpacity={0.5}
          />
        </div>
      </div>
    </div>
  );
}

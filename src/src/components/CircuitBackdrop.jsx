import React from 'react'

/**
 * Subtle SVG circuit motif behind hero — brand teal/cyan, low contrast.
 */
function CircuitBackdrop({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-40 ${className}`}
      aria-hidden
    >
      <svg
        className="circuit-pulse h-full w-full min-h-[120%] text-teal-500/30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="jh-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.45" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#jh-circuit-grad)" strokeWidth="0.6">
          <path d="M0 120h400l80-80h520" />
          <path d="M0 280h200l60 60h760" />
          <path d="M120 0v200l100 100v500" />
          <path d="M800 0v160l-120 120v400" />
          <path d="M400 600l140-140 200 20 180-180" />
          <circle cx="400" cy="200" r="3" fill="#2dd4bf" fillOpacity="0.5" stroke="none" />
          <circle cx="680" cy="320" r="2.5" fill="#2dd4bf" fillOpacity="0.4" stroke="none" />
          <circle cx="240" cy="420" r="2" fill="#5eead4" fillOpacity="0.35" stroke="none" />
        </g>
      </svg>
    </div>
  )
}

export default CircuitBackdrop

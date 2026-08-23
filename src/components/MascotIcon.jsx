import React from 'react';

export default function MascotIcon({ className = "w-10 h-10", size = 40, showBackground = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background circle */}
        {showBackground && <circle cx="50" cy="50" r="48" fill="#1B4332" />}
        
        {/* Arch Motif Backdrop in Terracotta */}
        <path d="M 25,60 A 25,25 0 0,1 75,60 L 75,85 L 25,85 Z" fill="#C65D3B" />

        {/* Afro Hair */}
        <circle cx="50" cy="38" r="22" fill="#1B2A2A"/>
        <circle cx="36" cy="34" r="14" fill="#1B2A2A"/>
        <circle cx="64" cy="34" r="14" fill="#1B2A2A"/>
        <circle cx="50" cy="24" r="14" fill="#1B2A2A"/>
        
        {/* Face */}
        <circle cx="50" cy="45" r="14" fill="#F5F0E6"/>
        
        {/* Eyes */}
        <circle cx="44" cy="43" r="2" fill="#1B2A2A"/>
        <circle cx="56" cy="43" r="2" fill="#1B2A2A"/>
        
        {/* Mustache */}
        <path d="M 40,49 Q 50,47 60,49 Q 55,54 50,50 Q 45,54 40,49 Z" fill="#1B2A2A"/>
        
        {/* Coffee Cup */}
        <rect x="58" y="58" width="16" height="18" rx="3" fill="#F5F0E6" stroke="#C65D3B" strokeWidth="2"/>
        {/* Cup Handle */}
        <path d="M 74,62 C 78,62 78,72 74,72" fill="none" stroke="#C65D3B" strokeWidth="2"/>
        {/* Steam */}
        <path d="M 62,54 Q 64,50 62,46" fill="none" stroke="#F5F0E6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M 68,55 Q 70,51 68,47" fill="none" stroke="#F5F0E6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

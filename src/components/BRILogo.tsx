import React from 'react';

const BRILogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* BRI Logo Recreation */}
      <rect width="120" height="40" rx="4" fill="#003d82"/>
      
      {/* B */}
      <path d="M8 8h8c2.5 0 4.5 1 4.5 3s-1 2.5-1 2.5c1.5 0.5 2.5 1.5 2.5 3.5 0 2.5-2 3-4.5 3H8V8z" fill="white"/>
      <rect x="11" y="11" width="4" height="2" fill="#003d82"/>
      <rect x="11" y="15" width="5" height="2" fill="#003d82"/>
      
      {/* R */}
      <path d="M24 8h8c2.5 0 4.5 1.5 4.5 4s-1.5 3-3 3.5l3.5 4.5h-3.5l-3-4h-3v4H24V8z" fill="white"/>
      <rect x="27" y="11" width="5" height="2" fill="#003d82"/>
      
      {/* I */}
      <rect x="40" y="8" width="3" height="12" fill="white"/>
      <rect x="38" y="8" width="7" height="2" fill="white"/>
      <rect x="38" y="18" width="7" height="2" fill="white"/>
      
      {/* Decorative elements */}
      <circle cx="55" cy="14" r="2" fill="#ffd700"/>
      <rect x="60" y="12" width="8" height="4" rx="2" fill="#ffd700"/>
      
      {/* Text "Bank Rakyat Indonesia" */}
      <text x="70" y="16" fontSize="6" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">
        BANK RAKYAT
      </text>
      <text x="70" y="24" fontSize="6" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">
        INDONESIA
      </text>
      
      {/* Bottom accent */}
      <rect x="0" y="36" width="120" height="4" fill="#ffd700"/>
    </svg>
  );
};

export default BRILogo;
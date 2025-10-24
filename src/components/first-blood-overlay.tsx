'use client';

import React, { useEffect, useState } from 'react';

interface FirstBloodOverlayProps {
  isVisible: boolean;
  teamName?: string;
  onHide: () => void;
}

const FirstBloodOverlay: React.FC<FirstBloodOverlayProps> = ({ isVisible, teamName, onHide }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      // Start exit animation after 3 seconds
      const exitTimer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onHide();
        }, 500); // Match animation duration
      }, 3000);

      return () => clearTimeout(exitTimer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        .first-blood-text {
          text-shadow: 
            0 0 10px #ff0000,
            0 0 20px #ff0000,
            0 0 30px #ff0000,
            0 0 40px #ff0000,
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000;
          animation: pulse-glow 1s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          from {
            text-shadow: 
              0 0 10px #ff0000,
              0 0 20px #ff0000,
              0 0 30px #ff0000,
              0 0 40px #ff0000,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
          to {
            text-shadow: 
              0 0 20px #ff0000,
              0 0 30px #ff0000,
              0 0 40px #ff0000,
              0 0 50px #ff0000,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
        }

        .pixel-card {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border: 4px solid rgba(0,0,0,0.3);
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-all duration-500 ${
          isAnimating 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        
        {/* Main overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Team info if available */}
          {teamName && (
            <div 
              className={`mb-4 pixel-card bg-black text-white px-6 py-3 text-lg font-bold transition-all duration-300 ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {teamName}
            </div>
          )}
          
          {/* Main FIRST BLOOD text */}
          <div 
            className={`first-blood-text text-red-400 text-6xl md:text-8xl font-bold pixel-font transition-all duration-500 ${
              isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            FIRST BLOOD
          </div>
          
          {/* Subtitle */}
          <div 
            className={`mt-4 text-white text-xl font-semibold pixel-font transition-all duration-400 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Challenge Solved!
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBloodOverlay;
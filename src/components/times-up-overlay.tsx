'use client';

import React, { useEffect, useState } from 'react';

interface TimesUpOverlayProps {
  isVisible: boolean;
  onHide: () => void;
}

const TimesUpOverlay: React.FC<TimesUpOverlayProps> = ({ isVisible, onHide }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      // Start exit animation after 4 seconds
      const exitTimer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onHide();
        }, 500); // Match animation duration
      }, 4000);

      return () => clearTimeout(exitTimer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        .times-up-text {
          text-shadow: 
            0 0 10px #ffffff,
            0 0 20px #ffffff,
            0 0 30px #ffffff,
            0 0 40px #ffffff,
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000;
          animation: pulse-glow-white 1s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow-white {
          from {
            text-shadow: 
              0 0 10px #ffffff,
              0 0 20px #ffffff,
              0 0 30px #ffffff,
              0 0 40px #ffffff,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
          to {
            text-shadow: 
              0 0 20px #ffffff,
              0 0 30px #ffffff,
              0 0 40px #ffffff,
              0 0 50px #ffffff,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
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
          {/* Main TIME'S UP text */}
          <div 
            className={`times-up-text text-white text-6xl md:text-8xl font-bold pixel-font transition-all duration-500 ${
              isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            TIME'S UP!
          </div>
        </div>
      </div>
    </>
  );
};

export default TimesUpOverlay;
'use client';

import React, { useEffect, useState } from 'react';

interface CongratulationsOverlayProps {
  isVisible: boolean;
  teamName?: string;
  points?: number;
  onHide: () => void;
}

const CongratulationsOverlay: React.FC<CongratulationsOverlayProps> = ({
  isVisible,
  teamName = 'Team A',
  points = 8161,
  onHide,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);

      // Start exit animation after 5 seconds
      const exitTimer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onHide();
        }, 500); // Match animation duration
      }, 5000);

      return () => clearTimeout(exitTimer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        .pixel-card-gold {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border: 4px solid #D9B75F;
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }

        .congratulations-text {
          text-shadow: 
            0 0 10px #D3B65F,
            0 0 20px #D3B65F,
            0 0 30px #D3B65F,
            0 0 40px #D3B65F,
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000;
          animation: pulse-glow-gold 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow-gold {
          from {
            text-shadow: 
              0 0 10px #D3B65F,
              0 0 20px #D3B65F,
              0 0 30px #D3B65F,
              0 0 40px #D3B65F,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
          to {
            text-shadow: 
              0 0 20px #D3B65F,
              0 0 30px #D3B65F,
              0 0 40px #D3B65F,
              0 0 50px #D3B65F,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000;
          }
        }

        .teal-icon-gradient {
          background: linear-gradient(135deg, #4FD1C7 0%, #2DD4BF 100%);
          border: 4px solid rgba(0,0,0,0.3);
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-all duration-500 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Main overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Winner title */}
          <div
            className={`text-white text-sm font-bold pixel-font mb-4 transition-all duration-300 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Winner
          </div>

          {/* Main Congratulations text */}
          <div
            className={`congratulations-text text-yellow-300 text-4xl font-bold pixel-font text-center mb-6 transition-all duration-500 ${
              isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Congratulations!
          </div>

          {/* Icon (bare image, no background) */}
          <div
            className={`flex justify-center mb-6 transition-all duration-400 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div
              className="w-20 h-20 flex items-center justify-center bg-transparent"
              style={{ imageRendering: 'pixelated' }}
            >
              {/* Bare image only - no surrounding background or border */}
              <img
                src="/blue_cube.png"
                alt="Happy face cube"
                className="w-12 h-12 object-contain"
                style={{ imageRendering: 'pixelated', background: 'transparent' }}
              />
            </div>
          </div>

          {/* Team Info */}
          <div
            className={`text-white text-lg font-bold pixel-font text-center transition-all duration-400 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div>{teamName}</div>
            <div>{points.toLocaleString()} points</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongratulationsOverlay;
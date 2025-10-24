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
        .congrats-gold {
          color: #D3B65F;
          text-shadow:
            0 0 10px #D3B65F,
            0 0 20px #D3B65F,
            0 0 30px #D3B65F,
            0 0 40px #D3B65F,
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000;
          font-size: 4.5rem;
          font-weight: bold;
          font-family: inherit;
          animation: pulse-glow-gold 1s ease-in-out infinite alternate;
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
        .team-points {
          color: #fff;
          text-shadow: 0 2px 8px #000, 0 0 2px #D3B65F;
          font-size: 1.45rem;
          font-weight: bold;
          margin-top: 1.2rem;
          text-align: center;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-all duration-500 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Main overlay content - no border, no container, just centered */}
        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-auto">
          {/* Main Congratulations text */}
          <div
            className={`congrats-gold pixel-font text-center mb-8 transition-all duration-500 ${
              isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '200ms'}}
          >
            Congratulations!
          </div>

          {/* Icon (cube, no border) */}
          <div
            className={`mb-8 transition-all duration-400 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ width: '120px', height: '120px', transitionDelay: '300ms', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src="/blue_cube.png"
              alt="Happy face cube"
              className="object-contain"
              style={{ width: '120px', height: '120px', imageRendering: 'pixelated', background: 'transparent' }}
            />
          </div>

          {/* Team Info */}
          <div
            className={`team-points pixel-font transition-all duration-400 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms'}}
          >
            <div>{teamName}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 400, marginTop: '0.2em' }}>{points.toLocaleString()} points</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongratulationsOverlay;
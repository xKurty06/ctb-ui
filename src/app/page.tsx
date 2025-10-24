'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Squares } from "@/components/ui/squares-background"
import HeroPageContent from "@/components/hero-page"

export default function Page() {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)

  const handleJoinLobby = () => {
    setTransitioning(true)
    setTimeout(() => {
      router.push('/join-lobby')
    }, 1000)
  }

  return (
    <>
      <style>{`
        .pixel-card {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border: 4px solid rgba(0,0,0,0.3);
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }
        
        .pixel-element {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        @keyframes buttonGlow {
          0%, 100% {
            box-shadow: 
              0 0 5px rgba(57, 255, 20, 0.5),
              0 0 10px rgba(57, 255, 20, 0.3),
              0 0 15px rgba(57, 255, 20, 0.1),
              inset 0 0 2px rgba(57, 255, 20, 0.2);
          }
          50% {
            box-shadow: 
              0 0 10px rgba(57, 255, 20, 0.7),
              0 0 20px rgba(57, 255, 20, 0.5),
              0 0 30px rgba(57, 255, 20, 0.3),
              inset 0 0 5px rgba(57, 255, 20, 0.4);
          }
        }

        .start-button {
          position: relative;
          background: rgba(57, 255, 20, 0.02);
          border: 1px solid #39FF14;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: buttonGlow 2s ease-in-out infinite;
        }

        .start-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(57, 255, 20, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .start-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(57, 255, 20, 0.2) 50%,
            transparent 100%
          );
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }

        .start-button:hover {
          border-color: rgba(57, 255, 20, 1);
          background: rgba(57, 255, 20, 0.1);
          box-shadow: 
            0 0 15px rgba(57, 255, 20, 0.8),
            0 0 30px rgba(57, 255, 20, 0.6),
            0 0 45px rgba(57, 255, 20, 0.4),
            inset 0 0 10px rgba(57, 255, 20, 0.4);
          text-shadow: 0 0 8px rgba(57, 255, 20, 0.8);
          letter-spacing: 0.2em;
        }

        .start-button:hover::before {
          opacity: 0.3;
        }

        .start-button:hover::after {
          transform: translateX(100%);
        }

        .start-button:active {
          transform: scale(0.96);
          border-color: rgba(57, 255, 20, 1);
        }

        @keyframes glitch {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          2%, 4%, 6% {
            clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%);
            transform: translate(-2px);
          }
          3%, 5%, 7% {
            clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%);
            transform: translate(2px);
          }
          8% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }

        .start-button:hover span {
          animation: glitch 3s infinite;
        }
      `}</style>

      <div 
        className={`relative w-full h-screen transition-all duration-1000 ${
          transitioning 
            ? 'scale-95 opacity-0 blur-lg' 
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <Squares
          direction="down"
          speed={0.5}
          borderColor="#333"
          squareSize={80}
          hoverFillColor="#222"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-16">
          {/* Move content up by adding negative margin */}
          <div className="mt-[-3%] pointer-events-none max-w-[1200px] w-full mx-auto flex justify-center">
            <HeroPageContent />
          </div>
          
          {/* Join Lobby Button */}
          <div className="pointer-events-auto flex justify-center">
            <button
              onClick={handleJoinLobby}
              className="start-button px-10 py-3 text-[#39FF14] font-bold text-lg tracking-wider
              transition-all duration-300"
              style={{ textShadow: '0 0 5px rgba(57, 255, 20, 0.5)' }}
            >
              START
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`fixed inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <p 
            className={`text-white text-xl font-light tracking-wide transition-opacity duration-500 ${
              transitioning ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Loading game...
          </p>
        </div>
      </div>
    </>
  )
}
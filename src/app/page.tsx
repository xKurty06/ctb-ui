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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <HeroPageContent />
        </div>
        
        {/* Join Lobby Button */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-auto">
          <button
            onClick={handleJoinLobby}
            className="pixel-card px-8 py-4 bg-white/70 text-black font-bold text-lg tracking-wide hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Start
          </button>
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
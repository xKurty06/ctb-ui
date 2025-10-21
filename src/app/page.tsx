'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Squares } from "@/components/ui/squares-background"
import HeroPageContent from "@/components/hero-page"

export default function Page() {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setTransitioning(true)
    }, 4000)

    const navTimer = setTimeout(() => {
      router.push('/ctb')
    }, 5000)

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(navTimer)
    }
  }, [router])

  return (
    <>
      <div 
        className={`relative w-full h-screen transition-all duration-1000 ${
          transitioning 
            ? 'scale-95 opacity-0 blur-lg' 
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={80}
          hoverFillColor="#222"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <HeroPageContent />
        </div>
      </div>
      <div 
        className={`fixed inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <p 
            className={`text-white text-xl font-light tracking-wide transition-opacity duration-500 font-[family-name:var(--font-space-grotesk)] ${
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
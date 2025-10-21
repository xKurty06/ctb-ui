'use client'
import React from 'react'
import { Squares } from "@/components/ui/squares-background"
import Cards from '@/components/ctb-cards'
import Race from '@/components/race-ui'

const Page = () => {
  return (
    <div className="relative w-full h-screen transition-opacity duration-500">
      <Squares
        direction="diagonal"
        speed={0.5}
        borderColor="#333"
        squareSize={80}
        hoverFillColor="#222"
        backgroundColor="#D3B65F"
      />

      <div className="absolute inset-0 flex flex-col pointer-events-none gap-6 p-12">
        {/* ===== Top Race Section ===== */}
        <div className="h-[40%] flex items-center justify-center bg-black rounded-md shadow-[0_0_40px_10px_#61C9C8C4] overflow-hidden">
            <Race />
        </div>

        {/* ===== Bottom Cards Section ===== */}
        <div className="h-[60%] flex items-center justify-center bg-black rounded-md pl-8 shadow-[0_0_40px_10px_#71193F] overflow-hidden">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Page

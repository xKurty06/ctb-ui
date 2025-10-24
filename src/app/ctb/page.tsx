'use client'
import React, { useState } from 'react'
import { Squares } from "@/components/ui/squares-background"
import Cards from '@/components/ctb-cards'
import Race from '@/components/race-ui'
import FirstBloodOverlay from '@/components/first-blood-overlay'
import TimesUpOverlay from '@/components/times-up-overlay'
import CongratulationsOverlay from '@/components/congratulations-overlay'

const Page = () => {
  const [showFirstBlood, setShowFirstBlood] = useState(false);
  const [firstBloodTeam, setFirstBloodTeam] = useState<string | undefined>();
  
  const [showTimesUp, setShowTimesUp] = useState(false);
  
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [congratulationsTeam, setCongratulationsTeam] = useState<string>('Team A');
  const [congratulationsPoints, setCongratulationsPoints] = useState<number>(8161);

  const handleDemoFirstBlood = () => {
    setFirstBloodTeam('Team A');
    setShowFirstBlood(true);
  };

  const handleHideFirstBlood = () => {
    setShowFirstBlood(false);
    setFirstBloodTeam(undefined);
  };

  const handleDemoTimesUp = () => {
    setShowTimesUp(true);
  };

  const handleHideTimesUp = () => {
    setShowTimesUp(false);
  };

  const handleDemoCongratulations = () => {
    setCongratulationsTeam('Team A');
    setCongratulationsPoints(8161);
    setShowCongratulations(true);
  };

  const handleHideCongratulations = () => {
    setShowCongratulations(false);
  };

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

      {/* Demo trigger buttons */}
      <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={handleDemoFirstBlood}
          className="pixel-card bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-bold text-sm transition-all transform hover:scale-105 active:scale-95"
          style={{
            imageRendering: 'pixelated',
            border: '4px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.2), inset 4px 4px 0 rgba(255,255,255,0.2)'
          }}
        >
          Demo First Blood
        </button>
        
        <button
          onClick={handleDemoTimesUp}
          className="pixel-card bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 font-bold text-sm transition-all transform hover:scale-105 active:scale-95"
          style={{
            imageRendering: 'pixelated',
            border: '4px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.2), inset 4px 4px 0 rgba(255,255,255,0.2)'
          }}
        >
          Demo Time's Up
        </button>
        
        <button
          onClick={handleDemoCongratulations}
          className="pixel-card bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-bold text-sm transition-all transform hover:scale-105 active:scale-95"
          style={{
            imageRendering: 'pixelated',
            border: '4px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.2), inset 4px 4px 0 rgba(255,255,255,0.2)'
          }}
        >
          Demo Congratulations
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col pointer-events-none gap-6 p-12">
        {/* ===== Top Race Section ===== */}
        <div className="h-[40%] flex items-center justify-center bg-transparent">
            <Race />
        </div>

        {/* ===== Bottom Cards Section ===== */}
        <div className="h-[60%] flex items-center justify-center bg-black shadow-[0_0_40px_10px_#71193F] overflow-hidden border-4 border-[#222]" style={{ borderRadius: "0px", imageRendering: "pixelated" }}>
          <Cards />
        </div>
      </div>

      {/* Overlays */}
      <FirstBloodOverlay 
        isVisible={showFirstBlood}
        teamName={firstBloodTeam}
        onHide={handleHideFirstBlood}
      />
      
      <TimesUpOverlay 
        isVisible={showTimesUp}
        onHide={handleHideTimesUp}
      />
      
      <CongratulationsOverlay 
        isVisible={showCongratulations}
        teamName={congratulationsTeam}
        points={congratulationsPoints}
        onHide={handleHideCongratulations}
      />
    </div>
  )
}

export default Page
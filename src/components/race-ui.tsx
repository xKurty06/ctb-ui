'use client'
import React from 'react'
import Image from 'next/image'

const Race = () => {
  const teams = [
    { name: 'Team A', src: '/blue_cube.png' },
    { name: 'Team B', src: '/green_cube.png' },
    { name: 'Team C', src: '/yellow_cube.png',},
    { name: 'Team D', src: '/red_cube.png'},
  ]

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent pointer-events-auto" style={{ imageRendering: 'pixelated' }}>
      <div className="w-full h-full flex gap-4 overflow-hidden">

        {/* ===== LEFT SCOREBOARD ===== */}
        <div className="w-[20%] min-w-[180px] bg-black text-white flex flex-col justify-between py-4 px-4 border-4 border-[#222] shadow-[0_0_40px_10px_#61C9C8C4]" style={{ imageRendering: 'pixelated', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
            <div className='flex w-full mx-auto justify-center items-center'>
                <h2 className="text-3xl font-bold mb-4" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>Points</h2>
            </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}><span>Team A</span><span>000 pts</span></div>
            <div className="flex justify-between" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}><span>Team B</span><span>000 pts</span></div>
            <div className="flex justify-between" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}><span>Team C</span><span>000 pts</span></div>
            <div className="flex justify-between" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}><span>Team D</span><span>000 pts</span></div>
          </div>
        </div>

        {/* ===== RACE TRACK CONTAINER ===== */}
        <div className="flex-1 bg-black flex overflow-hidden border-4 border-[#222] shadow-[0_0_40px_10px_#61C9C8C4]" style={{ imageRendering: 'pixelated', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
          {/* ===== CENTER TRACK ===== */}
          <div className="flex-1 relative bg-black border-r-2 border-white/20 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/20" />
            <div className="absolute top-[10%] left-[5%] flex flex-col gap-[10%] text-white text-xs sm:text-sm font-semibold">
              {teams.map((team, i) => (
                <div
                  key={team.name}
                  className={`flex items-center gap-4 ${i > 0 ? 'mt-4' : ''}`}
                >
                  <div className="w-auto h-auto bg-[#111] flex items-center justify-center overflow-hidden border-2 border-white/10" style={{ imageRendering: 'pixelated', clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <Image
                      src={team.src}
                      alt={team.name}
                      width={36}
                      height={36}
                      className="object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      priority
                    />
                  </div>
                  <span style={{ textShadow: '2px 2px 0 #000' }}>{team.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT FINISH LINE ===== */}
          <div className="w-[6%] min-w-[60px] bg-black border-l-2 border-white/20 relative">
            <div className="grid grid-cols-2 grid-rows-6 h-full w-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    (i + Math.floor(i / 2)) % 2 === 0
                      ? 'bg-white'
                      : 'bg-black'
                  }`}
                  style={{ imageRendering: 'pixelated' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Race
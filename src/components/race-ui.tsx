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
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%] max-w-[1400px] bg-black rounded-lg flex overflow-hidden border border-[#222]">

        {/* ===== LEFT SCOREBOARD ===== */}
        <div className="w-[20%] min-w-[180px] bg-black text-white flex flex-col justify-between py-4 px-4 border-r border-white/20">
            <div className='flex w-full mx-auto justify-center items-center'>
                <h2 className="text-lg font-bold mb-4">Points</h2>
            </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between"><span>Team A</span><span>000 pts</span></div>
            <div className="flex justify-between"><span>Team B</span><span>000 pts</span></div>
            <div className="flex justify-between"><span>Team C</span><span>000 pts</span></div>
            <div className="flex justify-between"><span>Team D</span><span>000 pts</span></div>
          </div>
        </div>

        {/* ===== CENTER TRACK ===== */}
        <div className="flex-1 relative bg-black border-r border-white/20 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-white/20" />
          <div className="absolute top-[5%] left-[5%] flex flex-col gap-[10%] text-white text-xs sm:text-sm font-semibold">
            {teams.map((team, i) => (
              <div
                key={team.name}
                className={`flex items-center gap-4 ${i > 0 ? 'mt-4' : ''}`}
              >
                <div className="w-auto h-auto bg-[#111] flex items-center justify-center overflow-hidden border border-white/10">
                  <Image
                    src={team.src}
                    alt={team.name}
                    width={36}
                    height={36}
                    className="object-contain"
                    priority
                  />
                </div>
                <span>{team.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT FINISH LINE ===== */}
        <div className="w-[6%] min-w-[60px] bg-black border-l border-white/20 relative">
          <div className="grid grid-cols-2 grid-rows-6 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  (i + Math.floor(i / 2)) % 2 === 0
                    ? 'bg-white'
                    : 'bg-black'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Race

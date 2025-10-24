'use client'
import React from 'react'
import Image from 'next/image'
import { Squares } from "@/components/ui/squares-background"

const FinalsWinnersPage = () => {
  const champion = {
    place: "1st Place",
    name: "Name",
    points: "Points",
    color: "bg-yellow-400",
    glowColor: "shadow-[0_0_40px_20px_rgba(250,204,21,0.3)]",
    icon: "/blue_cube.png"
  }

  return (
    <>
      <style jsx>{`
        .pixel-card {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border: 4px solid rgba(0,0,0,0.3);
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }

        /* pulse animation for the neon header */
        @keyframes pulse-glow-blue {
          from {
            text-shadow: 0 0 8px #60a5fa, 0 0 18px #60a5fa, 0 0 28px rgba(96,165,250,0.28), 2px 2px 0 #06201E;
          }
          to {
            text-shadow: 0 0 18px #60a5fa, 0 0 32px #60a5fa, 0 0 48px rgba(96,165,250,0.38), 2px 2px 0 #06201E;
          }
        }

        .podium-card {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          /* rounded tombstone shape */
          border-radius: 40px 40px 18px 18px;
          border: 4px solid rgba(0,0,0,0.45);
          box-shadow: 
            inset -6px -6px 0 rgba(0,0,0,0.25),
            inset 6px 6px 0 rgba(255,255,255,0.08),
            0 10px 30px rgba(2,6,23,0.45);
          min-width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* podium top icon wrapper */
        .podium-icon {
          width: 72px;
          height: 72px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: 
            0 0 20px rgba(255,255,255,0.4),
            0 0 40px rgba(255,255,255,0.2),
            0 0 60px rgba(255,255,255,0.1);
          background: transparent;
          pointer-events: none;
        }
        /* horizontally center podium icons above each card */
        .podium-icon {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        /* pixel font utility (used throughout app) */
        .pixel-font {
          font-family: var(--font-pixel, 'PixelifySansRegular'), sans-serif;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeSpeed;
          /* keep characters crisp at larger sizes */
          image-rendering: pixelated;
        }

        /* neon champion header */
        .champion-text {
          color: #60a5fa;
          letter-spacing: 6px;
          text-transform: uppercase;
          text-shadow: 0 0 8px #60a5fa, 0 0 18px #60a5fa, 0 0 36px rgba(96,165,250,0.35), 2px 2px 0 #06201E;
          filter: drop-shadow(0 0 12px rgba(96,165,250,0.25));
          animation: pulse-glow-blue 2s ease-in-out infinite alternate;
        }

        /* overall page tweaks */
        .top-logos { max-width: 960px; margin: 0 auto; position: relative; }
        .logo-left, .logo-right { color: rgba(255,255,255,0.9); }
        .logo-center { text-align: center; color: rgba(255,255,255,0.95); }
        /* circular/rounded container for logos positioned over the grid */
        .logo-badge {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 9999px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        /* position badges closer to center above the title */
        .logo-badge-left { left: 30%; top: -100%; transform: translate(-50%, -50%); }
        .logo-badge-right { left: 70%; top: -100%; transform: translate(-50%, -50%); }
      `}</style>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Grid - Pink theme */}
        <Squares
          direction="up"
          speed={0.5}
          borderColor="#ec4899"
          squareSize={56}
          hoverFillColor="#f472b6"
          backgroundColor="#fce7f3"
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 page-content pointer-events-none" style={{ zIndex: 10, transform: 'translateY(60px)' }}>

          {/* Top Section - Logos and Title */}
          <div className="w-full max-w-6xl mb-12 top-logos">

            {/* Top Row - Logos */}
            <div className="flex justify-between items-center mb-8">

              {/* Center - Blockchain Campus Logo */}
              <div className="logo-center flex flex-col items-center">
                <div className="logo-badge logo-badge-left pointer-events-none">
                  <Image
                    src="/bcc_logo.png"
                    alt="Blockchain Campus"
                    width={160+50}
                    height={48}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Right - Hacker House Logo */}
              <div className="logo-right flex items-center">
                <div className="logo-badge logo-badge-right pointer-events-none">
                  <Image
                    src="/hh_logo.png"
                    alt="Hacker House"
                    width={140+70}
                    height={40}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* CHAMPION Title */}
            <div className="text-center">
              <div className="champion-text text-6xl md:text-8xl font-bold pixel-font" style={{ transform: 'translateY(-100px)' }}>
                CHAMPION
              </div>
            </div>
          </div>

          {/* Champion Card */}
          <div className="flex items-center justify-center max-w-6xl">
            <div className={`podium-card ${champion.color} ${champion.glowColor} p-6 text-white flex flex-col items-center relative`} style={{ height: '320px', width: 280 }}>
              {/* Icon */}
              <div className="-top-10 podium-icon" style={{ top: '-36px' }}>
                <Image
                  src={champion.icon}
                  alt="Champion"
                  width={72}
                  height={72}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Content */}
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="text-4xl font-bold pixel-font mb-4">{champion.place}</div>
                <div className="text-2xl font-semibold pixel-font mb-2">{champion.name}</div>
                <div className="text-lg font-medium pixel-font">{champion.points}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinalsWinnersPage

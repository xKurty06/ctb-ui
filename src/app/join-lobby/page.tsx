import React from 'react'
import { Squares } from "@/components/ui/squares-background"
import JoinLobbyModal from '@/components/join-lobby-modal'

const page = () => {
  return (
    <div className="relative w-full h-screen">
      <Squares
        direction="down"
        speed={0.5}
        borderColor="#D73078"
        squareSize={80}
        hoverFillColor="#222"
        backgroundColor="#A4245B"
      />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <JoinLobbyModal />
        </div>
    </div>
  )
}

export default page
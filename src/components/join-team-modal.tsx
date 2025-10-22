'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Lobby {
  id: string;
  players: number;
  maxPlayers: number;
}

export default function TeamJoin() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [selectedLobby, setSelectedLobby] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('');

  const lobbies: Lobby[] = [
    { id: 'lobby1', players: 0, maxPlayers: 4 },
    { id: 'lobby2', players: 2, maxPlayers: 4 },
  ];

  const teams = [
    { name: 'A', bg: 'bg-[#61C9C8]', hover: 'hover:bg-[#61C9C8]/80' },
    { name: 'B', bg: 'bg-[#429E56]', hover: 'hover:bg-[#429E56]/80' },
    { name: 'C', bg: 'bg-[#D3B65F]', hover: 'hover:bg-[#D3B65F]/80' },
    { name: 'D', bg: 'bg-[#D73078]', hover: 'hover:bg-[#D73078]/80' },
  ];

  const handleSelectLobby = (lobbyId: string) => {
    setSelectedLobby(lobbyId);
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    console.log('Selected Team:', team);
    setTransitionText('Game is starting...');
    setTransitioning(true);
    setTimeout(() => {
      router.push('/ctb');
    }, 1000);
  };

  const handleBack = () => {
    setTransitionText('Returning...');
    setTransitioning(true);
    setTimeout(() => {
      router.back();
    }, 1000);
  };

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
        className={`min-h-[70vh] min-w-[70vw] flex items-center justify-center py-12 bg-black transition-all duration-1000 relative shadow-[0_0_100px_30px_#82828240] ${
          transitioning 
            ? 'scale-95 opacity-0 blur-lg' 
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="pixel-card absolute top-8 left-8 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white pixel-font text-sm transition-all transform hover:scale-105 active:scale-95"
        >
          ← Back
        </button>

        <div className="w-full max-w-4xl">
          <h1 className="pixel-font text-white text-5xl text-center mb-12 leading-tight">
            Join a Team
          </h1>
          <h2 className="pixel-font text-white text-2xl mb-6 text-center">Select Your Team</h2>
          <div className="grid grid-cols-2 gap-4">
            {teams.map((team) => (
              <button
                key={team.name}
                onClick={() => handleTeamSelect(team.name)}
                className={`pixel-card ${team.bg} ${team.hover} text-white p-6 transition-all transform hover:scale-105 active:scale-95`}
              >
                <div className="pixel-font text-3xl font-bold mb-2">Team {team.name}</div>
                <div className="pixel-font text-sm">0/4 Players</div>
              </button>
            ))}
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
            {transitionText}
          </p>
        </div>
      </div>
    </>
  );
}
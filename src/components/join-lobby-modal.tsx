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
  const [transitioning, setTransitioning] = useState(false);

  const lobbies: Lobby[] = [
    { id: 'lobby1', players: 0, maxPlayers: 4 },
  ];

  const handleSelectLobby = (lobbyId: string) => {
    setSelectedLobby(lobbyId);
  };

  const handleJoin = () => {
    if (name.trim() && selectedLobby) {
      console.log('Player:', name, 'Joining Lobby:', selectedLobby);
      setTransitioning(true);
      setTimeout(() => {
        router.push('/join-team');
      }, 1000);
    }
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
        className={`min-h-[70vh] min-w-[70vw] flex items-center justify-center py-12 bg-black transition-all duration-1000 shadow-[0_0_100px_30px_#82828240] ${
          transitioning 
            ? 'scale-95 opacity-0 blur-lg' 
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <div className="w-full max-w-4xl">
          <h1 className="pixel-font text-white text-5xl text-center mb-12 leading-tight">
            Join a Lobby
          </h1>

          <div className="bg-white border-4 border-gray-800 p-8">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                // Auto-select the lobby when name is entered
                if (e.target.value.trim() && !selectedLobby) {
                  setSelectedLobby(lobbies[0].id);
                }
              }}
              className="pixel-font pixel-card w-full px-4 py-4 text-base border-4 border-gray-300 bg-white text-black placeholder:text-gray-400 mb-8 focus:outline-none focus:border-gray-400"
            />

            <h2 className="pixel-font text-black text-2xl mb-6">
              Select a Lobby
            </h2>

            <div className="pixel-card bg-gray-600 p-6 flex justify-between items-center">
              <button
                onClick={() => handleSelectLobby(lobbies[0].id)}
                className={`pixel-card w-20 h-20 ${
                  selectedLobby === lobbies[0].id ? 'bg-gray-400' : 'bg-gray-300'
                } transition-all flex items-center justify-center pixel-font text-md font-extrabold text-black hover:bg-gray-200`}
                aria-label="Select Lobby 1"
              >
                <span>
                  {lobbies[0].players}/{lobbies[0].maxPlayers}
                </span>
              </button>
              
              <span className='text-white text-2xl'>
                Elimination Lobby
              </span>

              <button
                onClick={handleJoin}
                disabled={!name.trim() || !selectedLobby}
                className="pixel-font pixel-card px-8 py-4 bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-500 disabled:hover:bg-gray-500 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Join Selected Lobby"
              >
                Join
              </button>
            </div>
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
            Joining lobby...
          </p>
        </div>
      </div>
    </>
  );
}
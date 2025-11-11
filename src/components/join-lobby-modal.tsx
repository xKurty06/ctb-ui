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
  const [transitioning, setTransitioning] = useState(false);

  const lobbies: Lobby[] = [
    { id: 'lobby1', players: 0, maxPlayers: 4 },
  ];

  const [selectedLobby, setSelectedLobby] = useState<string | null>(lobbies[0].id);

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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes colorPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(74, 155, 150, 0.3); }
          50% { box-shadow: 0 0 50px rgba(74, 155, 150, 0.5); }
        }

        .modal-enhanced {
          animation: slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          background: #0a0a0a;
          box-shadow: 0 0 30px rgba(74, 155, 150, 0.5);
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border-radius: 0;
        }

        .content-box {
          animation: slideIn 0.8s ease-out 0.2s backwards;
          background: #f8f8f8;
          border: 4px solid rgba(0,0,0,0.15);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          border-radius: 0;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        .title-text {
          animation: slideIn 0.8s ease-out forwards;
          color: #4a9b96;
          font-weight: 700;
        }

        .input-field {
          animation: slideIn 0.8s ease-out 0.1s backwards;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          box-shadow: 0 0 30px rgba(74, 155, 150, 0.3) !important;
          border-color: #4a9b96 !important;
        }

        .lobby-container {
          animation: slideIn 0.8s ease-out 0.2s backwards;
          background: #fafafa;
          border: 3px solid #D73078;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            0 10px 30px rgba(74, 155, 150, 0.1);
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        .lobby-btn {
          animation: slideIn 0.8s ease-out 0.15s backwards;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(74, 155, 150, 0.15);
          color: #000;
        }

        .lobby-btn.selected {
          background: #D3B65F !important;
          color: white !important;
          box-shadow: 0 0 30px rgba(74, 155, 150, 0.4) !important;
          animation: colorPulse 2s ease-in-out infinite;
        }

        .lobby-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(74, 155, 150, 0.25);
        }

        .join-btn {
          animation: slideIn 0.8s ease-out 0.25s backwards;
          background: #429E56;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(53, 122, 94, 0.3);
          color: white;
        }

        .join-btn:hover:not(:disabled) {
          background: #2d6651;
          box-shadow: 0 0 30px rgba(53, 122, 94, 0.5);
          transform: translateY(-2px);
        }

        .join-btn:disabled {
          background: #999;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .label-text {
          animation: slideIn 0.8s ease-out 0.05s backwards;
          color: #4a9b96;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .lobby-name {
          animation: slideIn 0.8s ease-out 0.2s backwards;
          color: #357a5e;
          font-weight: 700;
        }

        .accent-separator {
          animation: slideIn 0.8s ease-out 0.18s backwards;
          background: #4a9b96;
          height: 2px;
        }

         @media (prefers-reduced-motion: reduce) {
           .modal-enhanced,
           .content-box,
           .lobby-container,
           .lobby-btn,
           .join-btn,
           .label-text,
           .title-text {
             animation: none !important;
             transition: none !important;
           }
         }
      `}</style>

      <div
        className={`min-h-[70vh] min-w-[70vw] flex items-center justify-center py-12 backdrop-blur-md transition-all duration-1000 modal-enhanced relative ${
          transitioning
            ? 'scale-95 opacity-0 blur-lg'
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        
        <div className="w-full max-w-4xl relative z-10">
          <h1 className="pixel-font text-5xl text-center mb-4 leading-tight text-white font-bold">
            Join a Lobby
          </h1>
          <div className="accent-separator mb-12" />

          <div className="content-box p-10 relative">
            {/* Inner shimmer */}
            <div className="absolute inset-0 bg-gray-50 rounded-sm pointer-events-none opacity-30" />

            <div className="relative z-10">
              <label className="label-text block text-xs mb-3 uppercase tracking-wider">
                Player Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                 className="pixel-font input-field w-full px-6 py-4 text-lg border-4 border-gray-300 bg-white text-black placeholder:text-gray-400 mb-2 focus:outline-none pixel-element"
                 maxLength={20}
                 autoFocus
              />
               <div className="text-[12px] text-gray-600 mb-8" aria-live="polite">
                 {!name.trim()
                   ? 'Enter your name to enable Join.'
                   : !selectedLobby
                     ? 'Select a lobby to continue.'
                     : 'Press Enter or click Join to continue.'}
               </div>

              <label className="label-text block text-xs mb-4 uppercase tracking-wider">
                Select a Lobby
              </label>

               <div className="lobby-container p-6 md:p-8 flex justify-between items-center gap-6">
                <button
                  onClick={() => handleSelectLobby(lobbies[0].id)}
                  className={`pixel-card lobby-btn w-24 h-24 flex items-center justify-center pixel-font text-lg font-extrabold transition-all pixel-element ${
                    selectedLobby === lobbies[0].id
                      ? 'selected text-white'
                      : 'text-gray-700'
                  }`}
                  aria-label="Select Lobby 1"
                >
                  <span>
                    {lobbies[0].players}/{lobbies[0].maxPlayers}
                  </span>
                </button>
                
                 <div className="flex-1 min-w-0 text-center md:text-left">
                   <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                     <span className='text-2xl font-bold lobby-name'>
                       Elimination
                     </span>
                     <span className="pixel-card text-[11px] uppercase tracking-wider px-2 py-1 bg-white text-gray-800 border border-gray-300 pixel-element">
                       Capacity {lobbies[0].maxPlayers}
                     </span>
                     <span className="pixel-card text-[11px] uppercase tracking-wider px-2 py-1 bg-emerald-600 text-white pixel-element">
                       Open
                     </span>
                   </div>
                   <p className="text-gray-600 text-xs mt-1">
                     Fast knockout rounds. Queue starts when players are ready.
                   </p>
                 </div>

                <button
                  onClick={handleJoin}
                  disabled={!name.trim() || !selectedLobby}
                   className="pixel-font pixel-card join-btn px-10 py-5 text-white transition-all text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap inline-flex items-center gap-2 pixel-element"
                  aria-label="Join Selected Lobby"
                >
                   <span>Join</span>
                   <span aria-hidden>→</span>
                </button>
              </div>
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
            className={`text-white text-2xl font-light tracking-widest transition-opacity duration-500 ${
              transitioning ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transitionDelay: '300ms',
              textShadow: '0 0 20px rgba(74, 155, 150, 0.4)'
            }}
          >
            Joining lobby...
          </p>
        </div>
      </div>
    </>
  );
}
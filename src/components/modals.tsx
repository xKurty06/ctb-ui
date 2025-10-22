'use client';
import React, { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: () => void;
  title?: string;
  color?: 'green' | 'yellow' | 'red';
  savedTime?: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSkip, title, color = 'green', savedTime }) => {
  const timerConfig = {
    green: 3 * 60, // 3 minutes in seconds
    yellow: 5 * 60, // 5 minutes in seconds
    red: 10 * 60, // 10 minutes in seconds
  };

  const [timeLeft, setTimeLeft] = useState(savedTime ?? timerConfig[color]);
  const totalTime = timerConfig[color];
  const halfTime = totalTime / 2;
  const isHintEnabled = timeLeft <= halfTime;

  useEffect(() => {
    if (!isOpen) return;
    
    // Use saved time if available, otherwise use default time
    setTimeLeft(savedTime ?? timerConfig[color]);
  }, [isOpen, color, savedTime]);

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Time's up!");
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft, onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSkip = () => {
    onSkip();
  };

  if (!isOpen) return null;

  const colorConfig = {
    green: {
      border: 'border-[#3BB164]',
      bg: 'bg-[#3BB164]',
    },
    yellow: {
      border: 'border-[#D9B75F]',
      bg: 'bg-[#D9B75F]',
    },
    red: {
      border: 'border-[#71193F]',
      bg: 'bg-[#71193F]',
    }
  };

  const currentColor = colorConfig[color];

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

        .pixel-card-colored {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border-width: 4px;
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }
      `}</style>
      
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className={`pixel-card-colored ${currentColor.border} ${currentColor.bg} p-6 shadow-xl w-[1248px] max-w-full h-[700px] max-h-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-6 gap-6 w-full h-full">
            <div className="pixel-card col-span-4 bg-black p-6 text-white overflow-y-auto relative">
              {/* Timer and Hint Button side by side */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-5xl font-bold border-2 px-2 py-2 animate-pulse border-[#3BB164] shadow-[0_0_12px_4px_#3BB164] ${timeLeft <= 30 ? 'text-red-500' : 'text-white'}`}>
                  {formatTime(timeLeft)}
                </span>
                <button
                  onClick={() => isHintEnabled && alert("Here's your hint!")}
                  disabled={!isHintEnabled}
                  className={`pixel-card flex items-center gap-2 font-medium px-3 py-1 transition ${
                    isHintEnabled 
                      ? 'bg-[#D9B75F] text-black hover:bg-[#e0c46f] cursor-pointer' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                  }`}
                >
                  <Lightbulb size={18} className={isHintEnabled ? 'text-black' : 'text-gray-400'} />
                  Hint
                </button>
              </div>

              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">
                  Smart Contracts: Find a hidden flag in a contract&apos;s storage
                </h2>
              </div>

              <p className="text-md leading-relaxed text-gray-200 mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Skip Button - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <button
                  onClick={handleSkip}
                  className="pixel-card bg-gray-700 text-white font-medium px-4 py-2 hover:bg-gray-600 transition"
                >
                  Skip
                </button>
              </div>
            </div>
            
            <div className="pixel-card col-span-2 bg-black rounded-lg p-6 flex flex-col justify-between text-white">
              <textarea
                placeholder="Type your answer here"
                className="pixel-element bg-black text-white text-sm border-none outline-none resize-none flex-1 placeholder-gray-400"
              ></textarea>

              <button
                className="pixel-card mt-4 bg-[#D9B75F] text-black font-semibold py-2 hover:bg-[#e0c46f] transition"
                onClick={onClose}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
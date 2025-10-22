'use client';
import React from "react";
import { Lightbulb } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

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
        className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="pixel-card bg-[#3BB164] p-6 shadow-xl w-[1248px] max-w-full h-[700px] max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-6 gap-6 w-full h-full">
            <div className="pixel-card col-span-4 bg-black p-6 text-white overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  Smart Contracts: Find a hidden flag in a contract&apos;s storage
                </h2>
                <button
                  onClick={() => alert("Here's your hint!")}
                  className="pixel-card flex items-center gap-2 bg-[#D9B75F] text-black font-medium px-3 py-1 hover:bg-[#e0c46f] transition"
                >
                  <Lightbulb size={18} className="text-black" />
                  Hint
                </button>
              </div>

              <p className="text-md leading-relaxed text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
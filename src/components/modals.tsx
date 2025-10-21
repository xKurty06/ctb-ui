"use client";
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
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#3BB164] p-6 rounded-xl shadow-xl w-[1248px] max-w-full h-[700px] max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-6 gap-6 w-full h-full">
          <div className="col-span-4 bg-black rounded-lg p-6 text-white overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">
                Smart Contracts: Find a hidden flag in a contract’s storage
              </h2>
              <button
                onClick={() => alert('Here’s your hint! 🕵️‍♂️')}
                className="flex items-center gap-2 bg-[#D9B75F] text-black font-medium px-3 py-1 rounded-md hover:bg-[#e0c46f] transition"
              >
                <Lightbulb size={18} className="text-black" />
                Hint
              </button>
            </div>

            <p className="text-sm leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-span-2 bg-black rounded-lg p-6 flex flex-col justify-between text-white">
            <textarea
              placeholder="Type your answer here"
              className="bg-black text-white text-sm border-none outline-none resize-none flex-1 placeholder-gray-400"
            ></textarea>

            <button
              className="mt-4 bg-[#D9B75F] text-black font-semibold py-2 rounded-lg hover:bg-[#e0c46f] transition"
              onClick={onClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

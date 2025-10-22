"use client";
import React, { useState } from "react";
import Modal from "@/components/modals";

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<'green' | 'yellow' | 'red'>('green');
  const [showModal, setShowModal] = useState(false);
  const [cardTimes, setCardTimes] = useState<Record<string, number>>({});

  const categories = [
    {
      name: "The Hidden Keys",
      color: "bg-[#429E56]",
      shadow: "drop-shadow-[0_0_15px_rgba(66,158,86,0.6)]",
      modalColor: 'green' as const,
      cards: [100, 100, 100, 100, 100],
    },
    {
      name: "The Shattered Ledger",
      color: "bg-[#D3B65F]",
      shadow: "drop-shadow-[0_0_15px_rgba(211,182,95,0.6)]",
      modalColor: 'yellow' as const,
      cards: [200, 200, 200],
    },
    {
      name: "The Core of the Chain",
      color: "bg-[#71193F]",
      shadow: "drop-shadow-[0_0_15px_rgba(113,25,63,0.6)]",
      modalColor: 'red' as const,
      cards: [300, 300, 300, 300, 300],
    },
  ];

  const handleCardClick = (categoryIdx: number, cardIdx: number, modalColor: 'green' | 'yellow' | 'red') => {
    const uniqueCardId = `${categoryIdx}-${cardIdx}`;
    setSelectedCard(uniqueCardId);
    setSelectedColor(modalColor);
    setShowModal(true);
  };

  const handleSkip = () => {
    if (selectedCard !== null) {
      // Save the current time when skipping
      const modalElement = document.querySelector('.pixel-card.col-span-4');
      const timerElement = modalElement?.querySelector('span');
      if (timerElement) {
        const timeText = timerElement.textContent || '00:00';
        const [mins, secs] = timeText.split(':').map(Number);
        const remainingSeconds = mins * 60 + secs;
        setCardTimes(prev => ({
          ...prev,
          [selectedCard]: remainingSeconds
        }));
      }
    }
    setShowModal(false);
  };

  return (
    <div className="w-full h-full text-white p-4 pointer-events-auto overflow-y-auto">
      <style jsx>{`
        .pixel-card {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          border: 4px solid rgba(0,0,0,0.3);
          box-shadow: 
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }
      `}</style>
      <div className="flex flex-col gap-3 h-full">
        {categories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="flex flex-col">
            <h2 className="text-2xl font-bold mb-2 pixel-font">{category.name}</h2>
            <div className="flex gap-2 flex-wrap pl-4">
              {category.cards.map((value, cardIdx) => {
                const uniqueCardId = `${categoryIdx}-${cardIdx}`;
                return (
                  <button
                    key={cardIdx}
                    onClick={() => handleCardClick(categoryIdx, cardIdx, category.modalColor)}
                    className={`${category.color} ${category.shadow} text-white text-3xl font-bold flex items-center justify-center pixel-card pixel-font transition-transform hover:scale-105 active:scale-95`}
                    style={{ height: "70px", width: "200px", borderRadius: "0px" }}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSkip={handleSkip}
        title="Card Details"
        color={selectedColor}
        savedTime={selectedCard !== null ? cardTimes[selectedCard] : undefined}
      />
    </div>
  );
};

export default Cards;
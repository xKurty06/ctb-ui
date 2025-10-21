"use client";
import React, { useState } from "react";
import Modal from "@/components/modals"; // adjust path if inside another folder

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    {
      name: "The Hidden Keys",
      color: "bg-[#429E56]",
      shadow: "drop-shadow-[0_0_15px_rgba(66,158,86,0.6)]",
      cards: [100, 100, 100, 100, 100, 100],
    },
    {
      name: "The Shattered Ledger",
      color: "bg-[#D3B65F]",
      shadow: "drop-shadow-[0_0_15px_rgba(211,182,95,0.6)]",
      cards: [200, 200],
    },
    {
      name: "The Core of the Chain",
      color: "bg-[#71193F]",
      shadow: "drop-shadow-[0_0_15px_rgba(113,25,63,0.6)]",
      cards: [300, 300, 300],
    },
  ];

  const handleCardClick = (value: number) => {
    setSelectedCard(value);
    setShowModal(true);
  };

  return (
    <div className="w-full h-full text-white p-4 pointer-events-auto overflow-y-auto font-[family-name:var(--font-space-grotesk)]">
      <div className="flex flex-col gap-3 h-full">
        {categories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
            <div className="flex gap-2 flex-wrap pl-4">
              {category.cards.map((value, cardIdx) => (
                <button
                  key={cardIdx}
                  onClick={() => handleCardClick(value)}
                  className={`${category.color} ${category.shadow} text-white text-3xl font-bold flex items-center justify-center rounded-lg px-8 transition-transform hover:scale-105 active:scale-95`}
                  style={{ height: "70px", width: "200px" }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Card Details"
      >
        <p className="text-lg">
          You clicked on card value:{" "}
          <span className="font-semibold">{selectedCard}</span>
        </p>
      </Modal>
    </div>
  );
};

export default Cards;

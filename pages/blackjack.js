import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Card from "../components/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// All possible card values and suits
const SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

// Create a full deck of cards
const createDeck = () => {
  const deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push({ suit, value, id: `${value}_of_${suit}` });
    });
  });
  return deck;
};

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Calculate hand value for blackjack
const calculateHandValue = (cards) => {
  let sum = 0;
  let aces = 0;

  cards.forEach(card => {
    if (card.value === 'ace') {
      aces += 1;
      sum += 11;
    } else if (['jack', 'queen', 'king'].includes(card.value)) {
      sum += 10;
    } else {
      sum += card.value;
    }
  });

  // Adjust for aces if bust
  while (sum > 21 && aces > 0) {
    sum -= 10;
    aces -= 1;
  }

  return sum;
};

export default function Blackjack() {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [deck, setDeck] = useState(createDeck());
  const [gameStarted, setGameStarted] = useState(false);

  const dealInitialCards = () => {
    // Create and shuffle a fresh deck
    const newDeck = shuffleArray(createDeck());
    
    // Deal 2 cards to player and 2 to dealer
    const playerCards = [newDeck[0], newDeck[1]];
    const dealerCards = [newDeck[2], newDeck[3]];
    
    // Update state
    setPlayerHand(playerCards);
    setDealerHand(dealerCards);
    setDeck(newDeck.slice(4)); // Remove dealt cards from deck
    setGameStarted(true);
  };

  const hitPlayer = () => {
    if (deck.length > 0) {
      const newCard = deck[0];
      setPlayerHand([...playerHand, newCard]);
      setDeck(deck.slice(1));
    }
  };

  const hitDealer = () => {
    if (deck.length > 0) {
      const newCard = deck[0];
      setDealerHand([...dealerHand, newCard]);
      setDeck(deck.slice(1));
    }
  };

  const resetGame = () => {
    setPlayerHand([]);
    setDealerHand([]);
    setDeck(createDeck());
    setGameStarted(false);
  };

  const playerValue = calculateHandValue(playerHand);
  const dealerValue = calculateHandValue(dealerHand);
  const playerBust = playerValue > 21;
  const dealerBust = dealerValue > 21;

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-green-800 to-green-950 font-sans`}
    >
      <main className="flex min-h-screen flex-col items-center gap-8 py-12 px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">Blackjack</h1>
          <p className="text-green-200 text-lg">Try to get as close to 21 as possible!</p>
        </div>

        {/* Dealer's Hand */}
        <div className="w-full max-w-4xl bg-green-900/50 rounded-lg p-6 backdrop-blur-sm border border-green-700/50">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">Dealer's Hand</h2>
              <div className="text-right">
                <div className="text-xl font-bold text-white">
                  {dealerHand.length > 0 ? dealerValue : '-'}
                </div>
                {dealerBust && (
                  <div className="text-red-400 font-semibold">BUST!</div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center min-h-[180px] items-center">
              {dealerHand.length > 0 ? (
                dealerHand.map((card, index) => (
                  <div key={`${card.id}-${index}`} className="transform hover:scale-105 transition-transform">
                    <Card suit={card.suit} value={card.value} width={120} height={168} />
                  </div>
                ))
              ) : (
                <p className="text-green-300 text-lg">No cards dealt</p>
              )}
            </div>
            {gameStarted && (
              <button
                onClick={hitDealer}
                disabled={dealerBust || deck.length === 0}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
              >
                Hit Dealer
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!gameStarted ? (
            <button
              onClick={dealInitialCards}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Deal Cards
            </button>
          ) : (
            <button
              onClick={resetGame}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              New Game
            </button>
          )}
        </div>

        {/* Player's Hand */}
        <div className="w-full max-w-4xl bg-green-900/50 rounded-lg p-6 backdrop-blur-sm border border-green-700/50">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">Your Hand</h2>
              <div className="text-right">
                <div className="text-xl font-bold text-white">
                  {playerHand.length > 0 ? playerValue : '-'}
                </div>
                {playerBust && (
                  <div className="text-red-400 font-semibold">BUST!</div>
                )}
                {playerValue === 21 && !playerBust && (
                  <div className="text-yellow-400 font-semibold">BLACKJACK!</div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center min-h-[180px] items-center">
              {playerHand.length > 0 ? (
                playerHand.map((card, index) => (
                  <div key={`${card.id}-${index}`} className="transform hover:scale-105 transition-transform">
                    <Card suit={card.suit} value={card.value} width={120} height={168} />
                  </div>
                ))
              ) : (
                <p className="text-green-300 text-lg">No cards dealt</p>
              )}
            </div>
            {gameStarted && (
              <button
                onClick={hitPlayer}
                disabled={playerBust || deck.length === 0}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
              >
                Hit Me
              </button>
            )}
          </div>
        </div>

        {/* Game Info */}
        {gameStarted && (
          <div className="text-center text-green-200">
            <p className="text-sm">Cards remaining in deck: {deck.length}</p>
          </div>
        )}
      </main>
    </div>
  );
}


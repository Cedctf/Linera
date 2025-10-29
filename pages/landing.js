import React from 'react';
import CardSwap, { Card } from '../components/CardSwap';

export default function Landing() {
  const games = [
    { 
      name: 'Blackjack', 
      image: '/games/blackjack.jpg', 
      description: 'Beat the dealer with classic 21'
    },
    { 
      name: 'Poker', 
      image: '/games/poker.jpg', 
      description: 'Texas Hold\'em tournaments'
    },
    { 
      name: 'Baccarat', 
      image: '/games/baccarat.jpg', 
      description: 'High stakes elegance'
    },
    { 
      name: 'Roulette', 
      image: '/games/roulette.jpg', 
      description: 'Spin the wheel of fortune'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-950 opacity-80"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Green Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-green-900/30 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Linera Casino
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-green-400 transition-colors">Games</a>
              <a href="#" className="hover:text-green-400 transition-colors">About</a>
              <a href="#" className="hover:text-green-400 transition-colors">Rewards</a>
            </nav>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105">
              Connect Wallet
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="space-y-8 max-md:text-center">
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="text-green-400 text-sm font-semibold">Web3 Gaming Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Play, Win,{' '}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Earn
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg max-md:mx-auto">
                Experience the future of online gaming with provably fair games, instant payouts, 
                and complete transparency on the blockchain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-md:justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
                  Start Playing
                </button>
                <button className="px-8 py-4 border-2 border-green-500 hover:bg-green-500/10 rounded-lg font-bold text-lg transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-md:max-w-md max-md:mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$2.5M+</div>
                  <div className="text-sm text-gray-500 mt-1">Total Payouts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">15K+</div>
                  <div className="text-sm text-gray-500 mt-1">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-500 mt-1">Uptime</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="w-6 h-6 mt-1 text-green-400">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Provably Fair</h3>
                    <p className="text-sm text-gray-400 mt-1">Blockchain-verified results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="w-6 h-6 mt-1 text-green-400">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Instant Payouts</h3>
                    <p className="text-sm text-gray-400 mt-1">Withdraw anytime, instantly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CardSwap Component */}
            <div className="relative h-[700px] md:h-[800px] w-full -mt-150">
              <CardSwap
                width={480}
                height={420}
                cardDistance={50}
                verticalDistance={60}
                delay={3000}
                pauseOnHover={true}
                skewAmount={5}
                easing="elastic"
              >
                {games.map((game, index) => (
                  <Card key={index} customClass="overflow-hidden shadow-2xl shadow-green-500/20 border border-green-500/20 cursor-pointer">
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex flex-col relative group">
                      {/* Game Image */}
                      <div className="relative w-full h-full">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay on Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                      </div>
                      
                      {/* Game Info */}
                      <div className="absolute bottom-0 w-full p-8 z-10">
                        <h3 className="text-4xl font-bold mb-2 text-white">{game.name}</h3>
                        <p className="text-gray-300 text-lg">{game.description}</p>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 mt-20 border-t border-green-900/30">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Ready to Start?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of players already winning on Linera Casino. Connect your wallet and start playing in seconds.
            </p>
            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}


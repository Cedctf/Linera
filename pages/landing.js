import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Spade, Diamond, Heart, Club } from "lucide-react";
import { useRouter } from "next/router";
import Header from "../components/Header";

function FloatingCard({ className, delay = 0, icon: Icon, rotate = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-16 h-24 bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border-2 border-emerald-400/30 rounded-lg shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-emerald-400" />
      </motion.div>
    </motion.div>
  );
}

function FloatingChip({ className, delay = 0, value }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 border-4 border-white/20 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center"
      >
        <span className="text-white font-bold text-sm">{value}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Web3CasinoLanding() {
  const router = useRouter();
  const COLORS = ["#10b981", "#059669", "#047857", "#065f46"];
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionValue(
    `radial-gradient(125% 125% at 50% 0%, #0a0f0a 50%, ${COLORS[0]})`
  );
  const border = useMotionValue(`1px solid ${COLORS[0]}`);
  const boxShadow = useMotionValue(`0px 4px 24px ${COLORS[0]}`);

  useEffect(() => {
    const unsubscribe = color.on("change", (latest) => {
      backgroundImage.set(
        `radial-gradient(125% 125% at 50% 0%, #0a0f0a 50%, ${latest})`
      );
      border.set(`1px solid ${latest}`);
      boxShadow.set(`0px 4px 24px ${latest}`);
    });
    return () => unsubscribe();
  }, [color, backgroundImage, border, boxShadow]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const handleStartPlaying = () => {
    router.push('/blackjack');
  };

  const handleViewGames = () => {
    router.push('/blackjack');
  };

  return (
    <motion.div
      style={{
        backgroundImage: backgroundImage,
      }}
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#0a0f0a]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-green-500/[0.08] blur-3xl" />

      {/* Navigation */}
      <Header border={border} boxShadow={boxShadow} />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingCard
          delay={0.3}
          icon={Spade}
          rotate={-12}
          className="left-[5%] top-[15%]"
        />
        <FloatingCard
          delay={0.5}
          icon={Heart}
          rotate={15}
          className="right-[8%] top-[20%]"
        />
        <FloatingCard
          delay={0.4}
          icon={Diamond}
          rotate={-8}
          className="left-[10%] bottom-[20%]"
        />
        <FloatingCard
          delay={0.6}
          icon={Club}
          rotate={20}
          className="right-[15%] bottom-[25%]"
        />

        <FloatingChip delay={0.7} value="100" className="left-[20%] top-[30%]" />
        <FloatingChip delay={0.8} value="500" className="right-[25%] top-[40%]" />
        <FloatingChip delay={0.9} value="1K" className="left-[15%] bottom-[35%]" />
        <FloatingChip delay={1.0} value="5K" className="right-[20%] bottom-[15%]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Play, Win & Earn
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300">
                Web3 Casino
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light max-w-2xl mx-auto px-4">
              Experience the future of online gaming with blockchain-powered
              transparency. Play Blackjack, Poker, Baccarat, and more with
              cryptocurrency.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={handleStartPlaying}
              style={{
                boxShadow: boxShadow,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              Start Playing Now
            </motion.button>
            <motion.button
              onClick={handleViewGames}
              style={{
                border: border,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold text-base border transition-all hover:bg-white/10"
            >
              View Games
            </motion.button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                10K+
              </div>
              <div className="text-sm text-white/60">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                $5M+
              </div>
              <div className="text-sm text-white/60">Total Winnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                99.9%
              </div>
              <div className="text-sm text-white/60">Uptime</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Games
            </h2>
            <p className="text-lg text-white/60">
              Choose from our collection of provably fair casino classics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blackjack - Available */}
            <motion.div
              custom={6}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              onClick={handleStartPlaying}
              className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-400/50 transition-all hover:scale-105"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">Blackjack</h3>
                <p className="text-white/60 text-sm">Beat the dealer with classic 21</p>
              </div>
            </motion.div>

            {/* Poker - Coming Soon */}
            <motion.div
              custom={7}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden opacity-60"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541278107931-e006523892df?w=400')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 rounded-full z-10">
                  <span className="text-xs font-semibold text-white">Coming Soon</span>
                </div>
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">Poker</h3>
                <p className="text-white/60 text-sm">Texas Hold'em tournaments</p>
              </div>
            </motion.div>

            {/* Baccarat - Coming Soon */}
            <motion.div
              custom={8}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden opacity-60"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 rounded-full z-10">
                  <span className="text-xs font-semibold text-white">Coming Soon</span>
                </div>
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">Baccarat</h3>
                <p className="text-white/60 text-sm">High stakes elegance</p>
              </div>
            </motion.div>

            {/* Roulette - Coming Soon */}
            <motion.div
              custom={9}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden opacity-60"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516900557549-41557d405adf?w=400')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 rounded-full z-10">
                  <span className="text-xs font-semibold text-white">Coming Soon</span>
                </div>
              </div>
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold text-white mb-2">Roulette</h3>
                <p className="text-white/60 text-sm">Spin the wheel of fortune</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f0a] to-transparent pointer-events-none" />
    </motion.div>
  );
}


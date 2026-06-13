import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Landmark, CheckCircle2 } from 'lucide-react';

const CARDS_DATA = [
  {
    id: 1,
    bank: "CHASE BUSINESS",
    tier: "Preferred Platinum",
    limit: "$150,000",
    apr: "0% APR for 12 Mos",
    // Deep premium midnight sapphire matte texture
    color: "from-[#0a1128] via-[#101f42] to-[#040814]",
    accentColor: "text-blue-400/30",
    holoType: "bg-gradient-to-tr from-blue-500/10 via-teal-400/20 to-transparent"
  },
  {
    id: 2,
    bank: "AMEX BUSINESS",
    tier: "Elite Reserve",
    limit: "$250,000",
    apr: "No Pre-Set Spend Limit",
    // Brushed physical cold-gold finish
    color: "from-[#1c1917] via-[#2e251b] to-[#141210]",
    accentColor: "text-amber-500/20",
    holoType: "bg-gradient-to-tr from-amber-500/10 via-yellow-400/20 to-transparent"
  },
  {
    id: 3,
    bank: "CAPITAL ONE",
    tier: "Spark Sovereign",
    limit: "$85,000",
    apr: "0% APR for 18 Mos",
    // Burnished dark jade/obsidian composite plating
    color: "from-[#021c1e] via-[#0b2c24] to-[#010a01]",
    accentColor: "text-emerald-400/20",
    holoType: "bg-gradient-to-tr from-emerald-500/10 via-cyan-400/20 to-transparent"
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cinematicEase = [0.25, 1, 0.3, 1];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS_DATA.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = CARDS_DATA[activeIndex];

  return (
    <div className="bg-neutral-950 text-white selection:bg-yellow-500/30">

      {/* SECTION 1: FULL SCREEN CARD SHOWCASE */}
      <section className="relative h-dvh w-full flex items-center justify-center overflow-hidden px-4">

        {/* Structural Background Mesh Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
        </div>

        {/* Dynamic Card Container Box */}
        <div className="relative z-10 w-full max-w-[350px] xs:max-w-[390px] sm:max-w-[460px] aspect-[1.586/1] perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              initial={{ x: -800, opacity: 0, scale: 0.9, rotateX: 10, rotateY: -20, rotateZ: -6 }}
              animate={{ x: 0, opacity: 1, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
              exit={{ x: 800, opacity: 0, scale: 0.9, rotateX: -10, rotateY: 20, rotateZ: 6 }}
              transition={{
                duration: 1.4,
                ease: cinematicEase,
              }}
              className={`absolute inset-0 rounded-[18px] bg-gradient-to-br ${currentCard.color} p-6 sm:p-8 border border-white/15 flex flex-col justify-between select-none text-left overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_40px_rgba(255,255,255,0.03)_inset]`}
            >
              {/* Premium Realistic Overlay Elements */}
              {/* 1. Fine Polycarbonate Matte Micro Texture */}
              <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay" />

              {/* 2. Dynamic Refractive Hologram Laser Band */}
              <div className={`absolute inset-0 ${currentCard.holoType} mix-blend-screen opacity-70 pointer-events-none transform -skew-x-12 translate-x-1/4`} />

              {/* 3. High-Gloss Edge Specular Light Flare */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Card Branding Row */}
              <div className="flex justify-between items-start relative z-10">
                <div className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                  <p className="text-[10px] font-black tracking-[0.28em] text-zinc-100/80 font-mono">{currentCard.bank}</p>
                  <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent mt-0.5">{currentCard.tier}</p>
                </div>

                {/* Micro contactless NFC vector icon */}
                <svg className="w-5 h-5 text-zinc-400/70 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5 Q9 12 12 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M15 2 Q11 12 15 22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M9 8 Q7 12 9 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </div>

              {/* Realistic 3D Silver Smart Chip */}
              <div className="w-[48px] h-[36px] bg-gradient-to-br from-[#d4d4d8] via-[#a1a1aa] to-[#71717a] rounded-[6px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.4)] relative z-10 my-1 border border-black/20 p-1 flex flex-wrap content-between overflow-hidden">
                {/* Internal Silicon Terminal Traces */}
                <div className="absolute inset-0 opacity-40 border-[0.5px] border-zinc-800/40 rounded-[4px] pointer-events-none" />
                <div className="w-full h-[0.5px] bg-zinc-900/30 absolute top-1/2 left-0" />
                <div className="w-full h-[0.5px] bg-zinc-900/30 absolute top-1/3 left-0" />
                <div className="w-full h-[0.5px] bg-zinc-900/30 absolute top-2/3 left-0" />
                <div className="h-full w-[0.5px] bg-zinc-900/30 absolute left-1/2 top-0" />
                <div className="h-full w-[0.5px] bg-zinc-900/30 absolute left-1/4 top-0" />
                <div className="h-full w-[0.5px] bg-zinc-900/30 absolute right-1/4 top-0" />
                <div className="absolute inset-2.5 bg-gradient-to-tl from-[#a1a1aa] to-[#e4e4e7] rounded-[2px] border border-zinc-600/20" />
              </div>

              {/* Balance Metrics & Limits */}
              <div className="flex justify-between items-end relative z-10">
                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <p className="text-[8px] font-bold tracking-widest text-zinc-400 uppercase font-mono">Available Capital Line</p>
                  <p className="text-2xl sm:text-3xl font-bold tracking-normal text-white font-mono opacity-95 antialiased">
                    {currentCard.limit}
                  </p>
                </div>
                <div className="shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                  <span className="inline-block bg-[#0e0e10]/80 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-black tracking-wider text-yellow-400 border border-white/10 uppercase font-mono">
                    {currentCard.apr}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Micro Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Scroll Down</span>
          <div className="w-1 h-4 bg-gradient-to-b from-yellow-500 to-transparent rounded-full" />
        </div>
      </section>

      {/* SECTION 2: SUBSEQUENT PAGE LENGTH HERO CONTENT */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-24 md:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-amber-500/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] left-[-15%] w-[50%] h-[50%] bg-zinc-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 text-xs font-semibold tracking-wide">
            <Shield className="w-4 h-4 text-yellow-500" />
            <span className="uppercase tracking-wider text-[11px]">Secure Your Financial Future</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white max-w-3xl">
            Build Credit.{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Access Funding.
            </span><br />
            Grow Your Business.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Learn how to bypass traditional banking hurdles, optimize your corporate credit profile, and extract hyper-leveraged 0% APR capital seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-zinc-300 pt-2 w-full max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Zero Interest (0% APR) Strategies</div>
            <div className="flex items-center gap-3 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Fast-Track Corporate Structuring</div>
            <div className="flex items-center gap-3 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Direct Unsecured Banking Lines</div>
            <div className="flex items-center gap-3 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Guaranteed Capital Roadmap</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto">
            <a
              href="/calculator"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-extrabold rounded-xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2 tracking-wide text-sm"
            >
              See your funding range
              <TrendingUp className="w-4 h-4 stroke-[3]" />
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              Talk to an advisor
              <Landmark className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent pt-12 pb-6 z-10 border-t border-zinc-900/50">
          <div className="max-w-6xl mx-auto px-4 text-center flex items-center justify-center gap-2.5 text-zinc-400 font-medium text-sm sm:text-base">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
            <span><strong>$200M+</strong> placed for <strong>800+</strong> entrepreneurs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
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
    color: "from-blue-700 via-blue-900 to-slate-950",
    showCircuits: true
  },
  {
    id: 2,
    bank: "AMEX BUSINESS",
    tier: "Elite Reserve",
    limit: "$250,000",
    apr: "No Pre-Set Spend Limit",
    color: "from-amber-600 via-yellow-700 to-stone-950",
    showCircuits: false
  },
  {
    id: 3,
    bank: "CAPITAL ONE",
    tier: "Spark Sovereign",
    limit: "$85,000",
    apr: "0% APR for 18 Mos",
    color: "from-emerald-700 via-teal-900 to-zinc-950",
    showCircuits: true
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Time-to-view orchestration clock
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS_DATA.length);
    }, 4000); // 4-second dwell time allows users to read metrics perfectly
    return () => clearInterval(timer);
  }, []);

  const currentCard = CARDS_DATA[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden pt-28 pb-20 px-4 sm:px-6 md:px-12">

      {/* Structural Background Mesh Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
      </div>

      {/* Main Container Stack */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">

        {/* TOP LAYER: Panoramic Widescreen Cinematic Glide Runway */}
        <div className="relative flex justify-center items-center h-[240px] sm:h-[300px] w-full mb-8 overflow-visible">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[210px] sm:h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                // Spawns completely off-screen to the left side
                initial={{ x: -1200, opacity: 0, scale: 0.9, rotateZ: -10 }}
                // Decelerates smoothly into dead-center layout focus
                animate={{ x: 0, opacity: 1, scale: 1, rotateZ: 0 }}
                // Sweeps completely off-screen to the right side
                exit={{ x: 1200, opacity: 0, scale: 0.9, rotateZ: 10 }}
                // Cinematic momentum transition profile
                transition={{
                  duration: 4.4,
                  // [initial delay/anticipation, slow acceleration, heavy braking, smooth slide-in]
                  ease: [0.3, 0.05, 0.05, 1.0],
                }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentCard.color} p-5 sm:p-6 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between select-none text-left overflow-hidden`}>
                {/* High-Gloss Light Flare Sheen Coating */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />

                {/* Corner Geometry Vectors */}
                <svg className="absolute inset-4 opacity-20 pointer-events-none" viewBox="0 0 200 126" stroke="currentColor" strokeWidth="1" fill="none">
                  <path d="M8,18 L8,8 L18,8" />
                  <path d="M192,18 L192,8 L182,8" />
                  <path d="M8,108 L8,118 L18,118" />
                  <path d="M192,108 L192,118 L182,118" />
                </svg>

                {currentCard.showCircuits && (
                  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 200 126" preserveAspectRatio="none" stroke="currentColor" strokeWidth="0.75" fill="none">
                    <path d="M0,28 L62,28 L70,20 L138,20 L146,28 L200,28" />
                    <path d="M0,98 L52,98 L60,106 L140,106 L148,98 L200,98" className="text-yellow-500" />
                    <path d="M0,64 L36,64 L44,56 L72,56" />
                    <path d="M200,64 L164,64 L156,72 L128,72" className="text-yellow-500" />
                  </svg>
                )}

                {/* Card Branding Row */}
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <p className="text-[9px] font-black tracking-[0.25em] text-white/50">{currentCard.bank}</p>
                    <p className="text-[11px] sm:text-xs font-bold text-zinc-300 mt-0.5">{currentCard.tier}</p>
                  </div>

                  {/* Micro contactless NFC vector icon */}
                  <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8 Q14 12 16 16" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" />
                    <path d="M19 5 Q15 12 19 19" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" />
                    <path d="M22 2 Q16 12 22 22" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" />
                  </svg>
                </div>

                {/* Silver Secure EMV Smart Chip */}
                <div className="w-10 h-7.5 bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 rounded-md opacity-80 shadow-inner relative z-10 my-1 border border-white/10" />

                {/* Balance Metrics & Limits */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-[8px] font-bold tracking-wider text-zinc-400 uppercase">Available Capital Line</p>
                    <p className="text-xl sm:text-2xl font-black tracking-tight text-white tabular-nums drop-shadow">{currentCard.limit}</p>
                  </div>
                  <div>
                    <span className="inline-block bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-extrabold text-yellow-400 border border-white/5">
                      {currentCard.apr}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM LAYER: Typography & Features Container */}
        <div className="flex flex-col items-center space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 text-xs font-semibold tracking-wide"
          >
            <Shield className="w-4 h-4 text-yellow-500" />
            <span className="uppercase tracking-wider text-[11px]">Secure Your Financial Future</span>
          </motion.div>

          {/* Headline Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white max-w-3xl"
          >
            Build Credit.{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Access Funding.
            </span><br />
            Grow Your Business.
          </motion.h1>

          {/* Subheadline Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            Learn how to bypass traditional banking hurdles, optimize your corporate credit profile, and extract hyper-leveraged 0% APR capital seamlessly.
          </motion.p>

          {/* Feature Matrix Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-zinc-300 pt-2"
          >
            <div className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Zero Interest (0% APR) Strategies</div>
            <div className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Fast-Track Corporate Structuring</div>
            <div className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Direct Unsecured Banking Lines</div>
            <div className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" /> Guaranteed Capital Roadmap</div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
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
          </motion.div>
        </div>

      </div>

      {/* Trust Footer Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent pt-12 pb-6 z-10 border-t border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 text-center flex items-center justify-center gap-2.5 text-zinc-400 font-medium text-sm sm:text-base">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
          <span><strong>$200M+</strong> placed for <strong>800+</strong> entrepreneurs</span>
        </div>
      </div>

    </section>
  );
}
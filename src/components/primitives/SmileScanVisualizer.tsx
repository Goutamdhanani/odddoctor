import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { IconOutline } from './IconOutline';

export const SmileScanVisualizer: React.FC = () => {
  const [selectedTooth, setSelectedTooth] = useState<number | null>(8);

  // Upper Arch Teeth (1-16) simulation
  const upperTeeth = Array.from({ length: 14 }, (_, i) => i + 2);

  return (
    <div className="relative overflow-hidden p-5 rounded-[32px] bg-gradient-to-b from-white/12 via-white/5 to-white/2 backdrop-blur-2xl border border-white/20 shadow-2xl">
      {/* Laser Scan Animation Line */}
      <motion.div
        animate={{ y: [0, 180, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent shadow-[0_0_15px_#06B6D4] z-20 pointer-events-none"
      />

      <div className="flex items-center justify-between mb-4 z-30 relative">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-[#818CF8] border border-indigo-500/30">
            <IconOutline icon={Sparkles} size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">3D Oral Arch Scanner</h4>
            <p className="text-[10px] text-white/60">Live Enamel & Alignment Scan</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-[10px] border border-cyan-500/40 animate-pulse">
          SCAN ACTIVE
        </span>
      </div>

      {/* Interactive Arch Map */}
      <div className="relative py-6 my-2 flex flex-col items-center justify-center">
        {/* Arch Curved Path SVG */}
        <svg viewBox="0 0 300 120" className="w-full max-w-[260px] h-auto overflow-visible">
          <path
            d="M 20 100 C 50 10, 250 10, 280 100"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 20 100 C 50 10, 250 10, 280 100"
            fill="none"
            stroke="url(#archGlow)"
            strokeWidth="3"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="archGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Interactive Tooth Node Buttons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex justify-around w-full max-w-[280px] px-2">
            {upperTeeth.map((toothNum) => {
              const isSelected = selectedTooth === toothNum;
              return (
                <button
                  key={toothNum}
                  onClick={() => setSelectedTooth(toothNum)}
                  className={`w-6 h-8 rounded-t-xl transition-all duration-300 transform flex flex-col items-center justify-center text-[9px] font-black ${
                    isSelected
                      ? 'bg-gradient-to-t from-cyan-400 to-indigo-500 text-white scale-125 shadow-[0_0_15px_#06B6D4] -translate-y-2'
                      : 'bg-white/20 hover:bg-white/40 text-white/70 hover:scale-110'
                  }`}
                >
                  {toothNum}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Tooth Telemetry Details */}
      {selectedTooth && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black">
              #{selectedTooth}
            </div>
            <div>
              <p className="font-bold text-white">Upper Central Incisor</p>
              <p className="text-[10px] text-white/60">Enamel Density: 94% • Aligner Pressure: Optimal</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-400">Healthy</span>
        </motion.div>
      )}
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { springs } from '../../design/tokens';

export interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 180,
  strokeWidth = 14,
  label = `${progress}%`,
  sublabel,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={springs.breathing}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4B3FA8" />
            <stop offset="50%" stopColor="#7B68EE" />
            <stop offset="100%" stopColor="#C9BFFF" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(75, 63, 168, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated Progress Indicator */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#ringGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>

      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold text-[#1E1B4B] tracking-tight">{label}</span>
        {sublabel && (
          <span className="text-xs font-semibold text-[#4B3FA8]/70 uppercase tracking-wider mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    </motion.div>
  );
};

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { springs } from '../../design/tokens';

export interface PrimaryButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  fullWidth?: boolean;
  pulseGlow?: boolean;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
  fullWidth = true,
  pulseGlow = true,
  icon,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={`relative inline-flex items-center justify-center gap-3 min-h-[58px] px-8 py-4 rounded-[26px] font-bold text-white text-base tracking-wide overflow-hidden shadow-2xl transition-all ${
        fullWidth ? 'w-full' : 'min-w-[200px]'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
        boxShadow: '0 12px 40px rgba(139, 92, 246, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      }}
      {...props}
    >
      {/* Animated breathing glow background pulse */}
      {pulseGlow && (
        <motion.div
          animate={{
            opacity: [0.5, 0.95, 0.5],
            scale: [0.98, 1.04, 0.98],
          }}
          transition={springs.breathing}
          className="absolute inset-0 rounded-[26px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-lg pointer-events-none -z-10"
        />
      )}

      {icon && <span className="text-white/90">{icon}</span>}
      <span className="relative z-10 font-extrabold tracking-tight">{children}</span>
    </motion.button>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export interface FloatingShapeProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  color = 'from-purple-300/40 via-indigo-300/30 to-blue-200/20',
  size = 280,
  top,
  left,
  right,
  bottom,
  duration = 16,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        x: [0, 25, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
        rotate: [0, 15, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute pointer-events-none rounded-full bg-gradient-to-br ${color} blur-[48px] mix-blend-multiply ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        willChange: 'transform',
      }}
    />
  );
};

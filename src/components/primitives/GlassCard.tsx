import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { springs } from '../../design/tokens';

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: string;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  interactive = true,
  padding = 'p-5',
  style,
  ...props
}) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-[32px] ${padding} ${
        interactive ? 'cursor-pointer select-none' : ''
      } ${className}`}
      whileHover={interactive ? { y: -3, scale: 1.008, transition: springs.snappy } : undefined}
      whileTap={interactive ? { y: 0, scale: 0.98, transition: springs.snappy } : undefined}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
        backdropFilter: 'blur(36px)',
        WebkitBackdropFilter: 'blur(36px)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 20px 60px rgba(0, 0, 0, 0.45)',
        ...style,
      }}
      {...props}
    >
      {/* Specular Mouse/Touch Tracking Highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

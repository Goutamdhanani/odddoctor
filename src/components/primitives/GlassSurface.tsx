import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface GlassSurfaceProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  className?: string;
  showNoise?: boolean;
  intensity?: 'sm' | 'md' | 'lg';
}

export const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  className = '',
  showNoise = true,
  intensity = 'md',
  style,
  ...props
}) => {
  const blurMap = {
    sm: 'var(--blur-sm)',
    md: 'var(--blur-md)',
    lg: 'var(--blur-lg)',
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.18) 100%)',
        backdropFilter: `blur(${blurMap[intensity]})`,
        WebkitBackdropFilter: `blur(${blurMap[intensity]})`,
        border: '1px solid var(--glass-border)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.4), var(--shadow-card)',
        ...style,
      }}
      {...props}
    >
      {/* Noise Texture Overlay */}
      {showNoise && (
        <div className="absolute inset-0 noise-overlay rounded-[inherit]" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

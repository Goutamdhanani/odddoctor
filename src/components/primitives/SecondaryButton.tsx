import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { springs } from '../../design/tokens';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  fullWidth = false,
  icon,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={`inline-flex items-center justify-center gap-2.5 min-h-[56px] px-6 py-3.5 rounded-[24px] font-medium text-[#4B3FA8] text-base backdrop-blur-md overflow-hidden transition-all ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), var(--shadow-sm)',
      }}
      {...props}
    >
      {icon && <span className="text-[#4B3FA8]/80">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

export const GhostButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  fullWidth = false,
  icon,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={`inline-flex items-center justify-center gap-2 min-h-[56px] px-5 py-3 rounded-[24px] font-medium text-[#4B3FA8]/90 text-sm transition-all ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
      }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

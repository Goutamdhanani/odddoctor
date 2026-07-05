import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { springs } from '../../design/tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  error,
  value,
  onChange,
  onFocus,
  onBlur,
  className = '',
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hasValue = value !== undefined && value !== '';

  return (
    <div className="relative w-full mb-4">
      <div
        className={`relative flex items-center min-h-[60px] px-5 rounded-[24px] transition-all duration-300 ${
          isFocused
            ? 'shadow-[0_0_0_4px_rgba(75,63,168,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] border-indigo-400/80 bg-white/70'
            : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_20px_rgba(75,63,168,0.06)] border-white/30 bg-white/40'
        } backdrop-blur-md border ${className}`}
      >
        {icon && (
          <span className={`mr-3 transition-colors duration-200 ${isFocused ? 'text-[#4B3FA8]' : 'text-[#4B3FA8]/50'}`}>
            {icon}
          </span>
        )}

        <div className="relative flex-1 py-2">
          {/* Floating Label */}
          <motion.label
            htmlFor={inputId}
            animate={{
              y: isFocused || hasValue ? -10 : 0,
              scale: isFocused || hasValue ? 0.78 : 1,
              color: isFocused ? '#4B3FA8' : '#6B7280',
            }}
            transition={springs.snappy}
            className="absolute left-0 top-3 pointer-events-none origin-left font-medium text-sm"
          >
            {label}
          </motion.label>

          <input
            id={inputId}
            value={value}
            onChange={onChange}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            className={`w-full bg-transparent outline-none font-medium text-[#1E1B4B] text-base pt-3 ${
              isFocused || hasValue ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-200`}
            {...props}
          />
        </div>
      </div>

      {error && (
        <p className="mt-1.5 ml-4 text-xs font-medium text-rose-500/90">{error}</p>
      )}
    </div>
  );
};

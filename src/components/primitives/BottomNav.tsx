import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { springs } from '../../design/tokens';
import { IconOutline } from './IconOutline';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface BottomNavProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[390px] ${className}`}>
      <div
        className="flex items-center justify-around p-2 rounded-[34px] backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]"
        style={{
          background: 'linear-gradient(135deg, rgba(25, 22, 50, 0.85) 0%, rgba(15, 13, 30, 0.92) 100%)',
        }}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="relative flex flex-col items-center justify-center min-h-[52px] min-w-[64px] px-3 py-1.5 rounded-[26px] transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  transition={springs.snappy}
                  className="absolute inset-0 rounded-[26px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] shadow-[0_0_25px_rgba(139,92,246,0.6)] -z-10"
                />
              )}

              <IconOutline
                icon={item.icon}
                size={22}
                className={isActive ? 'text-white' : 'text-white/50'}
              />
              <span
                className={`text-[11px] font-black mt-1 transition-colors ${
                  isActive ? 'text-white' : 'text-white/50'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

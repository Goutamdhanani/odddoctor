import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { springs } from '../../design/tokens';
import { IconOutline } from './IconOutline';

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#1E1B4B]/30 backdrop-blur-md"
          />

          {/* Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={springs.snappy}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-[428px] max-h-[85vh] overflow-y-auto rounded-t-[36px] backdrop-blur-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_-20px_60px_rgba(75,63,168,0.2)] border-t border-white/40"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 247, 255, 0.95) 100%)',
            }}
          >
            {/* Drag Handle Indicator */}
            <div className="w-12 h-1.5 mx-auto mb-5 rounded-full bg-[#4B3FA8]/20" />

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-[#1E1B4B] tracking-tight">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/50 text-[#4B3FA8] hover:bg-white transition-colors"
                  aria-label="Close bottom sheet"
                >
                  <IconOutline icon={X} size={18} />
                </button>
              </div>
            )}

            {/* Sheet Body Content */}
            <div className="pb-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

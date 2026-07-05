import React from 'react';
import { AtmosphericCanvas } from './AtmosphericCanvas';

export interface DepthLayerProps {
  children: React.ReactNode;
  className?: string;
}

export const DepthLayer: React.FC<DepthLayerProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#0B0A16] text-white ${className}`}>
      {/* Dynamic Animated Canvas Mesh Background */}
      <AtmosphericCanvas />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay z-10 pointer-events-none" />

      {/* Main Glass Mobile Viewport Container */}
      <div className="relative z-20 max-w-[428px] mx-auto min-h-screen px-4 pt-6 pb-28 shadow-[0_0_100px_rgba(99,102,241,0.25)] bg-[#0B0A16]/40 backdrop-blur-[4px] border-x border-white/10">
        {children}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface ToothSpot {
  id: number;
  name: string;
  quadrant: string;
  status: 'Perfect' | 'Aligning' | 'Protected';
  healthScore: number;
  cx: number;
  cy: number;
  details: string;
}

const teethData: ToothSpot[] = [
  { id: 8, name: 'Central Incisor (#8)', quadrant: 'Upper Right', status: 'Aligning', healthScore: 92, cx: 160, cy: 50, details: 'Stage 3 Aligner active rotation. 0.4mm movement achieved.' },
  { id: 9, name: 'Central Incisor (#9)', quadrant: 'Upper Left', status: 'Aligning', healthScore: 94, cx: 200, cy: 50, details: 'Bite alignment optimal. Next tray transition in 4 days.' },
  { id: 6, name: 'Canine (#6)', quadrant: 'Upper Right', status: 'Perfect', healthScore: 98, cx: 110, cy: 80, details: 'Zero plaque buildup. Strong enamel density.' },
  { id: 11, name: 'Canine (#11)', quadrant: 'Upper Left', status: 'Perfect', healthScore: 99, cx: 250, cy: 80, details: 'Enamel shade 0.5 lighter post-whitening.' },
  { id: 3, name: 'First Molar (#3)', quadrant: 'Upper Right', status: 'Protected', healthScore: 95, cx: 65, cy: 155, details: 'Fissure sealant active. No restorative need.' },
  { id: 14, name: 'First Molar (#14)', quadrant: 'Upper Left', status: 'Protected', healthScore: 96, cx: 295, cy: 155, details: 'Fluoride coating intact.' },
];

export const InteractiveTooth3D: React.FC = () => {
  const [selectedTooth, setSelectedTooth] = useState<ToothSpot>(teethData[0]);
  const [rotationY, setRotationY] = useState(0);

  const rotateArch = () => {
    setRotationY((prev) => prev + 90);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="apple-mono-subhead">
            Interactive 3D Dental Mapping
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', marginTop: 1, letterSpacing: '-0.02em' }}>
            Upper & Lower Arch Scan
          </div>
        </div>

        <button
          onClick={rotateArch}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 12px', borderRadius: 99,
            background: 'rgba(255,255,255,0.12)', border: 'none',
            fontSize: 11, fontWeight: 700, color: '#FFFFFF', cursor: 'pointer',
          }}
        >
          <RefreshCw size={13} /> Rotate 3D
        </button>
      </div>

      {/* Monochrome Canvas */}
      <div
        className="apple-mono-card"
        style={{
          padding: '20px 16px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Arch Vector Model */}
        <motion.div
          animate={{ rotateY: rotationY }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ width: '100%', maxWidth: 320, height: 190, position: 'relative' }}
        >
          <svg viewBox="0 0 360 220" width="100%" height="100%" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.8))' }}>
            {/* Arch Curve Base */}
            <path
              d="M 50 180 C 40 80, 320 80, 310 180"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <path
              d="M 50 180 C 40 80, 320 80, 310 180"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* Tooth Hotspots */}
            {teethData.map((tooth) => {
              const isSelected = selectedTooth.id === tooth.id;
              return (
                <g key={tooth.id} onClick={() => setSelectedTooth(tooth)} style={{ cursor: 'pointer' }}>
                  {/* Outer aura pulse */}
                  {isSelected && (
                    <circle cx={tooth.cx} cy={tooth.cy} r="18" fill="#FFFFFF" opacity="0.25">
                      <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Tooth Node */}
                  <circle
                    cx={tooth.cx}
                    cy={tooth.cy}
                    r={isSelected ? 13 : 10}
                    fill={isSelected ? '#FFFFFF' : '#1C1C1E'}
                    stroke={isSelected ? '#FFFFFF' : '#8E8E93'}
                    strokeWidth="2.5"
                    style={{ transition: 'all 0.2s ease' }}
                  />

                  {/* Tooth Label */}
                  <text
                    x={tooth.cx}
                    y={tooth.cy + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="800"
                    fill={isSelected ? '#000000' : '#FFFFFF'}
                    pointerEvents="none"
                  >
                    #{tooth.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Selected Tooth Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTooth.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              border: '0.5px solid rgba(255,255,255,0.18)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#FFFFFF' }}>
                {selectedTooth.name}
              </div>
              <span
                style={{
                  padding: '3px 10px', borderRadius: 99,
                  fontSize: 10, fontWeight: 800,
                  background: '#FFFFFF', color: '#000000',
                }}
              >
                {selectedTooth.status} · {selectedTooth.healthScore}%
              </span>
            </div>

            <div style={{ fontSize: 12, color: '#A1A1A6', lineHeight: 1.45, fontWeight: 500 }}>
              {selectedTooth.details}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

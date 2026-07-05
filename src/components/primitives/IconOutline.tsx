import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconOutlineProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

export const IconOutline: React.FC<IconOutlineProps> = ({
  icon: IconComponent,
  size = 22,
  strokeWidth = 1.65,
  className = '',
  color,
}) => {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent
        size={size}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        color={color}
      />
    </span>
  );
};

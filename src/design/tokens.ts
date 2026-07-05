// Motion & Design Tokens TypeScript Constants

export const colors = {
  bg1: "#F8F7FF",
  bg2: "#ECE8FF",
  bg3: "#D8D2FF",
  lavender: "#C9BFFF",
  indigo: "#4B3FA8",
  iceBlue: "#DCEBFF",
  frost: "#FFFFFF",
  mistPurple: "#B9AEE8",
  glassBorder: "rgba(255, 255, 255, 0.18)",
  glassHighlight: "rgba(255, 255, 255, 0.35)",
} as const;

export const springs = {
  soft: { type: "spring" as const, stiffness: 180, damping: 22, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 26 },
  breathing: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  floating: { duration: 16, repeat: Infinity, ease: "easeInOut" as const },
} as const;

export const radii = {
  sm: "16px",
  md: "24px",
  lg: "32px",
} as const;

export const blurs = {
  sm: "12px",
  md: "24px",
  lg: "40px",
} as const;

export const spacingMultiplier = {
  base: 4,
  s1: 4,
  s2: 8,
  s3: 14,
  s4: 20,
  s5: 28,
  s6: 40,
  s7: 56,
  s8: 80,
} as const;

export const depthLevels = {
  bgGradient: 0,
  ambientBlur: 10,
  floatingShapes: 20,
  glassCards: 30,
  interactiveCards: 40,
  primaryActions: 50,
  floatingToasts: 60,
} as const;

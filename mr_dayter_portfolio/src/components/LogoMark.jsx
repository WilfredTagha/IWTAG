/**
 * LIGHT MODE logo — Blue circle (#1B4FE8) on white/light surfaces ONLY.
 * Brand rule: NEVER place on dark or black backgrounds.
 */
export function LogoLight({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="55" r="52" fill="#1B4FE8" />
      <path d="M18 80 Q18 58 55 58 Q92 58 92 80" fill="#F5F7FA" />
      <rect x="34" y="26" width="10" height="22" rx="4" fill="#F5F7FA" />
      <rect x="49" y="14" width="10" height="34" rx="4" fill="#F5F7FA" />
      <rect x="64" y="20" width="10" height="28" rx="4" fill="#F5F7FA" />
    </svg>
  );
}

/**
 * DARK MODE logo — ORANGE circle (#E8602A) on dark/black surfaces ONLY.
 * Inner shapes use #090D12 to cut through the circle — exact brand file SVG.
 * Brand rule: orange circle ONLY on dark bg. Never on light/white surfaces.
 */
export function LogoDark({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="55" r="52" fill="#E8602A" />
      <path d="M18 80 Q18 58 55 58 Q92 58 92 80" fill="#090D12" />
      <rect x="34" y="26" width="10" height="22" rx="4" fill="#090D12" />
      <rect x="49" y="14" width="10" height="34" rx="4" fill="#090D12" />
      <rect x="64" y="20" width="10" height="28" rx="4" fill="#090D12" />
    </svg>
  );
}

/**
 * Smart logo — picks the right variant automatically.
 * Usage: <LogoMark dark={isDark} size={80} />
 */
export default function LogoMark({ dark = false, size = 80 }) {
  return dark ? <LogoDark size={size} /> : <LogoLight size={size} />;
}
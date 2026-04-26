type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Substack mark — three horizontal bars + a downward V notch — in the
 * chunky outlined style: peach fill, thick ink stroke, offset shadow.
 */
export default function SubstackIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Offset shadow */}
      <rect x="6" y="8" width="26" height="26" fill="var(--color-ink)" />
      {/* Body */}
      <rect
        x="2"
        y="4"
        width="26"
        height="26"
        fill="var(--color-peach)"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />
      {/* Top bar */}
      <rect x="6" y="9" width="18" height="3" fill="var(--color-ink)" />
      {/* Middle bar */}
      <rect x="6" y="14" width="18" height="3" fill="var(--color-ink)" />
      {/* V notch (bookmark) */}
      <polygon points="6,19 24,19 15,29" fill="var(--color-ink)" />
    </svg>
  );
}

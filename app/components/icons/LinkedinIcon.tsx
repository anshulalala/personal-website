type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Chunky outlined LinkedIn mark in the style of the reference icon set:
 * solid colored fill, thick ink stroke, offset shadow shape behind.
 */
export default function LinkedinIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Offset shadow */}
      <rect
        x="6"
        y="8"
        width="28"
        height="28"
        rx="4"
        fill="var(--color-ink)"
      />
      {/* Body */}
      <rect
        x="2"
        y="4"
        width="28"
        height="28"
        rx="4"
        fill="var(--color-celestial-deep)"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />
      {/* "in" letters — pixel-block style */}
      {/* i dot */}
      <rect x="7" y="10" width="3" height="3" fill="var(--color-paper)" />
      {/* i stem */}
      <rect x="7" y="15" width="3" height="11" fill="var(--color-paper)" />
      {/* n left stem */}
      <rect x="13" y="15" width="3" height="11" fill="var(--color-paper)" />
      {/* n top bar */}
      <rect x="13" y="15" width="11" height="3" fill="var(--color-paper)" />
      {/* n right stem */}
      <rect x="21" y="15" width="3" height="11" fill="var(--color-paper)" />
    </svg>
  );
}

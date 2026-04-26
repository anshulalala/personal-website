type MoonProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Crescent moon — gold-yellow body with a subtle pixel "shine" glint.
 * Built with two overlapping circles via mask, plus a few decorative
 * pixels to keep the pixel-art language consistent with the sparkles.
 */
export default function Moon({ size = 140, className, style }: MoonProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <mask id="crescent-mask">
          <rect width="120" height="120" fill="white" />
          <circle cx="74" cy="56" r="44" fill="black" />
        </mask>
      </defs>
      {/* Soft halo */}
      <circle cx="60" cy="60" r="54" fill="var(--color-moon)" opacity="0.18" />
      {/* Crescent body */}
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="var(--color-moon)"
        mask="url(#crescent-mask)"
      />
      {/* Pixel sheen — small dots on the moon's curve */}
      <rect x="34" y="44" width="4" height="4" fill="var(--color-paper)" opacity="0.55" />
      <rect x="42" y="38" width="3" height="3" fill="var(--color-paper)" opacity="0.4" />
      <rect x="30" y="60" width="3" height="3" fill="var(--color-paper)" opacity="0.35" />
    </svg>
  );
}

type IconProps = {
  size?: number;
  className?: string;
};

export default function PenIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Offset shadow — body + tip */}
      <rect x="17" y="6" width="8" height="22" fill="var(--color-ink)" />
      <polygon points="17,28 25,28 21,35" fill="var(--color-ink)" />

      {/* Pen body */}
      <rect
        x="13"
        y="2"
        width="8"
        height="24"
        fill="var(--color-celestial-deep)"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />

      {/* Left highlight panel */}
      <rect x="13" y="2" width="4" height="22" fill="var(--color-celestial)" />

      {/* Cap divider line */}
      <rect x="13" y="8" width="8" height="2" fill="var(--color-ink)" />

      {/* Side clip */}
      <rect
        x="21"
        y="4"
        width="3"
        height="14"
        fill="var(--color-celestial-dusk)"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
      />

      {/* White highlight spot */}
      <rect x="14" y="15" width="3" height="5" fill="var(--color-paper)" opacity="0.75" />

      {/* Nib / tip */}
      <polygon
        points="13,26 21,26 17,34"
        fill="var(--color-celestial-dusk)"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Nib highlight */}
      <polygon points="13,26 17,26 17,31" fill="var(--color-paper)" opacity="0.4" />
    </svg>
  );
}

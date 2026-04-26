type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Envelope icon directly modeled on the reference icon set:
 * rounded rect body, V-fold flap line, thick ink stroke, offset shadow.
 */
export default function MailIcon({ size = 48, className }: IconProps) {
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
        y="11"
        width="28"
        height="22"
        rx="2"
        fill="var(--color-ink)"
      />
      {/* Envelope body */}
      <rect
        x="2"
        y="7"
        width="28"
        height="22"
        rx="2"
        fill="var(--color-rose)"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />
      {/* V flap */}
      <path
        d="M3 9 L16 20 L29 9"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

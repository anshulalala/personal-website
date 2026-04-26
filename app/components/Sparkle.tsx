type SparkleProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * 16x16 pixel-style 4-point sparkle. Fill follows currentColor.
 * shapeRendering=crispEdges keeps the pixel feel sharp at any scale.
 */
export default function Sparkle({ size = 16, className, style }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M7 0H9V5H11V7H16V9H11V11H9V16H7V11H5V9H0V7H5V5H7Z"
      />
    </svg>
  );
}

import type { CSSProperties } from "react";

type CloudProps = {
  /** Width in CSS pixels. Height is derived from sprite aspect ratio (~2:1). */
  size?: number;
  /** Outline (edge) color. Defaults to deep rose. */
  outline?: string;
  /** Body fill color. Defaults to paper cream. */
  fill?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * 8-bit pixel cloud sprite — hand-drawn 22×11 silhouette.
 *
 *   1 = filled  ·  0 = empty
 *
 * Shape: a small left hump and a taller right hump sharing a wide base
 * (the asymmetric two-bump cloud you see in classic 8-bit games). The
 * outline (edge of silhouette) is rendered in the outline color, interior
 * pixels in the fill color — derived at render time so the sprite stays
 * pixel-accurate.
 */
const SILHOUETTE: number[][] = [
  // x: 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21
  /*0*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  /*1*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  /*2*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  /*3*/ [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  /*4*/ [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  /*5*/ [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  /*6*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  /*7*/ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  /*8*/ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  /*9*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  /*10*/ [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
];

const W = 22;
const H = 11;

/** A filled pixel is "outline" iff any 4-neighbor is empty (or off-grid). */
function isOutline(x: number, y: number): boolean {
  if (SILHOUETTE[y][x] === 0) return false;
  const neighbors: Array<[number, number]> = [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y],
    [x + 1, y],
  ];
  for (const [nx, ny] of neighbors) {
    if (ny < 0 || ny >= H || nx < 0 || nx >= W) return true;
    if (SILHOUETTE[ny][nx] === 0) return true;
  }
  return false;
}

export default function Cloud({
  size = 96,
  outline = "var(--color-rose-deep)",
  fill = "var(--color-paper)",
  className,
  style,
}: CloudProps) {
  return (
    <svg
      width={size}
      height={size * (H / W)}
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering="crispEdges"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {SILHOUETTE.map((row, y) =>
        row.map((cell, x) =>
          cell === 0 ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={isOutline(x, y) ? outline : fill}
            />
          ),
        ),
      )}
    </svg>
  );
}

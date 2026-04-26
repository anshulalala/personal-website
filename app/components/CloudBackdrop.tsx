import Cloud from "./Cloud";

/**
 * Pixel-cloud field that floats behind the Links + Quests sections.
 *
 * Each cloud is hand-placed (top % from the wrapper, left/right %) and given
 * a randomized drift delay so the field never breathes in unison.
 *
 * Outline colors cycle through three pink/purple tokens so the field reads
 * as candy-coated rather than monochrome.
 */
const CLOUDS = [
  // Left edge
  { top: "2%",  left: "3%",  size: 88,  outline: "var(--color-rose-deep)", anim: "var(--animate-drift)",      delay: 0.0 },
  { top: "32%", left: "1%",  size: 70,  outline: "var(--color-hot-pink)",  anim: "var(--animate-float-slow)", delay: 1.8 },
  { top: "68%", left: "4%",  size: 96,  outline: "var(--color-rose)",      anim: "var(--animate-drift)",      delay: 3.4 },

  // Right edge
  { top: "8%",  right: "3%", size: 76,  outline: "var(--color-rose)",      anim: "var(--animate-float-slow)", delay: 0.6 },
  { top: "44%", right: "1%", size: 102, outline: "var(--color-rose-deep)", anim: "var(--animate-drift)",      delay: 2.4 },
  { top: "82%", right: "5%", size: 64,  outline: "var(--color-hot-pink)",  anim: "var(--animate-float-slow)", delay: 4.1 },

  // Mid-band fillers (between sections)
  { top: "47%", left: "18%", size: 58,  outline: "var(--color-hot-pink)",  anim: "var(--animate-float)",      delay: 1.2 },
  { top: "50%", right: "22%", size: 62, outline: "var(--color-rose-deep)", anim: "var(--animate-float)",      delay: 2.9 },
];

export default function CloudBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            animation: c.anim,
            animationDelay: `${c.delay}s`,
            willChange: "transform",
          }}
        >
          <Cloud size={c.size} outline={c.outline} />
        </div>
      ))}
    </div>
  );
}

import Sparkle from "./Sparkle";
import Moon from "./Moon";

/**
 * Sparkles scattered across the hero. Positions are deliberately hand-placed
 * to avoid overlapping the centered title and to feel "random but balanced".
 *
 * `color` references CSS custom properties from globals.css.
 * `anim` is one of the keyframes registered in @theme.
 * `delay` staggers the start so sparkles never twinkle in unison.
 */
const SPARKLES = [
  { top: "8%",  left: "10%", size: 18, color: "var(--color-paper)",  anim: "var(--animate-twinkle)",       delay: 0.0 },
  { top: "14%", left: "32%", size: 11, color: "var(--color-moon)",   anim: "var(--animate-twinkle-slow)",  delay: 0.6 },
  { top: "5%",  left: "55%", size: 14, color: "var(--color-paper)",  anim: "var(--animate-twinkle)",       delay: 1.4 },
  { top: "20%", left: "73%", size: 10, color: "var(--color-rose)",   anim: "var(--animate-twinkle-fast)",  delay: 0.3 },
  { top: "32%", left: "6%",  size: 12, color: "var(--color-paper)",  anim: "var(--animate-twinkle-slow)",  delay: 2.1 },
  { top: "44%", left: "20%", size: 22, color: "var(--color-peach)",  anim: "var(--animate-twinkle)",       delay: 1.0 },
  { top: "52%", left: "88%", size: 16, color: "var(--color-paper)",  anim: "var(--animate-twinkle-slow)",  delay: 2.7 },
  { top: "62%", left: "78%", size: 10, color: "var(--color-moon)",   anim: "var(--animate-twinkle-fast)",  delay: 0.9 },
  { top: "70%", left: "14%", size: 14, color: "var(--color-rose)",   anim: "var(--animate-twinkle)",       delay: 3.2 },
  { top: "78%", left: "38%", size: 11, color: "var(--color-paper)",  anim: "var(--animate-twinkle-fast)",  delay: 1.8 },
  { top: "82%", left: "65%", size: 24, color: "var(--color-paper)",  anim: "var(--animate-twinkle-slow)",  delay: 0.4 },
  { top: "88%", left: "22%", size: 9,  color: "var(--color-moon)",   anim: "var(--animate-twinkle)",       delay: 2.4 },
  { top: "90%", left: "85%", size: 13, color: "var(--color-peach)",  anim: "var(--animate-twinkle)",       delay: 3.6 },
  { top: "28%", left: "92%", size: 9,  color: "var(--color-paper)",  anim: "var(--animate-twinkle-fast)",  delay: 4.0 },
];

export default function CelestialBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Vertical depth — slightly darker at top, lighter near horizon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-celestial-dusk) 0%, var(--color-celestial-deep) 35%, var(--color-celestial) 75%, var(--color-celestial) 100%)",
        }}
      />

      {/* Crescent moon */}
      <div
        className="absolute"
        style={{
          top: "9%",
          right: "8%",
          color: "var(--color-moon)",
          animation: "var(--animate-drift)",
        }}
      >
        <Moon size={150} />
      </div>

      {/* Twinkling sparkles */}
      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            color: s.color,
            animation: s.anim,
            animationDelay: `${s.delay}s`,
            willChange: "opacity, transform",
          }}
        >
          <Sparkle size={s.size} />
        </div>
      ))}
    </div>
  );
}

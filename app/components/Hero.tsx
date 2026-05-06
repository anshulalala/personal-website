import CelestialBackdrop from "./CelestialBackdrop";

export default function Hero() {
  return (
    <section className="relative flex min-h-[44vh] w-full items-center justify-center overflow-hidden px-6 py-12 sm:min-h-[65vh] sm:py-0">
      <CelestialBackdrop />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1
          className="font-display leading-[0.92] tracking-tight text-[var(--color-paper)]"
          style={{
            fontSize: "clamp(2.8rem, 9.8vw, 8.4rem)",
            textShadow:
              "6px 6px 0 var(--color-rose-deep), 12px 12px 0 var(--color-peach-deep)",
          }}
        >
          <span className="block animate-[float_8s_ease-in-out_infinite]">ANSHULA</span>
          <span
            className="mt-2 block animate-[float_8s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          >
            SINGH
          </span>
        </h1>

        <p
          className="mt-12 max-w-xl text-[var(--color-paper)]"
          style={{
            fontFamily: "var(--font-body), Helvetica, Arial, sans-serif",
            fontVariationSettings: '"wght" 500, "ELGR" 1, "ELSH" 4',
            fontSize: "clamp(1.75rem, 2.75vw, 2.75rem)",
            letterSpacing: "0.04em",
            textShadow: "2px 2px 0 var(--color-celestial-dusk)",
          }}
        >
          &quot;there&apos;s something interesting here.&quot;
        </p>
      </div>
    </section>
  );
}

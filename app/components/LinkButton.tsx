import type { ReactNode } from "react";
import Window from "./Window";

type LinkButtonProps = {
  href: string;
  title: string;
  icon: ReactNode;
  external?: boolean;
  /** Text shown beneath the icon. Defaults to "open". */
  label?: string;
};

/**
 * A clickable link styled as a 90s OS dialog window.
 * Thin wrapper over <Window interactive> — keeps existing API.
 */
export default function LinkButton({
  href,
  title,
  icon,
  external = true,
  label = "open",
}: LinkButtonProps) {
  return (
    <Window
      interactive
      href={href}
      external={external}
      title={title}
      className="w-full max-w-[220px]"
      bodyClassName="flex flex-col items-center justify-center gap-3 px-4 py-6"
    >
      {icon}
      <span
        className="lowercase"
        style={{
          fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
          fontVariationSettings: '"wght" 500, "ELGR" 1, "ELSH" 4',
          fontSize: "1rem",
          letterSpacing: "0.12em",
          color: "var(--color-ink)",
        }}
      >
        {label}
      </span>
    </Window>
  );
}

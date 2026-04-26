import type { CSSProperties, ReactNode } from "react";

type WindowControls = "full" | "minimal" | "none";

type WindowBaseProps = {
  /** Text shown in the title bar (lowercase, Handjet). */
  title: string;
  /** Title bar background. Defaults to var(--color-rose-deep). */
  titleBarColor?: string;
  /** Title text + control color. Defaults to var(--color-paper). */
  titleColor?: string;
  /** Which window controls to render in the title bar. */
  controls?: WindowControls;
  /** Body content. */
  children: ReactNode;
  /** Optional inline override for the body background. */
  bodyBackground?: string;
  /** Optional class hooks for layout. */
  className?: string;
  bodyClassName?: string;
};

type InteractiveWindowProps = WindowBaseProps & {
  interactive: true;
  href: string;
  external?: boolean;
};

type StaticWindowProps = WindowBaseProps & {
  interactive?: false;
  href?: never;
  external?: never;
};

type WindowProps = InteractiveWindowProps | StaticWindowProps;

/**
 * Reusable retro-OS dialog window.
 *
 *   ┌──────────────────────┐
 *   │ title bar    □ ✕    │  <- titleBarColor (Handjet)
 *   ├──────────────────────┤
 *   │                      │
 *   │      [children]      │  <- paper body (override via bodyBackground)
 *   │                      │
 *   └──────────────────────┘
 *
 * Two flavors:
 *   - interactive=true → renders as <a>, gets hover/press chrome
 *   - interactive=false (default) → renders as <div>, static container
 */
export default function Window(props: WindowProps) {
  const {
    title,
    titleBarColor = "var(--color-rose-deep)",
    titleColor = "var(--color-paper)",
    controls = "full",
    children,
    bodyBackground = "var(--color-paper)",
    className = "",
    bodyClassName = "",
  } = props;

  const wrapperClass = props.interactive
    ? `window window-clickable group block ${className}`
    : `window block ${className}`;

  // Inline base shadow guarantees the hard offset renders even if a Tailwind
  // utility/preflight wipes the class-based box-shadow. The
  // .window-clickable:hover/:active rules in globals.css still take over for
  // interactive variants.
  const wrapperStyle: CSSProperties = {
    border: "2px solid var(--color-ink)",
    boxShadow: "6px 6px 0 var(--color-ink)",
  };

  const titleBarStyle: CSSProperties = {
    background: titleBarColor,
    borderBottom: "2px solid var(--color-ink)",
  };

  const titleTextStyle: CSSProperties = {
    fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
    fontVariationSettings: '"wght" 600, "ELGR" 1, "ELSH" 4',
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    color: titleColor,
  };

  const bodyStyle: CSSProperties = { background: bodyBackground };

  const inner = (
    <>
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-2.5 py-1.5"
        style={titleBarStyle}
      >
        <span className="lowercase" style={titleTextStyle}>
          {title}
        </span>
        {controls !== "none" && (
          <span className="flex items-center gap-1.5">
            {controls === "full" && (
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: 11,
                  height: 11,
                  border: `2px solid ${titleColor}`,
                }}
              />
            )}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              aria-hidden="true"
            >
              <path
                d="M1 1 L10 10 M10 1 L1 10"
                stroke={titleColor}
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
        )}
      </div>

      {/* Body */}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </>
  );

  if (props.interactive) {
    const { href, external = true } = props;
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={wrapperClass}
        style={wrapperStyle}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {inner}
    </div>
  );
}

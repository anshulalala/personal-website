import type { CSSProperties } from "react";
import Window from "./Window";

type ShowcaseLink = {
  source: string;
  title: string;
  href: string;
  comingSoon?: boolean;
};

const LINKS: ShowcaseLink[] = [
  {
    source: "geekwire",
    title: "pitching authscript to seattle vcs",
    href: "https://www.geekwire.com/2026/heres-the-pitch-uw-students-get-in-the-room-with-key-investors-to-share-their-ai-startup-ideas/",
  },
  {
    source: "conversations on careers",
    title: "podcast",
    href: "https://conversationsoncareers.com/category/episodes/",
    comingSoon: true,
  },
  {
    source: "cal poly wibwire",
    title: "30 under 30",
    href: "https://wibwire30under302019.weebly.com/anshula.html",
  },
  {
    source: "chumstock",
    title: "helped throw a big climate conference",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7435071073773293568/",
  }
];

/**
 * "omg people are talking about me" showcase — a retro music-player
 * window with a celestial-blue "screen" holding press / podcast / award
 * links as a tracklist, plus a decorative progress bar and media controls.
 */
export default function ShowcaseSection() {
  return (
    <section className="relative w-full px-6 pt-2 pb-24 sm:pt-3 sm:pb-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <h2
          className="text-center lowercase"
          style={{
            fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
            fontVariationSettings: '"wght" 600, "ELGR" 1, "ELSH" 4',
            fontSize: "clamp(1.25rem, 2.6vw, 1.875rem)",
            letterSpacing: "0.06em",
            color: "var(--color-paper)",
            textShadow: "3px 3px 0 var(--color-celestial-dusk)",
          }}
        >
          all the places I can be found
        </h2>

        <Window
          title="features.mp3"
          titleBarColor="var(--color-paper)"
          titleColor="var(--color-hot-pink)"
          bodyBackground="var(--color-paper)"
          className="w-full max-w-3xl"
          bodyClassName="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5"
        >
          <Screen />
          <ProgressBar />
          <MediaControls />
        </Window>
      </div>
    </section>
  );
}

/* ------------------------------ Screen ------------------------------ */

function Screen() {
  return (
    <div
      className="px-4 py-4 sm:px-6 sm:py-5"
      style={{
        background: "var(--color-rose)",
        border: "2px solid var(--color-ink)",
      }}
    >
      <ol className="flex flex-col gap-3 sm:gap-3.5">
        {LINKS.map((link, i) => (
          <TrackRow key={link.href} index={i + 1} link={link} />
        ))}
      </ol>
    </div>
  );
}

function TrackRow({
  index,
  link,
}: {
  index: number;
  link: ShowcaseLink;
}) {
  const baseText: CSSProperties = {
    fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
    fontSize: "clamp(0.95rem, 1.35vw, 1.1rem)",
    letterSpacing: "0.05em",
    color: "var(--color-ink)",
    lineHeight: 1.35,
  };

  const numStyle: CSSProperties = {
    ...baseText,
    fontVariationSettings: '"wght" 700, "ELGR" 1, "ELSH" 4',
    minWidth: "1.9rem",
    flexShrink: 0,
  };

  const sourceStyle: CSSProperties = {
    ...baseText,
    fontVariationSettings: '"wght" 700, "ELGR" 1, "ELSH" 4',
  };

  const titleStyle: CSSProperties = {
    ...baseText,
    fontVariationSettings: '"wght" 500, "ELGR" 1, "ELSH" 4',
  };

  const tagStyle: CSSProperties = {
    ...titleStyle,
    color: "var(--color-hot-pink)",
    fontStyle: "italic",
  };

  return (
    <li className="flex items-baseline gap-3 lowercase">
      <span style={numStyle}>{String(index).padStart(2, "0")}</span>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-1 flex-wrap items-baseline gap-x-2 gap-y-1"
      >
        <span
          style={sourceStyle}
          className="underline-offset-4 group-hover:underline"
        >
          {link.source}
        </span>
        <span style={titleStyle}>— {link.title}</span>
        {link.comingSoon && <span style={tagStyle}>[coming soon]</span>}
      </a>
    </li>
  );
}

/* --------------------------- Progress bar --------------------------- */

function ProgressBar() {
  // Decorative — fixed at ~65% played, with a celestial-blue handle.
  const PLAYED = 65;
  return (
    <div className="relative flex h-3 items-center" aria-hidden="true">
      <div
        className="relative w-full"
        style={{
          height: "6px",
          background: "var(--color-ink)",
        }}
      >
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${PLAYED}%`,
            background: "var(--color-hot-pink)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: `calc(${PLAYED}% - 6px)`,
            top: "-4px",
            width: "12px",
            height: "14px",
            background: "var(--color-paper)",
            border: "2px solid var(--color-celestial-deep)",
          }}
        />
      </div>
    </div>
  );
}

/* --------------------------- Media controls -------------------------- */

function MediaControls() {
  return (
    <div
      className="flex items-center justify-between"
      aria-hidden="true"
      style={{ color: "var(--color-ink)" }}
    >
      <div className="flex items-center gap-4">
        <PlayIcon />
        <PauseIcon />
        <FastForwardIcon />
      </div>
      <VolumeIcon />
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M3 1 L10 6 L3 11 Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="3" y="1" width="2" height="10" fill="currentColor" />
      <rect x="7" y="1" width="2" height="10" fill="currentColor" />
    </svg>
  );
}

function FastForwardIcon() {
  return (
    <svg
      width="30"
      height="22"
      viewBox="0 0 16 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M0 1 L7 6 L0 11 Z" fill="currentColor" />
      <path d="M8 1 L15 6 L8 11 Z" fill="currentColor" />
    </svg>
  );
}

function VolumeIcon() {
  // Ascending bars; the last two are highlighted in celestial blue
  // to mirror the "active level" indicator from the reference.
  return (
    <svg
      width="34"
      height="22"
      viewBox="0 0 18 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="0" y="9" width="2" height="3" fill="currentColor" />
      <rect x="4" y="6" width="2" height="6" fill="currentColor" />
      <rect x="8" y="3" width="2" height="9" fill="var(--color-celestial-deep)" />
      <rect x="12" y="0" width="2" height="12" fill="var(--color-celestial-deep)" />
    </svg>
  );
}

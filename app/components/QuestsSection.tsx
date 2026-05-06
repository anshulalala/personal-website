import type { CSSProperties, ReactNode } from "react";
import Window from "./Window";

/**
 * "current quests" section.
 * Hot-pink titled window holding two celestial-blue sub-cards
 * (Main Quest, Side Quests).
 */
export default function QuestsSection() {
  return (
    <section className="relative w-full px-6 pt-2 pb-12 sm:pt-3 sm:pb-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        {/* <h2
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
          current quests
        </h2> */}

        <Window
          title="Current quests"
          titleBarColor="var(--color-hot-pink)"
          titleColor="var(--color-paper)"
          className="w-full max-w-3xl"
          bodyClassName="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6"
        >
          <QuestCard title="main quest">
            <QuestLine>Experimenting &amp; evolving</QuestLine>
            <QuestLine>
              investor, scout, builder, founder supporter, amateur writer
            </QuestLine>
            <QuestLine>
              UW MBA / Madrona / Pioneer Square Labs 
            </QuestLine>
          </QuestCard>

          <QuestCard title="side quests">
            <QuestLine>
              Walking the Camino this summer! 
            </QuestLine>
            <QuestLine>
              comedian manager, party planner, dancer, long
              walker, photographer, ryt-200, baker
            </QuestLine>
            <QuestLine>
              engineering @ salesforce &amp; servicenow
            </QuestLine>
          </QuestCard>
        </Window>
      </div>
    </section>
  );
}

function QuestCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const cardStyle: CSSProperties = {
    background: "var(--color-celestial)",
    border: "2px solid var(--color-ink)",
    boxShadow: "4px 4px 0 var(--color-ink)",
  };

  const titleStyle: CSSProperties = {
    fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
    fontVariationSettings: '"wght" 700, "ELGR" 1, "ELSH" 4',
    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
    letterSpacing: "0.08em",
    color: "var(--color-ink)",
  };

  return (
    <div
      className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6 sm:py-6"
      style={cardStyle}
    >
      <span className="lowercase" style={titleStyle}>
        {title}
      </span>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function QuestLine({ children }: { children: ReactNode }) {
  return (
    <p
      className="lowercase"
      style={{
        fontFamily: "var(--font-handjet), Helvetica, Arial, sans-serif",
        fontVariationSettings: '"wght" 500, "ELGR" 1, "ELSH" 4',
        fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
        lineHeight: 1.45,
        letterSpacing: "0.04em",
        color: "var(--color-ink)",
      }}
    >
      {children}
    </p>
  );
}

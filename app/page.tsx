import Hero from "./components/Hero";
import LinksSection from "./components/LinksSection";
import QuestsSection from "./components/QuestsSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CloudBackdrop from "./components/CloudBackdrop";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      {/* Cloud field spans Links + Quests + Showcase */}
      <div className="relative">
        <CloudBackdrop />
        <LinksSection />
        <QuestsSection />
        <ShowcaseSection />
      </div>
    </main>
  );
}

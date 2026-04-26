import LinkButton from "./LinkButton";
import LinkedinIcon from "./icons/LinkedinIcon";
import SubstackIcon from "./icons/SubstackIcon";
import MailIcon from "./icons/MailIcon";

export default function LinksSection() {
  return (
    <section className="relative w-full px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
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
          bother me
        </h2>

        <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:items-stretch">
          <LinkButton
            href="https://www.linkedin.com/in/anshula-singh/"
            title="linkedin"
            icon={<LinkedinIcon size={56} />}
          />
          <LinkButton
            href="https://anshulalala.substack.com/"
            title="substack"
            icon={<SubstackIcon size={56} />}
          />
          <LinkButton
            href="mailto:anshula.singh@gmail.com"
            title="email"
            icon={<MailIcon size={56} />}
            external={false}
          />
        </div>
      </div>
    </section>
  );
}

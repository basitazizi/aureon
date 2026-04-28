import type { Metadata } from "next";

import {
  FinalCta,
  InfoCardGrid,
  PageHero
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";
import { principleCards } from "../../components/site-data";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn how Aureon combines product design, development, systems thinking, and growth support into one focused team."
};

const aboutPeople = [
  { name: "Basit", role: "" },
  { name: "Masi", role: "" },
  { name: "Carlos", role: "" },
  { name: "Sohail", role: "" }
];

export default function AboutUsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Aureon"
        title="A focused team building websites, systems, and growth support that work together."
        description="Aureon was built for businesses that need more than a nice-looking site. We bring product design, development, operations thinking, and growth support into one setup so the work can launch clearly and keep performing after it goes live."
        titleSizeClass="text-[clamp(2.55rem,4.9vw,4.9rem)]"
        titleClassName="max-w-[11ch] leading-[0.95] tracking-[-0.07em]"
        descriptionSizeClass="text-[clamp(1rem,1.45vw,1.16rem)]"
        descriptionClassName="max-w-[52rem]"
        compactActions
        stackActionsOnMobile={false}
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
      />

      <InfoCardGrid
        eyebrow="Principles"
        title="What guides the work."
        description="These are the standards behind the decisions we make across websites, internal systems, and growth execution."
        cards={principleCards}
      />

      <section className="mt-8">
        <div className="max-w-[760px]">
          <p className="text-sm uppercase tracking-[0.24em] text-black/42">People</p>
          <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-black">
            The people behind the delivery.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-black/60">
            A small team across strategy, design, development, and operations.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
            {aboutPeople.map((person, index) => (
              <article
                key={person.name}
                className="rounded-[28px] border border-[var(--line)] bg-white px-4 py-4 shadow-[0_12px_24px_var(--shadow-color)] sm:px-5 sm:py-5"
              >
                <p className="text-sm text-black/38">0{index + 1}</p>
                <h3 className="mt-4 text-[clamp(1.7rem,4.5vw,2rem)] font-semibold leading-none tracking-[-0.05em] text-black">
                  {person.name}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                  {person.role}
                </p>
              </article>
            ))}
        </div>
      </section>

      <FinalCta
        title="Need a team that can handle both the build and what comes after it?"
        description="Tell us what you are launching, fixing, or scaling. We can map the website, system, and growth work that fits the business."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
        compact
      />
    </SiteShell>
  );
}

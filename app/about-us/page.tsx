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
          <p className="text-sm uppercase tracking-[0.24em] text-black/42">Join us</p>
          <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-black">
            Be a part of a great change.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-black/60">
            Support the business and help build better digital systems with work that has a clear purpose.
          </p>
        </div>

        <article className="mt-8 rounded-[32px] border border-[var(--line)] bg-white px-6 py-7 shadow-[0_12px_24px_var(--shadow-color)] sm:px-8 sm:py-8">
          <div className="max-w-[54rem]">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
              Join Aureon
            </p>
            <h3 className="mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-black">
              Call us now to join.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-black/60 sm:text-lg">
              Support the business or be a part of a great change. We are building focused digital work for real businesses and looking for people who want to contribute with clarity and purpose.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="tel:6196274295"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-medium tracking-[0.04em] text-white transition hover:bg-[var(--accent-hover)]"
            >
              Call us now
            </a>
          </div>
        </article>
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

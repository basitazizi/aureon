import type { Metadata } from "next";

import { FinalCta, InfoCardGrid, PageHero } from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";
import { roleCards } from "../../components/site-data";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join Aureon across product design, development, growth, and project operations."
};

export default function JoinPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Join Aureon"
        title="We look for people who think clearly, ship well, and care about useful work."
        description="Our projects sit across websites, business systems, AI workflows, and growth support. We value strong judgment, clean execution, and people who can move between strategy and delivery without losing clarity."
        primaryAction={{ label: "Reach out", href: "/contact" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
        stats={[
          { value: "4 paths", label: "Core role directions we usually hire for" },
          { value: "1 bar", label: "Clear thinking over inflated process" },
          { value: "0 fluff", label: "Useful work over presentation theatre" }
        ]}
        sideTitle="What we value"
        sidePoints={[
          "Good taste, sharp communication, and ownership without noise.",
          "People who can simplify complexity instead of adding more layers.",
          "Comfort moving between fast shipping and high standards."
        ]}
      />

      <InfoCardGrid
        eyebrow="Roles"
        title="The kinds of roles we usually look for."
        description="These are the areas where we most often need strength as projects grow."
        cards={roleCards}
      />

      <FinalCta
        title="Think you fit the way we work?"
        description="Send a short note with your background, relevant links, and the kind of work you want to own."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
        compact
      />
    </SiteShell>
  );
}

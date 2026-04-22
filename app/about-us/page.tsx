import type { Metadata } from "next";

import { principleCards } from "../../components/site-data";
import {
  FinalCta,
  InfoCardGrid,
  PageHero,
  StorySplit
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn how Aureon approaches design, development, systems, and growth with a minimal launch-first mindset."
};

export default function AboutUsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About us"
        title="A compact digital studio built for clarity and launch speed."
        description="Aureon was shaped around a simple idea: businesses should not need separate teams for brand polish, website design, backend thinking, and growth support just to ship a strong online presence."
        primaryAction={{ label: "See the team", href: "/team" }}
        secondaryAction={{ label: "Contact us", href: "/contact" }}
        stats={[
          { value: "Minimal", label: "visual language with clear hierarchy" },
          { value: "Useful", label: "systems that support operations" },
          { value: "Focused", label: "delivery built around launch" }
        ]}
        sideTitle="What drives the studio"
        sidePoints={[
          "Good design should improve understanding",
          "Good systems should reduce friction",
          "Good launches should create momentum"
        ]}
      />

      <StorySplit
        eyebrow="Approach"
        title="We are not trying to be everything. We focus on the work that changes how a business is presented and operated."
        description="That includes public-facing websites, internal admin layers, booking experiences, ordering systems, and growth surfaces that tie back to the same brand direction."
        points={[
          "We remove clutter rather than adding fashionable noise.",
          "We design with implementation in mind, not just mockups.",
          "We connect content, structure, and conversion paths early.",
          "We build the site so it can evolve into a larger system later."
        ]}
        asideTitle="Why clients choose this model"
        asideText="It is faster to work with one studio that understands the landing page, the admin tool, and the paid campaign than it is to coordinate each part separately."
      />

      <InfoCardGrid
        eyebrow="Principles"
        title="The standards behind the work."
        description="These principles shape how pages look, how projects are run, and how features are prioritized."
        cards={principleCards}
      />

      <FinalCta
        title="If the approach fits, the next step is simple."
        description="Review the team, look through the services, or contact us directly if you already know what needs to be built."
        primaryAction={{ label: "See services", href: "/services" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />
    </SiteShell>
  );
}

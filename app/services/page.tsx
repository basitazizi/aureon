import type { Metadata } from "next";

import {
  processSteps,
  serviceCategories,
  solutionCards
} from "../../components/site-data";
import {
  FinalCta,
  InfoCardGrid,
  PageHero,
  ProcessTimeline,
  ServiceCategoryGrid
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore website, system, e-commerce, AI, and growth services offered by Aureon."
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="The pages, systems, and growth tools we build."
        description="Aureon combines design, development, operations thinking, and launch support so your business gets more than a pretty frontend."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
        stats={[
          { value: "Web", label: "marketing sites and service pages" },
          { value: "Systems", label: "admin and internal workflows" },
          { value: "Growth", label: "brand, content, and paid support" }
        ]}
        sideTitle="Built around practical outcomes."
        sidePoints={[
          "More qualified leads",
          "Cleaner customer journeys",
          "Less manual work internally"
        ]}
      />

      <ServiceCategoryGrid
        eyebrow="Capabilities"
        title="Structured service lanes that can combine into one project."
        description="Choose a single lane or blend multiple lanes into a launch package that fits the business."
        categories={serviceCategories}
      />

      <InfoCardGrid
        eyebrow="Common engagements"
        title="How these services usually come together."
        description="Most projects combine a public-facing website with at least one operational or growth layer."
        cards={solutionCards}
      />

      <ProcessTimeline
        eyebrow="Delivery"
        title="Services are scoped for launch, not for endless revisions."
        description="We keep the scope practical and align the design system, the engineering decisions, and the growth plan from the start."
        steps={processSteps}
      />

      <FinalCta
        title="Want help choosing the right stack?"
        description="We can map your offer to the pages, systems, and growth work that will produce the strongest launch."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
      />
    </SiteShell>
  );
}

import type { Metadata } from "next";

import { contactCards } from "../../components/site-data";
import {
  ContactGrid,
  FinalCta,
  InfoCardGrid,
  PageHero
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aureon for websites, booking systems, admin panels, growth support, and partnerships."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Bring the project, the problem, or the idea."
        description="Use this page as the contact hub for new builds, partnerships, and team conversations. It is designed to feel complete now and can later be connected to forms or CRM tooling."
        primaryAction={{ label: "See services", href: "/services" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
        stats={[
          { value: "Web", label: "sites and digital launches" },
          { value: "Ops", label: "dashboards, databases, and tools" },
          { value: "Growth", label: "content, ads, and brand systems" }
        ]}
        sideTitle="Best things to include"
        sidePoints={[
          "What your business does",
          "What you need built or improved",
          "Your rough timeline and priorities"
        ]}
      />

      <ContactGrid
        eyebrow="Contact lanes"
        title="Different reasons to reach out."
        description="These cards give the contact page structure even before a live form integration is added."
        cards={contactCards}
      />

      <InfoCardGrid
        eyebrow="What happens next"
        title="A practical response path."
        description="The page is positioned to make the next step obvious and reduce uncertainty for potential clients or hires."
        cards={[
          {
            title: "Initial review",
            description:
              "We review the scope, business model, and the level of design or system complexity involved."
          },
          {
            title: "Direction",
            description:
              "We point you to the right package, route, or service combination based on the actual problem."
          },
          {
            title: "Start",
            description:
              "Once aligned, we move directly into scope, content, design, and build planning."
          }
        ]}
      />

      <FinalCta
        title="Want the fastest path to a proposal?"
        description="Send the scope through contact and we can point you to the right service mix for the project."
        primaryAction={{ label: "See services", href: "/services" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
      />
    </SiteShell>
  );
}

import type { Metadata } from "next";

import { principleCards, teamMembers } from "../../components/site-data";
import {
  FinalCta,
  InfoCardGrid,
  PageHero,
  TeamGrid
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Aureon team across creative direction, product design, development, growth, and delivery."
};

export default function TeamPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Team"
        title="Designers, builders, and operators working from one direction."
        description="The team combines visual design, development, growth strategy, and project operations so launches stay coherent from homepage copy to backend logic."
        primaryAction={{ label: "Join the team", href: "/join" }}
        secondaryAction={{ label: "Contact us", href: "/contact" }}
        stats={[
          { value: "Design", label: "visual systems and interface polish" },
          { value: "Dev", label: "web, data, and internal tools" },
          { value: "Growth", label: "content, strategy, and launch support" }
        ]}
        sideTitle="How the team operates"
        sidePoints={[
          "Small enough to stay sharp",
          "Broad enough to ship complete projects",
          "Aligned around launch outcomes"
        ]}
      />

      <TeamGrid
        eyebrow="People"
        title="A cross-functional core team."
        description="The structure is intentionally compact so communication stays direct and design decisions stay connected to the actual build."
        members={teamMembers}
      />

      <InfoCardGrid
        eyebrow="Standards"
        title="What the team protects in every project."
        description="These are the same standards you see across the home page, the supporting routes, and the way each offering is framed."
        cards={principleCards}
      />

      <FinalCta
        title="Want this team on your next launch?"
        description="Use the contact page to start the conversation, or head to the join page if you want to build with us."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "Open roles", href: "/join" }}
      />
    </SiteShell>
  );
}

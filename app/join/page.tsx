import type { Metadata } from "next";

import { roleCards } from "../../components/site-data";
import {
  FinalCta,
  InfoCardGrid,
  PageHero,
  StorySplit
} from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Explore open roles at Aureon across design, development, operations, and growth."
};

export default function JoinPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Join"
        title="We want people who care about sharp work and clean execution."
        description="Aureon is built for designers, developers, and marketers who prefer clarity, velocity, and useful products over bloated process."
        primaryAction={{ label: "Talk to us", href: "/contact" }}
        secondaryAction={{ label: "Meet the team", href: "/team" }}
        stats={[
          { value: "Remote", label: "collaboration-first workflow" },
          { value: "Small", label: "high ownership on every project" },
          { value: "Fast", label: "shipping over ceremony" }
        ]}
        sideTitle="We value people who can"
        sidePoints={[
          "Think in systems, not just screens",
          "Communicate clearly with clients and teammates",
          "Move ideas into shipped work"
        ]}
      />

      <InfoCardGrid
        eyebrow="Open roles"
        title="The types of people we are looking for."
        description="These role cards keep the join page concrete even before you add hiring workflows or a formal application system."
        cards={roleCards}
      />

      <StorySplit
        eyebrow="Culture"
        title="The best fit is someone who likes ownership, direct feedback, and practical decision making."
        description="The studio is not designed around layers of approval. It is designed around thoughtful work, fast iteration, and a strong sense of responsibility for the outcome."
        points={[
          "You care about quality but do not hide behind perfectionism.",
          "You can move between concept and implementation comfortably.",
          "You understand that design, engineering, and growth affect each other.",
          "You want to contribute to work that launches, not work that stalls."
        ]}
        asideTitle="How to help"
        asideText="If your strengths match one of the roles above, the contact page can act as the first touchpoint until a dedicated application flow is added."
      />

      <FinalCta
        title="Think you fit the studio?"
        description="Send a short note about your background, strengths, and the kind of work you want to do."
        primaryAction={{ label: "Contact Aureon", href: "/contact" }}
        secondaryAction={{ label: "Back to home", href: "/" }}
      />
    </SiteShell>
  );
}

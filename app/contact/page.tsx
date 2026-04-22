import type { Metadata } from "next";

import {
  ContactFormSection,
  FinalCta,
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
        title="Bring the project, the question, or the next idea."
        description="A simpler contact page for new website builds, systems work, redesigns, and growth support. Send the details and we will point you in the right direction."
        primaryAction={{ label: "See services", href: "/services" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
        stats={[
          { value: "Web", label: "websites and digital launches" },
          { value: "Systems", label: "admin panels, tools, and workflows" },
          { value: "Support", label: "clear direction after first review" }
        ]}
        sideTitle="Best things to send"
        sidePoints={[
          "What your business does",
          "What you need built or improved",
          "Your rough timeline and priorities"
        ]}
      />

      <ContactFormSection
        eyebrow="Contact form"
        title="Send your project details directly."
        description="Use the form to ask questions, outline the scope, or start the conversation around a new build."
      />

      <FinalCta
        title="Need to understand the services first?"
        description="Review the service page if you want a clearer picture of what Aureon can design, build, and support."
        primaryAction={{ label: "See services", href: "/services" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
      />
    </SiteShell>
  );
}

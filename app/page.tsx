import type { Metadata } from "next";

import {
  serviceCategories
} from "../components/site-data";
import {
  FinalCta,
  HomeHero,
  ServiceCategoryGrid,
  StorySplit
} from "../components/site-sections";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Minimal websites, dashboards, booking systems, and growth support for businesses that want to launch clearly."
};

export default function Home() {
  return (
    <SiteShell>
      <HomeHero
        badge="Websites, systems, and growth support for modern businesses."
        title="Aureon builds SaaS websites that sell clearly."
        emphasizedWord="SaaS"
        description="We design and build conversion-focused websites, admin panels, booking systems, and launch assets for businesses that need sharper messaging and cleaner digital experiences."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
      />

      <StorySplit
        eyebrow="Who we are"
        title="A small studio focused on clear websites and useful systems."
        description="We keep the process simple and build what businesses actually need: sharp websites, better internal tools, and cleaner digital journeys."
        points={[
          "Clear home pages and service pages.",
          "Admin panels, databases, and internal flows.",
          "E-commerce, QR ordering, and support systems.",
          "Brand, content, and growth support."
        ]}
        asideTitle="How we can help"
        asideText="If you need a site that sells better or a backend that runs smoother, Aureon can handle the visual layer and the system behind it."
      />

      <ServiceCategoryGrid
        eyebrow="Services"
        title="What we offer."
        description="A focused set of services across build, growth, and operations."
        categories={serviceCategories}
      />

      <FinalCta
        title="Need a simpler path to launch?"
        description="Send the project scope and we can help shape the right website, system, or service stack."
        primaryAction={{ label: "Go to contact", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
      />
    </SiteShell>
  );
}

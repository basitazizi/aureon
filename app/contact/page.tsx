import type { Metadata } from "next";

import { ContactFormSection } from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation for websites, AI agents, dashboards, and growth support."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactFormSection
        eyebrow="Request a consultation"
        title={
          <>
            Let&apos;s build <span className="font-serif-display font-medium italic text-white/86">what</span> your business needs.
          </>
        }
        description="Tell us what you need help with, choose the service that fits best, and send the details. We build websites, AI agents, admin dashboards, and growth systems that are meant to work together."
      />

      <section className="mt-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-white px-6 py-7 shadow-[0_12px_24px_var(--shadow-color)] sm:px-8 sm:py-8">
          <div className="max-w-[42rem]">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
              Direct contact
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-black">
              Prefer to speak now?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/60 sm:text-lg">
              Call us directly for a faster conversation about your project, build, or next step.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="tel:6196274295"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-medium tracking-[0.04em] text-white transition hover:bg-[var(--accent-hover)]"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

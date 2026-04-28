import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "../../components/site-shell";
import { teamMembers } from "../../components/site-data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Aureon team behind websites, AI systems, dashboards, and growth execution."
};

export default function TeamPage() {
  return (
    <SiteShell>
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 pb-10 pt-2 lg:px-10">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[68rem] text-center">
            <h1 className="mx-auto max-w-[10ch] text-balance text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-[var(--foreground)]">
              The team behind Aureon.
            </h1>

            <p className="mx-auto mt-6 max-w-[46rem] text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed tracking-[-0.03em] text-black/58">
              We combine design, development, systems thinking, and growth support to
              build digital setups that help businesses move faster and scale with more
              clarity.
            </p>

            <div className="mx-auto mt-8 flex max-w-[22rem] flex-row gap-3 sm:max-w-none sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-center text-[0.98rem] font-semibold text-white shadow-[0_12px_24px_var(--shadow-color)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] sm:flex-none sm:px-6 sm:text-base"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-3.5 text-center text-[0.98rem] font-medium text-black/78 shadow-[0_10px_20px_var(--shadow-color)] transition hover:bg-[var(--background-soft)] sm:flex-none sm:px-6 sm:text-base"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="rounded-[30px] border border-[var(--line)] bg-white px-6 py-6 text-center shadow-[0_16px_30px_var(--shadow-color)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--accent),#2a2627)] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h2 className="mt-5 text-[1.9rem] font-semibold leading-none tracking-[-0.05em] text-[var(--foreground)]">
                  {member.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  {member.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-black/62">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Action = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
};

type Card = {
  title: string;
  description: string;
};

type VisualCard = Card & {
  eyebrow: string;
  metrics: string[];
};

type Category = {
  title: string;
  description: string;
  items: string[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type DetailCard = Card & {
  details: string[];
};

type ContactCard = Card & {
  actionLabel: string;
  actionHref: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

function SectionMotion({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ActionButtons({
  primaryAction,
  secondaryAction
}: {
  primaryAction?: Action;
  secondaryAction?: Action;
}) {
  if (!primaryAction && !secondaryAction) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {primaryAction ? (
        <Link
          href={primaryAction.href}
          className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-center text-base font-semibold text-white shadow-[0_12px_24px_var(--shadow-color)] transition hover:-translate-y-0.5 hover:bg-[#7f0000]"
        >
          {primaryAction.label}
        </Link>
      ) : null}

      {secondaryAction ? (
        <Link
          href={secondaryAction.href}
          className="rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-center text-base font-medium text-black/78 transition hover:bg-[var(--background-soft)]"
        >
          {secondaryAction.label}
        </Link>
      ) : null}
    </div>
  );
}

export function HomeHero({
  brand,
  badge,
  title,
  emphasizedWord,
  description,
  primaryAction,
  secondaryAction
}: {
  brand: string;
  badge: string;
  title: string;
  emphasizedWord: string;
  description: string;
  primaryAction: Action;
  secondaryAction: Action;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pb-10 pt-8 sm:pt-12"
    >
      <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
        <div className="rounded-full border border-[var(--line)] bg-white p-2 shadow-[0_16px_30px_var(--shadow-color)] md:hidden">
          <div className="flex items-center gap-2">
            <div className="rounded-full px-6 py-3 text-[2rem] leading-none tracking-[-0.06em] text-[var(--foreground)] font-serif-display">
              {brand}
            </div>
            <Link
              href={primaryAction.href}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f0000]"
            >
              {primaryAction.label}
            </Link>
          </div>
        </div>

        <div className="mt-20 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm text-black/60 shadow-[0_10px_22px_var(--shadow-color)] md:mt-10">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          {badge}
        </div>

        <h1 className="mt-10 max-w-[860px] text-[clamp(3.4rem,9vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-[var(--foreground)]">
          {title.split(emphasizedWord)[0]}
          <span className="font-serif-display font-medium italic text-[var(--foreground-soft)]">
            {emphasizedWord}
          </span>
          {title.split(emphasizedWord)[1]}
        </h1>

        <p className="mt-7 max-w-[800px] text-[clamp(1.05rem,1.9vw,1.45rem)] leading-relaxed tracking-[-0.03em] text-black/56">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryAction.href}
            className="rounded-full bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white shadow-[0_12px_24px_var(--shadow-color)] transition hover:-translate-y-0.5 hover:bg-[#7f0000]"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="rounded-full border border-[var(--line)] bg-[var(--background-soft)] px-10 py-4 text-lg font-medium text-black/78 shadow-[0_10px_20px_var(--shadow-color)] transition hover:bg-[var(--background-muted)]"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  sideTitle,
  sidePoints
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  stats?: Stat[];
  sideTitle?: string;
  sidePoints?: string[];
}) {
  const hasSidePanel = sideTitle && sidePoints?.length;

  return (
    <SectionMotion
      className={`grid gap-6 pb-10 pt-6 ${
        hasSidePanel ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
      }`}
    >
      <div className="rounded-[36px] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_18px_36px_var(--shadow-color)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--accent)]">
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-[780px] text-[clamp(3.1rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.08em]">
          {title}
        </h1>
        <p className="mt-6 max-w-[760px] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-relaxed tracking-[-0.03em] text-black/62">
          {description}
        </p>
        <ActionButtons
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />

        {stats?.length ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-[var(--line)] bg-[var(--background-soft)] px-5 py-4 shadow-[0_10px_20px_var(--shadow-color)]"
              >
                <p className="text-2xl font-semibold tracking-[-0.05em]">{stat.value}</p>
                <p className="mt-1 text-sm text-black/58">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {hasSidePanel ? (
        <div className="grid gap-6">
          <div className="rounded-[36px] border border-[var(--line)] bg-[var(--foreground-soft)] px-6 py-6 text-white shadow-[0_18px_36px_var(--shadow-color)]">
            <p className="text-sm uppercase tracking-[0.24em] text-white/42">Focus</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-none tracking-[-0.06em]">
              {sideTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {sidePoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white/78"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[28px] border border-[var(--line)] bg-white px-5 py-5 shadow-[0_10px_20px_var(--shadow-color)]">
              <p className="text-sm text-black/44">Built for</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.04em]">
                SaaS, service brands, local operators, and internal teams
              </p>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--background-soft)] px-5 py-5 shadow-[0_10px_20px_var(--shadow-color)]">
              <p className="text-sm text-black/44">Approach</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.04em]">
                Minimal design, useful systems, and fast iteration
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </SectionMotion>
  );
}

export function VisualShowcase({
  eyebrow,
  title,
  description,
  cards
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: VisualCard[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="rounded-[32px] border border-[var(--line)] bg-white p-5 shadow-[0_14px_28px_var(--shadow-color)]"
          >
            <div className="rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#d0d0d0,#6f6f6f)] p-5 text-[var(--foreground)]">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.22em] text-black/62">
                  {card.eyebrow}
                </span>
                <span className="text-xs text-black/48">0{index + 1}</span>
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-3 w-24 rounded-full bg-white/66" />
                <div className="h-3 w-full rounded-full bg-white/44" />
                <div className="h-3 w-[76%] rounded-full bg-[var(--accent)]/80" />
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {card.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-[18px] border border-white/50 bg-white/55 px-3 py-4 text-center text-xs text-black/72"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em]">{card.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-black/60">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function StorySplit({
  eyebrow,
  title,
  description,
  points,
  asideTitle,
  asideText
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  asideTitle: string;
  asideText: string;
}) {
  return (
    <SectionMotion className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[36px] border border-[var(--line)] bg-[var(--background-soft)] px-6 py-8 shadow-[0_16px_32px_var(--shadow-color)] sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} compact />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-[24px] border border-[var(--line)] bg-white px-5 py-5 text-black/70 shadow-[0_10px_20px_var(--shadow-color)]"
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_16px_32px_var(--shadow-color)] sm:px-8">
        <h3 className="mt-4 text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.06em]">
          {asideTitle}
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-black/62">{asideText}</p>
        <div className="mt-8 rounded-[26px] border border-[var(--line)] bg-[var(--background-soft)] p-5">
          <p className="text-sm text-[var(--accent)]">How we help</p>
          <p className="mt-3 text-lg font-semibold tracking-[-0.04em]">
            We align design, development, and growth so the site, the system behind it,
            and the business goals all move together.
          </p>
        </div>
      </div>
    </SectionMotion>
  );
}

export function ServiceCategoryGrid({
  eyebrow,
  title,
  description,
  categories
}: {
  eyebrow: string;
  title: string;
  description: string;
  categories: Category[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[0_14px_28px_var(--shadow-color)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
              {category.title}
            </p>
            <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em]">
              {category.title} services
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/60">
              {category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--background-soft)] px-3 py-1.5 text-sm text-black/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}) {
  return (
    <SectionMotion className="mt-8 rounded-[36px] border border-[var(--line)] bg-[var(--foreground)] px-6 py-8 text-white shadow-[0_18px_36px_var(--shadow-color)] sm:px-8 sm:py-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        inverted
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
          >
            <p className="text-sm text-white/42">0{index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
              {step.title}
            </h3>
            <p className="mt-3 text-white/66">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function InfoCardGrid({
  eyebrow,
  title,
  description,
  cards
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: Card[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[30px] border border-[var(--line)] bg-white px-6 py-6 shadow-[0_12px_24px_var(--shadow-color)]"
          >
            <h3 className="text-[1.7rem] font-semibold leading-none tracking-[-0.05em]">
              {card.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-black/60">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function PackageGrid({
  eyebrow,
  title,
  description,
  packages
}: {
  eyebrow: string;
  title: string;
  description: string;
  packages: DetailCard[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {packages.map((item, index) => (
          <div
            key={item.title}
            className={`rounded-[32px] border px-6 py-6 shadow-[0_14px_28px_var(--shadow-color)] ${
              index === 1
                ? "border-[var(--line)] bg-[var(--foreground)] text-white"
                : "border-[var(--line)] bg-white"
            }`}
          >
            <p
              className={`text-sm uppercase tracking-[0.24em] ${
                index === 1 ? "text-white/42" : "text-black/42"
              }`}
            >
              Package
            </p>
            <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em]">
              {item.title}
            </h3>
            <p
              className={`mt-4 leading-relaxed ${
                index === 1 ? "text-white/68" : "text-black/60"
              }`}
            >
              {item.description}
            </p>
            <div className="mt-6 space-y-3">
              {item.details.map((detail) => (
                <div
                  key={detail}
                  className={`rounded-[20px] border px-4 py-3 ${
                    index === 1
                      ? "border-white/10 bg-white/[0.05] text-white/78"
                      : "border-[var(--line)] bg-[var(--background-soft)] text-black/70"
                  }`}
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function TeamGrid({
  eyebrow,
  title,
  description,
  members
}: {
  eyebrow: string;
  title: string;
  description: string;
  members: TeamMember[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={member.name}
            className="rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[0_12px_24px_var(--shadow-color)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-black/42">0{index + 1}</p>
                <h3 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.05em]">
                  {member.name}
                </h3>
              </div>
              <div className="h-14 w-14 rounded-[18px] bg-[linear-gradient(135deg,var(--accent),var(--background-muted))]" />
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black/48">
              {member.role}
            </p>
            <p className="mt-5 text-base leading-relaxed text-black/60">{member.bio}</p>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function ContactGrid({
  eyebrow,
  title,
  description,
  cards
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: ContactCard[];
}) {
  return (
    <SectionMotion className="mt-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[32px] border border-[var(--line)] bg-white p-6 shadow-[0_12px_24px_var(--shadow-color)]"
          >
            <h3 className="text-[1.8rem] font-semibold tracking-[-0.05em]">{card.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-black/60">{card.description}</p>
            <Link
              href={card.actionHref}
              className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--accent-soft)]"
            >
              {card.actionLabel}
            </Link>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}

export function FinalCta({
  title,
  description,
  primaryAction,
  secondaryAction
}: {
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction?: Action;
}) {
  return (
    <SectionMotion className="mt-8 rounded-[36px] border border-[var(--line)] bg-[var(--foreground)] px-6 py-8 text-white shadow-[0_18px_36px_var(--shadow-color)] sm:px-8 sm:py-10">
      <div className="max-w-[760px]">
        <p className="text-sm uppercase tracking-[0.24em] text-white/42">Next step</p>
        <h2 className="mt-4 text-[clamp(2.3rem,4.4vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
          {title}
        </h2>
        <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-white/68">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryAction.href}
            className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-center text-base font-semibold text-white shadow-[0_12px_24px_var(--shadow-color)] transition hover:-translate-y-0.5 hover:bg-[#7f0000]"
          >
            {primaryAction.label}
          </Link>
          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className="rounded-full border border-white/14 bg-white/[0.04] px-7 py-3.5 text-center text-base font-medium text-white/82 transition hover:bg-white/[0.07]"
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </SectionMotion>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  compact = false,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <div className={compact ? "" : "max-w-[760px]"}>
      <p
        className={`text-sm uppercase tracking-[0.24em] ${
          inverted ? "text-white/42" : "text-black/42"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-semibold leading-[0.96] tracking-[-0.06em] ${
          compact ? "text-[clamp(2.2rem,4vw,4rem)]" : "text-[clamp(2.4rem,4.8vw,4.8rem)]"
        } ${inverted ? "text-white" : "text-black"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-relaxed ${
          inverted ? "text-white/66" : "text-black/60"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

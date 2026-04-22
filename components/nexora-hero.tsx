"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useId, useRef } from "react";

const navigation = ["About", "Blog", "Features", "Pricing", "Pages"];
const companies = [
  "Microsoft",
  "Upwork",
  "Framer",
  "Shopify",
  "Webflow",
  "Notion",
  "Linear",
  "Stripe"
];

const processSteps = [
  {
    title: "Subscribe",
    description: "Choose your plan and send over the SaaS pages or product screens you need.",
    icon: <RefreshIcon />
  },
  {
    title: "Receive",
    description: "Get sharp website work back fast, built to explain your product clearly.",
    icon: <BoltIcon />
  },
  {
    title: "Revise",
    description: "Tighten messaging, layout, or visuals until the site feels right for launch.",
    icon: <ThumbIcon />
  }
];

export function NexoraHero() {
  const sceneRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.25
  });

  const textOpacity = useTransform(smoothProgress, [0, 0.34, 0.58], [1, 0.94, 0]);
  const textY = useTransform(smoothProgress, [0, 0.58], [0, -120]);
  const imageY = useTransform(smoothProgress, [0, 0.25, 0.7, 1], [420, 240, -120, -760]);
  const imageScale = useTransform(smoothProgress, [0, 0.7, 1], [0.84, 0.97, 1.06]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.1, 1], [0.8, 1, 1]);

  const animatedTextStyle = prefersReducedMotion
    ? undefined
    : { opacity: textOpacity, y: textY };
  const animatedImageStyle = prefersReducedMotion
    ? undefined
    : { y: imageY, scale: imageScale, opacity: imageOpacity };

  return (
    <main className="page-shell min-h-screen bg-[var(--background)] px-4 pb-20 pt-7 text-[var(--foreground)] sm:px-6 lg:px-10">
      <header className="sticky top-5 z-50 mx-auto flex w-full max-w-fit items-center gap-1 rounded-full border border-black/10 bg-white/80 px-3 py-2 shadow-[0_18px_50px_rgba(17,17,17,0.12)] backdrop-blur-xl">
        <a
          href="#"
          className="font-serif-display px-4 text-[1.7rem] leading-none tracking-[-0.05em]"
        >
          Nexora
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-black/72 transition hover:bg-black/[0.05] hover:text-black"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden rounded-full border border-black/10 px-4 py-2 text-[13px] font-medium text-black/80 transition hover:bg-black/[0.05] md:inline-flex"
        >
          Tutorials
        </a>

        <a
          href="#"
          className="ml-1 rounded-full bg-[var(--lime)] px-5 py-2.5 text-[13px] font-semibold !text-black shadow-[0_12px_28px_rgba(216,255,28,0.22)] transition hover:-translate-y-0.5 hover:bg-[rgb(206,245,18)] hover:!text-black"
        >
          Book a call
        </a>
      </header>

      <section
        ref={sceneRef}
        className="relative mx-auto -mt-[4.5rem] min-h-[240vh] max-w-[1120px] sm:min-h-[255vh]"
      >
        <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-visible">
          <motion.div
            style={animatedTextStyle}
            className="relative z-10 flex max-w-[940px] flex-col items-center pt-[5.5rem] text-center sm:pt-28"
          >
            <div className="rounded-full border border-black/10 bg-black/[0.03] px-5 py-2 text-sm text-black/68 shadow-[0_12px_30px_rgba(17,17,17,0.08)] backdrop-blur-lg">
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[var(--lime)] shadow-[0_0_14px_rgba(216,255,28,0.9)]" />
              Websites for SaaS businesses.
            </div>

            <h1 className="mt-10 text-[clamp(3.8rem,8.7vw,7.9rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Nexora builds
              <span className="font-serif-display ml-[0.12em] font-medium italic text-black/82">
                SaaS
              </span>
              <br />
              websites that sell clearly.
            </h1>

            <p className="mt-7 max-w-[760px] text-[clamp(1.02rem,1.8vw,1.45rem)] tracking-[-0.04em] text-black/62">
              I design and build conversion-focused websites for SaaS businesses that need sharper messaging, cleaner product storytelling, and better looking pages.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-[var(--lime)] px-10 py-4 text-[1.02rem] font-semibold !text-black shadow-[0_16px_36px_rgba(216,255,28,0.2)] transition hover:-translate-y-0.5 hover:bg-[rgb(206,245,18)] hover:!text-black"
              >
                Book a call
              </a>
              <a
                href="#"
                className="rounded-full border border-black/10 bg-black/[0.03] px-10 py-4 text-[1.02rem] font-medium text-black/78 transition hover:bg-black/[0.06]"
              >
                See plans
              </a>
            </div>
          </motion.div>

          <motion.div
            style={animatedImageStyle}
            className="pointer-events-none absolute inset-x-0 top-[72vh] z-30 mx-auto w-full max-w-[1120px]"
          >
            <div className="relative h-[340px] overflow-hidden rounded-[30px] border border-black/10 bg-[#0b0b0b] sm:h-[440px] lg:h-[560px]">
              <AnimatedHeroArtwork />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-[24vh] max-w-[1120px]">
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[var(--background-soft)] py-5 shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-sm">
          <p className="mb-4 text-center text-sm text-black/42">
            SaaS teams and businesses I have helped
          </p>
          <div className="marquee-mask">
            <div className="marquee-track">
              {[...companies, ...companies].map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="mx-7 whitespace-nowrap text-[1.7rem] font-semibold tracking-[-0.06em] text-black/82 sm:text-[2.2rem]"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1120px]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[36px] border border-black/10 bg-[linear-gradient(180deg,rgba(17,17,17,0.03),rgba(17,17,17,0.015))] px-6 py-12 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur-sm sm:px-10 sm:py-16 lg:px-14"
        >
          <div className="mx-auto max-w-[760px] text-center">
            <div className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-5 py-2 text-sm text-black/68">
              Process
            </div>
            <h2 className="mt-8 text-[clamp(2.4rem,5.6vw,5.1rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
              Your SaaS website,
              <span className="font-serif-display ml-[0.12em] font-medium italic text-black/82">
                effortlessly.
              </span>
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.8vw,1.45rem)] tracking-[-0.04em] text-black/58">
              A simple three-step flow for shipping polished SaaS pages without slow agency cycles.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-black/8 bg-white px-6 py-8 text-center shadow-[0_12px_36px_rgba(17,17,17,0.06)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center text-black">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-[2rem] font-semibold tracking-[-0.06em] text-black/92">
                  {step.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[280px] text-lg leading-relaxed tracking-[-0.03em] text-black/56">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#"
              className="rounded-full bg-[var(--lime)] px-9 py-4 text-lg font-semibold !text-black shadow-[0_16px_36px_rgba(216,255,28,0.2)] transition hover:-translate-y-0.5 hover:bg-[rgb(206,245,18)] hover:!text-black"
            >
              Book a 15-min call
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function AnimatedHeroArtwork() {
  const prefersReducedMotion = useReducedMotion();
  const glowId = useId();
  const ng1Id = useId();
  const ng2Id = useId();
  const ng3Id = useId();
  const ng4Id = useId();

  const loop = prefersReducedMotion
    ? undefined
    : {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const
      };

  return (
    <motion.svg
      viewBox="0 0 680 340"
      role="img"
      aria-label="Animated Nexora hero artwork"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: [1, 1.025, 1],
              x: [0, -6, 0],
              y: [0, -4, 0]
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 10,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY
            }
      }
    >
      <title>Nexora brand hero animation</title>
      <desc>
        Flowing lime glass shapes drift across a black background while the word
        Nexora settles in the center.
      </desc>

      <defs>
        <radialGradient id={ng1Id} cx="30%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#FBFFD8" />
          <stop offset="18%" stopColor="#ECFF7A" />
          <stop offset="42%" stopColor="#D8FF1C" />
          <stop offset="72%" stopColor="#5A7308" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <radialGradient id={ng2Id} cx="65%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#FFFFCC" />
          <stop offset="22%" stopColor="#E4FF45" />
          <stop offset="55%" stopColor="#A8CC15" />
          <stop offset="85%" stopColor="#2A3800" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <radialGradient id={ng3Id} cx="45%" cy="30%" r="90%">
          <stop offset="0%" stopColor="#FAFFB5" />
          <stop offset="25%" stopColor="#D8FF1C" />
          <stop offset="60%" stopColor="#7A9A10" />
          <stop offset="100%" stopColor="#0A1200" />
        </radialGradient>
        <radialGradient id={ng4Id} cx="55%" cy="20%" r="95%">
          <stop offset="0%" stopColor="#F5FFC8" />
          <stop offset="30%" stopColor="#C8EC20" />
          <stop offset="70%" stopColor="#3E5208" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="680" height="340" fill="#000" />

      <motion.path
        d="M -60 -40 C 100 -10, 240 60, 230 170 C 220 280, 110 350, -10 340 C -130 330, -140 220, -110 130 C -90 70, -90 20, -60 -40 Z"
        fill={`url(#${ng1Id})`}
        opacity="0.92"
        animate={prefersReducedMotion ? undefined : { x: [0, 14, -10, 0], y: [0, 10, -8, 0], rotate: [-1.2, 1.3, -0.8, -1.2] }}
        transition={prefersReducedMotion ? undefined : { duration: 12, ease: "easeInOut", ...loop }}
      />
      <motion.path
        d="M 730 -30 C 640 60, 490 90, 450 190 C 410 290, 540 370, 680 360 C 820 350, 780 220, 770 140 C 760 70, 750 20, 730 -30 Z"
        fill={`url(#${ng2Id})`}
        opacity="0.88"
        animate={prefersReducedMotion ? undefined : { x: [0, -16, 12, 0], y: [0, -8, 10, 0], rotate: [1, -1.2, 0.7, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 11, ease: "easeInOut", ...loop }}
      />
      <motion.path
        d="M 260 -30 C 370 20, 490 40, 500 140 C 510 240, 400 320, 300 300 C 200 280, 170 200, 200 130 C 220 80, 240 30, 260 -30 Z"
        fill={`url(#${ng3Id})`}
        opacity="0.75"
        animate={prefersReducedMotion ? undefined : { x: [0, 8, -6, 0], y: [0, -12, 8, 0], scale: [1, 1.03, 0.985, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 9.5, ease: "easeInOut", ...loop }}
      />
      <motion.path
        d="M 340 -50 C 430 -20, 540 20, 520 110 C 500 190, 410 220, 340 190 C 270 160, 280 80, 340 -50 Z"
        fill={`url(#${ng4Id})`}
        opacity="0.6"
        animate={prefersReducedMotion ? undefined : { x: [0, -8, 6, 0], y: [0, 12, -7, 0], scale: [1, 0.98, 1.04, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 8.5, ease: "easeInOut", ...loop }}
      />

      <motion.ellipse
        cx="340"
        cy="190"
        rx="220"
        ry="60"
        fill={`url(#${glowId})`}
        animate={prefersReducedMotion ? undefined : { scaleX: [1, 1.05, 0.98, 1], opacity: [0.55, 0.7, 0.48, 0.55] }}
        transition={prefersReducedMotion ? undefined : { duration: 7.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.rect
        x="-180"
        y="-30"
        width="160"
        height="420"
        fill="rgba(255,255,255,0.15)"
        opacity="0.12"
        transform="rotate(14 340 170)"
        animate={prefersReducedMotion ? undefined : { x: [0, 920] }}
        transition={prefersReducedMotion ? undefined : { duration: 3.8, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.6 }}
      />

      <motion.text
        x="340"
        y="205"
        textAnchor="middle"
        fill="rgb(246, 245, 238)"
        style={{
          fontFamily: "var(--font-serif), serif",
          fontSize: 66,
          fontWeight: 300,
          fontStyle: "italic"
        }}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18, letterSpacing: "-0.02em" }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, letterSpacing: "0em" }}
        transition={prefersReducedMotion ? undefined : { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        Nexora
      </motion.text>
    </motion.svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M41 21C39.1 14.5 33.3 10 26.5 10C20.2 10 14.7 13.9 12.4 19.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 11V20H22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 33C14.9 39.5 20.7 44 27.5 44C33.8 44 39.3 40.1 41.6 34.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M41 43V34H32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M31 10L14 28H26L23 44L40 26H28L31 10Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThumbIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 24H10V40H16V24Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L27 12C28.7 12 30 13.3 30 15V22H40.2C42.2 22 43.6 23.9 43 25.8L39.4 37.8C39 39.1 37.8 40 36.4 40H20V24Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 45L21.8 41.9L25 44.1L28.2 41.9L30 45L33 42.7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

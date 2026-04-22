"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "./site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="page-shell min-h-screen px-4 pb-10 pt-4 text-[var(--foreground)] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <header className="sticky top-4 z-50">
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex-1 rounded-[32px] border border-[var(--line)] bg-white px-5 py-3 shadow-[0_18px_36px_var(--shadow-color)]">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/"
                  className="font-serif-display text-[1.7rem] leading-none tracking-[-0.06em]"
                >
                  Aureon
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium tracking-[-0.02em] text-white transition hover:bg-[#7f0000]"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-[var(--foreground)]"
            >
              <span className="flex flex-col gap-[8px]">
                <span className="block h-[2px] w-12 rounded-full bg-current" />
                <span className="block h-[2px] w-12 rounded-full bg-current" />
                <span className="block h-[2px] w-12 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="hidden items-center justify-between gap-4 rounded-[28px] border border-[var(--line)] bg-white px-4 py-4 shadow-[0_18px_36px_var(--shadow-color)] backdrop-blur-xl md:flex">
            <Link
              href="/"
              className="font-serif-display text-[1.8rem] leading-none tracking-[-0.06em]"
            >
              Aureon
            </Link>

            <nav className="hidden flex-wrap gap-2 md:flex">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--background-soft)] text-black/72 hover:bg-[var(--background-muted)] hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {menuOpen ? (
            <div className="mt-4 grid gap-2 rounded-[24px] border border-[var(--line)] bg-white p-3 shadow-[0_18px_36px_var(--shadow-color)] md:hidden">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-[18px] px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--background-soft)] text-black/72 hover:bg-[var(--background-muted)] hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </header>

        <main className="pt-8">{children}</main>

        <footer className="mt-10 rounded-[28px] border border-[var(--line)] bg-[var(--background-soft)] px-5 py-5 shadow-[0_12px_24px_var(--shadow-color)] sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif-display text-[1.5rem] leading-none tracking-[-0.05em]">
                Aureon
              </p>
              <p className="mt-2 text-sm text-black/54">
                Minimal websites, systems, and growth support.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-black/62">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

function NavBadge({ label }: { label: string }) {
  return (
    <span className="ml-2 rounded-md bg-badge-active px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
      {label}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-line bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const badge = "badge" in link ? link.badge : undefined;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center text-sm font-medium transition ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                {badge ? <NavBadge label={badge} /> : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-b border-line bg-white md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => {
            const badge = "badge" in link ? link.badge : undefined;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-teal-mist"
              >
                {link.label}
                {badge ? <NavBadge label={badge} /> : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

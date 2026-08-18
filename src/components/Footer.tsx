import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md space-y-4">
          <Logo variant="inverse" />
          <p className="text-sm leading-relaxed text-white/65">
            {site.legalName} connects developers with opportunities and helps
            companies hire engineering talent across US and LATAM markets.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  {link.label}
                  {"badge" in link ? (
                    <span className="rounded-md bg-badge-active px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                      {link.badge}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li className="text-white/45">{site.domain}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>For candidates and hiring teams.</p>
        </div>
      </div>
    </footer>
  );
}

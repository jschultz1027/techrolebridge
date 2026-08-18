import type { Metadata } from "next";
import Link from "next/link";
import { openPositions } from "@/lib/positions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Current openings at ${site.legalName} for developers and technical interview support roles.`,
};

export default function OpenPositionsPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <div className="inline-flex items-center gap-2">
            <p className="text-sm font-medium text-ink-soft">Open Positions</p>
            <span className="rounded-md bg-badge-active px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
              Active
            </span>
          </div>
          <h1 className="display mt-3 text-4xl font-bold text-ink sm:text-5xl md:text-6xl">
            Roles open now.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Current opportunities for developers and engineers who want to grow
            with {site.name}. Apply by email—we’ll follow up with next steps.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page space-y-8">
          {openPositions.map((role, index) => (
            <article
              key={role.title}
              className="grid gap-8 border-t border-line pt-10 first:border-t-0 first:pt-0 md:grid-cols-[0.35fr_1fr] md:gap-12"
            >
              <div>
                <p className="display text-5xl font-bold text-ink/15">
                  0{index + 1}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {role.type}
                </p>
                {role.urgent ? (
                  <span className="mt-3 inline-block rounded-md bg-badge-urgent px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                    Urgent
                  </span>
                ) : null}
              </div>

              <div className="max-w-2xl">
                <h2 className="display text-2xl font-semibold text-ink sm:text-3xl">
                  {role.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {role.summary}
                </p>

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  {role.details.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-base font-medium text-ink">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {role.responsibilities && role.responsibilities.length > 0 ? (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      Responsibilities
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-soft sm:text-base">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {role.requiredSkills && role.requiredSkills.length > 0 ? (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      Required skills
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-soft sm:text-base">
                      {role.requiredSkills.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <p className="mt-6 text-sm text-ink-soft">{role.applyHint}</p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(role.applySubject)}`}
                  className="btn-primary mt-5 inline-flex px-5 py-3 text-sm"
                >
                  Apply by email
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="rounded-3xl bg-ink px-8 py-12 text-white md:px-12">
          <h2 className="display text-3xl font-bold sm:text-4xl">
            Don’t see your fit?
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Tell us what you’re looking for—developer roles or interviewer
            support—and we’ll keep you in mind for upcoming openings.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-[0.6rem] bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

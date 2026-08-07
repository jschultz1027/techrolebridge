import Link from "next/link";
import { MediaCarousel } from "@/components/MediaCarousel";

const reasons = [
  {
    title: "Access reviewed talent",
    body: "Connect with developers who are ready for conversations about real roles—across US and LATAM markets.",
  },
  {
    title: "See current openings",
    body: "Candidates get visibility into active opportunities matched to skills, experience, and goals.",
  },
  {
    title: "Interview-ready availability",
    body: "We prioritize people who can join live interviews reliably—and communicate clearly in English.",
  },
  {
    title: "Human recruiting support",
    body: "Work with a focused team that understands remote engineering careers—not a faceless marketplace alone.",
  },
];

const talentPoints = [
  "Strong spoken and written English",
  "Reliable availability for live interviews and calls",
  "Developer roles across modern stacks",
  "Technical screening / interviewer panel opportunities",
];

const steps = [
  {
    title: "Share your profile",
    body: "Tell us your stack, English level, timezone, and weekly availability for interviews.",
  },
  {
    title: "Get matched",
    body: "We connect you with roles or technical screening work that fits your skills and schedule.",
  },
  {
    title: "Show up prepared",
    body: "Join interviews and conversations as yourself—clear, professional, and on time.",
  },
];

export default function HomePage() {
  return (
    <>
      <MediaCarousel />

      <section className="border-b border-line bg-teal-mist/70 py-10">
        <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-ink">
            Built for remote and hybrid engineering hiring
          </p>
          <p className="text-sm text-ink-soft">
            Developers · Hiring teams · US & LATAM
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Why choose TechRoleBridge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            A focused bridge between talent and roles—less resume noise, more
            useful conversations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
            >
              <h3 className="display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-24">
        <div className="container-page grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-medium text-white/55">Early career & growth</p>
            <h2 className="display mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Starting with a little software experience? Grow with us.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              If you already have some software experience—and want to keep
              building—we help you find roles and grow your career step by step
              across US and LATAM opportunities. You don’t need a perfect resume.
              You need momentum, clear English, and the drive to improve.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-[0.6rem] bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
            >
              Start your career path
            </Link>
          </div>
          <ul className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-7">
            {[
              "Entry and junior-friendly developer paths",
              "Guidance to present your skills with confidence",
              "Roles and interviews across US & LATAM markets",
              "Long-term support as your experience grows",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm text-white/85 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-white py-20 md:py-24">
        <div className="container-page grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="display max-w-2xl text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              Join as a developer or technical interviewer
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              We’re building a network of English-fluent engineers who can join
              live conversations on a dependable schedule—whether you’re
              exploring developer roles or technical interviewer / screening
              opportunities.
            </p>
            <Link href="/contact" className="btn-primary mt-8 px-5 py-3 text-sm">
              Apply to the network
            </Link>
          </div>
          <ul className="space-y-4 rounded-2xl border border-line bg-teal-mist/40 p-7">
            {talentPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-ink sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-mist/60 py-20 md:py-24">
        <div className="container-page">
          <h2 className="display text-3xl font-bold text-ink sm:text-4xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="space-y-3">
                <p className="display text-5xl font-bold text-ink/15">
                  0{index + 1}
                </p>
                <h3 className="display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-ink px-8 py-12 text-white md:px-12 md:py-16">
          <p className="text-sm font-medium text-white/55">For talent</p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
            Work with teams that need what you build
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Explore openings, share your profile direction, and get matched to
            roles across companies hiring in the US and LATAM.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[0.6rem] bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
            >
              Apply / contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-[0.6rem] border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

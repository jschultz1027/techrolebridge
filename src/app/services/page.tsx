import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AutoPlayVideo } from "@/components/AutoPlayVideo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Job matching for developers, early-career support, and technical interviewer opportunities across US and LATAM.",
};

const services = [
  {
    title: "Early-career developer support",
    audience: "For growing engineers",
    body: "Have a little software experience and want to go further? We help candidates land roles and grow their careers together—across US and LATAM markets—with practical matching and steady guidance.",
    points: [
      "Paths for junior and early-career talent",
      "Help turning limited experience into real opportunities",
      "Long-term growth across US & LATAM roles",
    ],
  },
  {
    title: "Developer roles & job matching",
    audience: "For engineers",
    body: "Join a network of English-fluent developers. We share current openings and help you move toward roles aligned with your stack, experience, and schedule.",
    points: [
      "Visibility into active opportunities",
      "Matching based on skills and availability",
      "Clear next steps when a fit looks strong",
    ],
  },
  {
    title: "Technical interviewer opportunities",
    audience: "For engineers",
    body: "If you communicate clearly in English and can join live calls reliably, you can also support technical screening conversations—assessing candidates under your own professional identity.",
    points: [
      "Strong English for live interviews",
      "Dependable interview availability",
      "Structured screening aligned to the role",
    ],
  },
  {
    title: "US & LATAM talent network",
    audience: "For the network",
    body: "We gather engineers across US and LATAM markets who are ready for real conversations—developer roles and legitimate technical screening work.",
    points: [
      "Cross-market reach",
      "Profiles reviewed for role relevance",
      "Professional, transparent introductions",
    ],
  },
];

const ENGLISH_VIDEO =
  "https://assets.mixkit.co/videos/5521/5521-720.mp4";

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-ink-soft">Services</p>
            <h1 className="display mt-3 text-4xl font-bold text-ink sm:text-5xl md:text-6xl">
              From early experience to a stronger career path.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              TechRoleBridge LLC helps developers—including those with a little
              software experience—find roles and grow across US and LATAM
              opportunities.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/services-collab.jpg"
              alt="Developers cooperating together on software work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 35vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-teal-mist/40 py-16 md:py-20">
        <div className="container-page">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-medium text-ink-soft">What success looks like</p>
            <h2 className="display mt-2 text-3xl font-bold text-ink sm:text-4xl">
              Build software. Speak with confidence.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/services-man-dev.jpg"
                  alt="Developer focused on software work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="space-y-1 p-5">
                <p className="display text-lg font-semibold text-ink">
                  Developers at work
                </p>
                <p className="text-sm text-ink-soft">
                  Hands-on software experience—from early career to growing
                  engineering roles across US and LATAM.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <AutoPlayVideo
                  src={ENGLISH_VIDEO}
                  label="Young woman in a video interview with laptop visible"
                  className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
                />
              </div>
              <figcaption className="space-y-1 p-5">
                <p className="display text-lg font-semibold text-ink">
                  Clear English communication
                </p>
                <p className="text-sm text-ink-soft">
                  Fluent, confident conversation for interviews, collaboration,
                  and technical screening calls.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page space-y-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-6 rounded-2xl border border-line bg-white p-7 md:grid-cols-[0.3fr_1fr]"
            >
              <div>
                <p className="display text-5xl font-bold text-ink/15">
                  0{index + 1}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {service.audience}
                </p>
              </div>
              <div className="max-w-2xl">
                <h2 className="display text-2xl font-semibold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {service.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink-soft sm:text-base">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="rounded-3xl bg-ink px-8 py-12 text-white md:px-12">
          <h2 className="display text-3xl font-bold sm:text-4xl">
            Tell us what you need.
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Share your experience, English level, and availability—we&apos;ll
            follow up with a clear next step.
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

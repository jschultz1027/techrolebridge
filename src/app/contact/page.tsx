import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.legalName}. Send your resume or interviewer video to join our network.`,
};

export default function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-lg">
          <p className="text-sm font-medium text-ink-soft">Contact</p>
          <h1 className="display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            How to reach us.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Email us directly based on the role you’re pursuing. We’ll review
            what you send and follow up from our company inbox.
          </p>

          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-lg font-medium text-ink underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Company
              </p>
              <p className="mt-2 text-base text-ink">{site.legalName}</p>
              <p className="text-sm text-ink-soft">{site.domain}</p>
            </div>
          </div>
        </div>

        <div className="space-y-10 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Developers
            </p>
            <h2 className="display mt-3 text-2xl font-semibold text-ink">
              Send your resume
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              If you are a developer, email your resume to{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Developer resume")}`}
                className="font-medium text-ink underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Interviewers
            </p>
            <h2 className="display mt-3 text-2xl font-semibold text-ink">
              Send a short recorded video
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              If you want to work as an interviewer, send a short recorded video
              to{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Interviewer video introduction")}`}
                className="font-medium text-ink underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>

          <a
            href={`mailto:${site.email}`}
            className="btn-primary inline-flex px-5 py-3 text-sm"
          >
            Email {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

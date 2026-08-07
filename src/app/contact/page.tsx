import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.legalName}. Reach us about open roles, talent discovery, or hiring support.`,
};

export default function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-lg">
          <p className="text-sm font-medium text-ink-soft">Contact</p>
          <h1 className="display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            Let’s start the conversation.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Candidates, hiring teams, and partners are welcome. Send a short
            note and we’ll respond from our company inbox.
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

        <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow)] sm:p-8">
          <h2 className="display text-2xl font-semibold text-ink">
            Send a message
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            We typically reply within one to two business days.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

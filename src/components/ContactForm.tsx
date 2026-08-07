"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3.5 text-ink outline-none transition focus:border-ink focus:shadow-[0_0_0_3px_rgba(10,10,10,0.1)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          role: data.get("role"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      setMessage("Thanks — we received your message and will reply soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Email us at ${site.email}.`,
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Alex Rivera"
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="alex@company.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="I am a…" htmlFor="role">
          <select
            id="role"
            name="role"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="candidate">Developer / candidate</option>
            <option value="hiring">Hiring company</option>
            <option value="partner">Partner / other</option>
          </select>
        </Field>
        <Field label="I’m interested in" htmlFor="interest">
          <select
            id="interest"
            name="interest"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="early-career">Early-career / junior developer path</option>
            <option value="jobs">Developer roles / job matching</option>
            <option value="interviewer">Technical interviewer opportunities</option>
            <option value="network">Join the talent network</option>
            <option value="general">General inquiry</option>
          </select>
        </Field>
      </div>

      <Field label="How can we help?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Share your stack, English level, timezone, and weekly interview availability."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full px-6 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {message ? (
        <p
          role="status"
          className={`text-sm ${
            status === "success" ? "text-teal" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block space-y-2 text-sm">
      <span className="font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

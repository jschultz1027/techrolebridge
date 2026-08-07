import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  role?: string;
  interest?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !role || !interest || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const destination = process.env.CONTACT_TO_EMAIL || site.email;
  const resendKey = process.env.RESEND_API_KEY;

  // When Resend is configured, deliver to the company inbox.
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "TechRoleBridge <onboarding@resend.dev>",
        to: [destination],
        reply_to: email,
        subject: `New inquiry from ${name} (${interest})`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Role: ${role}`,
          `Interest: ${interest}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Unable to send right now. Email us at ${destination}.`,
        },
        { status: 502 },
      );
    }
  } else {
    // UI-ready fallback: accept the form and log for local/dev until email is wired.
    console.info("[contact]", { name, email, role, interest, message, destination });
  }

  return NextResponse.json({ ok: true });
}

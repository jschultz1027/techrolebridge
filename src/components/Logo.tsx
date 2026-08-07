import Link from "next/link";
import { site } from "@/lib/site";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 96"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 64c16-18 32-28 40-28s24 10 40 28"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect x="28" y="40" width="10" height="36" rx="2" fill="currentColor" />
      <rect x="59" y="20" width="10" height="56" rx="2" fill="currentColor" />
      <rect x="90" y="40" width="10" height="36" rx="2" fill="currentColor" />
      <rect x="24" y="62" width="80" height="8" rx="2" fill="currentColor" />
      <path
        d="M33 40L64 22L95 40"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="66" r="10" fill="currentColor" />
      <circle cx="110" cy="66" r="10" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "inverse";
}) {
  const inverse = variant === "inverse";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${
        inverse ? "text-white" : "text-ink"
      } ${className}`}
      aria-label={`${site.name} home`}
    >
      <span
        className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg transition duration-300 group-hover:-translate-y-0.5 ${
          inverse ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        <Mark className="h-5 w-6" />
      </span>
      <span className="display text-[1.1rem] font-bold tracking-tight sm:text-[1.25rem]">
        TechRoleBridge
      </span>
    </Link>
  );
}

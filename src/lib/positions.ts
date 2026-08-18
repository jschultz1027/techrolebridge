export const openPositions = [
  {
    title: "Senior Java Developer",
    type: "Full-time",
    urgent: true,
    summary:
      "Join as a senior Java developer on a full-time engagement. Strong spoken English is required so you can collaborate clearly on calls and delivery.",
    details: [
      { label: "Level", value: "Senior" },
      { label: "Salary", value: "$1,500" },
      { label: "English", value: "B2+" },
      { label: "Schedule", value: "Full-time" },
      { label: "Period", value: "1 year+" },
    ],
    applySubject: "Senior Java Developer application",
    applyHint:
      "Send your resume and a short note about your senior-level Java experience.",
  },
  {
    title: "C# / React Developer",
    type: "Part-time",
    urgent: true,
    summary:
      "Build with C# and React on a part-time remote engagement. Ideal for developers who can deliver reliably across backend and frontend work.",
    details: [
      { label: "Stack", value: "C# · React" },
      { label: "Salary", value: "$800" },
      { label: "Payment", value: "Bi-weekly" },
      { label: "Schedule", value: "Part-time" },
      { label: "Location", value: "Remote" },
    ],
    applySubject: "C# / React Developer application",
    applyHint:
      "Send your resume and a short note about your C# and React experience.",
  },
  {
    title: "AI Engineer — Technical Interview Support",
    type: "Part-time",
    urgent: false,
    summary:
      "Support technical interview workflows as an AI engineer. Help with interview preparation structure, evaluation support, and screening conversations under your own professional identity.",
    details: [
      { label: "Rate", value: "$50 / hour" },
      { label: "Schedule", value: "Part-time" },
      { label: "Focus", value: "Technical interview support" },
      { label: "Profile", value: "AI engineering background" },
    ],
    applySubject: "AI Engineer interview support application",
    applyHint:
      "Send a short recorded intro video and a brief summary of your AI / interview experience.",
  },
] as const;

export const activeOpenPositionsCount = openPositions.length;

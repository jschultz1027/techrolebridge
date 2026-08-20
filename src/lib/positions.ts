export type OpenPosition = {
  title: string;
  type: string;
  urgent: boolean;
  summary: string;
  details: { label: string; value: string }[];
  responsibilities?: string[];
  requiredSkills?: string[];
  applySubject: string;
  applyHint: string;
};

export const openPositions: OpenPosition[] = [
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
    title: "AI Engineer — Technical Interview Support",
    type: "Part-time",
    urgent: false,
    summary:
      "Support technical interview workflows as an AI engineer. Help with interview preparation structure, evaluation support, and screening conversations under your own professional identity.",
    details: [
      { label: "Rate", value: "$50 / hour" },
      { label: "English", value: "B2+" },
      { label: "Schedule", value: "Part-time" },
      { label: "Focus", value: "Technical interview support" },
      { label: "Profile", value: "AI engineering background" },
    ],
    applySubject: "AI Engineer interview support application",
    applyHint:
      "Send a short recorded intro video and a brief summary of your AI / interview experience.",
  },
];

export const activeOpenPositionsCount = openPositions.length;

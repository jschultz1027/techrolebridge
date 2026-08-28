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
    title: "LATAM Job Link Collector",
    type: "Part-time",
    urgent: true,
    summary:
      "We are looking for LATAM-based job seekers to find and share active job links from Latin America. Your task is to collect only LATAM job links—clear, valid, and relevant openings.",
    details: [
      { label: "Focus", value: "LATAM job links only" },
      { label: "Rate", value: "$0.10 / link" },
      { label: "English", value: "B2+" },
      { label: "Schedule", value: "Part-time" },
      { label: "Location", value: "LATAM" },
    ],
    responsibilities: [
      "Find and submit active job postings based in Latin America.",
      "Share only LATAM job links—no roles outside the region.",
      "Confirm each link is valid, current, and clearly related to an open position.",
    ],
    requiredSkills: [
      "Familiarity with LATAM job boards and hiring channels.",
      "Attention to detail when checking link quality and location.",
      "Reliable communication and consistent submission of links.",
    ],
    applySubject: "LATAM Job Link Collector application",
    applyHint:
      "Email us a short intro and confirm you can source LATAM job links.",
  },
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

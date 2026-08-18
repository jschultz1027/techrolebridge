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
    title: "Reporting Automation Engineer",
    type: "Part-time",
    urgent: true,
    summary:
      "Modernize a high-volume monthly manufacturer reporting process. Improve SQL queries, automate report generation and delivery, and build reliable validation workflows to reduce manual effort and reporting errors.",
    details: [
      { label: "Focus", value: "SQL · SSRS · automation" },
      { label: "Salary", value: "$800" },
      { label: "Payment", value: "Bi-weekly" },
      { label: "Schedule", value: "Part-time" },
      { label: "Location", value: "Remote" },
    ],
    responsibilities: [
      "Review, refactor, and manage existing SQL reporting queries.",
      "Automate the generation of 50–60 monthly reports across multiple manufacturers.",
      "Develop reporting solutions using SQL Server, SSRS, or similar tools.",
      "Build validation dashboards with month-over-month comparisons and threshold-based alerts.",
      "Standardize formatting, data-quality checks, and issue-tracking processes.",
      "Automate secure report delivery and maintain clear technical documentation.",
      "Collaborate with analysts and business stakeholders during monthly reporting cycles.",
    ],
    requiredSkills: [
      "Strong SQL Server and complex query-development experience.",
      "Experience with SSRS, Power BI, or comparable reporting platforms.",
      "Knowledge of reporting automation, data validation, and ETL workflows.",
      "Ability to troubleshoot data-quality and data-loading issues.",
      "Familiarity with Microsoft Teams, SharePoint, and source control.",
      "Strong attention to detail and communication skills.",
      "Experience using AI tools to compare reports and identify data irregularities is a plus.",
    ],
    applySubject: "Reporting Automation Engineer application",
    applyHint:
      "Send your resume and a short note about your SQL, SSRS/Power BI, and reporting automation experience.",
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
];

export const activeOpenPositionsCount = openPositions.length;

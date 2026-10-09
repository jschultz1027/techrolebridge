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
    title: "US Talent Sourcer",
    type: "Part-time",
    urgent: false,
    summary:
      "Support TechRoleBridge from the United States by researching roles and sharing openings under your own professional LinkedIn profile. You must live in the US and work from your personal laptop.",
    details: [
      { label: "Location", value: "United States" },
      { label: "Pay", value: "$200 / month" },
      { label: "English", value: "B2+" },
      { label: "Schedule", value: "Part-time" },
      { label: "Equipment", value: "Personal laptop required" },
    ],
    responsibilities: [
      "Research and share relevant US job openings with our team.",
      "Use your own professional LinkedIn profile for networking and outreach.",
      "Work remotely from your personal laptop with reliable internet.",
      "Communicate clearly on progress and open roles during weekly check-ins.",
    ],
    requiredSkills: [
      "Must live in the United States.",
      "Active personal LinkedIn profile used professionally as yourself.",
      "Personal laptop and stable internet connection.",
      "Strong attention to detail and clear written English (B2+).",
    ],
    applySubject: "US Talent Sourcer application",
    applyHint:
      "Email a short intro, confirm you live in the US, and share your LinkedIn profile link.",
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
  {
    title: "LATAM Technical Interviewer",
    type: "Part-time",
    urgent: false,
    summary:
      "Join as a technical interviewer if you live in Brazil, Colombia, Argentina, or Mexico. Run screening conversations as yourself and help evaluate developer candidates.",
    details: [
      { label: "Location", value: "Brazil · Colombia · Argentina · Mexico" },
      { label: "Rate", value: "$30 / hour" },
      { label: "English", value: "B2+" },
      { label: "Schedule", value: "Part-time" },
      { label: "Focus", value: "Technical interviewing" },
    ],
    responsibilities: [
      "Lead technical screening interviews under your own professional identity.",
      "Assess candidates clearly in English and share structured feedback.",
      "Join scheduled calls reliably on a US-friendly timezone when needed.",
    ],
    requiredSkills: [
      "Must live in Brazil, Colombia, Argentina, or Mexico.",
      "B2+ English for live interview conversations.",
      "Comfort evaluating software engineering skills.",
    ],
    applySubject: "LATAM Technical Interviewer application",
    applyHint:
      "Send a short recorded intro video and confirm you live in Brazil, Colombia, Argentina, or Mexico.",
  },
];

export const activeOpenPositionsCount = openPositions.length;

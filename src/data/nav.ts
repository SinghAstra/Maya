export type NavItem = { label: string; href: string };
export type NavEntry = { label: string; href?: string; folder?: NavItem[] };

export const NAV: NavEntry[] = [
  { label: "About", href: "#about" },
  {
    label: "Specialties",
    folder: [
      { label: "Anxiety", href: "#specialties" },
      { label: "Panic", href: "#specialties" },
      { label: "Trauma & PTSD", href: "#specialties" },
      { label: "Burnout", href: "#specialties" },
      { label: "Perfectionism", href: "#specialties" },
      { label: "Stress", href: "#specialties" },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "Cognitive Behavioral (CBT)", href: "#approach" },
      { label: "EMDR", href: "#approach" },
      { label: "Mindfulness-Based", href: "#approach" },
      { label: "Body-Oriented", href: "#approach" },
    ],
  },
  { label: "FAQs", href: "#faqs" },
];

export const CONTACT_HREF = "#contact";

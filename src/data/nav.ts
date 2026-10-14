export type NavItem = { label: string; href: string };
export type NavEntry = { label: string; href?: string; folder?: NavItem[] };

export const NAV: NavEntry[] = [
  { label: "About", href: "#" },
  {
    label: "Our Team",
    folder: [
      { label: "Jennifer Anderson, LMFT", href: "#" },
      { label: "Candace Bletscher, AMFT", href: "#" },
      { label: "Heather Williams-Baumgart, AMFT", href: "#" },
      { label: "Samantha Johnson, AMFT", href: "#" },
      { label: "Autumn Bodily, AMFT", href: "#" },
      { label: "Rosa Gomez, AMFT", href: "#" },
      { label: "Chad Flores, AMFT", href: "#" },
      { label: "Simran Sidhu, AMFT", href: "#" },
      { label: "Jessica Jauregui, MA, AMFT", href: "#" },
    ],
  },
  {
    label: "Specialties",
    folder: [
      { label: "Dissociation", href: "#" },
      { label: "Trauma", href: "#" },
      { label: "Special Needs Parenting", href: "#" },
      { label: "Couples", href: "#" },
      { label: "Children & Teens", href: "#" },
      { label: "Anxiety & Depression", href: "#" },
      { label: "Adoption", href: "#" },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "EMDR", href: "#" },
      { label: "Brainspotting", href: "#" },
      { label: "Somatic Therapy", href: "#" },
      { label: "Parts Work Therapy", href: "#" },
    ],
  },
  { label: "FAQs", href: "#" },
];

export const CONTACT_HREF = "#";

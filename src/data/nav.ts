export type NavItem = { label: string; href: string };
export type NavEntry = { label: string; href?: string; folder?: NavItem[] };

export const NAV: NavEntry[] = [
  {
    label: "About",
    folder: [
      { label: "About", href: "https://www.conejovalleycounseling.com/therapists-newbury-park" },
      { label: "Jennifer Anderson, LMFT", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
      { label: "Candace Bletscher, AMFT", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
      { label: "Samantha Johnson, AMFT", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
      { label: "Autumn Bodily, AMFT", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
      { label: "Rosa Gomez, AMFT", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
      { label: "Chad Flores, AMFT", href: "https://www.conejovalleycounseling.com/chad-flores" },
      { label: "Simran Sidhu, AMFT", href: "https://www.conejovalleycounseling.com/simran-sidhu" },
      { label: "Jessica Jauregui, MA, AMFT", href: "https://www.conejovalleycounseling.com/jessica-jauregui" },
    ],
  },
  {
    label: "Specialties",
    folder: [
      { label: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
      { label: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
      { label: "Special Needs Parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
      { label: "Couples", href: "https://www.conejovalleycounseling.com/couples-therapy" },
      { label: "Children & Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
      { label: "Anxiety & Depression", href: "#" },
      { label: "Adoption", href: "https://www.conejovalleycounseling.com/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "EMDR", href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park" },
      { label: "Brainspotting", href: "https://www.conejovalleycounseling.com/brainspotting" },
      { label: "Somatic Therapy", href: "https://www.conejovalleycounseling.com/somatic-therapy" },
      { label: "Parts Work Therapy", href: "https://www.conejovalleycounseling.com/parts-work-therapy" },
    ],
  },
  { label: "FAQs", href: "https://www.conejovalleycounseling.com/faqs" },
  { label: "Contact", href: "https://www.conejovalleycounseling.com/contact" },
];

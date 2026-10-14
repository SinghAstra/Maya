import { siteConfig } from "@/config/site";

export type NavItem = { label: string; href: string };
export type NavEntry = { label: string; href?: string; folder?: NavItem[] };

export const NAV: NavEntry[] = [
  { label: "About", href: siteConfig.url },
  {
    label: "Our Team",
    folder: [
      { label: "Jennifer Anderson, LMFT", href: siteConfig.url },
      { label: "Candace Bletscher, AMFT", href: siteConfig.url },
      { label: "Heather Williams-Baumgart, AMFT", href: siteConfig.url },
      { label: "Samantha Johnson, AMFT", href: siteConfig.url },
      { label: "Autumn Bodily, AMFT", href: siteConfig.url },
      { label: "Rosa Gomez, AMFT", href: siteConfig.url },
      { label: "Chad Flores, AMFT", href: siteConfig.url },
      { label: "Simran Sidhu, AMFT", href: siteConfig.url },
      { label: "Jessica Jauregui, MA, AMFT", href: siteConfig.url },
    ],
  },
  {
    label: "Specialties",
    folder: [
      { label: "Dissociation", href: siteConfig.url },
      { label: "Trauma", href: siteConfig.url },
      { label: "Special Needs Parenting", href: siteConfig.url },
      { label: "Couples", href: siteConfig.url },
      { label: "Children & Teens", href: siteConfig.url },
      { label: "Anxiety & Depression", href: siteConfig.url },
      { label: "Adoption", href: siteConfig.url },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "EMDR", href: siteConfig.url },
      { label: "Brainspotting", href: siteConfig.url },
      { label: "Somatic Therapy", href: siteConfig.url },
      { label: "Parts Work Therapy", href: siteConfig.url },
    ],
  },
  { label: "FAQs", href: siteConfig.url },
];

export const CONTACT_HREF = siteConfig.url;

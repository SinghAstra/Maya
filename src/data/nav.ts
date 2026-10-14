import { ORIGINAL_SITE_URL } from "@/config/site";

export type NavItem = { label: string; href: string };
export type NavEntry = { label: string; href?: string; folder?: NavItem[] };

export const NAV: NavEntry[] = [
  {
    label: "About",
    folder: [
      { label: "About", href: `${ORIGINAL_SITE_URL}/therapists-newbury-park` },
      { label: "Jennifer Anderson, LMFT", href: `${ORIGINAL_SITE_URL}/jennifer-anderson` },
      { label: "Candace Bletscher, AMFT", href: `${ORIGINAL_SITE_URL}/candace-bletscher` },
      { label: "Samantha Johnson, AMFT", href: `${ORIGINAL_SITE_URL}/samantha-johnson` },
      { label: "Autumn Bodily, AMFT", href: `${ORIGINAL_SITE_URL}/autumn-bodily` },
      { label: "Rosa Gomez, AMFT", href: `${ORIGINAL_SITE_URL}/rosa-gomez` },
      { label: "Chad Flores, AMFT", href: `${ORIGINAL_SITE_URL}/chad-flores` },
      { label: "Simran Sidhu, AMFT", href: `${ORIGINAL_SITE_URL}/simran-sidhu` },
      { label: "Jessica Jauregui, MA, AMFT", href: `${ORIGINAL_SITE_URL}/jessica-jauregui` },
    ],
  },
  {
    label: "Specialties",
    folder: [
      { label: "Dissociation", href: `${ORIGINAL_SITE_URL}/dissociative-identity-disorder-therapist-newbury-park` },
      { label: "Trauma", href: `${ORIGINAL_SITE_URL}/trauma-counseling-newbury-park` },
      { label: "Special Needs Parenting", href: `${ORIGINAL_SITE_URL}/counseling-special-needs-parents-newbury-park` },
      { label: "Couples", href: `${ORIGINAL_SITE_URL}/couples-therapy` },
      { label: "Children & Teens", href: `${ORIGINAL_SITE_URL}/children-and-teens` },
      { label: "Anxiety & Depression", href: "#" },
      { label: "Adoption", href: `${ORIGINAL_SITE_URL}/adoption-therapy-ventura-county-ca` },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "EMDR", href: `${ORIGINAL_SITE_URL}/emdr-therapy-newbury-park` },
      { label: "Brainspotting", href: `${ORIGINAL_SITE_URL}/brainspotting` },
      { label: "Somatic Therapy", href: `${ORIGINAL_SITE_URL}/somatic-therapy` },
      { label: "Parts Work Therapy", href: `${ORIGINAL_SITE_URL}/parts-work-therapy` },
    ],
  },
  { label: "FAQs", href: `${ORIGINAL_SITE_URL}/faqs` },
  { label: "Contact", href: `${ORIGINAL_SITE_URL}/contact` },
];

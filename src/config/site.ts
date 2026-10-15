export type SiteConfig = {
  name: string;
  description: string;
  tagline: string;
  url: string;
  links: {
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Dr. Maya Reynolds, PsyD",
  description:
    "Warm, evidence-based therapy for anxiety, trauma, and burnout in Santa Monica, CA. Dr. Maya Reynolds, PsyD offers CBT, EMDR, and mindfulness-based care for adults and high achievers.",
  tagline: "Find your footing again — therapy for anxiety, trauma, and burnout in Santa Monica.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "",
  },
};


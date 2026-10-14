export type SiteConfig = {
  name: string;
  description: string;
  tagline: string;
  url: string;
  links: {
    twitter: string;
    githubRepo: string;
    github: string;
    buildInPublic: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Conejo Valley Family Counseling",
  description:
    "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
  tagline: "Rebuild your foundation on solid ground and finally begin to thrive.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    twitter: "",
    githubRepo: "",
    github: "",
    buildInPublic: "",
  },
};

export const ORIGINAL_SITE_URL =
  process.env.NEXT_PUBLIC_ORIGINAL_SITE_URL ?? "https://www.conejovalleycounseling.com";

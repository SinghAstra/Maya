export type Specialty = {
  title: string;
  href: string;
  body: string;
  desktop: { card: string; button: string };
  mobile: { card: string; button: string };
};

export const SPECIALTIES: Specialty[] = [
  {
    title: "Trauma",
    href: "#",
    body: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    desktop: { card: "4/10/11/17", button: "11/10/13/17" },
    mobile: { card: "6/1/13/9", button: "13/1/15/9" },
  },
  {
    title: "Dissociation",
    href: "#",
    body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    desktop: { card: "15/10/22/17", button: "22/10/24/17" },
    mobile: { card: "16/1/23/9", button: "23/1/25/9" },
  },
  {
    title: "EMDR",
    href: "#",
    body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    desktop: { card: "4/18/11/25", button: "11/18/13/25" },
    mobile: { card: "26/1/33/9", button: "33/1/35/9" },
  },
  {
    title: "Special Needs Parenting",
    href: "#",
    body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    desktop: { card: "15/18/22/25", button: "22/18/24/25" },
    mobile: { card: "36/1/42/9", button: "42/1/44/9" },
  },
];

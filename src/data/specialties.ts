import type { GridArea } from "@/components/block";

export type Specialty = {
  title: string;
  href: string;
  body: string;
  desktop: { card: GridArea; button: GridArea };
  mobile: { card: GridArea; button: GridArea };
};

export const SPECIALTIES: Specialty[] = [
  {
    title: "Anxiety & Panic",
    href: "#services",
    body: "Constant worry, a racing mind, a body that won’t settle. We’ll understand what’s fueling your anxiety and equip you with practical tools from CBT and mindfulness to calm the alarm system and trust yourself again.",
    desktop: { card: "4/10/11/17", button: "11/10/13/17" },
    mobile: { card: "6/1/13/9", button: "13/1/15/9" },
  },
  {
    title: "Trauma & PTSD",
    href: "#services",
    body: "Past experiences can keep you bracing for something to go wrong. Through EMDR and body-oriented work, we process single-incident and complex trauma at a careful pace — with safety and stabilization first.",
    desktop: { card: "15/10/22/17", button: "22/10/24/17" },
    mobile: { card: "16/1/23/9", button: "23/1/25/9" },
  },
  {
    title: "Burnout & Stress",
    href: "#services",
    body: "For high-achieving professionals and entrepreneurs running on empty. Together we slow the relentless pressure, reconnect you with what matters, and build sustainable ways of living and working.",
    desktop: { card: "4/18/11/25", button: "11/18/13/25" },
    mobile: { card: "26/1/33/9", button: "33/1/35/9" },
  },
  {
    title: "Perfectionism & Self-Worth",
    href: "#services",
    body: "When nothing you do feels like enough, rest starts to feel undeserved. We’ll soften the harsh inner critic, ease perfectionism, and help you build a steadier sense of worth that isn’t tied to performance.",
    desktop: { card: "15/18/22/25", button: "22/18/24/25" },
    mobile: { card: "36/1/42/9", button: "42/1/44/9" },
  },
];

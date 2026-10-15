import type { GridArea } from "@/components/block";

export type ExpertiseItem = {
  label: string;
  desktop: { text: GridArea; rule?: GridArea };
  mobile: { text: GridArea; rule?: GridArea };
};

export const EXPERTISE_COLUMN_ONE: ExpertiseItem[] = [
  { label: "Anxiety", desktop: { text: "1/9/3/17", rule: "2/9/3/16" }, mobile: { text: "4/1/6/9", rule: "5/1/6/9" } },
  { label: "Panic", desktop: { text: "3/9/5/17", rule: "4/9/5/16" }, mobile: { text: "6/1/8/9", rule: "7/1/8/9" } },
  { label: "Trauma & PTSD", desktop: { text: "5/9/7/17", rule: "6/9/7/16" }, mobile: { text: "8/1/10/9", rule: "9/1/10/9" } },
  { label: "Burnout", desktop: { text: "7/9/9/17", rule: "8/9/9/16" }, mobile: { text: "10/1/12/9", rule: "11/1/12/9" } },
  { label: "Perfectionism", desktop: { text: "9/9/11/17", rule: "10/9/11/16" }, mobile: { text: "12/1/14/9", rule: "13/1/14/9" } },
  { label: "Stress", desktop: { text: "11/9/13/17" }, mobile: { text: "14/1/16/9" } },
];

export const EXPERTISE_COLUMN_TWO: ExpertiseItem[] = [
  { label: "Life transitions", desktop: { text: "1/17/3/25", rule: "2/17/3/24" }, mobile: { text: "16/1/18/9", rule: "15/1/16/9" } },
  { label: "Self-worth", desktop: { text: "3/17/5/25", rule: "4/17/5/24" }, mobile: { text: "18/1/20/9", rule: "17/1/18/9" } },
  { label: "Relationships", desktop: { text: "5/17/7/25", rule: "6/17/7/24" }, mobile: { text: "20/1/22/9", rule: "19/1/20/9" } },
  { label: "High achievers", desktop: { text: "7/17/9/25", rule: "8/17/9/24" }, mobile: { text: "22/1/24/9", rule: "21/1/22/9" } },
  { label: "Mindfulness", desktop: { text: "9/17/11/25", rule: "10/17/11/24" }, mobile: { text: "24/1/26/9", rule: "23/1/24/9" } },
  { label: "…and more.", desktop: { text: "11/17/13/25" }, mobile: { text: "26/1/28/9" } },
];

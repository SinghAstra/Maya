import type { Metadata } from "next";
import { beaufort, muli, printedMoments } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling — Clone",
  description:
    "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${beaufort.variable} ${muli.variable} ${printedMoments.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

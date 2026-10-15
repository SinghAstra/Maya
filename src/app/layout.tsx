import type { Metadata } from "next";
import { beaufort, muli, printedMoments } from "@/fonts/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "therapist in Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy California",
    "EMDR therapist CA",
    "burnout counseling",
    "CBT therapist Santa Monica",
    "online therapy California",
    "Dr. Maya Reynolds PsyD",
  ],
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

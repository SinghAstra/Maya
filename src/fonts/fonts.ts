import localFont from "next/font/local";

// Heading font — beaufort-pro, weight 300 (Adobe Typekit kit fsc1wsd, self-hosted)
export const beaufort = localFont({
  src: [
    { path: "./beaufort-pro-300.woff2", style: "normal", weight: "300" },
    { path: "./beaufort-pro-300-italic.woff2", style: "italic", weight: "300" },
  ],
  variable: "--font-beaufort",
  display: "swap",
});

// Body font — Muli variable file (identical asset served for 300 and 400)
export const muli = localFont({
  src: [
    { path: "./muli-300.woff2", style: "normal", weight: "300 400" },
    { path: "./muli-300-italic.woff2", style: "italic", weight: "300 400" },
  ],
  variable: "--font-muli",
  display: "swap",
});

// Script accent words — PrintedMoments (from the original site's custom.css)
export const printedMoments = localFont({
  src: [{ path: "./printedmoments.woff", style: "normal", weight: "400" }],
  variable: "--font-script",
  display: "swap",
});

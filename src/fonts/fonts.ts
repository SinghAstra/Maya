import localFont from "next/font/local";

export const beaufort = localFont({
  src: [
    { path: "./beaufort-pro-300.woff2", style: "normal", weight: "300" },
    { path: "./beaufort-pro-300-italic.woff2", style: "italic", weight: "300" },
  ],
  variable: "--font-beaufort",
  display: "swap",
});

export const muli = localFont({
  src: [
    { path: "./muli-300.woff2", style: "normal", weight: "300 400" },
    { path: "./muli-300-italic.woff2", style: "italic", weight: "300 400" },
  ],
  variable: "--font-muli",
  display: "swap",
});

export const printedMoments = localFont({
  src: [{ path: "./printedmoments.woff", style: "normal", weight: "400" }],
  variable: "--font-script",
  display: "swap",
});

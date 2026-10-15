import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3001",
    channel: "msedge",
  },
  projects: [
    { name: "mobile-390", use: { viewport: { width: 390, height: 844 } } },
    { name: "tablet-768", use: { viewport: { width: 768, height: 1024 } } },
    { name: "desktop-1440", use: { viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    command: "npm run dev -- -p 3001",
    url: "http://localhost:3001",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});

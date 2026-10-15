import { test, expect } from "@playwright/test";

test.describe("homepage responsiveness", () => {
  test("all core sections render", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("move through anxiety, trauma");
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("carrying a lot");
    await expect(page.getByText("How I", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("Our specialties", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("123th Street 45 W").first()).toBeVisible();
  });

  test("section background themes match the original", async ({ page }) => {
    await page.goto("/");
    const bgs = await page.evaluate(() =>
      [...document.querySelectorAll("section")].map((s) => {
        const cls = s.className;
        if (cls.includes("bg-cream")) return "cream";
        if (cls.includes("bg-quote")) return "quote";
        if (cls.includes("bg-surface-tint")) return "tint";
        if (cls.includes("bg-white")) return "white";
        return getComputedStyle(s).backgroundColor;
      })
    );
    expect(bgs).toEqual([
      "cream",
      "cream",
      "white",
      "quote",
      "white",
      "tint",
      "cream",
      "white",
      "white",
      "tint",
      "white",
      "cream",
    ]);
  });

  test("no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const widths = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth + 1);
  });

  test("navigation adapts to viewport", async ({ page }, testInfo) => {
    await page.goto("/");
    const burger = page.getByRole("button", { name: "Open menu" });
    if (testInfo.project.name === "desktop-1440") {
      await expect(page.getByRole("navigation").first()).toBeVisible();
      await expect(burger).toBeHidden();
    } else {
      await expect(burger).toBeVisible();
      await burger.click();
      await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Specialties" })).toBeVisible();
      await page.getByRole("button", { name: "Specialties" }).click();
      await expect(page.getByRole("button", { name: /Back/ })).toBeVisible();
      const transition = await page.evaluate(() => {
        const navs = [...document.querySelectorAll("nav")].filter((n) => n.className.includes("menu-slide"));
        return navs.map((n) => getComputedStyle(n).transitionProperty);
      });
      for (const prop of transition) {
        expect(prop).toContain("translate");
      }
      await expect(page.getByRole("link", { name: "Anxiety", exact: true })).toBeVisible();
      await page.getByRole("button", { name: /Back/ }).click();
      await expect(page.getByRole("button", { name: "Specialties" })).toBeVisible();
      await page.getByRole("button", { name: "Close menu" }).click();
      await expect(page.getByRole("button", { name: "Close menu" })).toBeHidden();
    }
  });

  test("hero content fits within viewport width", async ({ page }) => {
    await page.goto("/");
    const h1 = page.getByRole("heading", { level: 1 });
    const box = await h1.boundingBox();
    const viewport = page.viewportSize()!;
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1);
  });

  test("images load successfully", async ({ page }) => {
    const failed: string[] = [];
    page.on("response", (res) => {
      if (res.request().resourceType() === "image" && !res.ok()) {
        failed.push(res.url());
      }
    });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState("networkidle");
    expect(failed).toEqual([]);
  });
});

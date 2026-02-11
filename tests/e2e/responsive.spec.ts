import { test, expect } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 320, height: 568 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1024, height: 768 },
  { name: "wide", width: 1440, height: 900 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
    });

    test("hero is visible", async ({ page }) => {
      const hero = page.locator("#hero");
      await expect(hero).toBeVisible();

      const h1 = page.locator("#hero h1");
      await expect(h1).toBeVisible();
    });

    test("all sections are present", async ({ page }) => {
      for (const id of [
        "#about",
        "#skills",
        "#experience",
        "#projects",
      ]) {
        const section = page.locator(id);
        await expect(section).toBeAttached();
      }
    });

    test("no horizontal overflow", async ({ page }) => {
      const bodyWidth = await page.evaluate(
        () => document.body.scrollWidth
      );
      expect(bodyWidth).toBeLessThanOrEqual(vp.width);
    });
  });
}

test.describe("responsive breakpoints", () => {
  test("mobile shows hamburger menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const toggle = page.locator(".nav-toggle");
    await expect(toggle).toBeVisible();
  });

  test("desktop hides hamburger menu", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto("/");

    const toggle = page.locator(".nav-toggle");
    await expect(toggle).not.toBeVisible();

    const navLinks = page.locator("#nav-links");
    await expect(navLinks).toBeVisible();
  });
});

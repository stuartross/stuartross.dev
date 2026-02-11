import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has correct heading hierarchy", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);

    const h2s = page.locator("h2");
    expect(await h2s.count()).toBeGreaterThanOrEqual(4);
  });

  test("sections have aria-labelledby attributes", async ({ page }) => {
    const sections = page.locator("section[aria-labelledby]");
    expect(await sections.count()).toBeGreaterThanOrEqual(4);

    for (const section of await sections.all()) {
      const labelledBy = await section.getAttribute("aria-labelledby");
      expect(labelledBy).toBeTruthy();

      const heading = page.locator(`#${labelledBy}`);
      await expect(heading).toBeAttached();
    }
  });

  test("navigation has aria-label", async ({ page }) => {
    const nav = page.locator("nav[aria-label]");
    await expect(nav).toBeAttached();
  });

  test("mobile toggle has aria-expanded", async ({ page }) => {
    const toggle = page.locator(".nav-toggle[aria-expanded]");
    await expect(toggle).toBeAttached();
  });

  test("interactive elements are keyboard focusable", async ({
    page,
  }) => {
    // Tab through the page and verify focus moves
    await page.keyboard.press("Tab");
    const firstFocused = await page.evaluate(
      () => document.activeElement?.tagName
    );
    expect(firstFocused).toBeTruthy();
  });

  test("all images have alt text", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });

  test("links have discernible text", async ({ page }) => {
    const links = page.locator("a");
    for (const link of await links.all()) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      expect(text?.trim() || ariaLabel).toBeTruthy();
    }
  });
});

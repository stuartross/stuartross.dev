import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("nav contains links to all sections", async ({ page }) => {
    const navLinks = page.locator("#nav-links a");
    const hrefs = await navLinks.evaluateAll((links) =>
      links.map((l) => (l as HTMLAnchorElement).getAttribute("href"))
    );

    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("#skills");
    expect(hrefs).toContain("#experience");
    expect(hrefs).toContain("#projects");
    expect(hrefs).not.toContain("#contact");
  });

  test("clicking nav link scrolls to target section", async ({
    page,
  }) => {
    await page.click('#nav-links a[href="#projects"]');

    // Wait for smooth scroll to finish
    await page.waitForTimeout(500);

    const projectsSection = page.locator("#projects");
    await expect(projectsSection).toBeInViewport();
  });

  test("mobile menu toggle works", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const toggle = page.locator(".nav-toggle");
    await expect(toggle).toBeVisible();

    // Menu should be hidden initially
    const navLinks = page.locator("#nav-links");
    await expect(navLinks).not.toBeVisible();

    // Open menu
    await toggle.click();
    await expect(navLinks).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Close menu by clicking a link
    await page.click('#nav-links a[href="#about"]');
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("escape key closes mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const toggle = page.locator(".nav-toggle");
    await toggle.click();

    await expect(page.locator("#nav-links")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});

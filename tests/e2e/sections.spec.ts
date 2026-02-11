import { test, expect } from "@playwright/test";

test.describe("Page sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero displays name and title", async ({ page }) => {
    const h1 = page.locator("#hero h1");
    await expect(h1).toBeVisible();
    await expect(h1).not.toBeEmpty();

    const title = page.locator(".hero-title");
    await expect(title).toBeVisible();
    await expect(title).not.toBeEmpty();
  });

  test("hero displays profile photo", async ({ page }) => {
    const photo = page.locator("#hero img.hero-photo");
    await expect(photo).toBeVisible();
    await expect(photo).toHaveAttribute("alt", /./);
    await expect(photo).toHaveAttribute("src", /profile\.jpg/);
  });

  test("about section has heading and content", async ({ page }) => {
    const heading = page.locator("#about h2");
    await expect(heading).toHaveText("About");

    const paragraphs = page.locator("#about p");
    await expect(paragraphs.first()).toBeVisible();
  });

  test("skills section groups skills by category", async ({ page }) => {
    const heading = page.locator("#skills h2");
    await expect(heading).toHaveText("Skills");

    const categories = page.locator(".skill-category");
    await expect(categories).toHaveCount(3);

    for (const category of await categories.all()) {
      const h3 = category.locator("h3");
      await expect(h3).toBeVisible();

      const items = category.locator("li");
      expect(await items.count()).toBeGreaterThan(0);
    }
  });

  test("experience section shows entries in order", async ({ page }) => {
    const heading = page.locator("#experience h2");
    await expect(heading).toHaveText("Experience");

    const entries = page.locator(".experience-entry");
    expect(await entries.count()).toBeGreaterThan(0);

    for (const entry of await entries.all()) {
      await expect(entry.locator("h3")).toBeVisible();
      await expect(entry.locator(".experience-company")).toBeVisible();
      await expect(entry.locator(".experience-dates")).toBeVisible();
    }
  });

  test("projects section displays project cards", async ({ page }) => {
    const heading = page.locator("#projects h2");
    await expect(heading).toHaveText("Projects");

    const cards = page.locator(".project-card");
    expect(await cards.count()).toBeGreaterThan(0);

    for (const card of await cards.all()) {
      await expect(card.locator("h3")).toBeVisible();
      await expect(card.locator("p")).toBeVisible();
    }
  });

  test("header social icons are visible with accessible labels", async ({
    page,
  }) => {
    const socialContainer = page.locator(".header-social");
    await expect(socialContainer).toBeVisible();

    const links = socialContainer.locator("a");
    expect(await links.count()).toBeGreaterThan(0);

    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("aria-label", /./);
      const svg = link.locator("svg");
      expect(await svg.count()).toBe(1);
    }
  });

  test("header social email link uses mailto protocol", async ({ page }) => {
    const emailLink = page.locator('.header-social a[href^="mailto:"]');
    expect(await emailLink.count()).toBeGreaterThan(0);
  });

  test("header social external links open in new tab", async ({ page }) => {
    const externalLinks = page.locator(
      '.header-social a[target="_blank"]'
    );
    for (const link of await externalLinks.all()) {
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });
});

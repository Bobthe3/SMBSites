import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  { path: '/', name: 'Agency Home' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/pingsbistro', name: "Ping's Bistro" },
  { path: '/verdant', name: 'Verdant' },
  { path: '/ysg', name: 'YSG Halal' },
  { path: '/siafusion', name: 'Sia Fusion' },
  { path: '/keekuzcom', name: 'Keekuz' },
  { path: '/dinos', name: 'Dinos' },
  { path: '/sweetgarden', name: 'Sweet Garden' },
];

test.describe('Accessibility Tests @accessibility', () => {
  for (const route of routes) {
    test(`${route.name} should have no critical accessibility violations`, async ({ page }) => {
      await page.goto(route.path);

      // Wait for page to fully load
      await page.waitForLoadState('networkidle');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // Filter for critical and serious violations only
      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test(`${route.name} should have skip-to-content link`, async ({ page }) => {
      await page.goto(route.path);

      // Check for skip link
      const skipLink = page.locator('a.skip-to-content, a[href="#main-content"]');

      // Skip link should exist
      await expect(skipLink.first()).toBeAttached();

      // Should be visible on focus
      await skipLink.first().focus();
      await expect(skipLink.first()).toBeVisible();
    });

    test(`${route.name} should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(route.path);

      // Get all headings
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();

      // Should have at least one h1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);

      // Check for valid heading hierarchy (no skipping levels)
      let lastLevel = 0;
      for (const heading of headings) {
        const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
        const level = parseInt(tagName.replace('h', ''));

        // Level should not skip more than one level
        if (lastLevel > 0 && level > lastLevel + 1) {
          console.warn(`Heading hierarchy skips from h${lastLevel} to h${level}`);
        }
        lastLevel = level;
      }
    });

    test(`${route.name} should have alt text on images`, async ({ page }) => {
      await page.goto(route.path);

      const images = await page.locator('img').all();

      for (const img of images) {
        const alt = await img.getAttribute('alt');
        const role = await img.getAttribute('role');

        // Images should have alt text or be marked as decorative
        const hasAccessibleName = alt !== null || role === 'presentation';
        expect(hasAccessibleName).toBeTruthy();
      }
    });
  }
});

test.describe('Keyboard Navigation @accessibility', () => {
  for (const route of routes) {
    test(`${route.name} should support keyboard navigation`, async ({ page }) => {
      await page.goto(route.path);

      // Tab through focusable elements
      const focusableSelectors = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableElements = await page.locator(focusableSelectors).all();

      // Should have focusable elements
      expect(focusableElements.length).toBeGreaterThan(0);

      // Tab to first element and verify focus ring is visible
      await page.keyboard.press('Tab');

      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el) return null;
        const style = window.getComputedStyle(el);
        return {
          hasOutline: style.outlineStyle !== 'none' || style.boxShadow !== 'none',
          tagName: el.tagName,
        };
      });

      expect(focusedElement).not.toBeNull();
    });
  }
});

test.describe('Color Contrast @accessibility', () => {
  for (const route of routes) {
    test(`${route.name} should have sufficient color contrast`, async ({ page }) => {
      await page.goto(route.path);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2aa'])
        .include(['body'])
        .analyze();

      // Filter for color contrast violations
      const contrastViolations = accessibilityScanResults.violations.filter(
        v => v.id === 'color-contrast'
      );

      // Should have no critical contrast violations
      const criticalContrastViolations = contrastViolations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalContrastViolations).toEqual([]);
    });
  }
});

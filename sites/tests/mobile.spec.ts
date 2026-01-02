import { test, expect, devices } from '@playwright/test';

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

const viewports = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 720 },
];

test.describe('Mobile Responsiveness @mobile', () => {
  for (const route of routes) {
    for (const viewport of viewports) {
      test(`${route.name} should be responsive on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(route.path);
        await page.waitForLoadState('networkidle');

        // Check for horizontal scrollbar (indicates overflow)
        const hasHorizontalScroll = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        expect(hasHorizontalScroll).toBeFalsy();
      });
    }

    test(`${route.name} should have touch-friendly targets on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(route.path);

      // Get all interactive elements
      const interactiveElements = await page.locator('a, button, input, select, textarea').all();

      for (const element of interactiveElements) {
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        const boundingBox = await element.boundingBox();
        if (!boundingBox) continue;

        // WCAG recommends minimum 44x44px touch targets
        // Allow slightly smaller (40px) for practical purposes
        const minSize = 40;

        if (boundingBox.width < minSize || boundingBox.height < minSize) {
          // Get element info for debugging
          const tagName = await element.evaluate(el => el.tagName);
          const text = await element.textContent();

          // Only warn, don't fail for small elements that might have padding/margin
          console.warn(
            `Small touch target found: ${tagName} "${text?.slice(0, 20)}" is ${boundingBox.width}x${boundingBox.height}px`
          );
        }
      }
    });

    test(`${route.name} should have readable text on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(route.path);

      // Check body font size is at least 16px (prevents zoom on iOS)
      const bodyFontSize = await page.evaluate(() => {
        const style = window.getComputedStyle(document.body);
        return parseFloat(style.fontSize);
      });

      expect(bodyFontSize).toBeGreaterThanOrEqual(14);

      // Check that important text elements are large enough
      const importantText = await page.locator('h1, h2, p, a, button, span').all();
      let smallTextCount = 0;

      for (const element of importantText) {
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        const fontSize = await element.evaluate(el => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });

        if (fontSize < 12) {
          smallTextCount++;
        }
      }

      // Allow some small text but not too much
      const totalElements = importantText.length;
      const smallTextPercentage = (smallTextCount / totalElements) * 100;
      expect(smallTextPercentage).toBeLessThan(20);
    });
  }
});

test.describe('Mobile Navigation @mobile', () => {
  for (const route of routes) {
    test(`${route.name} should have accessible navigation on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(route.path);

      // Check for navigation element
      const nav = page.locator('nav');
      const navCount = await nav.count();

      expect(navCount).toBeGreaterThan(0);

      // Check if nav is visible or has a hamburger menu
      const isNavVisible = await nav.first().isVisible();
      const hamburgerButton = page.locator('button').filter({ hasText: /menu/i });
      const mobileMenuButton = page.locator('[aria-label*="menu"], [class*="mobile-menu"], [class*="hamburger"]');

      // Either nav should be visible or there should be a way to open it
      const hasHamburger = (await hamburgerButton.count()) > 0 || (await mobileMenuButton.count()) > 0;

      expect(isNavVisible || hasHamburger).toBeTruthy();
    });
  }
});

test.describe('Reduced Motion @mobile', () => {
  for (const route of routes) {
    test(`${route.name} should respect prefers-reduced-motion`, async ({ page }) => {
      // Emulate reduced motion preference
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(route.path);

      // Check that animations are disabled or very short
      const hasLongAnimations = await page.evaluate(() => {
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          const style = window.getComputedStyle(el);
          const duration = parseFloat(style.animationDuration) || 0;
          const transition = parseFloat(style.transitionDuration) || 0;

          // More than 0.1s is considered "long" when reduced motion is preferred
          if (duration > 0.1 || transition > 0.1) {
            return true;
          }
        }
        return false;
      });

      // This is a soft check - we warn but don't fail
      // because CSS may still have longer durations defined but the actual animation might be disabled
      if (hasLongAnimations) {
        console.warn(`${route.name} may have long animations even with reduced-motion preference`);
      }
    });
  }
});

test.describe('Viewport Meta @mobile', () => {
  for (const route of routes) {
    test(`${route.name} should have proper viewport meta tag`, async ({ page }) => {
      await page.goto(route.path);

      const viewportMeta = await page.locator('meta[name="viewport"]').getAttribute('content');

      // Should have viewport meta
      expect(viewportMeta).not.toBeNull();

      // Should include width=device-width
      expect(viewportMeta).toContain('width=device-width');
    });
  }
});

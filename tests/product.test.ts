import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://store.dandelionchocolate.com/pages/home');
  });

  test('should verify the title of the page', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '#s-162e73fd-3d97-44cb-ba49-c9ed04c9da54 > div > h1';
    const expectedLink = 'Single-OriginChocolate';
    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });

});

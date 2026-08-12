const { test, expect } = require('@playwright/test');

test('TC-AUTO-001 - application loads successfully', async ({ page }) => {
  // Open the application using the baseURL from playwright.config.js
  await page.goto('./');

  // Verify the application page loaded.
  await expect(page).toHaveTitle(/E-commerce QA Scenario Library/i);

  // Verify the primary capability selector is visible.
  const capabilitySelector = page.locator('#capabilitySelect');
  await expect(capabilitySelector).toBeVisible();

  // Verify the application begins in the Scenario Ready state.
  await expect(page.getByText('Scenario Ready')).toBeVisible();
});
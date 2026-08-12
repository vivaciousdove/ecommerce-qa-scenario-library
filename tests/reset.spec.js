const { test, expect } = require('@playwright/test');

test('TC-AUTO-003 - reset returns the application to its initial state', async ({ page }) => {
  // Open the deployed application.
  await page.goto('./');

  // Locate the capability selector.
  const capabilitySelector = page.locator('#capabilitySelect');

  // Select Load Balancing so the application moves away
  // from its initial state.
  await capabilitySelector.selectOption('loadBalancing');

  // Verify the Load Balancing scenario is displayed.
  await expect(page.locator('#capabilityName'))
    .toHaveText('Load Balancing');

  // Verify the scenario section is visible before Reset.
  await expect(page.locator('#scenarioSection'))
    .toBeVisible();

  // Locate and click the Reset button.
  const resetButton = page.getByRole('button', {
    name: 'Reset',
    exact: true
  });

  await resetButton.click();

  // Verify the dropdown returned to its default value.
  await expect(capabilitySelector)
    .toHaveValue('');

  // Verify the scenario section is hidden.
  await expect(page.locator('#scenarioSection'))
    .toBeHidden();

  // Verify the initial state returned.
  await expect(
    page.getByRole('heading', {
      name: 'Scenario Ready',
      exact: true
    })
  ).toBeVisible();

  // Verify stale capability content was cleared.
  await expect(page.locator('#capabilityName'))
    .toHaveText('');
});
const { test, expect } = require('@playwright/test');

test('TC-AUTO-002 - selecting a capability renders the correct scenario', async ({ page }) => {
  // Open the deployed application using the baseURL
  // configured in playwright.config.js.
  await page.goto('./');

  // LOCATE:
  // Find the architecture capability dropdown.
  const capabilitySelector = page.locator('#capabilitySelect');

  // ACT:
  // Select the Load Balancing scenario.
  await capabilitySelector.selectOption('loadBalancing');

  // ASSERT:
  // Verify the correct capability is displayed.
  await expect(page.locator('#capabilityName'))
    .toHaveText('Load Balancing');

  // Verify the AWS Layer 4 and Layer 7 mappings.
  await expect(page.locator('#awsValue'))
    .toContainText('Network Load Balancer');

  await expect(page.locator('#awsValue'))
    .toContainText('Application Load Balancer');

  // Verify the Azure Layer 4 and Layer 7 mappings.
  await expect(page.locator('#azureValue'))
    .toContainText('Azure Load Balancer');

  await expect(page.locator('#azureValue'))
    .toContainText('Azure Application Gateway');

  // Verify the Google Cloud Layer 4 and Layer 7 mappings.
  await expect(page.locator('#gcpValue'))
    .toContainText('Google Cloud Network Load Balancer');

  await expect(page.locator('#gcpValue'))
    .toContainText('Google Cloud Application Load Balancer');

  // Verify the Football Analogy section rendered.
  await expect(
    page.getByRole('heading', {
      name: '4. Football Analogy',
      exact: true
    })
  ).toBeVisible();

  // Verify the Wireless Analogy section rendered.
  await expect(
    page.getByRole('heading', {
      name: '5. Wireless Analogy',
      exact: true
    })
  ).toBeVisible();

  // Verify the E-commerce QA section rendered.
  await expect(
    page.getByRole('heading', {
      name: '6. E-commerce QA',
      exact: true
    })
  ).toBeVisible();

  // Verify the QA Test Scenario section rendered.
  await expect(
    page.getByRole('heading', {
      name: '7. QA Test Scenario',
      exact: true
    })
  ).toBeVisible();

  // Verify the Why It Matters section rendered.
  await expect(
    page.getByRole('heading', {
      name: '8. Why It Matters',
      exact: true
    })
  ).toBeVisible();

  // Verify the Business Risk section rendered.
  await expect(
    page.getByRole('heading', {
      name: '9. Business Risk',
      exact: true
    })
  ).toBeVisible();
});
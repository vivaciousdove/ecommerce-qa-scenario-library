const { test, expect } = require('@playwright/test');

test('TC-AUTO-004 - all scenarios contain required content', async ({ page }) => {
  // Open the deployed application.
  await page.goto('./');

  // Define all supported capability values from the dropdown.
  const capabilities = [
    'autoScaling',
    'cache',
    'cdn',
    'dns',
    'loadBalancing',
    'messageQueue',
    'monitoring',
    'notifications',
    'objectStorage',
    'relationalDatabase',
    'webFirewall'
  ];

  // Locate the capability selector once and reuse it.
  const capabilitySelector = page.locator('#capabilitySelect');

  // Loop through every supported capability.
  for (const capability of capabilities) {
    // Select the current capability.
    await capabilitySelector.selectOption(capability);

    // Verify the capability name is populated.
    await expect(page.locator('#capabilityName'))
      .not.toHaveText('');

    // Verify all cloud mappings are populated.
    await expect(page.locator('#awsValue'))
      .not.toHaveText('');

    await expect(page.locator('#azureValue'))
      .not.toHaveText('');

    await expect(page.locator('#gcpValue'))
      .not.toHaveText('');

    // Verify all learning / QA fields are populated.
    await expect(page.locator('#footballValue'))
      .not.toHaveText('');

    await expect(page.locator('#wirelessValue'))
      .not.toHaveText('');

    await expect(page.locator('#ecommerceQAValue'))
      .not.toHaveText('');

    await expect(page.locator('#whyItMattersValue'))
      .not.toHaveText('');

    await expect(page.locator('#businessRiskValue'))
      .not.toHaveText('');

    // Verify the QA test scenario contains at least one list item.
    const testSteps = page.locator('#testScenarioList li');

    await expect(testSteps)
      .not.toHaveCount(0);

    // Verify the page does not expose common bad-rendering values.
    await expect(page.locator('body'))
      .not.toContainText('undefined');

    await expect(page.locator('body'))
      .not.toContainText('[object Object]');
  }
});
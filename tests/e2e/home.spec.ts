import { test, expect } from '@playwright/test';


test('has hello world', async ({ page }) => {
  await page.goto('/');

  // Expect an element with text "Hello world" to be present.
  await expect(page.getByRole('main')).toContainText(/hello world/i);
})

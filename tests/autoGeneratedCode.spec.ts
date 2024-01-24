import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Hylkää kaikkie' }).click();
  await page.getByLabel('Hae', { exact: true }).click();
  await page.getByLabel('Hae', { exact: true }).fill('iron maiden');
});
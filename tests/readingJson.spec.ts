import { test, expect } from "@playwright/test";
import * as orangeHrmData from './testData/orangeHRMCredentials.json'

test(`Login test with valid credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(orangeHrmData.validUserName);
  await page.locator('[name="password"]').fill(orangeHrmData.validPassword);

  await page.locator('//button[@type="submit"]').click();
  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login test with invalid credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(orangeHrmData.invalidUserName);
  await page.locator('[name="password"]').fill(orangeHrmData.invalidPassword);

  await page.locator('//button[@type="submit"]').click();
  await expect(
    page.locator(".orangehrm-login-error>.oxd-alert--error")
  ).toHaveText('Invalid credentials');
  await page.close();
});

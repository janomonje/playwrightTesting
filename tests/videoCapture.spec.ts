import { test, expect } from "@playwright/test";

test("Recording video", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");

  await page.locator('//button[@type="submit"]').click();
  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});

// see config file

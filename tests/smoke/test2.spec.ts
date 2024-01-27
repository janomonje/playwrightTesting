import { test } from "@playwright/test";

test("Login test for Orange HRM", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="passwords"]').fill("admin123");
  await page.locator('//button[@type="submit"]').click();

  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
});

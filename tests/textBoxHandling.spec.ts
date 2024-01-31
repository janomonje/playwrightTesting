import { test } from "@playwright/test";

test("Login test for Orange HRM", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('//button[@type="submit"]').click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test("Press sequentially method", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').pressSequentially("Admin");
  await page.locator('[name="password"]').pressSequentially("admin123");
  await page.locator('input[placeholder="Password"]').press("Enter");
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout").click();
  await page.close;
});

test("Press sequentially method with delay", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page
    .locator('[name="username"]')
    .pressSequentially("Admin", { delay: 200 });
  await page
    .locator('[name="password"]')
    .pressSequentially("admin123", { delay: 200 });
  await page.locator('input[placeholder="Password"]').press("Enter");
  await page.locator(".oxd-userdropdown").click();
  await page.locator("text=Logout" ).click();
  await page.close;
});

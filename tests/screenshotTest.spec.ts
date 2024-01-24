import { test } from "@playwright/test";

test("Login test for Orange HRM", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  // Taking screenshot after typing info
  //await page.screenshot({ path: "tests/screenshots" + "LoginPage.png" });

  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(1000)
  await page.locator(".oxd-userdropdown").click();
  // Taking screenshot of home page
  //await page.screenshot({ path: "tests/screenshots" + "HomePage.png" });
  //await page.locator("text=Logout").click();
  
});

// See config file screenshot line code
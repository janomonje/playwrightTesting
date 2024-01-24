import { test } from "@playwright/test";

test("Different locator strategy", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  // It will open playwright toolKit
  await page.pause();

  //   await page.locator('id="user-name"').fill("standard_user");

  //   // Using CSS Selector
  //   await page.locator("#user-name");
  //   await page.locator('[name="user-name"]');

  //   // Using Xpath
  //   await page.locator('//input[@data-test="password"]').fill("secret_sauce");

  //   // using text
  //   // a)
  //   await page.locator("text=Login").click();

  //   //b)
  //   await page.locator('input:has-text("Login")').click();
});

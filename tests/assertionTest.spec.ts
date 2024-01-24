import { test, expect } from "@playwright/test";

test("Visible/Hidden assertion", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice/");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  await page.close();
});

test("Present/Not Present assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await expect(page.locator(".added-manually")).not.toHaveCount(1);
  await page.locator("text=Add Element").click();
  await expect(page.locator(".added-manually")).toHaveCount(1);
  await page.close();
});

test("Enabled/Disabled", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#property")).toBeEnabled();
  await expect(page.locator('[title="Disabled button"]')).toBeDisabled;
  await page.close();
});

test("Text match/mismatch assertion", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#color")).toHaveText("What is my color?");
  await expect(page.locator("#color")).not.toHaveText("abcd");
  await page.close();
});

test("Attribute Asertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute(
    "name",
    "username"
  );
  await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute(
    "class",
    /.*oxd-input/
  );
  await page.close();
});

test("URL Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  // Full URL assertion
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Partial URL assertion (no quotation)
  await expect(page).toHaveURL(/demo.orangehrmlive/);
  await page.close();
});

// Full title assertion
test("Assertion using title", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page).toHaveTitle("OrangeHRM");

  // Partioal URL assertion
  await expect(page).toHaveTitle(/.*HRM/);
  await page.close;
});

// Screenshot assertion
test.only("Screenshot assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.waitForTimeout(500);
  await expect(page).toHaveScreenshot();
  await page.close;
});

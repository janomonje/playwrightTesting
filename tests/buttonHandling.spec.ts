import { test, expect } from "@playwright/test";

test("Regular button single click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").click();
  await expect(page.locator("#click_type")).toHaveText("Click");
  await page.close;
});

test("Double click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").dblclick();
  await expect(page.locator("#click_type")).toHaveText("Double-Click");
  await page.close;
});

test.only("Right click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await page.locator("#click_area").click({button:'right'});
  await expect(page.locator("#click_type")).toHaveText("Right-Click");
  await page.close;
});

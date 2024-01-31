import { test, expect } from "@playwright/test";

test("Dra and drop 1", async ({ page }) => {
  await page.goto(
    "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );
  const washington = page.locator('div[id="box3"]');
  const us = page.locator('div[id="countries"] div[id="box103"]');
  await washington.hover();
  await page.mouse.down();
  await us.hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
  await page.close();
});

test("Dra and drop 2", async ({ page }) => {
  await page.goto(
    "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );
  const washington = page.locator('div[id="box3"]');
  const us = page.locator('div[id="countries"] div[id="box103"]');
  await washington.dragTo(us);
  await page.waitForTimeout(5000);
  await page.close();
});

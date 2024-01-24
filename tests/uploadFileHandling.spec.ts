import { test, expect } from "@playwright/test";

test("Upload multiple files - approach 1", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  const uploadFile = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator('input[name="files[]"]').click(),
  ]);
  await uploadFile[0].setFiles([
    "/home/ale/Documents/Playwright/testinUpload.txt",
    "/home/ale/Documents/Playwright/playwright-report/index.html",
  ]);

  await page.waitForTimeout(5000);
  await page.close();
});

test.only("Upload multiple files - approach 2", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  await page.setInputFiles('input[name="files[]"]', [
    "/home/ale/Documents/Playwright/testinUpload.txt",
    "/home/ale/Documents/Playwright/playwright-report/index.html",
  ]);

  await page.waitForTimeout(5000);
  await page.close();
});

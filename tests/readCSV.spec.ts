/*This dependency needs to be installed first npm install -D csv-parse
Also notice the imports!*/

import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

// parse function return the putput as an array
const orangeHrmData = parse(
  fs.readFileSync(path.join(__dirname, "testData", "orangeHRMCreds.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);
test(`Login test with valid credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(orangeHrmData[0].username);
  await page.locator('[name="password"]').fill(orangeHrmData[0].password);

  await page.locator('//button[@type="submit"]').click();
  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login test with invalid credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(orangeHrmData[1].username);
  await page.locator('[name="password"]').fill(orangeHrmData[1].password);

  await page.locator('//button[@type="submit"]').click();
  await expect(
    page.locator(".orangehrm-login-error>.oxd-alert--error")
  ).toHaveText("Invalid credentials");
  await page.close();
});

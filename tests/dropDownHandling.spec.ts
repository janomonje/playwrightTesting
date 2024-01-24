import { test, expect } from "@playwright/test";

test("Dropdown handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.selectOption("#Skills", { value: "Android" });
  await page.pause();
  await page.selectOption("#Skills", { label: "Art Design" });
  await page.pause();
  await page.selectOption("#Skills", { index: 9 });
  await page.pause();
  await page.close();
});

test("Multi static dropdown handling", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", [
    { value: "Ohio" },
    { label: "Texas" },
    { index: 3 },
  ]),
    await page.pause();
  await page.close();
});

test("Searchable dynamic dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator('span[role="combobox"]').click();
  await page.locator('input[role="textbox"]').fill("Denmark");
  await page.pause();
  await page.locator("#select2-country-results>li").click();
  await page.pause();
  await page.close();
});

test.only("Non Searchable dynamic dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator('span[role="combobox"]').click();
  await page
    .locator("ul#select2-country-results")
    .locator("li", { hasText: "India" })
    .click();
  await page.pause();
  await page.close();
});

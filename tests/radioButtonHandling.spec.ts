import { test, expect } from "@playwright/test";

test("Radio button Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  const maleRadioBtn = page.locator('input[value="Male"]');
  const femaleRadioBtn = page.locator('input[value="FeMale"]');

  // Way 1 Assertion
  expect(maleRadioBtn).not.toBeChecked();
  expect(femaleRadioBtn).not.toBeChecked();

  // Way 2 Assertion
  expect(await maleRadioBtn.isChecked()).toBeFalsy();
  expect(await femaleRadioBtn.isChecked()).toBeFalsy();

  await maleRadioBtn.check();
  expect(maleRadioBtn).toBeChecked();

  await femaleRadioBtn.check();
  expect(await femaleRadioBtn.isChecked()).toBeTruthy();

  await page.close();
});

import { test, expect } from "@playwright/test";

test("Checkbox button handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  const fstCheckBox = page.locator("#checkbox1");
  const sndCheckBox = page.locator("#checkbox2");
  const trdCheckBox = page.locator("#checkbox3");

  // Way 1

  expect(fstCheckBox).not.toBeChecked();
  expect(sndCheckBox).not.toBeChecked();
  expect(trdCheckBox).not.toBeChecked();

  // Way 2
  expect(await fstCheckBox.isChecked()).toBeFalsy();
  expect(await sndCheckBox.isChecked()).toBeFalsy();
  expect(await trdCheckBox.isChecked()).toBeFalsy();

  await fstCheckBox.check();
  await sndCheckBox.check();
  await trdCheckBox.check();

  expect(fstCheckBox).toBeChecked();
  expect(sndCheckBox).toBeChecked();
  expect(await trdCheckBox.isChecked()).toBeTruthy();

  await page.close();
});

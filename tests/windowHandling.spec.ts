import { test, expect } from "@playwright/test";

test("Single tab handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click('button:has-text("click")'),
  ]);

  // waiting for new tab to be completely open
  await newTab.waitForLoadState();
  newTab.locator("#navbarDropdown").click();
  newTab.locator('div a[href="/about"]').click();
  await newTab.waitForTimeout(5000);
  await newTab.close();

  page.close();
});

test("Single window handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator('.analystic[href="#Seperate"]').click();

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click('[onclick="newwindow()"]'),
  ]);

  // waiting for new tab to be completely open
  await newWindow.waitForLoadState();
  newWindow.locator("#navbarDropdown").click();
  newWindow.locator('div a[href="/about"]').click();
  await newWindow.waitForTimeout(5000);
  await newWindow.close();
  page.close();
});

test.only("Multiple tab handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator('.analystic[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click('[onclick="multiwindow()"]'),
  ]);

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();
  console.log("Total pages opened: " + pages.length);

  pages[1].locator("#email").fill("alejandro@mail.com");

  await pages[2].locator("#navbarDropdown").click();
  await pages[2].locator('div a[href="/about"]').click();
  await multipleTab.waitForTimeout(5000);

  await pages[1].close();
  await pages[2].close();
});

/*
Handling multiple windows is the same as multiple tabs
for practice https://www.hyrtutorials.com/p/window-handles-practice.html
*/

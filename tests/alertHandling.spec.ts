import { test, expect } from "@playwright/test";

test("Simple alert handling", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  await page.locator('button[onclick="jsAlert()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
  await page.waitForTimeout(5000);
  await page.close();
});

/*###########################################################################################*/

test("Checking text in the alert box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click on alert button
  await page.locator('button[onclick="jsAlert()"]').click();

  // Assert the message in the alert box
  page.on("dialog", async (alert) => {
    const alertMsg = alert.message();
    expect(alertMsg).toEqual("I am a JS Alert!");
    await alert.accept();

    // Checks the confirmation text
    await expect(page.locator("#result")).toHaveText(
      "You successfully clicked an alert"
    );
  });

  /* Click on alert button (Whatever is triggering the event listener should be after the event listener,
  this is why the click() is called afeter)*/
  await page.locator('button[onclick="jsAlert()"]').click();
  await page.close();
});

/*###########################################################################################*/

test("Confirmation alert - Ok button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click on alert button
  await page.locator('button[onclick="jsAlert()"]').click();

  // Assert the message in the alert box
  page.on("dialog", async (alert) => {
    const alertMsg = alert.message();
    expect(alertMsg).toEqual("I am a JS Confirm");
    await alert.accept();

    // Checks the confirmation text
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });

  /* Click on alert button (Whatever is triggering the event listener should be after the event listener,
    this is why the click() is called afeter)*/
  await page.locator('button[onclick="jsConfirm()"]').click();
  await page.close();
});

/*###########################################################################################*/

test("Confirmation alert - button Cancel", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click on alert button
  await page.locator('button[onclick="jsAlert()"]').click();

  // Assert the message in the alert box
  page.on("dialog", async (alert) => {
    const alertMsg = alert.message();
    expect(alertMsg).toEqual("I am a JS Confirm");
    await alert.dismiss();

    // Checks the confirmation text
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  });

  /* Click on alert button (Whatever is triggering the event listener should be after the event listener,
      this is why the click() is called afeter)*/
  await page.locator('button[onclick="jsConfirm()"]').click();
  await page.close();
});

/*###########################################################################################*/

test("Confirmation alert - Prompt ok button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click on alert button
  await page.locator('button[onclick="jsPrompt()"]').click();

  // Assert the message in the alert box
  page.on("dialog", async (alert) => {
    const alertMsg = alert.message();
    expect(alertMsg).toEqual("I am a JS prompt");
    await alert.accept("This is for testing");

    // Checks the confirmation text
    await expect(page.locator("#result")).toHaveText(
      "You entered: This is for testing"
    );
  });

  /* Click on alert button (Whatever is triggering the event listener should be after the event listener,
        this is why the click() is called afeter)*/
  await page.locator('button[onclick="jsPrompt()"]').click();
  await page.close();
});

/*###########################################################################################*/

test("Confirmation alert - Promt cancel button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click on alert button
  await page.locator('button[onclick="jsPrompt()"]').click();

  // Assert the message in the alert box
  page.on("dialog", async (alert) => {
    const alertMsg = alert.message();
    expect(alertMsg).toEqual("I am a JS prompt");
    await alert.dismiss();

    // Checks the confirmation text
    await expect(page.locator("#result")).toHaveText("You entered: null");
  });

  /* Click on alert button (Whatever is triggering the event listener should be after the event listener,
        this is why the click() is called afeter)*/
  await page.locator('button[onclick="jsPrompt()"]').click();
  await page.close();
});

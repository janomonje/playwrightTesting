import { test, expect } from "@playwright/test";

test("Download file", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileDownload.html");
  await page.locator("#textbox").click();
  await page.locator("#textbox").pressSequentially("Testing downloading file!");
  await page.locator("#createTxt").click();

  const download = await Promise.all([
    page.waitForEvent("download"),
    await page.locator("#link-to-download").click(),
  ]);
  const path = await download[0].path();
  console.log(`The file is at ${path}`);

  // Way 1 - Using default file name
  //   const fileName= download[0].suggestedFilename();
  //   await download[0].saveAs(fileName);

  // Way 2 - Customizing file name
  const customName = "Playwrite_downloaded_file";
  await download[0].saveAs(customName);
  await page.close();
});

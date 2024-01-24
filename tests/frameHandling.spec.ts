import { test, expect } from "@playwright/test";

test("Frame handling using Page.Frame()", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // Fiding total number of frames
  const allFrames = page.frames();
  const allFramesCount = allFrames.length;
  console.log(`Total number of frames is: ${allFramesCount}`);
  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1?.locator('input[name="mytext1"]').fill("Testing frame");

  await page.waitForTimeout(5000);
  await page.close();
});

/*###########################################################################################*/

test("Frame handling using Page.FrameLocator()", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await frame1?.locator('input[name="mytext1"]').fill("Testing frame locator");
  await page.waitForTimeout(5000);
  await page.close();
});

/*###########################################################################################*/

test.only("Nested fram handling", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  const childFrame = frame3?.childFrames();
  console.log("Number of child frames: " + childFrame?.length);

  await childFrame[0].locator("#i8").click({ force: true });
  await page.waitForTimeout(1000);
  await childFrame[0].locator('//*[@id="i19"]/div[3]').check({ force: true });

  await page.waitForTimeout(2000);

  await page.close();
});


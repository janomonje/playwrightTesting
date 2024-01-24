import { test, expect } from "@playwright/test";
import { DateTime } from "luxon";

test("Calaendar handling", async ({ page }) => {
  page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "1983-05-04";
  await page.locator("#birthday").fill(date);

  page.close();
});

// luxon library needs to be install
test.only("Using luxon", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await page.locator('input[placeholder="Start date"]').click();
  selectDate(13, "June 2025", page);
  await page.waitForTimeout(5000);
  await page.reload();

  // past date
  await page.locator('input[placeholder="Start date"]').click();
  selectDate(29, "December 2018", page);
  await page.waitForTimeout(15000);
});

async function selectDate(date: Number, monthAndYear: string, page: any) {
  const monthYear = page.locator(
    'div[class="datepicker-days"] th[class="datepicker-switch"]'
  );
  const prevBtn = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const nextBtn = page.locator('div[class="datepicker-days"] th[class="next"]');

  const formattedMonth = DateTime.fromFormat(monthAndYear, "MMMM yyyy");

  while ((await monthYear.textContent()) != monthAndYear) {
    if (formattedMonth < DateTime.fromJSDate(new Date())) {
      await prevBtn.click();
    } else {
      await nextBtn.click();
    }
  }
  await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
}

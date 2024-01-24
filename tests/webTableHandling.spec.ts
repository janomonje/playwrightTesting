import { test, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

test("Handling webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator('table[name="BookTable"]');

  // Total Rows and Columns
  const columns = table.locator("tr th");
  console.log("Numbersof columns: ", await columns.count());

  // Total of Rows
  const rows = table.locator("tbody tr");
  console.log("Numbersof rows: ", await rows.count());
  expect(await columns.count()).toBe(4);
  expect(await rows.count()).toBe(7);

  page.close();
});

/*###########################################################################################*/

test("Selecting single checkbox in a the table ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead tr th");
  const rows = table.locator("tbody tr");

  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 3",
  });
  await matchedRow.locator("input").check();
  await page.pause();
  page.close();
});

/*###########################################################################################*/

test("Selecting multiple checkbox in a the table ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead tr th");
  const rows = table.locator("tbody tr");

  await selectProduct(rows, page, "Product 1");
  await selectProduct(rows, page, "Product 3");
  await selectProduct(rows, page, "Product 4");
  await page.pause();
  page.close();
});
async function selectProduct(rows, page, productName) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: productName,
  });
  await matchedRow.locator("input").check();
}

/*###########################################################################################*/

test("Printing all items from Page 1 in Pagination Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead tr th");
  const rows = table.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const rowData = row.locator("td");
    for (let j = 0; j < (await rowData.count()); j++) {
      //const cellContent = await rowData.nth(j).textContent();
      console.log(
        `| ${await rowData.nth(j++).textContent()} | ${await rowData
          .nth(j++)
          .textContent()} | ${await rowData.nth(j++).textContent()}`
      );
      console.log("-----------------------");
    }
  }
  page.close();
});

/*###########################################################################################*/

test.only("Printing all items from all pages Pagination Table", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const columns = table.locator("thead tr th");
  const rows = table.locator("tbody tr");

  const pages = page.locator("#pagination li a");
  const totalPages = await pages.count();
  console.log(`Total number of pages: ${totalPages}`);
  console.log("");

  let pageIndex = 1;

  for (let p = 0; p < totalPages; p++) {
    if (p > 0) {
      console.log("");
      await pages.nth(p).click();
    }
    console.log(`PAGE ${pageIndex}`);
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const rowData = row.locator("td");
      for (let j = 0; j < (await rowData.count()); j++) {
        //const cellContent = await rowData.nth(j).textContent();
        console.log(
          `| ${await rowData.nth(j++).textContent()} | ${await rowData
            .nth(j++)
            .textContent()} | ${await rowData.nth(j++).textContent()}`
        );
        console.log("-----------------------");
      }
    }
    pageIndex++;
  }
  page.close();
});

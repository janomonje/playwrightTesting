import { test, expect } from "@playwright/test";

test.describe("Suite", () => {
  test.beforeAll(async () => {
    console.log("Database connection setup");
  });

  test.beforeEach(async () => {
    console.log("Clearing cookies");
  });

  test.afterEach(async () => {
    console.log("Cache removal");
  });

  test.afterAll(async () => {
    console.log("Database connection disconnect");
  });

  test("Test 1", async () => {
    console.log("Test 1 block");
  });
  test("Test 2", async () => {
    console.log("Test 2 block");
  });
});


test("Test 3", async () => {
  console.log("Test 3 block");
});
test("Test 4", async () => {
  console.log("Test 4 block");
});

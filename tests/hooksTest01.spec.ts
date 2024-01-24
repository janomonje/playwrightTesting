import { test } from "@playwright/test";

test.beforeAll(async () => {
  console.log("Before All hook");
});

test.beforeEach(async () => {
  console.log("Before Each hook");
});

test("1", async () => {
  console.log("Test 1 block");
});

test("2", async () => {
  console.log("Test 2 block");
});

test("3", async () => {
  console.log("Test 3 block");
});

test.afterAll(async () => {
    console.log("After All hook");
  });
  
  test.afterEach(async () => {
    console.log("After Each hook");
  });
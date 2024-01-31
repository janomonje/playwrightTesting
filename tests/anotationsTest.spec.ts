import { test, expect } from "@playwright/test";

test.skip("skipped test", async () => {
  console.log("Skipped test");
});

test("skipped in Webkit", async ({ page, browserName }) => {
  test.skip(
    browserName === "webkit",
    "This feature is not implemented for mac"
  );
  console.log("I am skip with condition test");
});

test("Not yet ready test", async () => {
  test.fail();
  console.log("Failed test");
});

test("Fail in webkit", async ({ page, browserName }) => {
  test.fail(
    browserName === "webkit",
    "This feature is not implemented for mac"
  );
  console.log("I am fail with condition test");
});

test.fixme("I'm a fix me test", async ({ page, browserName }) => {
  console.log("I am a fix me test");
});

test("Slow test", async ({ page, browserName }) => {
  console.log("I am a slow test");
  test.slow();
});

test("Slow test with condition", async ({ page, browserName }) => {
  test.slow(
    browserName === "webkit",
    "This feature is not implemented for mac"
  );
});

test("Only test", async ({ page, browserName }) => {
  console.log('This is a "only" test');
});

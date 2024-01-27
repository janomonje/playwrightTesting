import { test, expect } from "../fixtures/pomFixtures";

test("Login Conduit test using POM Fixtures", async ({
  page,
  landingPage,
  homePage,
  signInPage,
  settingsPage,
}) => {
  await page.goto("https://react-redux.realworld.io/");

  await landingPage.clickSignInBtn();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInBtn();

  await homePage.clickSettingsBtn();
  await settingsPage.clickSettingsBtn();

  await page.close();
});

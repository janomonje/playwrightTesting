import { test, expect } from "@playwright/test";
import { LandingPage } from "./pages/landingPage";
import { HomePage } from "./pages/homePage";
import { SignInPage } from "./pages/signInPage";
import { SettingPage } from "./pages/settingsPage";

test("Login Conduit test using POM", async ({ page }) => {
  await page.goto("https://react-redux.realworld.io/");

  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingPage(page);

  await landingPage.clickSignInBtn();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInBtn();

  await homePage.clickSettingsBtn();
  await settingsPage.clickSettingsBtn();
  
  await page.close();
});

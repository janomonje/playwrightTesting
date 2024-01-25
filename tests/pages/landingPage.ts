import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LandingPage extends BasePage {
  readonly page: Page;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.signInBtn = page.locator('[href="#login"]');
  }

  async clickSignInBtn() {
    // clickElement() comes from  basePage
    await this.clickElement(this.signInBtn);
  }
}

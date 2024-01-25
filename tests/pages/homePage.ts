import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage {
  readonly page: Page;
  readonly settingsBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.settingsBtn = page.locator('a[href="#settings"]');
  }

  async clickSettingsBtn() {
    //clickElement() is coming from basePage
    await this.clickElement(this.settingsBtn);
  }
}

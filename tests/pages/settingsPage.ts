import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";

export class SettingPage extends BasePage {
 readonly page: Page;
 readonly logOutBtn: Locator;

  constructor(page: Page) {
    super(page)
    this.logOutBtn = page.locator('button:text("Or click here to logout.")');
  }

  async clickSettingsBtn() {
    await this.clickElement(this.logOutBtn);
  }
}

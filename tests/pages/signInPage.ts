import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SignInPage extends BasePage {
  readonly page: Page;
  readonly emailTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.emailTextBox = page.locator('input[placeholder="Email"]');
    this.passwordTextBox = page.locator('input[placeholder="Password"]');
    this.signInBtn = page.locator('button[type="submit"]');
  }

  async enterEmailId(emailId: string) {
    // fillFormField() is coming from basePage
    await this.fillFormField(this.emailTextBox, emailId);
  }

  async enterPassword(password: string) {
    // fillFormField() is coming from basePage
    await this.fillFormField(this.passwordTextBox, password);
  }

  async clickSignInBtn() {
    // clickElement() is coming from basePage
    await this.clickElement(this.signInBtn);
  }
}

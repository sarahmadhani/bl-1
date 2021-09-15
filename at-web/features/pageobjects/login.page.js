import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputPhoneNumber() {
    return $('#user_identity_textfield');
  }
  get btnSubmit() {
    return $('//button/span[text()="Lanjut"]');
  }
  get otpTitle() {
    return $('//p[contains(.,"Verifikasi Login")]');
  }

  get errorMessage() {
    return $('[class="bl-text bl-text--caption bl-text--error"]');
  }

 
  async login(username) {
    await this.inputEventValue(this.inputPhoneNumber, username);
    await super.clickElement(this.btnSubmit);
  }

  async verifyErrorMessage(char) {
    await this.isContainText(this.errorMessage, char);
  }

  async otpPopUpDisplayed() {
    await this.isDisplayed(this.otpTitle);
  }

  open() {
    return super.open('login');
  }
}

export default new LoginPage();

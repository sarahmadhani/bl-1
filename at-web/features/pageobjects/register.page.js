import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputPhoneNumber() {
    return $('[class="bl-text-field__input"]');
  }
  get btnSubmit() {
    return $('//button/span[text()="Daftar"]');
  }
  get otpTitle() {
    return $('//p[contains(.,"Verifikasi Pendaftaran")]');
  }

  get errorMessage() {
    return $('[class="bl-text bl-text--caption bl-text--error"]');
  }

  get sendOTPBtn(){
    return $('//span[text()="Ya, kirim kode"]')
  }

  get subheaderRegisteredAccount(){
    return $('[class="mb-8 bl-text bl-text--subheading-3 bl-text--semi-bold"]')
  }

  async register(username) {
    await this.inputEventValue(this.inputPhoneNumber, username);
    await super.clickElement(this.btnSubmit);
  }

  async clickSendOTPButton(){
    await super.clickElement(this.sendOTPBtn)
  }

  async verifyErrorMessage(char) {
    await this.isContainText(this.errorMessage, char);
  }

  async verifyRegisteredAccount(char) {
    await this.isContainText(this.subheaderRegisteredAccount, char);
  }

  async otpPopUpDisplayed() {
    await this.isDisplayed(this.otpTitle);
  }


  open() {
    return super.open('login');
  }
}

export default new RegisterPage();

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PLPage extends Page {
  /**
   * define selectors using getter methods
   */
  productByIndex(char) {
    return $(`//*[@class="bl-flex-item mb-8"][${char}]//p/a`);
  }
  get btnNext() {
    return $('[class="bl-pagination__next"]');
  }

  async productListIsContain(char) {
    for(let i= 1; i < 51; i++) {
      if (super.isDisplayed(this.productByIndex(i))) {
        super.isContainText(this.productByIndex(i), char);
      } else {
        super.clickElement(this.btnNext);
        i=0;
      }
    }
  }
}

export default new PLPage();

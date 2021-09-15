import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PDP extends Page {
  
  get cart() {
    return $('.c-main-product__action__cart');
  }

  async addToCart(){
    super.clickElement(this.cart)
  }
  
}

export default new PDP();

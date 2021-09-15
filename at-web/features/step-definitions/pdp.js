import { Given, When, Then } from '@wdio/cucumber-framework';

import PDP from '../pageobjects/pdp.page';

When(/^I click Masukkan Keranjang$/, async () => {
  await PDP.addToCart();
});

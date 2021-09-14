import { Given, When, Then } from '@wdio/cucumber-framework';

import PLP from '../pageobjects/pdp.page';

Then(/^I see list of product is containing of (\w+)$/, async (char) => {
  await PLP.productListIsContain(char);
});

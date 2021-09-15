import { Given, When, Then } from '@wdio/cucumber-framework';

import PLP from '../pageobjects/plp.page';

Then(/^I see list of product is containing of (\w+)$/, async (char) => {
  await PLP.productListIsContain(char);
});

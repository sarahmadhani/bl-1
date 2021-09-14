import { Given, When, Then } from '@wdio/cucumber-framework';

import header from '../pageobjects/header.page';
import SecurePage from '../pageobjects/secure.page';

When(/^I search (\w+) products$/, async (char) => {
  await header.searchProduct(char);
});

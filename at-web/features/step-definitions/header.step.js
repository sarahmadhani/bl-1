import { Given, When, Then } from '@wdio/cucumber-framework';

import header from '../pageobjects/header.page';

When(/^I search (\w+) products$/, async (char) => {
  await header.searchProduct(char);
});

When(/^I click (\w+)$/, async (char) => {
  await header.clickButtonHeader(char);
});

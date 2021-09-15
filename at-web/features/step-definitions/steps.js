import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import Homepage from '../pageobjects/homepage.page';

const pages = {
  login: LoginPage,
  homepage: Homepage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login by phonenumber (.*)$/, async (char) => {
  await LoginPage.login(char);
});

Then(/^error message (.*) is appear$/, async (char) => {
  await LoginPage.verifyErrorMessage(char);
});

Then(/^I see otp page$/, async () => {
  await LoginPage.otpPopUpDisplayed();
});

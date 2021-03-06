import { Given, When, Then } from '@wdio/cucumber-framework';

import register from '../pageobjects/register.page';

When(/^I register with (.*)$/, async (char) => {
  await register.register(char);
});

Then(/^on register page error message is (.*)$/, async (char) => {
  await register.verifyErrorMessage(char);
});

Then(/^I see otp register popup$/, async () => {
  await register.otpPopUpDisplayed();
});

When(/^I click send otp$/, async () => {
  await register.clickSendOTPButton();
});

Then(/^popup of error message on register page (.*) is appear$/, async (char) => {
  await register.verifyRegisteredAccount(char);
});

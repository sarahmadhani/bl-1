Feature: Login

    Background: Go to login by homepage
        Given I am on the homepage page
        And I click Login

    Scenario: As a user, I want to login with registered phonenumber
        When I login by phonenumber 085852742749
        Then I see otp page

    Scenario Outline: As a user, I want to login with <title>
        When I login by phonenumber <phonenumber1>
        Then error message <errorMessage> is appear
        Examples:
            | title 1           | phonenumber1 | errorMessage          |
            | Unregister accout | 08585274274  | Nomor belum terdaftar |
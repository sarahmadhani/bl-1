Feature: Login

    Background: Go to login by homepage
        Given I am on the homepage page
        And I click Login

    Scenario Outline: As a user, I want to login with registered <title>
        When I login by phonenumber <phonenumber1>
        Then I see otp page
        Examples:
            | title                  | phonenumber1                |
            | Registered Phonenumber | 085852742749                |
            | Registered email       | sarah.ramadhani24@gmail.com |

    Scenario Outline: As a user, I want to login with <title>
        When I login by phonenumber <phonenumber1>
        Then error message <errorMessage> is appear
        Examples:
            | title              | phonenumber1 | errorMessage                                   |
            | Unregister accout  | 08585274274  | Akun tidak ditemukan. Periksa dan coba lagi ya |
            | Empty field        |              | Form harus diisi dulu ya                       |
            | email invalid      | sarah.com    | Akun tidak ditemukan. Periksa dan coba lagi ya |
            | unregister invalid | sarah1@1.com | Akun tidak ditemukan. Periksa dan coba lagi ya |
Feature: Register

    Background: Go to login by homepage
        Given I am on the homepage page
        And I click Daftar

    Scenario Outline: As a user, I want to register with <title>
        When I register with <phonenumber1>
        Then I see otp register popup
        Examples:
            | title                        | phonenumber1                |
            | Unregistered Phonenumber     | 081315633664                |
            | Unregistered email           | sarah.ramadhani23@gmail.com |
            | Unregistered Phonenumber +62 | +6281315633664              |

    Scenario Outline: As a user, I want to register with <title>
        When I register with <phonenumber1>
        Then on register page error message is Format nomor handphone atau email tidak sesuai.
        Examples:
            | title               | phonenumber1  | errorMessage                                    |
            | Empty field         |               | Form harus diisi dulu ya                        |
            | email invalid       | sarah.com     | Format nomor handphone atau email tidak sesuai. |


    Scenario Outline: As a user, I want to register with <title>
        When I register with <phonenumber1>
        And I click send otp
        Then popup of error message on register page Akun sudah terdaftar is appear
        Examples:
            | title                  | phonenumber1                |
            | registered Phonenumber | 085852742749                |
            | registered email       | sarah.ramadhani22@gmail.com |
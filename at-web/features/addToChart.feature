Feature: Add to cart

  Background: Open PDP
    Given open https://www.bukalapak.com/p/elektronik/komponen-elektronik/2glubec-jual-polarizer-lcd-tv-32-inch-0-derajad-terbaik-plastik-polariser-32-inch-polarized-lcd-tv-termurah?from=homepage&source=fvt&panel=1&type=recommendation page
    When I click Masukkan Keranjang

  Scenario: As a guest, I want to add product to cart
    Then I'm in login page
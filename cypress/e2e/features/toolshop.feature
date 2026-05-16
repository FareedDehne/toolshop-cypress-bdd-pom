Feature: Toolshop basic user flows

  Scenario: TC01 - Load the home page
    Given I open the Toolshop home page
    Then the home page URL should be displayed
    And the home page title should be correct
    And the Home link should be visible
    And the Categories menu should be visible

  Scenario: TC02 - Display the main navbar links
    Given I open the Toolshop home page
    Then navbar links should exist
    And the Home link should be visible
    And the Categories menu should be visible
    And the Contact link should be visible

  Scenario: TC03 - Open the categories menu
    Given I open the Toolshop home page
    When I open the categories menu
    Then the categories menu should be open
    And Power Tools should be visible
    And Hand Tools should be visible

  Scenario: TC04 - Navigate to a category from the menu
    Given I open the Toolshop home page
    When I choose the "Hand Tools" category
    Then the category page URL should be displayed
    And the category URL should include "hand-tools"
    And products should exist

  Scenario: TC05 - Select an option from sort dropdown
    Given I open the Toolshop home page
    When I choose the "Hand Tools" category
    And I select sort option 1
    Then the selected sort option should exist
    And the sort dropdown should be visible
    And the category page URL should be displayed

  Scenario: TC06 - Open a product details page
    Given I open the Toolshop home page
    When I choose the "Hand Tools" category
    And I open the first product card
    Then the product page URL should be displayed
    And the product title should be visible
    And the add to cart button should be visible

  Scenario: TC07 - Update cart state after adding a product
    Given I open the Toolshop home page
    When I choose the "Hand Tools" category
    And I open the first product card
    And I add the product to the cart
    Then the product added message should be visible
    And I should still be on the product page

  Scenario: TC08 - Show sign in link on public home
    Given I open the Toolshop home page
    Then the Sign in link should be visible
    And the Home link should be visible
    And the home page URL should be displayed

  Scenario: TC09 - Load sign in page with required fields
    Given I open the Toolshop home page
    When I go to the sign in page
    Then the login page URL should be displayed
    And the login page title should be correct
    And the email input should be visible
    And the password input should be visible
    And the submit button should be visible

  Scenario: TC10 - Show login validation errors for empty fields
    Given I open the Toolshop home page
    When I go to the sign in page
    And I submit the login form
    Then the login page URL should be displayed
    And the email input should be visible
    And the password input should be visible
    And login validation errors should be present

  Scenario: TC11 - Fail login with invalid credentials
    Given I open the Toolshop home page
    When I go to the sign in page
    And I login with email "wrong@example.com" and password "wrongpass"
    Then the login page URL should be displayed
    And the email field should contain "wrong@example.com"
    And the password field should contain "wrongpass"
    And the invalid credentials error should be visible

  Scenario: TC12 - Remain in public state when not authenticated
    Given I open the Toolshop home page
    Then the Sign in link should be visible
    And the Sign out link should not be visible
    And I should not be on the account page

  Scenario: TC13 - Load contact page with contact form
    Given I open the Toolshop home page
    When I go to the contact page
    Then the contact page URL should be displayed
    And the contact page title should be correct
    And the contact form should exist
    And the contact email input should be visible

  Scenario: TC14 - Trigger contact form validation on empty submit
    Given I open the Toolshop home page
    When I go to the contact page
    And I submit the contact form
    Then I should still be on the contact page
    And the first name input should be visible
    And contact validation errors should be present

  Scenario: TC15 - Reject login with invalid email format
    Given I open the Toolshop home page
    When I go to the sign in page
    And I login with email "bad-email-format" and password "some-password"
    Then the login page URL should be displayed
    And the email field should contain "bad-email-format"
    And invalid email format validation should be present
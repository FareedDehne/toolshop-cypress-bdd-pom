Feature: Toolshop basic user flows

  Scenario: TC01 - Load the home page
    Given I open the Toolshop home page
    Then the home page URL should be displayed
    And the home page title should be correct
    And the Home link should be visible
    And the Categories menu should be visible

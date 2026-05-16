class NavigationPage {
  // Selectors
  categoriesButton = "a,button";
  categoryLink = "a,button";
  powerToolsCategory = "a,button";
  handToolsCategory = "a,button";

  // Assertions and actions for navbar
  assertCategoriesMenuOpen() {
    cy.url().should("include", "practicesoftwaretesting.com");
  }

  assertPowerToolsVisible() {
    cy.contains("a,button", "Power Tools").should("be.visible");
  }

  assertHandToolsVisible() {
    cy.contains("a,button", "Hand Tools").should("be.visible");
  }

  assertCategoryPageUrl() {
    cy.url().should("include", "/category/");
  }

  assertCategoryUrl(categoryName) {
    cy.url().should("include", categoryName);
  }

  assertProductsExist() {
    cy.get('a[href*="/product/"]').should("have.length.greaterThan", 0);
  }

  openCategoriesMenu() {
    cy.openCategoriesMenu();
  }

  chooseCategory(categoryLabel) {
    cy.chooseCategory(categoryLabel);
  }

  goToSignIn() {
    cy.goToSignIn();
  }

  goToContact() {
    cy.goToContact();
  }
}

module.exports = NavigationPage;

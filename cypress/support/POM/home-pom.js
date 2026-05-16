class HomePage {
  // Selectors
  homeLink = "a";
  categoriesMenu = "a,button";
  contactLink = "a";
  signInLink = "a";
  signOutLink = "a,button";

  // Assertions for home page
  assertHomePageUrl() {
    cy.url().should("include", "/#/");
  }

  assertHomePageTitle(title) {
    cy.title().should("include", title);
  }

  assertHomeLink() {
    cy.contains("a", "Home").should("be.visible");
  }

  assertCategoriesMenuVisible() {
    cy.contains("a,button", "Categories").should("be.visible");
  }

  assertSignInLinkVisible() {
    cy.contains("a", "Sign in").should("be.visible");
  }

  assertSignInLinkNotVisible() {
    cy.contains("a", "Sign in").should("not.exist");
  }

  assertSignOutLinkNotVisible() {
    cy.contains("a,button", "Sign out").should("not.exist");
  }

  assertContactLink() {
    cy.contains("a", "Contact").should("be.visible");
  }

  assertNotInAccountPage() {
    cy.url().should("not.include", "/account");
  }

  visitHome() {
    cy.visitHome();
  }

  getNavbarLinks() {
    return cy.get("a");
  }
}

module.exports = HomePage;

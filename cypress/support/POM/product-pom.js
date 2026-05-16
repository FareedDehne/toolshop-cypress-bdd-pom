class ProductPage {
  // Selectors
  sortDropdown = "select";
  addToCartButton = "button";
  productTitle = "h1";
  productLink = 'a[href*="/product/"]';

  // Assertions and actions for product page
  assertProductPageUrl() {
    cy.url().should("include", "/product/");
  }

  assertProductTitleVisible() {
    cy.get("h1").should("be.visible");
  }

  assertAddToCartButtonVisible() {
    cy.contains("button", "Add to cart").should("be.visible");
  }

  assertProductAddedToCart() {
    cy.contains("body", "added").should("be.visible");
  }

  getSortDropdown() {
    return cy.get("select").first();
  }

  getSortSelectedOption() {
    return cy.get("select").first().find("option:selected");
  }

  assertSortDropdownVisible() {
    cy.get("select").first().should("be.visible");
  }

  assertStillOnProductPage() {
    cy.url().should("include", "/product/");
    cy.get("h1").should("be.visible");
  }

  selectSortByIndex(index) {
    cy.selectSortByIndex(index);
  }

  openFirstProductCard() {
    cy.openFirstProductCard();
  }

  addToCartFromProduct() {
    cy.addToCartFromProduct();
  }
}

module.exports = ProductPage;

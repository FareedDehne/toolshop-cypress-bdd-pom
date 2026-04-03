Cypress.Commands.add("openFirstProductCard", () => {
  cy.get('a[href*="/product/"], a[href*="#/product/"]', { timeout: 20000 })
    .filter(":visible")
    .first()
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("addToCartFromProduct", () => {
  cy.contains("button", /add to cart/i, { timeout: 20000 })
    .should("be.enabled")
    .click();
});

Cypress.Commands.add("openCart", () => {
  cy.contains("a,button", /cart/i, { timeout: 20000 }).first().click({ force: true });
});
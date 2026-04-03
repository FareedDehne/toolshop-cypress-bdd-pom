Cypress.Commands.add("visitHome", () => {
  cy.visit("/#/");
  cy.contains("a", /^home$/i, { timeout: 20000 }).should("be.visible");
  cy.contains("a", /categories/i).should("be.visible");
});

Cypress.Commands.add("navTo", (label) => {
  cy.contains("a", new RegExp(`^\\s*${label}\\s*$`, "i"), { timeout: 20000 })
    .should("be.visible")
    .click();
});

Cypress.Commands.add("openCategoriesMenu", () => {
  cy.contains("a", /categories/i, { timeout: 20000 }).should("be.visible").click();
});

Cypress.Commands.add("chooseCategory", (categoryLabel) => {
  cy.openCategoriesMenu();
  cy.contains("a,button", new RegExp(`^\\s*${categoryLabel}\\s*$`, "i"), { timeout: 20000 })
    .should("be.visible")
    .click();
});

Cypress.Commands.add("searchProducts", (term) => {
  cy.get('input[type="search"], input[placeholder*="Search" i]', { timeout: 20000 })
    .first()
    .should("be.visible")
    .clear()
    .type(term);
});

Cypress.Commands.add("submitSearch", () => {
  cy.get('button[type="submit"], button')
    .contains(/search/i)
    .first()
    .click({ force: true });
});
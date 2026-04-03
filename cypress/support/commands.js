// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

const normalizeText = (value) => (value ?? "").toString().replace(/\s+/g, " ").trim();

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

Cypress.Commands.add("goToSignIn", () => {
  cy.navTo("Sign in");
  cy.location("pathname").should("include", "/auth/login");
});

Cypress.Commands.add("login", (email, password) => {
  cy.get('input[type="email"]', { timeout: 20000 }).should("be.visible").clear().type(email);
  cy.get('input[type="password"]').should("be.visible").clear().type(password, { log: false });
  cy.contains('button, input[type="submit"]', /^sign in$|^login$/i)
    .should("be.enabled")
    .click();
});

Cypress.Commands.add("logout", () => {
  // User menu is usually a dropdown with the user's name (e.g. "Jane Doe")
  cy.contains("a,button", /doe/i, { timeout: 20000 }).click({ force: true });

  cy.contains("a,button", /sign out|logout/i, { timeout: 20000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("goToContact", () => {
  cy.navTo("Contact");
  cy.location("pathname").should("include", "/contact");
});

Cypress.Commands.add("fillContactForm", ({ firstName, lastName, email, subject, message }) => {
  cy.get('input[name="first_name"], input[placeholder*="first" i]').first().clear().type(firstName);
  cy.get('input[name="last_name"], input[placeholder*="last" i]').first().clear().type(lastName);
  cy.get('input[type="email"]').first().clear().type(email);
  cy.get('input[name="subject"], input[placeholder*="subject" i]').first().clear().type(subject);
  cy.get('textarea, textarea[name="message"], textarea[placeholder*="message" i]').first().clear().type(message);
});

Cypress.Commands.add("submitContactForm", () => {
  cy.get('button[type="submit"], input[type="submit"]', { timeout: 20000 })
    .first()
    .scrollIntoView()
    .should("be.enabled")
    .click({ force: true });
});
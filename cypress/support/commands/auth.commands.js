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
  cy.contains("a,button", /doe/i, { timeout: 20000 }).click({ force: true });

  cy.contains("a,button", /sign out|logout/i, { timeout: 20000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
});
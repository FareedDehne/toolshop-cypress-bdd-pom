class LoginPage {
  // Selectors
  emailInput = 'input[type="email"]';
  passwordInput = 'input[type="password"]';
  submitButton = 'button[type="submit"], input[type="submit"]';
  invalidField = ".is-invalid, .ng-invalid";
  alertMessage = ".alert";

  // Assertions and getters for login page
  assertLoginPageUrl() {
    cy.url().should("include", "/auth/login");
  }

  assertLoginPageTitle(title) {
    cy.title().should("include", title);
  }

  assertEmailInputVisible() {
    cy.get(this.emailInput).should("be.visible");
  }

  assertPasswordInputVisible() {
    cy.get(this.passwordInput).should("be.visible");
  }

  assertSubmitButtonVisible() {
    cy.get(this.submitButton).should("be.visible");
  }

  assertValidationErrorsPresent() {
    cy.get(this.invalidField).should("have.length.greaterThan", 0);
  }

  assertInvalidCredentialsError() {
    cy.contains(this.alertMessage, "Invalid email or password").should("be.visible");
  }

  assertEmailValue(value) {
    cy.get(this.emailInput).should("have.value", value);
  }

  assertPasswordValue(value) {
    cy.get(this.passwordInput).should("have.value", value);
  }

  getEmailInput() {
    return cy.get(this.emailInput);
  }

  getPasswordInput() {
    return cy.get(this.passwordInput);
  }

  assertInvalidEmailFormat() {
    cy.get(this.invalidField).should("have.length.greaterThan", 0);
  }

  submitLogin() {
    cy.submitLogin();
  }

  login(email, password) {
    cy.login(email, password);
  }
}

module.exports = LoginPage;

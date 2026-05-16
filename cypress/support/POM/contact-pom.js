class ContactPage {
  // Selectors
  contactForm = "form";
  emailInput = 'input[type="email"]';
  firstNameInput = 'input[name="first_name"], input[placeholder*="first" i]';
  invalidField = ".is-invalid, .ng-invalid";

  // Assertions for contact page
  assertContactPageUrl() {
    cy.url().should("include", "/contact");
  }

  assertContactPageTitle(title) {
    cy.title().should("include", title);
  }

  assertContactFormExists() {
    cy.get(this.contactForm).should("exist");
  }

  assertEmailInputVisible() {
    cy.get(this.emailInput).should("be.visible");
  }

  assertFirstNameInputVisible() {
    cy.get(this.firstNameInput).should("be.visible");
  }

  assertValidationErrorsPresent() {
    cy.get(this.invalidField).should("have.length.greaterThan", 0);
  }

  assertStillOnContactPage() {
    cy.url().should("include", "/contact");
    cy.get(this.contactForm).should("exist");
  }

  submitContactForm() {
    cy.submitContactForm();
  }
}

module.exports = ContactPage;

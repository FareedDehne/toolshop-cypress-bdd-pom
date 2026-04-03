# Cypress Toolshop Project (15 Test Cases)

This project contains **15 easy Cypress E2E test cases** for the demo site **Practice Software Testing (Toolshop)**.

## Setup

Install dependencies:

```bash
npm install
```

Run Cypress:

```bash
npm run cy:open
```

Run headless:

```bash
npm run cy:run
```

## Project Requirements Mapping

- **15 test cases**: implemented in `cypress/e2e/toolshop/toolshop.cy.js`
- **At least 3 assertions per test**: each `it()` has 3+ `should(...)` checks
- **Custom commands per each action**: navigation / typing / clicking actions are wrapped in `cypress/support/commands.js`
- **Fixture + hooks**:
  - fixture: `cypress/fixtures/toolshop.json`
  - hooks: `before()` loads fixture, `beforeEach()` visits home

## Custom Commands (Actions)

Defined in `cypress/support/commands.js`:

- `cy.visitHome()`
- `cy.navTo(label)`
- `cy.openProducts()`
- `cy.searchProducts(term)`
- `cy.submitSearch()`
- `cy.openFirstProductCard()`
- `cy.addToCartFromProduct()`
- `cy.openCart()`
- `cy.goToSignIn()`
- `cy.login(email, password)`
- `cy.logout()`
- `cy.goToContact()`
- `cy.fillContactForm(data)`
- `cy.submitContactForm()`

## Test Cases Explained (TC01–TC15)

All tests live in `cypress/e2e/toolshop/toolshop.cy.js`.

### TC01 - Home page loads correctly
- **Goal**: Confirm the home page renders.
- **Assertions**:
  - Home link visible
  - Categories link visible
  - Contact link visible
  - URL contains the domain

### TC02 - Navbar has main links
- **Goal**: Make sure main navigation links exist.
- **Assertions**:
  - “Home” visible
  - “Categories” visible
  - “Contact” visible

### TC03 - Categories menu opens
- **Goal**: Verify Categories dropdown opens.
- **Assertions**:
  - Categories dropdown opens
  - Category items exist (ex: Hand Tools/Power Tools)
  - Categories link still visible

### TC04 - Navigate to a category from the menu
- **Goal**: Open a category and confirm products exist.
- **Assertions**:
  - URL path includes `/category`
  - Page heading exists
  - Product links count is > 0

### TC05 - Sort dropdown exists and is usable
- **Goal**: Use the Sort dropdown.
- **Assertions**:
  - Sort dropdown is visible
  - A selection can be made
  - Page still renders

### TC06 - Open a product details page
- **Goal**: Open any product from the list.
- **Assertions**:
  - URL path matches `/product/<id>`
  - Heading exists (h1/h2)
  - “Add to cart” button exists

### TC07 - Add to cart button changes cart state (or shows confirmation)
- **Goal**: Click Add to cart and confirm UI feedback.
- **Assertions**:
  - Confirmation text appears (“added” / “cart”)
  - Cart link/button exists
  - Page still visible

### TC08 - Sign in link is visible on public home
- **Goal**: Verify public user can see Sign in.
- **Assertions**:
  - Sign in link visible
  - Page contains “Home”
  - Pathname equals `/`

### TC09 - Sign in page loads and has fields
- **Goal**: Verify login screen renders.
- **Assertions**:
  - Email input visible
  - Password input visible
  - Login/Sign in submit control visible

### TC10 - Login validation shows error when fields are empty
- **Goal**: Submit login with empty fields.
- **Assertions**:
  - Validation error appears
  - Still on `/auth/login`
  - Email field is visible

### TC11 - Login fails with invalid credentials
- **Goal**: Negative login case.
- **Assertions**:
  - Still on `/auth/login`
  - Error message appears
  - Email input keeps typed value

### TC12 - Login succeeds with customer fixture user
- **Goal**: Positive login case using fixture credentials.
- **Assertions**:
  - Not on `/auth/login`
  - On `/account`
  - “My account” and the user name are visible

### TC13 - Logout returns user to public state
- **Goal**: Logout after a successful login.
- **Assertions**:
  - “Sign in” link visible again
  - Logout link/button is gone
  - Not on an account-only route

### TC14 - Contact page loads and has form
- **Goal**: Verify contact page renders.
- **Assertions**:
  - “Contact” visible
  - A `<form>` exists
  - Email input exists

### TC15 - Contact form validation triggers on empty submit
- **Goal**: Negative contact form case (empty submit).
- **Assertions**:
  - Still on `/contact`
  - Form exists on page
  - Required/invalid validation text is visible

## Notes

- If any selector changes in the public demo site, you only need to update **custom commands** in `cypress/support/commands.js` (tests stay the same).
- Credentials are stored in `cypress/fixtures/toolshop.json` to satisfy the fixture requirement.


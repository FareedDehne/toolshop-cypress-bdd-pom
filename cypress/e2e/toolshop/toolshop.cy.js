describe("Toolshop: public and auth flows", () => {
  let data;

  before(() => {
    cy.fixture("toolshop").then((d) => {
      data = d;
    });
  });

  beforeEach(function () {
    cy.visitHome();
  });

  it("TC01 - should load the home page", () => {
    cy.contains("a", /^home$/i).should("be.visible");
    cy.contains("a", /categories/i).should("be.visible");
    cy.contains("a", /contact/i).should("be.visible");
    cy.location("href").should("include", "practicesoftwaretesting.com");
  });

  it("TC02 - should display the main navbar links", () => {
    cy.contains("a", /^home$/i).should("be.visible");
    cy.contains("a", /categories/i).should("be.visible");
    cy.contains("a", /^contact$/i).should("be.visible");
  });

  it("TC03 - should open the categories menu", () => {
    cy.openCategoriesMenu();
    cy.contains("a,button", /hand tools|power tools|other/i).should("be.visible");
    cy.contains("a", /categories/i).should("be.visible");
  });

  it("TC04 - should navigate to a category from the menu", () => {
    cy.chooseCategory("Hand Tools");

    cy.location("pathname").should("include", "/category");
    cy.get("h1,h2").first().should("be.visible");
    cy.get('a[href*="/product/"], a[href*="#/product/"]').its("length").should("be.gt", 0);
  });

  it("TC05 - should allow selecting an option from sort dropdown", () => {
    cy.get("select", { timeout: 20000 }).first().should("be.visible").select(1);
    cy.get("select").first().find("option:selected").should("exist");
    cy.get("body").should("be.visible");
  });

  it("TC06 - should open a product details page", () => {
    cy.openFirstProductCard();

    cy.location("pathname").should("match", /\/product\/\d+/);
    cy.get("h1, h2").first().should("be.visible");
    cy.contains("button", /add to cart/i).should("be.visible");
  });

  it("TC07 - should update cart state after adding a product", () => {
    cy.openFirstProductCard();
    cy.addToCartFromProduct();

    cy.contains(/added|cart|shopping cart/i, { timeout: 20000 }).should("be.visible");
    cy.contains("a,button", /cart/i).should("exist");
    cy.get("body").should("be.visible");
  });

  it("TC08 - should show sign in link on public home", () => {
    cy.contains("a", /sign in/i).should("be.visible");
    cy.get("body").should("contain.text", "Home");
    cy.location("pathname").should("eq", "/");
  });

  it("TC09 - should load sign in page with required fields", () => {
    cy.goToSignIn();

    cy.get('input[type="email"]').should("be.visible");
    cy.get('input[type="password"]').should("be.visible");
    cy.contains('button, input[type="submit"]', /^login$|^sign in$/i).should("be.visible");
  });

  it("TC10 - should show login validation errors for empty fields", () => {
    cy.goToSignIn();
    cy.contains('button, input[type="submit"]', /^login$|^sign in$/i).click();

    cy.contains(/required|invalid/i).should("be.visible");
    cy.location("pathname").should("include", "/auth/login");
    cy.get('input[type="email"]').should("be.visible");
  });

  it("TC11 - should fail login with invalid credentials", () => {
    cy.goToSignIn();
    cy.login("wrong@example.com", "wrongpass");

    cy.location("pathname").should("include", "/auth/login");
    cy.contains(/invalid|error|failed/i).should("be.visible");
    cy.get('input[type="email"]').should("have.value", "wrong@example.com");
  });

  it("TC12 - should log in successfully with fixture customer user", () => {
    cy.goToSignIn();
    cy.login(data.users.customer.email, data.users.customer.password);

    cy.location("pathname").should("not.include", "/auth/login");
    cy.location("pathname").should("include", "/account");
    cy.contains("a,button", /jane doe/i).should("be.visible");
    cy.get("body").should("contain.text", "My account");
  });

  it("TC13 - should return user to public state after logout", () => {
    cy.goToSignIn();
    cy.login(data.users.customer.email, data.users.customer.password);
    cy.logout();

    cy.contains("a", /sign in/i).should("be.visible");
    cy.contains("a,button", /sign out|logout/i).should("not.exist");
    cy.location("pathname").should("not.include", "/account");
  });

  it("TC14 - should load contact page with contact form", () => {
    cy.goToContact();

    cy.contains(/contact/i).should("be.visible");
    cy.get("form").should("exist");
    cy.get('input[type="email"]').should("be.visible");
  });

  it("TC15 - should trigger contact form validation on empty submit", () => {
    cy.goToContact();
    cy.submitContactForm();

    cy.get("form").should("exist");
    cy.contains(/required|invalid/i).should("be.visible");
    cy.location("pathname").should("include", "/contact");
  });
});


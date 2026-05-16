import HomePage from "../../support/POM/home-pom.js";
import NavigationPage from "../../support/POM/navigation-pom.js";
import ProductPage from "../../support/POM/product-pom.js";
import LoginPage from "../../support/POM/login-pom.js";
import ContactPage from "../../support/POM/contact-pom.js";

describe("Toolshop: e2e", () => {
  let data;
  const home = new HomePage();
  const navigation = new NavigationPage();
  const product = new ProductPage();
  const login = new LoginPage();
  const contact = new ContactPage();

  before(() => {
    cy.fixture("toolshop").then((d) => {
      data = d;
    });
  });

  beforeEach(function () {
    home.visitHome();
  });

  it("TC01 - should load the home page", () => {
    home.visitHome();

    home.assertHomePageUrl();
    home.assertHomePageTitle(data.base.homeTitle);
    home.assertHomeLink();
    home.assertCategoriesMenuVisible();
  });

  it("TC02 - should display the main navbar links", () => {
    home.visitHome();

    home.getNavbarLinks().should("exist");
    home.assertHomeLink();
    home.assertCategoriesMenuVisible();
    home.assertContactLink();
  });

  it("TC03 - should open the categories menu", () => {
    navigation.openCategoriesMenu();

    navigation.assertCategoriesMenuOpen();
    navigation.assertPowerToolsVisible();
    navigation.assertHandToolsVisible();
  });

  it("TC04 - should navigate to a category from the menu", () => {
    navigation.chooseCategory("Hand Tools");

    navigation.assertCategoryPageUrl();
    navigation.assertCategoryUrl("hand-tools");
    navigation.assertProductsExist();
  });

  it("TC05 - should allow selecting an option from sort dropdown", () => {
    navigation.chooseCategory("Hand Tools");
    product.selectSortByIndex(1);

    product.getSortSelectedOption().should("exist");
    product.assertSortDropdownVisible();
    navigation.assertCategoryPageUrl();
  });

  it("TC06 - should open a product details page", () => {
    navigation.chooseCategory("Hand Tools");
    product.openFirstProductCard();

    product.assertProductPageUrl();
    product.assertProductTitleVisible();
    product.assertAddToCartButtonVisible();
  });

  it("TC07 - should update cart state after adding a product", () => {
    navigation.chooseCategory("Hand Tools");
    product.openFirstProductCard();
    product.addToCartFromProduct();

    product.assertProductAddedToCart();
    product.assertStillOnProductPage();
  });

  it("TC08 - should show sign in link on public home", () => {
    home.visitHome();

    home.assertSignInLinkVisible();
    home.assertHomeLink();
    home.assertHomePageUrl();
  });

  it("TC09 - should load sign in page with required fields", () => {
    navigation.goToSignIn();

    login.assertLoginPageUrl();
    login.assertLoginPageTitle(data.base.homeTitle);
    login.assertEmailInputVisible();
    login.assertPasswordInputVisible();
    login.assertSubmitButtonVisible();
  });

  it("TC10 - should show login validation errors for empty fields", () => {
    navigation.goToSignIn();
    login.submitLogin();

    login.assertLoginPageUrl();
    login.assertEmailInputVisible();
    login.assertPasswordInputVisible();
    login.assertValidationErrorsPresent();
  });

  it("TC11 - should fail login with invalid credentials", () => {
    navigation.goToSignIn();
    login.login("wrong@example.com", "wrongpass");

    login.assertLoginPageUrl();
    login.assertEmailValue("wrong@example.com");
    login.assertPasswordValue("wrongpass");
    login.assertInvalidCredentialsError();
  });

  it("TC12 - should remain in public state when not authenticated", () => {
    home.visitHome();

    home.assertSignInLinkVisible();
    home.assertSignOutLinkNotVisible();
    home.assertNotInAccountPage();
  });

  it("TC13 - should load contact page with contact form", () => {
    navigation.goToContact();

    contact.assertContactPageUrl();
    contact.assertContactPageTitle(data.base.homeTitle);
    contact.assertContactFormExists();
    contact.assertEmailInputVisible();
  });

  it("TC14 - should trigger contact form validation on empty submit", () => {
    navigation.goToContact();
    contact.submitContactForm();

    contact.assertStillOnContactPage();
    contact.assertFirstNameInputVisible();
    contact.assertValidationErrorsPresent();
  });

  it("TC15 - should reject login with invalid email format", () => {
    navigation.goToSignIn();
    login.login("bad-email-format", "some-password");

    login.assertLoginPageUrl();
    login.assertEmailValue("bad-email-format");
    login.assertInvalidEmailFormat();
  });

});


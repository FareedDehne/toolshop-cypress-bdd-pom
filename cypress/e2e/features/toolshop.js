import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../support/POM/home-pom.js";
import NavigationPage from "../../support/POM/navigation-pom.js";
import ProductPage from "../../support/POM/product-pom.js";
import LoginPage from "../../support/POM/login-pom.js";
import ContactPage from "../../support/POM/contact-pom.js";

const home = new HomePage();
const navigation = new NavigationPage();
const product = new ProductPage();
const login = new LoginPage();
const contact = new ContactPage();

let data;

before(() => {
  cy.fixture("toolshop").then((d) => {
    data = d;
  });
});

Given("I open the Toolshop home page", () => {
  home.visitHome();
});

When("I open the categories menu", () => {
  navigation.openCategoriesMenu();
});

When("I choose the {string} category", (categoryName) => {
  navigation.chooseCategory(categoryName);
});

When("I select sort option {int}", (index) => {
  product.selectSortByIndex(index);
});

When("I open the first product card", () => {
  product.openFirstProductCard();
});

When("I add the product to the cart", () => {
  product.addToCartFromProduct();
});

When("I go to the sign in page", () => {
  navigation.goToSignIn();
});

When("I submit the login form", () => {
  login.submitLogin();
});

When("I login with email {string} and password {string}", (email, password) => {
  login.login(email, password);
});

When("I go to the contact page", () => {
  navigation.goToContact();
});

When("I submit the contact form", () => {
  contact.submitContactForm();
});

Then("the home page URL should be displayed", () => {
  home.assertHomePageUrl();
});

Then("the home page title should be correct", () => {
  home.assertHomePageTitle(data.base.homeTitle);
});

Then("navbar links should exist", () => {
  home.getNavbarLinks().should("exist");
});

Then("the Home link should be visible", () => {
  home.assertHomeLink();
});

Then("the Categories menu should be visible", () => {
  home.assertCategoriesMenuVisible();
});

Then("the Contact link should be visible", () => {
  home.assertContactLink();
});

Then("the Sign in link should be visible", () => {
  home.assertSignInLinkVisible();
});

Then("the Sign out link should not be visible", () => {
  home.assertSignOutLinkNotVisible();
});

Then("I should not be on the account page", () => {
  home.assertNotInAccountPage();
});

Then("the categories menu should be open", () => {
  navigation.assertCategoriesMenuOpen();
});

Then("Power Tools should be visible", () => {
  navigation.assertPowerToolsVisible();
});

Then("Hand Tools should be visible", () => {
  navigation.assertHandToolsVisible();
});

Then("the category page URL should be displayed", () => {
  navigation.assertCategoryPageUrl();
});

Then("the category URL should include {string}", (categorySlug) => {
  navigation.assertCategoryUrl(categorySlug);
});

Then("products should exist", () => {
  navigation.assertProductsExist();
});

Then("the selected sort option should exist", () => {
  product.getSortSelectedOption().should("exist");
});

Then("the sort dropdown should be visible", () => {
  product.assertSortDropdownVisible();
});

Then("the product page URL should be displayed", () => {
  product.assertProductPageUrl();
});

Then("the product title should be visible", () => {
  product.assertProductTitleVisible();
});

Then("the add to cart button should be visible", () => {
  product.assertAddToCartButtonVisible();
});

Then("the product added message should be visible", () => {
  product.assertProductAddedToCart();
});

Then("I should still be on the product page", () => {
  product.assertStillOnProductPage();
});

Then("the login page URL should be displayed", () => {
  login.assertLoginPageUrl();
});

Then("the login page title should be correct", () => {
  login.assertLoginPageTitle(data.base.homeTitle);
});

Then("the email input should be visible", () => {
  login.assertEmailInputVisible();
});

Then("the password input should be visible", () => {
  login.assertPasswordInputVisible();
});

Then("the submit button should be visible", () => {
  login.assertSubmitButtonVisible();
});

Then("login validation errors should be present", () => {
  login.assertValidationErrorsPresent();
});

Then("the email field should contain {string}", (email) => {
  login.assertEmailValue(email);
});

Then("the password field should contain {string}", (password) => {
  login.assertPasswordValue(password);
});

Then("the invalid credentials error should be visible", () => {
  login.assertInvalidCredentialsError();
});

Then("invalid email format validation should be present", () => {
  login.assertInvalidEmailFormat();
});

Then("the contact page URL should be displayed", () => {
  contact.assertContactPageUrl();
});

Then("the contact page title should be correct", () => {
  contact.assertContactPageTitle(data.base.homeTitle);
});

Then("the contact form should exist", () => {
  contact.assertContactFormExists();
});

Then("the contact email input should be visible", () => {
  contact.assertEmailInputVisible();
});

Then("I should still be on the contact page", () => {
  contact.assertStillOnContactPage();
});

Then("the first name input should be visible", () => {
  contact.assertFirstNameInputVisible();
});

Then("contact validation errors should be present", () => {
  contact.assertValidationErrorsPresent();
});
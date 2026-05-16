import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/POM/home-pom.js";

const home = new HomePage();

let data;

before(() => {
  cy.fixture("toolshop").then((d) => {
    data = d;
  });
});

Given("I open the Toolshop home page", () => {
  home.visitHome();
});

Then("the home page URL should be displayed", () => {
  home.assertHomePageUrl();
});

Then("the home page title should be correct", () => {
  home.assertHomePageTitle(data.base.homeTitle);
});

Then("the Home link should be visible", () => {
  home.assertHomeLink();
});

Then("the Categories menu should be visible", () => {
  home.assertCategoriesMenuVisible();
});

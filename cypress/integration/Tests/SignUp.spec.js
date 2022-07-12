/// <reference types="cypress" />

import HomePage from "../Pages/HomePage";
import SignupFreePage from "../Pages/SignupFreePage";
import {uniqueNameCreater, uniqueGmailCreater, uniqueCompanyNameCreater} from "../../support/helpers/index";

const environment = Cypress.env("environment");
const { baseUrl: baseUrlEnv } = Cypress.env()[environment];

context("Fenix group take home task", () => {
  let user;

  beforeEach(() => {
    cy.fixture(`userDatas/` + environment).then((userData) => {
      user = userData;
    });

    cy.visit(`${baseUrlEnv}`);
  });

  it("C1 The error modal should be displayed when a non-corporate email address used", function () {

    HomePage.isHomePageLoadedSuccessfully(`${baseUrlEnv}`, user.dashboardList);
    HomePage.isSignUpFreeButtonDisplayed();
    HomePage.clickSignUpFreeButton();

    SignupFreePage.isSignUpFreePageDisplayed();
    SignupFreePage.isMoreInfoSubtitleDisplayed();
    SignupFreePage.isFullNameBoxDisplayed();
    SignupFreePage.isEmailBoxDisplayed();
    SignupFreePage.isCompanyBoxDisplayed();

    let fullName = uniqueNameCreater(5);
    SignupFreePage.enterFullName(fullName);

    let gmail = uniqueGmailCreater(5);
    SignupFreePage.enterEmail(gmail);

    let companyName = uniqueCompanyNameCreater(5);
    SignupFreePage.enterCompanyName(companyName);

    SignupFreePage.clickPrivacyPolicyCheckbox();
    SignupFreePage.isSubmitInfoButtonDisplayed();
    SignupFreePage.clickSubmitInfoButton();
    SignupFreePage.isErrorModelContentDisplayed();
  });
});

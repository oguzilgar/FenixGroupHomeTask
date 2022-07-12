import SELECTOR from "../../support/constants";

class SignupFreePage {
  
  //is
  static isSignUpFreePageDisplayed() {
    cy.url().should(`include`, `/free-sign-up/#celltelligence-form`);
    cy.getByCompoundSel(
      SELECTOR.DASHBOARD.MAIN_MENU,
      SELECTOR.DASHBOARD.SELECTED_SUB_MODUL
    )
      .find("span")
      .contains("Sign Up Free")
      .should("be.visible");
  }

  static isMoreInfoSubtitleDisplayed() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.FOOTER_SUBTITLE)
      .eq(0)
      .contains("FILL OUT THE FORM FOR MORE INFORMATION")
      .should("be.visible");
  }

  static isFullNameBoxDisplayed() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.CONTENT_FORM)
      .find("p")
      .eq(0)
      .contains("FULL NAME")
      .should("be.visible");

    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.NAME_INPUT
    ).should("be.visible");
  }

  static isEmailBoxDisplayed() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.CONTENT_FORM)
      .find("p")
      .eq(1)
      .contains("EMAIL ADDRESS (CORPORATE ONLY)")
      .should("be.visible");

    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.EMAIL_INPUT
    ).should("be.visible");
  }

  static isCompanyBoxDisplayed() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.CONTENT_FORM)
      .find("p")
      .eq(2)
      .contains("COMPANY")
      .should("be.visible");

    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.COMPANY_INPUT
    ).should("be.visible");
  }

  static isSubmitInfoButtonDisplayed() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.SUBMIT_INFO).should("be.visible");
  }

  static isErrorModelContentDisplayed() {
    cy.get("h2").contains("PLEASE TRY AGAIN").should("be.visible");
    cy.get("#modal-text")
      .contains(
        "Sorry, your email address wasn't accepted. To sign up for a free trial or demo, you must provide a "
      )
      .should("be.visible");
    cy.contains("corporate email address.").should("be.visible");
    cy.get(SELECTOR.SIGN_UP_FREE.BACK_TO_FORM_BUTTON).should("be.visible");
  }

  //enter
  static enterFullName(fullName) {
    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.NAME_INPUT
    ).type(fullName);
  }

  static enterEmail(email) {
    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.EMAIL_INPUT
    ).type(email);
  }

  static enterCompanyName(companyName) {
    cy.getByCompoundSel(
      SELECTOR.SIGN_UP_FREE.CONTENT_FORM,
      SELECTOR.SIGN_UP_FREE.COMPANY_INPUT
    ).type(companyName);
  }

  //click
  static clickPrivacyPolicyCheckbox() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.PRIVACY_POLICY).click();
  }

  static clickSubmitInfoButton() {
    cy.getBySel(SELECTOR.SIGN_UP_FREE.SUBMIT_INFO).click();
  }
}
export default SignupFreePage;

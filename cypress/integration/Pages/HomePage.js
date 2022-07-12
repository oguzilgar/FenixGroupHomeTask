import SELECTOR from "../../support/constants";

class HomePage {
  //is
  static isHomePageLoadedSuccessfully(baseUrlEnv, expectedListOfDashboard) {
    cy.url().should(`eq`, `${baseUrlEnv}`);
    cy.get(SELECTOR.DASHBOARD.MAIN_MENU)
      .find("li")
      .should("have.length.gte", expectedListOfDashboard.length);
    cy.get("#menu-main-menu li span[class='menu-text']").then((els) => {
      const actualListOfDashboard = els.toArray().map((el) => el.innerText);
      expect(actualListOfDashboard).to.deep.eq(expectedListOfDashboard);
    });
  }

  static isSignUpFreeButtonDisplayed() {
    cy.getBySel(SELECTOR.DASHBOARD.FUSION_BUTTON)
      .find("span")
      .contains("SIGN UP FREE")
      .should("be.visible");
  }

  //click
  static clickSignUpFreeButton() {
    cy.getBySel(SELECTOR.DASHBOARD.FUSION_BUTTON)
      .find("span")
      .contains("SIGN UP FREE")
      .click();
  }
}
export default HomePage;

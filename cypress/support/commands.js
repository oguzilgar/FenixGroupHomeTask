Cypress.Commands.add("getBySel", (selector) => {
  return cy.get(`${selector}`);
});

Cypress.Commands.add("getByCompoundSel", (common, unique) => {
  const compoundSelector = `${common} ${unique}`;
  return cy.get(`${compoundSelector}`);
});
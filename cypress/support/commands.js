
Cypress.Commands.add("login", (email, password) => {
  cy.visit("");

  cy.get('[name="login[username]"]').type(email);
  cy.get('[name="login[password]"]').type(password);
  cy.get(".action.login.primary").click();
});

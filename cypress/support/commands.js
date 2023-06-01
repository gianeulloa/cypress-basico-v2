Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Giane");
  cy.get("#lastName").type("Ulloa");
  cy.get("#email").type("giane.ulloa@gmail.com");
  cy.get("#open-text-area").type("teste");
  cy.contains("button", "Enviar").click();
});

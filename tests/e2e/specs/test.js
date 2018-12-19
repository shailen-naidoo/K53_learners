// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get(`.v-item-group`).within(() => {
      cy.get(`[href="#/app/dashboard"]`).click();
      cy.get(`[href="#/app/courses"]`).click();
    });
  });
});

import 'cypress-axe';

describe('A11y-Test', () => {
  it('prüft Barrierefreiheit', () => {
    cy.visit('https://demowebshop.tricentis.com');
    cy.injectAxe();
    cy.checkA11y();
  });
});

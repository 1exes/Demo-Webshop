
describe('Produktbiuld testen', () => {
  
it('zeigt alle Buchbilder an', () => {
  cy.visit('/books');
  cy.get('.product-item img').should('be.visible');
});
});



describe('Produktbiuld testen', () => {
  
it('zeigt alle Buchbilder an', () => {
  cy.visit('https://demowebshop.tricentis.com/books');
  cy.get('.product-item img').should('be.visible');
});
});


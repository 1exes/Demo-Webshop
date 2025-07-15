
describe('Produktbeschreibung testen', () => {
it('prüft Produktbeschreibungen', () => {
  cy.visit('/books');
  cy.get('.product-item h2 a').then(links => {
    [...links].forEach(link => {
      cy.visit(link.href);
      cy.get('.product-description').should('be.visible');
    });
  });
});
});

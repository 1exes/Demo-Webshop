
describe('Alle Bücher öffnen', () => {
  it('besucht jede Buchseite', () => {
    cy.visit('https://demowebshop.tricentis.com/books');
    cy.get('.product-item h2 a').each($a => {
      cy.visit($a.prop('href'));
    });
  });
});


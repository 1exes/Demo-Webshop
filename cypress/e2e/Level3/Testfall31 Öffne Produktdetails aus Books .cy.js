
describe('Alle Bücher öffnen', () => {
  it('besucht jede Buchseite', () => {
    // Zur Bücherseite gehen
    cy.visit('/books');

    // Alle Buch-Links sammeln und nacheinander besuchen
    cy.get('.product-item h2 a').then(links => {
      for (let i = 0; i < links.length; i++) {
        const url = links[i].href;
        cy.visit(url);
      }
    });
  });
});

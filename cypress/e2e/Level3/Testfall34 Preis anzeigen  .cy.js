
describe('Preise anzeigen', () => {

it('zeigt Titel und Preis', () => {
  cy.visit('/books');
  cy.get('.product-item').each($el => {
    cy.log($el.text());
  });
});
});


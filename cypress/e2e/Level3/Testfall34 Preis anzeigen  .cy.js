
describe('Preise anzeigen', () => {

it('zeigt Titel und Preis', () => {
  cy.visit('https://demowebshop.tricentis.com/books');
  cy.get('.product-item').each($el => {
    cy.log($el.text());
  });
});
});


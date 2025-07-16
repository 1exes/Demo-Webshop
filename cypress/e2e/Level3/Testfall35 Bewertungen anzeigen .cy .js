describe('Bewertung testen', () => {

it('jedes Buch hat eine Bewertung', () => {
  cy.visit('https://demowebshop.tricentis.com/books');
  cy.get('.product-item').each($el => {
    cy.wrap($el).find('.rating').should('exist');
  });
});
});
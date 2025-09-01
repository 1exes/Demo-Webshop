describe('wishlist anzeigen', () => {
  it('es soll die wunschliste angezeigt werden', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('span.cart-label').contains('Wishlist').click();
  });
});

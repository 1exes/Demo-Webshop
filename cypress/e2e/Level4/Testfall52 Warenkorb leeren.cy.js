describe('Warenkorb leeren', () => {
  it('entfernt alle Produkte', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('14.1-inch Laptop').click();
    cy.get('#add-to-cart-button-31').click();
    cy.get('.cart-qty').click();
    cy.get('input[name^="removefromcart"]').check();
    cy.get('input[name="updatecart"]').click();
    cy.get('.order-summary-content').should('contain', 'Your Shopping Cart is empty!');
  });
});

describe('Produkt aus Warenkorb entfernen', () => {
  it('entfernt ein Produkt', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('14.1-inch Laptop').click();
    cy.get('#add-to-cart-button-31').click();
    cy.get('.cart-qty').click();
    cy.get('input[name^="removefromcart"]').check();
    cy.get('input[name="updatecart"]').click();
  });
});

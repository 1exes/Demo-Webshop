describe('Menge im Warenkorb ändern', () => {
  it('ändert die Menge eines Produkts', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('14.1-inch Laptop').click();
    cy.get('#add-to-cart-button-31').click();
    cy.get('.cart-qty').click();
    cy.get('input.qty-input').clear().type('3');
    cy.get('input[name="updatecart"]').click();
    cy.get('input.qty-input').should('have.value', '3');
  });
});

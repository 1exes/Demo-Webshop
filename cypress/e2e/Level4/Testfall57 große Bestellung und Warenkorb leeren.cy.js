describe('Demo Web Shop - Warenkorb Test', () => {
  it('Fügt Artikel hinzu, ändert die Menge und leert den Warenkorb', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Books').click();
    cy.contains('Computing and Internet').click();
    cy.get('#addtocart_13_EnteredQuantity').clear().type('100');
    cy.get('#add-to-cart-button-13').click();

    cy.visit('https://demowebshop.tricentis.com/cart');
    cy.get('input.qty-input').first().clear().type('1');
    cy.get('input[name="updatecart"]').click();
    cy.get('input.qty-input').first().should('have.value', '1');
    cy.get('input[name="removefromcart"]').check();
    cy.get('input[name="updatecart"]').click();
    cy.contains('Your Shopping Cart is empty').should('be.visible');
  });
});
   
describe('Demo Web Shop - Warenkorb Test', () => {
  it('Fügt Artikel hinzu, ändert die Menge und leert den Warenkorb', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Books').click();
    cy.contains('Computing and Internet').click();
    cy.get('#addtocart_13_EnteredQuantity').clear().type('100');
    cy.get('#add-to-cart-button-13').click();

    cy.visit('https://demowebshop.tricentis.com/cart');
  });
});
   
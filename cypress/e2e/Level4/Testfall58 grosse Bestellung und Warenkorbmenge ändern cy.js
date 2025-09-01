




describe('grosse Bestellung und Warenkorbmenge ändern', () => {
  it('es soll Produkte in den Warenkorb hinzufügen und dann die Mege im Warenkorb ändern', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.contains('Books').click();
    cy.contains('Computing and Internet').first().click()
    cy.get('#addtocart_13_EnteredQuantity').clear().type(100)
    cy.get('#add-to-cart-button-13').click()
    cy.get('.cart-qty').click();
    cy.get('input.qty-input').clear().type('3');
    cy.get('input[name="updatecart"]').click();
    cy.get('input.qty-input').should('have.value', '3');


    
  });
});


describe('Demowebshop Buch kaufen und Menge ändern', () => {
  it('fügt Buch hinzu und ändert Menge im Warenkorb', () => {
    cy.visit('https://demowebshop.tricentis.com/books');
    cy.contains('Computing and Internet').click();
    cy.get('#add-to-cart-button-13').click();
    cy.get('.cart-label').first().click();
    cy.get('input.qty-input').clear().type('2');
    cy.get('input[name="updatecart"]').click();
    cy.get('input.qty-input').clear().type('1');
    cy.get('input[name="updatecart"]').click();
    cy.get('input.qty-input').should('have.value', '1');
  });
});

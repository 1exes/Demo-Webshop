describe('Testfall der Fehler läuft weil zu grosse Menge im Warenkorb')
it('Fehler bei zu großer Menge', () => {
  cy.visit('https://demowebshop.tricentis.com/books');
  cy.get('.product-item').first().click();
  cy.get('.qty-input').clear().type('9999');
  cy.get('[value="Add to cart"]').click();
  cy.get('.message-error').should('be.visible');
});

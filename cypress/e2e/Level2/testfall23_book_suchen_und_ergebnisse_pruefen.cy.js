describe('books suchen und ergebnisse überprüfen', () => {
  it('soll die Seite Bücher laden und  ', () => {

cy.visit('https://demowebshop.tricentis.com')
cy.contains('books').click();
cy.contains('books').should('be.visible');
cy.get('.product-item').should('have.length', 6);
    
  });
});

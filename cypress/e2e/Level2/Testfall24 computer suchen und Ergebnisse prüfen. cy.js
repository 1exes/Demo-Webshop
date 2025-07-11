describe('comuter suchen und ergebnisse überprüfen', () => {
  it('Sollte die Seite Computer laden und die Ergebnisse prüfen', () => {


cy.visit('https://demowebshop.tricentis.com')
cy.contains('computers').click();
cy.contains('computers').should('be.visible');
cy.get('.product-item').should('have.length', 2);

    
  });
});

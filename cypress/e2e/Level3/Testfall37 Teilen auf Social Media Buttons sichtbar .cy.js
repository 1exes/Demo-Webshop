describe('Footer-Link testen', () => {
it('sind sichtbar', () => {
    cy.visit('https://demowebshop.tricentis.com');
    cy.contains('Facebook').should('be.visible');
    cy.contains('Twitter').should('be.visible');
    cy.contains('YouTube').should('be.visible');
    
  });

});

describe('Sprache umstellen ', () => {
  it('falls es möglich ist doie Sprache der Website umstelllen', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.contains('Books').should('be.visible');



    
  });
});

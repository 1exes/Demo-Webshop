describe(' Cookies setzen', () => {
  it('sollte alle Cookies auf der Demowebshopseite setzen', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.getCookies().should('not.be.empty');



    
  });
});

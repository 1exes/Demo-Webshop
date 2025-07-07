describe('Suchfeld sichtbar Überprüfung', () => {
  it('soll überprüfen ob Suchfeld sichtbar ist ', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get('input[type="small-searchterms"]').should('be.visible');
    
  });

});

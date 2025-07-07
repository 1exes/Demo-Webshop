describe('Toolbar  Geschenkkarten prüfen', () => {
  it('sollte Menüpunkt Geschenkkarten prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get('Geschenkkarten').should('be.visible');


    
  });

});

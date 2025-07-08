describe('Toolbar  Gift Cards prüfen', () => {
  it('sollte Menüpunkt Gift Cards prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains('Gift Cards').should('be.visible');


    
  });

});

describe('Toolbar  Elektronik prüfen', () => {
  it('sollte Menüpunkt Elektronik prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("ELEKTRONIK").should("be.visible");

    
  });
});

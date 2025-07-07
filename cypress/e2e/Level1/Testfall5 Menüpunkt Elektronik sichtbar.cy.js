describe('Toolbar  Elektronik prüfen', () => {
  it('sollte Menüpunkt Elektronik prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get("Elektronik").should("be.visible");

    
  });
});

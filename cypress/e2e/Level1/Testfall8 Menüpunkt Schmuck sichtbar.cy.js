describe('Toolbar  Schmuck prüfen', () => {
  it('sollte Menüpunkt Schmuck prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get("Schmuck").should("be.visible");

    
  });
});

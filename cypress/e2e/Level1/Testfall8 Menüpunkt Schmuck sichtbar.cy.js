describe('Toolbar Schmuck prüfen', () => {
  it('sollte Menüpunkt Schmuck prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("SCHMUCK").should("be.visible");

    
  });
});

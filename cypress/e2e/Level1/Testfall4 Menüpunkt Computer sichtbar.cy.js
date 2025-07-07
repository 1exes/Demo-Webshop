describe('Toolbar  Computer prüfen', () => {
  it('sollte Menüpunkt Computer prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("COMPUTER").should("be.visible");

    
  });
});

describe('Toolbar  Jewelry prüfen', () => {
  it('sollte Menüpunkt Jewelry prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("Jewelry").should("be.visible");

    
  });
});

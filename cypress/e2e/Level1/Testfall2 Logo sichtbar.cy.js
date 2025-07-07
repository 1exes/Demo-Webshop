
describe('Toolbar Bücher  prüfen', () => {
  it('sollte Menüpunkt Bücher prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("BÜCHER").should("be.visible");

    
  });
});

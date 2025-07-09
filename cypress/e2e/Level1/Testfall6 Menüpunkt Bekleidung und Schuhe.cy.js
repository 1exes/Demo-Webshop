describe('Toolbar  Apparel & Shoes prüfen', () => {
  it('sollte Menüpunkt Apparel & Shoes prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("Apparel & Shoes").should("be.visible");

    
  });
});
